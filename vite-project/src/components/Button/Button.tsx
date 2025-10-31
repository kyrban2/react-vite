import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary'
}

export const Button = ({
	children,
	variant = 'primary',
	...props
}: ButtonProps) => {
	return (
		<button className={`btn btn-${variant}`} {...props}>
			{children}
		</button>
	)
}
export default Button
