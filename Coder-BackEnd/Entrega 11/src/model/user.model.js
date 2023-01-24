import { Schema, model } from 'mongoose';
import bcrypt from "bcryptjs"

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
});

// UserSchema.pre("save",async(next)=>{
//     const user = this;
//     const hash= await bcrypt.hash(user.password,10);

//     this.password=hash;
//     next();
// });

// UserSchema.methods.isValidPassword = async function (password){
//     const user=this;
//     const compare=await bcrypt.compare(password,user.password);
//     return compare;
// }

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

export const UserModel = model('user', UserSchema);