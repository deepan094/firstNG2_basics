import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpHelperService {
  constructor(private _http:Http) { }
    getHttpData(url){
      return this._http.get(url)
        .map(
          response => response.json()
        )
    }
}
