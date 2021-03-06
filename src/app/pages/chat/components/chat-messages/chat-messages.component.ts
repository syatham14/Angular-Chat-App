import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/classes/message';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
