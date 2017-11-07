import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocaleTextService {
  fileData: any;
  acceptedLocales = ['fr','en'];
  constructor(private http: Http) {
    if (!this.fileData) {
      let userLang = navigator.language;
      if (this.acceptedLocales.indexOf(userLang) === -1) {
        userLang = 'en';
      }
      this.http.get("assets/languages/" + userLang + ".json").subscribe(data => {
        this.fileData = data.json();
      });
    }
  }

  getValue(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.fileData) {
        setTimeout(() => {
          return this.getValue(key);
        },100);
      }
      else {
        resolve(this.fileData[key]);
      }
    });
  }

}
