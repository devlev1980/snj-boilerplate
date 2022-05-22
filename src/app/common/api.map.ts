import { HttpRequest } from "@angular/common/http";
import { TestModel } from "src/app/home/models/test.model";
import { environment } from "src/environments/environment";

export class ApiMap {

    public static readonly test: HttpRequest<TestModel[]> = new HttpRequest<TestModel[]>(
        "GET",
        environment.apiBase + "/posts"
    );
    public static readonly isAuthorized: HttpRequest<null> = new HttpRequest<null>(
        "GET",
        //change the url to the authorization endpoint
        environment.apiBase + ""
    )
}
