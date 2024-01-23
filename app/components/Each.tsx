import { Children, FC, ReactNode } from 'react'

type EachProps = {
	of: any[]
	render: (item: any, index: number) => ReactNode
}

const Each: FC<EachProps> = ({ of, render }) =>
	Children.toArray(of.map((item, index) => render(item, index)))

export default Each
