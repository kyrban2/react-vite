import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary'
}

const Button = ({
	children,
	variant = 'primary',
	className = '',
	...props
}: ButtonProps) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
