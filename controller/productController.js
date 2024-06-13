const Product = require("../models/productModel")

const productController =  {
   
    async store(req,res,next){
        let product;
        try{
            const{category,subCategory,name,price} = req.body;
            product=await Product.create({category,subCategory,name,price});
        }
        catch (error){
            res.status(404).json({error: "Server Error",serverError:error})
        }
        res.status(201).json(product);
    },

    async index(req,res,next){
        let pro;
        try{
            pro = await Product.find();
        }
        catch (error){
            res.status(404).json({error:"server Error",serverError:error})
        }
        res.status(200).json(pro);  
    },

    async delete(req,res,next){
        let pro;
        try{
            const  { id } = req.body;
            pro = await Product.findByIdAndDelete({ _id:id });
        }
        catch (error){
            res.status(500).json({ error: "Server Error",severError:error });
        }
        res.status(200).json(pro);
    }
};

module.exports = productController;