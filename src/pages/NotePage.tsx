import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

import NoteHeader from '@/components/NoteHeader'

import { getNote, createNote, updateNote } from '@/utils/utils'

import Layout from '@/components/Layout'

interface Note {
	id?: number
	body: string
	created?: string
	updated?: string
}

const NotePage = () => {
	const { id } = useParams()

	const [note, setNote] = useState<Note | undefined>({} as Note)
	const [hiddenClass, setHiddenClass] = useState<boolean>(true)

	useEffect(() => {
		getNote(id as unknown as number, setNote)
	}, [id])

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNote({ ...note, body: e.target.value })
		setHiddenClass(false)
	}

	const handleSubmit = () => {
		try {
			if (id === 'new' && note?.body == '') {
				toast('🥳 note deleted bc was empty!')
				setInterval(() => {
					window.location.href = '/'
				}, 1500)
			}
			if (id === 'new' && note?.body != '') {
				createNote(note as Note)
				toast('🟢 note created!')
			}
			if (id !== 'new' && note?.body) {
				updateNote(note, id as number | string) 
				toast('🟢 note updated!')
			}
			setHiddenClass(true)
		} catch (error) {
			toast('🔴 something went wrong :c')
			console.log('El error: ', error)
		}
	}

	return (
		<Layout aside={false}>
			<NoteHeader />
			<div className='grid w-full gap-2'>
				<Textarea
					onChange={handleChange}
					className='h-[450px] text-lg lg:text-base text-slate-900 dark:text-slate-100'
					value={note?.body}
					autoFocus={true}
				/>
				<Button
					className={
						hiddenClass
							? 'hidden bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-slate-100'
							: 'bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-slate-100'
					}
					onClick={handleSubmit}
				>
					save note
				</Button>
			</div>
			<Toaster />
		</Layout>
	)
}

export default NotePage
