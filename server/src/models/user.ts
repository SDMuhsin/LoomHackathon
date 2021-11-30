import { model, Schema } from "mongoose";

interface User {
    username: string;
}

const scheme = new Schema<User>({
    username: { type: String, required: true }
});

const UserModel = model<User>('User', scheme);

export { UserModel, User };