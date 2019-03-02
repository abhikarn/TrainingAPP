import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators'
import { pipe} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

   }

   getBusinessPromise() {
    return this.http.get('http://localhost:4000/business/data').toPromise();
   }

   getBusinessObseravle() {
    return this.http.get('http://localhost:4000/business/data')
    // .
    // pipe(map((data: any) => {
    //   console.log(data);
    //   return data[2].person_name;
    // }));
   }

   postData(payload) {
    return this.http.post('http://localhost:4000/business/add',  payload)

   }
}
