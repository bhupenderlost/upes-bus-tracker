
exports.checkAdmin = (req, res, next) => {

    if(req.auth.user.role !== "admin") {
        return res.status(401).json({
            error: true,
            message: "Permisison Denied!"
        })
    }
    next()
}