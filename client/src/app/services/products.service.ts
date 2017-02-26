import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
    result: {};

    constructor(private http:Http){
        console.log('ProductService Initialized');
    }

    public getProducts( dbFormAuth_inputName:string, dbFormAuth_inputPassword:string){
        let sendedObject = { name: dbFormAuth_inputName, pass: dbFormAuth_inputPassword };

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        // this.http.post('api/products', sendedObject , options)
        //             .map(this.extractData)
        //             .catch(this.handleError);

        // this.http.get('api/products')
        //     .map(this.extractData)
        //     .catch(this.handleError);
        // return this.result;

        return this.http.post('api/products', sendedObject , options)
                    .map(res => res.json());
    }

    private extractData(res: Response){
        this.result = res.json();
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        this.result = error.json() || '';
        } else {
        this.result = error.message ? error.message : error.toString();
        }
        console.error(this.result);
        return Observable.throw(this.result);
    }

}