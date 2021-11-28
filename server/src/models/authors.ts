import { model, Schema } from "mongoose";

interface Author {
    name: string;
    email: string;
    url?: string;
}

const scheme = new Schema<Author>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    url: { type: String }
});

const AuthorModel = model<Author>('Author', scheme);

export { AuthorModel, Author };