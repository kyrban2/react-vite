// Импорт компонентов
import Button from './components/Button/Button'
import Hero from './components/Hero/Hero'
import ImageComponent from './components/ImageComponent/ImageComponent'
// Импорт стилей
import styles from './App.module.scss'
// Импорт глобальных стилей
import './styles/globals.scss'

function App() {
	return (
		<div className={styles.app}>
			<Hero />
			<main className={styles.main}>
				<div className={styles.buttonGroup}>
					<Button variant='primary'>Основная кнопка</Button>
					<Button variant='secondary'>Вторичная кнопка</Button>
				</div>
				<ImageComponent />
			</main>
		</div>
	)
}

export default App
