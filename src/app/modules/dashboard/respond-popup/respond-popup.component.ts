import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-respond-popup',
  templateUrl: './respond-popup.component.html',
  styleUrls: ['./respond-popup.component.css'],
})
export class RespondPopupComponent implements OnInit {
  constructor() {}

  @Input() msgId: string;

  ngOnInit(): void {}
}
