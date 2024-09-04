import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  isAlertOpen = false;
  alertButtons = ['Ok'];
  alarmStatus = false;

  constructor(private storage: StorageService) {}

  ngOnInit(){
    this.alarmStatus = this.storage.getJson('alarmStatus')
  }


  recordVoiceNote(){
    console.log('recordVoiceNote')
    if (this.alarmStatus != null && this.alarmStatus != false){
      null
    }
    else {
      console.log(this.alarmStatus)
      this.setAlertOpen(!this.isAlertOpen)
    }

  }

  setAlertOpen(status: boolean){
    this.isAlertOpen = status;
  }

}
