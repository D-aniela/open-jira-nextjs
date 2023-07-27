import { db } from '@/database'
import { Entry, IEntry } from '@/models'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string } | IEntry

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es válido ' + id })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res)

    case 'GET':
      return getEntry(req, res)

    default:
      return res.status(400).json({ message: 'Método no existe ' + req.method })
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  await db.connect()
  const entry = await Entry.findById(id)

  if (!entry) {
    await db.disconnect()
    return res
      .status(400)
      .json({ message: ' No hay entrada con ese ID: ' + id })
  }

  const { description = entry.description, status = entry.status } = req.body

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      {
        runValidators: true, // Para que verifique los enums del status
        new: true, // Para que nos regrese la informacion actualizada
      },
    )
    res.status(200).json(updatedEntry!)
  } catch (error: any) {
    console.log({ error })
    await db.disconnect()
    res.status(400).json({ message: error.errors.status.message })
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query

    await db.connect()
    const entry = await Entry.findById(id)

    if (!entry) {
      await db.disconnect()
      return res
        .status(400)
        .json({ message: ' No hay entrada con ese ID: ' + id })
    }

    res.status(200).json(entry!)
  } catch (error: any) {
    console.log({ error })
    await db.disconnect()
    res.status(400).json({ message: error.errors.status.message })
  }
}
