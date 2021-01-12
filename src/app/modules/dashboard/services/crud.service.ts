import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private _url = 'http://127.0.0.1:5000/api/user/all';

  constructor(private _http: HttpClient) {}

  readAllUsers() {
    return this._http.get(this._url);
  }
}
