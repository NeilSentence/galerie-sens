const { db } = require('../util/admin') 

// likes: https://youtu.be/m_u6P5k0vP0?t=10976
exports.like = (req, res) => {

	// Obj mit bildID:req.body.bildID und likedBy: userID der collection "bilder" hinzufügen

	// 



	// batch-unliking :)

	/*

	
	❤️ : not liked
	💘 : liked

	---
	
	wenn ich auf einem Bild bin, sehe ich das Herz

	wenn ich authorisiert bin, und
	
		wenn ich in der Liste der "likers" bin, dann ist das Herz dunkel (💘, ".checked"; front-end) 

			nur dann kann ich "unliken".

			ansonsten (❤️) kann ich liken.

	wenn nicht, dann sehe ich zwar das Herz, kann es aber nicht anklicken / bzw. es passiert nichts.

	---

	Aus dem Front-end geht nur ein like-request heraus.

	Wenn der user einge-log-t ist,

		dann passiert etwas

	wenn nicht, kommt eine 0 zurück (nee das ist doof. dann hätten wir zuviele DB calls)

	---

	-1: definitiv ❤️
	1: definitiv 💘

	i.e.: 

	return res.json({increment:  -1})
	return res.json({increment:   1})

	Response kann dann sofort verwendet werden n = n + response

	*/
	
}


// FieldValue.increment()
