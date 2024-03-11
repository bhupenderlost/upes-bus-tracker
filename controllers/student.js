const User = require('../models/user')

exports.getStudents = async (req, res) => {

    try {
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
        const pageOptions = {
            page: req.query.page || 1,
            limit: req.query.limit || 10,
            select: 'firstName lastName username email sapId courseName semester boardingPoint',
        }
        //Find User
        let user = await User
            .paginate({}, pageOptions)
        res.json({
            success: true,
            dbRes: user
        })
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}
exports.getStudentById = async (req, res) => {
    try {
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
        const { userId } = req.params
        //Find User
        let user = await User
            .findOne({ _id: userId })
        res.json({
            success: true,
            dbRes: user
        })
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}