import React from 'react'

const Einzelbild = props => {
	
	// props.setEinzelAnsicht closes EBA
	// props.bildinfos contains infos

	/*
		.titel
		.beschreibung
		.preis
		.tags
		.groesse.x/.y/.z
		.gewicht
		.altSrc // [filename2,filename3]
		.source
		.altTxt
		.verkauft // true,false

 	*/
	const bildinfos = props.bildinfos
	const schliessen = props.schliessen

	const groesse = (groessenProp) => {
		if (typeof groessenProp === "string") return groessenProp
		else return `Maße: ${groessenProp.x} (B) x ${groessenProp.y} (T) x ${groessenProp.z} (H) cm`
	} 

	const style = {
		wrapper: {
			height: '100vh',
			width: '100vw',
			background:`url(${props.bildinfos.source})`,
			backgroundSize:'cover',
			backgroundPosition:'center',
			position:'fixed',
			left:0,
			top:0,
			zIndex:3,
			animationName:'fadein',
			animationDuration:'0.4s',
			animationTimingFunction: 'ease'
			//backgroundImage:props.
		},
		info: {
			height: 200,
			width:'100vw',
			position:'absolute',
			background:'rgba(255,255,255,0.85)',
			bottom:0,
			display:'flex'
		},
		leftside: {display:'flex',flexFlow:'column',left:0,width:'50vw',height:'100%',padding: '2em',boxSizing: 'border-box'},
		rightside: {display:'flex',flexFlow:'column',right:0,width:'50vw',height:'100%',padding: '2em',boxSizing: 'border-box'},
		closebutton: {display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',width:50,height:50,position:'fixed',top:100,right:50,background:'#323232',color:'rgb(240,240,240)'},
		x:{fontSize:'1.5em'},
		artTitle:{marginTop:0},
		tagWrapper:{display:'flex',flexFlow:'row',justifyContent:'space-evenly',marginTop:'2em'},
		outerPreis:{display:'flex',flexFlow:'row'},
		preis:{fontWeight:800}
	}
	

	let tags = ''
	// bildinfos.tags.forEach((tag) => {tags+=`<div style="height:25px;border:1px solid black;border-radius:6px;padding:0.4em">${tag}</div>`})
	return (
		<div key={bildinfos.key} className="einzelbild" id="einzelbild_ansicht" style={style.wrapper}>
			<div className="closebutton" style={style.closebutton} onClick={schliessen}><p style={style.x}>X</p></div>

			<div className="infobereich" style={style.info}>
				<div className="leftSide" style={style.leftside}>
					<h1 className="artwork_title" style={style.artTitle}>{bildinfos.titel}</h1>
					<div>{groesse(bildinfos.groesse)}</div>
					<div style={style.outerPreis}><div>'Preis: '</div><div style={style.preis}>{bildinfos.preis+' €'}</div></div>
				</div>
				<div className="rightSide" style={style.rightside}>
					<div dangerouslySetInnerHTML={{ __html: `Materialgedanke: ${bildinfos.beschreibung}` }}></div>
					<div style={style.tagWrapper} dangerouslySetInnerHTML={{__html:tags}}></div>
				</div>
			</div>
		</div>
	)
}

export default Einzelbild