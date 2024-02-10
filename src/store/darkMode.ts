import { create } from 'zustand'

interface darkModeType{
	dark: boolean;
	systemTheme: () => boolean;
	changeTheme: () => void;
}

const darkMode = create<darkModeType>(set => ({
	dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
	systemTheme: (): boolean => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true
		return false
	},
	changeTheme: () =>	set((state) => ({ dark: !state.dark })) ,
}))

export default darkMode