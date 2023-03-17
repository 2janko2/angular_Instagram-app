import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        req = req.clone({
            withCredentials: true,
            headers: new HttpHeaders().append('api-key', environment.apiKey)
        })
        debugger;
        return next.handle(req)
    }
}