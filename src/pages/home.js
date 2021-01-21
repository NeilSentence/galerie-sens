import React from 'react'

const Home = () => {
	const style = {
		heading: {
			margin:0,
    		padding: 10,
    		display: "inline-block",
    		background: "rgb(240,240,240)",
    		color: '#787878',
    		position: 'relative',
    		zIndex: 4,
    		pointerEvents: 'none'
		}
	}
	
	return (
		<div className="sctn sctn_home">
			<h1 className="sctn_heading delayed-fallable" style={style.heading}>Willkommen!</h1>
			<div className="sctn_body">
				<div className="sctn_subheading"><span className="delayed-fallable greybg">Herzlich</span> <span className="delayed-fallable greybg">willkommen</span> <span className="delayed-fallable greybg">auf</span> <span className="delayed-fallable greybg">meiner</span> <span className="delayed-fallable greybg">Homepage!</span> <span className="delayed-fallable greybg">Besuchen</span> <span className="delayed-fallable greybg">Sie</span> <span className="delayed-fallable greybg">mich</span> <span className="delayed-fallable greybg">auch</span> <span className="delayed-fallable greybg">in</span> <span className="delayed-fallable greybg">meinem</span> <span className="delayed-fallable greybg">Atelier</span> <span className="delayed-fallable greybg">am</span> <span className="delayed-fallable greybg">See</span> <span className="delayed-fallable greybg">im</span> <span className="delayed-fallable greybg">Amtshaus</span> <span className="delayed-fallable greybg">Bad</span> <span className="delayed-fallable greybg">Bederkesa</span> <span className="delayed-fallable greybg">,</span> <span className="delayed-fallable greybg">Amtsstr</span> <span className="delayed-fallable greybg">.</span> <span className="delayed-fallable greybg">8</span> <span className="delayed-fallable greybg">,</span> <span className="delayed-fallable greybg">27624</span> <span className="delayed-fallable greybg">Geestland</span></div>
			</div>
		</div>
	)
	
}

export default Home
