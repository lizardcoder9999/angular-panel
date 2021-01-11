import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _url: string = 'http://127.0.0.1:5000/dashboard';

  constructor(private _http: HttpClient) {}

  verifyToken() {
    return this._http.get(this._url);
  }
}
