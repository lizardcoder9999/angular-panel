import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _url = 'http://127.0.0.1:5000/api/admin/get/';
  constructor(private _http: HttpClient) {}

  getAdminById(id: string) {
    return this._http.get(`${this._url}${id}`);
  }
}
