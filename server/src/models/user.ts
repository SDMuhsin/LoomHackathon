import { model, Schema } from "mongoose";

interface User {
    username: string;
}

const scheme = new Schema<User>({
    username: { type: String, required: true },
    
},{timestamps:true});
scheme.index({createdAt:1},{expireAfterSeconds:60*60*4})
const UserModel = model<User>('User', scheme);

export { UserModel, User };