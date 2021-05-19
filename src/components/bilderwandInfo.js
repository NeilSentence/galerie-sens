import React from 'react'

const WandInfo = props => {

	console.log(`Wand ${props.titel} wird geladen...`)

	const wandinfos = props.wandinfos
	const schliessen = props.schliessen
	
	const style = {
		wrapper: {
			height: '10vh',
			width: '100vw',
			position:'fixed',
			left:0,
			top:0,
			zIndex:4000,
			animationName:'fadein',
			animationDuration:'0.4s',
			animationTimingFunction: 'ease'
		},
		info: {
			height: 200,
			position:'absolute',
			background:'rgba(255,255,255,0.95)',
			display:'flex'
		},
		leftside: {display:'flex',flexFlow:'column',left:0,width:'50vw',padding: '2em',boxSizing: 'border-box'},
		rightside: {display:'flex',flexFlow:'column',right:0,width:'50vw',padding: '2em',boxSizing: 'border-box'},
		closebutton: {display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',width:50,height:50,position:'absolute',top:100,right:50,background:'#323232',color:'rgb(240,240,240)'},
		x:{fontSize:'1.5em'},
		artTitle:{marginTop:0},
		tagWrapper:{display:'flex',flexFlow:'row',justifyContent:'space-evenly',marginTop:'2em'},
		outerPreis:{display:'flex',flexFlow:'row'},
		preis:{fontWeight:800}
	}
	
	return (
		<div key={wandinfos.key} className="wandinfo" id="wandinfo_ansicht" style={style.wrapper}>
			

			<div className="infobereich" style={style.info}>
				<div className="leftSide" style={style.leftside}>
					<h1 className="wand_title" style={style.artTitle}>{props.titel}</h1>
					<div className="closebutton" style={style.closebutton} onClick={schliessen}><p style={style.x}>X</p></div>
				</div>
				<div className="rightSide" style={style.rightside}>
					<div dangerouslySetInnerHTML={{ __html: `Zur Bilderserie: ${props.wandinfos}` }}></div>
				</div>
			</div>
		</div>
	)
}

export default WandInfo
