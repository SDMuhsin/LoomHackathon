import { ApiController, Controller, HttpGet } from "dinoloop";

@Controller("/ping")
export class PingController extends ApiController {

    @HttpGet("")
    get(): String {
        return "Ping successfull at " + new Date().toString();
    }
}