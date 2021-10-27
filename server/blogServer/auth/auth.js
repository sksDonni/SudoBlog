const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers["auth-access-token"];
	console.log(token);
	if(!token)
		return res.status(403).json({message: "token is required"})

	try{
		const decoded = jwt.verify(token, 'secret')
		console.log(decoded);
		req.user = token
	}
	catch(err){	
		console.log(err);
		return res.status(401).json({message: err})
	}

	return next();
}

module.exports = verifyToken;