import { ApiController, Async, Controller, HttpGet, HttpPost } from "dinoloop";
import { Author, AuthorModel } from "../models/authors";

@Controller("/authors")
export class AuthorsController extends ApiController {

    @Async()
    @HttpGet("")
    async get(): Promise<Author[]> {
        return await AuthorModel.find({}).exec();
    }

    @HttpPost("/add")
    post(body: any): String {

        async function addAuthorToDb(author: any) {
            console.log(author);
            const authorDoc = new AuthorModel({
                name: author.name,
                email: author.email,
                url: author.url
            });
            await authorDoc.save();
        }
        addAuthorToDb(body);

        return "Request started";
    }
}