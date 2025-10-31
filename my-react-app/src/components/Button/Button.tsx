import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary' | string // Добавьте другие варианты по необходимости
}

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
	return (
		<button className={`${styles.button} ${styles[variant]}`} {...props}>
			{children}
		</button>
	)
}

export default Button
