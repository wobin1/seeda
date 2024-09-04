import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alarts',
  templateUrl: './alarts.page.html',
  styleUrls: ['./alarts.page.scss'],
})
export class AlartsPage implements OnInit {

  alertMessage!: string;

  constructor(private sockets: SocketService, private api: HttpClient) { }

  ngOnInit() {

    this.sockets.sendMessage('security alert')
    }



    triggerAlert(){
      alert(this.alertMessage) 
    }

    sendAlert(){
      this.api.post('send-alert', {}).subscribe()
    }




}
