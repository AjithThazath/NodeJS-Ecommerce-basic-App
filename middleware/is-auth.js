/**
	@Authored By Ajith Thazath  
	Created for Demo project
**/
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}