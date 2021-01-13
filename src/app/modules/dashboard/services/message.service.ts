import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _getmessagesurl = 'http://127.0.0.1:5000/api/admin/messages/all';

  constructor(private _http: HttpClient) {}

  getAllMessages() {
    return this._http.get(this._getmessagesurl);
  }
}
