import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MsgidService {
  constructor(private _http: HttpClient) {}

  private _getMsgUrl = 'http://127.0.0.1:5000/api/admin/messages/;

  getMsgById(id: string) {
    return this._http.get(`${this._getMsgUrl}/${id}`);
  }
}
