import { PropsWithChildren } from 'react'

export type AngledBorderProps = PropsWithChildren<{
	additionalBlockStyles?: string
	displayedSides?: Side[]
	additionalClassnames?: string
}>

export type Side = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export type SideTransformOptions = {
	thickness?: string
	height?: string
	offset?: string
}

export type Sides = { [p in Side]: [string, string] }
