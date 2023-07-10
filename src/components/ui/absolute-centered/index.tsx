import { FC, PropsWithChildren } from 'react'

const AbsoluteCentered: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			{children}
		</div>
	)
}

export default AbsoluteCentered
