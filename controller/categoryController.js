const Category = require("../models/categoryModel");

const categoryController = {

    // index(req,res,next)  {
    // res.json("message");
    //     res.status(200).json([
    //         {id:"1",name:"kishan"},
    //         {id:"2", name:"vijay"},
    //     ]);
    // },


    async index(req, res, next) {
        let categories;
        try {
            categories = await Category.find({ }, { title: 1,  _id: 0 });
        } 
        catch (error) {
            res.status(404).json({ error: "Server error", serverErrror: error });
        }
        res.status(200).json(categories);
    },

    async update(req, res, next) { 
        let cat;
        try {
            const { id } = req.params;
            const { title, description } = req.body;

            cat = await Category.findByIdAndUpdate(
                { _id: id },
                { title, description },
                { new: true }
            );
        } 
        catch (error) {
            res.status(404).json({ error: "Server Error.", serverError: error })
        }
        res.status(200).json(cat);
    },

    async find(req,res,next){
        let pro;
        try{
            const  { id } = req.params;
            pro = await Category.findById({ _id:id });
        }
        catch (error){
            res.status(500).json({ error: "Server Error",severError:error });
        }
        res.status(200).json(pro);
    },

    async find(req,res,next){
        let pro;
        try{
            // const  { title } = req.body;
            pro = await Category.find({ title });
        }
        catch (error){
            res.status(500).json({ error: "Server Error",severError:error });
        }
        res.status(200).json(pro);
    },


    async store(req, res, next) {
        let cat;
        try {
            const { title, description } = req.body;
            cat = await Category.create({ title, description, thumbnail: "upload/category/thumbnail/" + req.file.filename });
        }
        catch (error) {
            res.status(404).json({ error: "Server Error.", serverError: error })
        }
        res.status(201).json(cat);
    }

};


module.exports = categoryController;