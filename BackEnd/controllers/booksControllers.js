 import { book } from "../models/bookModel.js"
 class allControllers{
    static getbooks=async(req,res)=>{
           try{
            const books=await book.find({});
            return  res.status(200).json({
                count:books.length,
                data:books
            });
           }catch(err){
            console.log(err);
            return res.status(500).send({
                message:err.message
            })
           }
    }

    static getBookByid=async(req,res)=>{
        try{
          const{id}=req.params;
          const gotBook=await book.findById(id);
          return res.status(200).send(gotBook);
        }catch(err){
            console.log(err);
            return res.status(500).send({message:err.message});
        }
    }
    static updateBook=async(req,res)=>{
        try{ 
            //since its an updation i must check that all the keys are put >>
            if(!req.body.author||!req.body.publish_year||!req.body.title){
                return res.status(400).send({
                    message:"send all required fields: author,title,publish_year"
                })
            }
            const {id}=req.params;
            const result=await book.findByIdAndUpdate(id,req.body);
            if(!result){
              return res.status(400).send({message:"this book is not found"});
            }
            return res.status(200).send({message:"updation done"});
            // console.log( book.findByIdAndUpdate(id))
        }catch(err){
            console.log(err);
            return res.status(500).send({message:err.message});
        }
    }
    static deleteBook=async(req,res)=>{
        try{
           const {id}=req.params;
           const result=await book.findByIdAndDelete(id);
           if(!result){
            return res.status(400).send({message:"the book is not there hence not deleted"})
           }
           return res.status(200).send({message:"the book is deleted "});
        }catch(err){
            console.log(err);
            res.status(500).send({message:err.message});
        }
    }
    static registerBooks=async(req,res)=>{
       try{
        if(!req.body.author||!req.body.publish_year||!req.body.title){
            return res.status(400).send({
                message:"send all required fields: author,title,publish_year"
            })
        }
        const buuk=new book({
            title:req.body.title,
            author:req.body.author,
            publish_year:req.body.publish_year
        })
        await buuk.save();
        res.status(200).send(buuk);
       }catch(err){
         console.log(err);
         res.status(500).send({
            message:err.message
         })
       }
    }
 }
 export default allControllers;