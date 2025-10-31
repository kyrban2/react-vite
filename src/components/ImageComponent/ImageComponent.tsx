import iconImg from '@/assets/images/icon.png'
import logoImg from '@/assets/images/logo.png'
import styles from './ImageComponent.module.scss'

const ImageComponent = () => {
	return (
		<div className={styles.container}>
			<h2>Демонстрация работы с изображениями</h2>
			<div className={styles.imageGrid}>
				<div className={styles.backgroundImage}></div>
				<img src={logoImg} alt='Logo' className={styles.logo} />
				<img src={iconImg} alt='Icon' className={styles.icon} />
			</div>
		</div>
	)
}

export default ImageComponent
