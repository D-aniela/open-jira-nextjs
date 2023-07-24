import mongoose, { mongo } from 'mongoose'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongooConnection = {
  isConnected: 0,
}

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log('Ya estabamos conectados')
    return
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState

    if (mongooConnection.isConnected === 1) {
      console.log('Usando conexión anterior')
      return
    }

    await mongoose.disconnect()
  }

	let mongodbUrl = `mongodb://${process.env.MONGO_DB_HOST}:5000/${process.env.MONGO_DB_NAME}`
	console.log(mongodbUrl)

  await mongoose.connect(mongodbUrl || '')
  mongooConnection.isConnected = 1
  console.log('Conectado a MongoDB:', mongodbUrl)
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return

  if (mongooConnection.isConnected === 0) return

  await mongoose.disconnect()
  console.log('Desconectado de MongoDB')
}
