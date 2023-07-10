import { Sides } from './side.types'

export const defaultSides: Sides = {
	'top-right': [
		'absolute w-[1px] h-3 top-0 right-0 bg-white',
		'absolute w-3 h-[1px] top-0 right-0 bg-white'
	],
	'top-left': [
		'absolute w-[1px] h-3 top-0 left-0 bg-white',
		'absolute w-3 h-[1px] top-0 left-0 bg-white'
	],
	'bottom-right': [
		'absolute w-[1px] h-3 bottom-0 right-0 bg-white',
		'absolute w-3 h-[1px] bottom-0 right-0 bg-white'
	],
	'bottom-left': [
		'absolute w-[1px] h-3 bottom-0 left-0 bg-white',
		'absolute w-3 h-[1px] bottom-0 left-0 bg-white'
	]
}
