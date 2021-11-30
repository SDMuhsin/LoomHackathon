import { ApiController, Async, Controller, HttpGet, HttpPost,
    HttpStatusCode} from "dinoloop";
import { Author, AuthorModel } from "../models/authors";
import {User, UserModel} from "../models/user";
import {responseWrapper} from "../utility/response";

/* Why TF why do i have to create this */
class HttpResponseMessage<T> {
    statusCode: HttpStatusCode | undefined;
    content: T | undefined;
    // you can also add headers if you want to
}

@Controller("/users")
export class UsersController extends ApiController {

    @Async()
    @HttpGet("")
    async get(): Promise<User[]> {
        return await UserModel.find({}).exec();
    }

    @Async()
    @HttpPost("/create")
    async post(body: User): Promise<any> {
        let user = new UserModel(body);
        let dup = await UserModel.find({username:user.username}).exec()
        if(!dup.length){
            // User does not exist
            let saveResp = await user.save();
            return saveResp;
        }
        else{
            // res.status(400).send("user exists") was all you needed with express
            const response = new HttpResponseMessage<string>();
            response.statusCode = HttpStatusCode.badRequest;
            response.content = 'I hate this library! Also, user already exists';
            return response;
        }
    }
}