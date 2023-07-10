import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<{ paddingContainer?: boolean }>> = ({
	children,
	paddingContainer
}) => {
	return (
		<div className={`${paddingContainer ? 'px-[370px]' : 'mx-8'}`}>
			{children}
		</div>
	)
}

export default Container
