export interface Entry{
	_id: string
	description: string
	createdAt: number
	status: EntryStatus
}

// Cuando no van a crecer un type
export type EntryStatus = 'pending' | 'in-progress' | 'finished'