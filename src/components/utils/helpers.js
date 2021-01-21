

export function hslaStr(){
	const randomHue = Math.floor((Math.random() * 360) + 0)
	return `${randomHue},43%,62%,1`
}

export function randomSize(min, max) {
	return Math.floor((Math.random() * max) + min)
}


