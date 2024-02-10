import Layout from '@/components/Layout'
import ListItem from '@/components/ListItem'
import { useState, useEffect, useRef } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Note {
	id: number
	body: string
	created: string
	updated: string
}

//const HOST = 'http://localhost:8000'
const HOST = 'https://notesapp-kv81.onrender.com/'


const NotesListPage = () => {
	const [notes, setNotes] = useState<Note[]>([])
	const [search, setSearch] = useState<Note[]>([])
	const [hiddenClass, setHiddenClass] = useState<boolean>(true)

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		getNotes()
	}, [])

	const getNotes = async () => {
		try {
			const response = await fetch(`${HOST}/api/notes/`)
			const data = await response.json()
			setNotes(data)
		} catch (error) {
			console.error('Error fetching notes:', error)
		}
	}

	const handleChange = () => {
		const word: string | undefined = inputRef.current?.value.toLowerCase()

		if (word == '') {
			setSearch([])
			setHiddenClass(true)
		}

		if (word) {
			setHiddenClass(false)
			if (word.length < 3) return
			const search = notes.map(({ body }) => body.toLowerCase().includes(word))
			/* const resultado: Note[] | [] = notes
				.map((objeto, index) => (search[index] ? objeto : null))
				.filter(objeto => objeto !== null) */

			const resultado: Note[] = notes.reduce((acc, objeto, index) => {
				if (search[index]) {
					acc.push(objeto)
				}
				return acc
			}, [] as Note[])

			if (resultado.length > 0) setSearch(resultado)
		}
	}

	const handleBorrarInput = () => {
		if (inputRef.current) inputRef.current.value = ''
		setSearch([])
		setHiddenClass(true)
	}

	return (
		<Layout aside={true}>
			<span className='block font-body text-gray-600 text-right dark:text-gray-400'>
				you have {notes.length} notes
			</span>
			<div className='relative flex w-full'>
				<Input
					ref={inputRef}
					onChange={handleChange}
					placeholder='find a word on notes'
					className=' mb-5 block bg-slate-100 dark:bg-slate-500'
				/>
				<Button
					onClick={handleBorrarInput}
					type='button'
					className={
						hiddenClass
							? 'hidden absolute right-0  bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-slate-100'
							: ' absolute right-0 bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-slate-100'
					}
				>
					<svg
						viewBox='0 0 600 600'
						className='h-6 w-6 dark:fill-slate-700 fill-slate-100'
					>
						<defs id='defs9728' />
						<g
							id='g10449'
							transform='matrix(0.95173205,0,0,0.95115787,13.901174,12.168794)'
						>
							<g
								id='path10026'
								inkscape:transform-center-x='-0.59233046'
								inkscape:transform-center-y='-20.347403'
								transform='matrix(1.3807551,0,0,1.2700888,273.60014,263.99768)'
							/>
							<g
								id='g11314'
								transform='matrix(1.5092301,0,0,1.3955555,36.774048,-9.4503933)'
							/>
							<path
								d='m 300.60937,-12.792969 c -173.60599,0 -315.214839,141.724839 -315.214839,315.404299 0,173.67945 141.608849,315.40429 315.214839,315.40429 173.606,0 315.21485,-141.72484 315.21485,-315.40429 0,-173.67946 -141.60885,-315.404299 -315.21485,-315.404299 z m 0,84.082031 c 128.13278,10e-7 231.13086,103.052738 231.13086,231.322268 0,128.26952 -102.99808,231.32226 -231.13086,231.32226 C 172.4766,533.93359 69.476562,430.88085 69.476562,302.61133 69.476563,174.3418 172.4766,71.289062 300.60937,71.289062 Z'
								id='path390'
							/>
							<path
								d='M 416.16211,144.93164 A 42.041401,42.041401 0 0 0 386.4375,157.25391 L 155.30469,388.53125 a 42.041401,42.041401 0 0 0 0.0195,59.45703 42.041401,42.041401 0 0 0 59.45508,-0.0195 L 445.91211,216.69141 a 42.041401,42.041401 0 0 0 -0.0195,-59.45704 42.041401,42.041401 0 0 0 -29.73047,-12.30273 z'
								id='path446'
							/>
							<path
								d='m 185.05664,144.93164 a 42.041401,42.041401 0 0 0 -29.73242,12.30273 42.041401,42.041401 0 0 0 -0.0195,59.45704 L 386.4375,447.96875 a 42.041401,42.041401 0 0 0 59.45508,0.0195 42.041401,42.041401 0 0 0 0.0195,-59.45703 L 214.7793,157.25391 a 42.041401,42.041401 0 0 0 -29.72266,-12.32227 z'
								id='path446-3'
							/>
						</g>
					</svg>
				</Button>
			</div>
			{search.length > 0 && (
				<>
					<div>
						<span className='text-xl text-gray-700 dark:text-gray-300 font-body'>
							Your search
						</span>
						{search?.map(note => (
							<ListItem key={note.id} note={note} />
						))}
					</div>
					<span className='text-xl text-gray-700 dark:text-gray-300 font-body'>
						Notes
					</span>
				</>
			)}

			{notes.map(note => (
				<ListItem key={note.id} note={note} />
			))}
		</Layout>
	)
}

export default NotesListPage
