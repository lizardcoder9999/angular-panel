import { Component, OnInit, Input } from '@angular/core';
import { MsgidService } from '../services/msgid.service';

@Component({
  selector: 'app-respond-popup',
  templateUrl: './respond-popup.component.html',
  styleUrls: ['./respond-popup.component.css'],
})
export class RespondPopupComponent implements OnInit {
  constructor(private _msg: MsgidService) {}

  @Input() msgId: string;
  message: string;

  ngOnInit(): void {
    this._msg
      .getMsgById(this.msgId)
      .subscribe((msg) => (this.message = msg.message));
  }
}
