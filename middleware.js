// =================================================================
//                         Requires
// =================================================================
var jwt = require('jsonwebtoken');
var SEED = require('./config').SEED;

// =================================================================
//                    Verify token
// =================================================================
exports.verifyToken = function(req, res, next) {

    var token = req.body.data;
    
    jwt.verify(token, SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                message: 'Invalid token',
                errors: err
            })
        };

        req.data = decoded;

        next();
    });
}

// =================================================================
//                    Validate params
// =================================================================
exports.validateParams = function(req, res, next) {

    var data = req.data;
    if (!data.expediente || !data.username || !data.password) {
        return res.status(400).json({
            ok: false,
            message: 'Invalid body'
        })
    };
    next();
}
