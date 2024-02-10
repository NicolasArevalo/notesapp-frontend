const HOST = 'http://localhost:8000'

interface Note {
	id?: number
	body: string
	created?: string
	updated?: string
}

export const getNote = async (id: number, setNote: (note: Note) => void) => {
    if (id as unknown === 'new') return

    try {
        const response = await fetch(`${HOST}/api/notes/${id}`)
        const data = await response.json()
        setNote(data)
    } catch (error) {
        console.error('Error fetching notes:', error)
    }
}

export const createNote = async (note: Note) => {
    try {
        fetch(`${HOST}/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
    } catch (error) {
        console.error('Error fetching notes:', error)
    }
}

export const updateNote = async (note: Note, id: number | string) => {
    try {
        fetch(`${HOST}/api/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
    } catch (error) {
        console.error('Error fetching notes:', error)
    }
}

export const deleteNote = async (id: number | string) => {
    try {
        fetch(`${HOST}/api/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.error('Error fetching notes:', error)
    }
}