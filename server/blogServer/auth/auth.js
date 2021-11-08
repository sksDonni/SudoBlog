const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
	console.log(req.body);
	console.log(req.headers);
	const token = req.body.token || req.query.token || req.headers["authorization"];
	console.log(token);
	if(!token)
		return res.status(403).json({message: "token is required"})

	try{
		const decoded = await jwt.verify(token, 'secret')
		console.log(decoded);
		req.user = decoded
	}
	catch(err){	
		console.log(err);
		return res.status(401).json({message: err})
	}

	return next();
}

module.exports = verifyToken;