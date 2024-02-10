import { Link } from 'react-router-dom'

interface Note {
	id: number
	body: string
	created: string
	updated: string
}

interface ListItemProps {
	note: Note
}

/* Código que ofreció Tabnine para arreglar el replaceAll error del lintern */
declare global {
	interface String {
		replaceAll(searchValue: string, replaceValue: string): string
	}
}

const getDate = (obj: string): string => {
	/* const date = new Date(obj)
  return date.toLocaleDateString() */
	const date = new Date(obj)
	const fecha = date.toLocaleDateString()
	const hours = date.getHours().toString().padStart(2, '0') // Obtener las horas y agregar un cero al principio si es necesario
	const minutes = date.getMinutes().toString().padStart(2, '0') // Obtener los minutos y agregar un cero al principio si es necesario
	return `${fecha} ${hours}:${minutes}`
}

const getTitle = (note: Note): string => note.body.split('\n')[0]

const getContent = (note: Note): string => {
	const title = getTitle(note)
	let content = note.body.replaceAll('\n', ' ')
	content = content.replaceAll(title, '')
	return content
}

const ListItem = ({ note }: ListItemProps) => {
	return (
		<Link
			to={`/notes/${note.id}`}
			key={note.id}
			className='block rounded-md my-2 py-3 px-3 bg-slate-300 dark:bg-slate-700 hover:shadow transition'
		>
			<div className='flex justify-between'>
				<p className='truncate font-bold text-slate-900 dark:text-slate-100'>
					{getTitle(note)}
				</p>
				<span className='text-gray-600 text-sm dark:text-gray-400'>
					{getDate(note.updated)}
				</span>
			</div>
			<p className='truncate text-slate-900 dark:text-slate-100'>
				{getContent(note)}
			</p>
		</Link>
	)
}

export default ListItem
