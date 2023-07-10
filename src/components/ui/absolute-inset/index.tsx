import { FC, PropsWithChildren } from 'react'

const AbsoluteInset: FC<PropsWithChildren> = ({ children }) => {
	return <div className='absolute inset-x-0 inset-y-0'>{children}</div>
}

export default AbsoluteInset
