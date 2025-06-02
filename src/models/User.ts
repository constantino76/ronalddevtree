import mongoose,{Schema} from "mongoose";
// const userSchema=new   Schema({


// name:{


// type:String,
// require:true,
// trim:true
// }
// ,
// email:{type:String,
// trim:true,
// unique:true


// },

// password:{

// type:String,
// require:true,
// trim:true},




// });


// const User= mongoose.model('User',userSchema)
export interface IUser{
id:Number,
email:String,
password:String

}
const userSchema = new Schema({

 id:{
type:Number,
 require:true,

 },
 email:{
    type:String,
    require:true,
    trim:true,
    unique:true
 },
 password:{

type:String,
    require:true,
    trim:true,
 },


 })



 const User= mongoose.model<IUser>('User',userSchema)
export default User;