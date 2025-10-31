import background from '../../assets/images/background.jpg'
import icon from '../../assets/images/icon.png'
import logo from '../../assets/images/logo.png'
// Убедитесь что все пути имеют правильные слеши: ../../

const ImageComponent = () => {
	return (
		<>
			<img src={logo} alt='Logo' />
			<img src={icon} alt='Icon' />
			<div
				style={{
					backgroundImage: `url(${background})`,
					width: '300px',
					height: '200px',
					backgroundSize: 'cover',
				}}
			></div>
		</>
	)
}

export default ImageComponent
