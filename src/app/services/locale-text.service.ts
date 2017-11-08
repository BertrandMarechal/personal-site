import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocaleTextService {
  fileData: any;
  fileDataEn: any;
  acceptedLocales = ['fr','en'];
  constructor(private http: Http) {
    console.log('constructor')
    if (!this.fileData) {
      let userLang = navigator.language;
      if (this.acceptedLocales.indexOf(userLang) === -1) {
        userLang = 'en';
      }
      this.http.get("assets/languages/" + userLang + ".json").subscribe(data => {
        this.fileData = data.json();
      });
    }
    if (!this.fileDataEn) {
      this.http.get("assets/languages/en.json").subscribe(data => {
        this.fileDataEn = data.json();
      });
    }
  }

  getValue(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.fileData || !this.fileDataEn) {
        setTimeout(() => {
          this.getValue(key)
          .then((result) => {
            resolve(result);
          })
          .catch((result) => {
            reject(result);
          });
        },100);
      }
      else {
        resolve(this.fileData[key] || this.fileDataEn[key]);
      }
    });
  }

}
