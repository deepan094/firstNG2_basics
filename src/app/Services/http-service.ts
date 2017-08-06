import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/Http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpHelperService {
  constructor(private _http:Http) { }
    getHttpData(url){
      return this._http.get(url)
        .map(
          response => response.json()
        )
    }

    getHttpService(url: string): Promise<any> {
        return this._http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
