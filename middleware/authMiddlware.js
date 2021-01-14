const jwt = require('jsonwebtoken');
const mysqlConnection = require("../connection");


const authRequire = (req, res, next) => {

    const token = req.cookies.jwt;
    console.log(token);


    if (token) {


        jwt.verify(token, 'secretkey', (err, decodedToken) => {

            if (err) {
                console.log(err.message);
                res.redirect('/');

            } else {
                console.log('In auth require ');
                next();
            }

        })
    }
     else {
        res.redirect('/');


    }

}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {

        jwt.verify(token, 'secretkey', (err, decodedToken) => {

            if (err) {
                console.log(err);
                res.locals.user = null;

                next();
            } else {
                let stmt = 'SELECT * FROM student WHERE stud_id=?'

                mysqlConnection.query(stmt, [decodedToken.id], (err, result, field) => {

                    if (err) {
                        console.log('Student not found')
                        res.locals.user = null;
                        next();

                    } else {
                        console.log('In check')
                        res.locals.user = result[0];
                        console.log(res.locals);
                        next();
                    }

                })

            }

        })

    } else {

    }
}

const checkAdmin = (req, res, next) => {
    const token = req.cookies.adminjwt;
    if (token) {

        jwt.verify(token, 'secretkey', (err, decodedToken) => {

            if (err) {
                console.log(err);
                res.locals.user = null;

                next();
            } else {
                let stmt = 'SELECT * FROM admin WHERE admin_id=?'

                mysqlConnection.query(stmt, [decodedToken.id], (err, result, field) => {

                    if (err) {
                        console.log('Student not found')
                        res.locals.user = null;
                        next();

                    } else {
                        console.log('In check')
                        res.locals.user = result[0];
                        console.log(res.locals);
                        next();
                    }

                })

            }

        })

    } else {

    }
}








module.exports = {
    authRequire,
    checkUser,checkAdmin
};