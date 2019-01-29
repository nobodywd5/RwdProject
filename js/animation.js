document.addEventListener('DOMContentLoaded', () => {
	anime.timeline({
			easing: 'easeOutExpo',
		})
		.add({
			targets: '.nav-wrapper',
			width: ['0%', '100%'],
		})
		.add({
			targets: '.logo',
			width: ['0%', '35%'],
			offset: '-=500',
		})
		.add({
			targets: '.logo h1, nav a',
			opacity: [0, 1],
			translateY: [20, 0],
			delay: (el, i) => 100 * i,
			offset: '-=700',
		})
		.add({
			targets: '.text-section',
			translateY: [100, 0],
			opacity: [0, 1],
			offset: '-=700',
		})
		.add({
			targets: '.image-section',
			translateY: [-300, 0],
			opacity: [0, 1],
			offset: '-=2000',
		})
		.add({
			targets: '#gallery-loader',
			height: ['0px', '100px'],
			opacity: [0, 1],
			offset: '-=700',
		})
		.add({
			targets: '.ham-line',
			translateX: [500, 0],
			opacity: [0, 1],
			duration: 800,
			delay: (el, i) => 100 * i,
			offset: '-=700',
		})
		.add({
			targets: '.social-links a',
			translateX: [500, 0],
			opacity: [0, 1],
			delay: (el, i) => 200 * i,
			offset: '-=1000',
		})
		.add({
			targets: '.gallery-counter',
			translateX: [0, 350],
			delay: (el, i) => 100 * i,
			opacity: [0, 1],
			offset: '-=1000',
		})
})