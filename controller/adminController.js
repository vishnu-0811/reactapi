const Admin = require("../models/adminModel");

const adminController = {

    async store(req,res,next) {
        let add;
        try{
            const { name,password } = req.body;
            add = await Admin.create({ name,password });
        }
        catch (error){
            res.status(404).json({ error:"Server Error", serverError:error })
        }
        res.status(200).json({add});
    },

    async index(req,res,next) {
        let show;
        try{
            show = await Admin.find();
        }
        catch (error) {
            res.status(500).json({ error:"Server Error",serverError:error })
        }
        res.status(200).json(show);
    }
}

module.exports=adminController; 