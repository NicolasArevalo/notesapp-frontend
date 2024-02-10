import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()
	/* dark:group-[.toaster]:bg-slate-900 dark:group-[.toaster]:text-slate-100 dark:group-[.toaster]:border-neutral-800 */
	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			toastOptions={{
				classNames: {
					toast:
						'group toast font-body group-[.toaster]:text-[20px] group-[.toaster]:bg-slate-100 group-[.toaster]:text-slate-900 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-lg ',
					description:
						'group-[.toast]:text-neutral-500  dark:group-[.toast]:text-neutral-400',
					actionButton:
						'group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900',
					cancelButton:
						'group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400',
				},
			}}
			{...props}
		/>
	)
}

export { Toaster }
