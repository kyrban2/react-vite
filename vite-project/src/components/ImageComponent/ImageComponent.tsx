const ImageComponent = () => {
	return (
		<>
			<img src='/assets/logotip.png' alt='Logo' />
			<img src='/assets/iras.png' alt='Iras' />
			<div
				style={{
					backgroundImage: `url(/assets/glav.jpg)`,
					width: '300px',
					height: '200px',
					backgroundSize: 'cover',
				}}
			></div>
		</>
	)
}
export default ImageComponent
