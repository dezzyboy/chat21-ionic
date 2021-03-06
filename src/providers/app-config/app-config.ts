import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AppConfigProvider {
  private appConfig: any;

  constructor(public http: HttpClient) {
    // console.log('Hello AppConfigProvider Provider');
    this.appConfig = environment;
  }

  loadAppConfig() {
    // return this.http.get(this.appConfig.apiUrl + 'settings')
    //console.log('--->: ', this.appConfig, this.appConfig.remoteConfigUrl);
    return this.http.get(this.appConfig.remoteConfigUrl)
      .toPromise()
      .then(data => {
        this.appConfig = data;
        //this.appConfig.firebaseConfig = data['firebaseConfig'];
        console.log('----------------------------------> firebaseConfig:');
        console.log(this.appConfig.firebaseConfig);
      }).catch(err => {
        console.log('error loadAppConfig' + err);
      });
  }

  getConfig() {
    return this.appConfig;
  }

}
