import mongoose from 'mongoose';

const connectDB=async(url)=>{
    try{
        const options={
            dbname:'books'
        }
        await mongoose.connect(url,options);
        console.log("the databse is connected");
    }catch(err){
        console.log(err);
    }
}
export {connectDB}; 