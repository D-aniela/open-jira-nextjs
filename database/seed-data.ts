interface SeedData {
	entries: SeedEntry[]
}

interface SeedEntry {
	description: string
	status: string
	createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En progreso: Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Finalizado: Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
}
