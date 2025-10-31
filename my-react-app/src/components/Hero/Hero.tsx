import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1 className={styles.title}>Добро пожаловать в Vite + React</h1>
				<p className={styles.description}>
					Приложение настроено с поддержкой SCSS, CSS модулей и линтинга
				</p>
			</div>
		</section>
	)
}

export default Hero
