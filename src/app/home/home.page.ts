import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SocketService } from '../services/socket.service';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../services/http-service.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate = new Date();
  loading: boolean = false;

  constructor(
              private loadingCtrl: LoadingController, 
              private toastController: ToastController, 
              private sockets: SocketService, 
              private api: HttpServiceService,
              private help: HelperService
            ) {}

  alertMessage!: any;

  ngOnInit() {
    this.sockets.getMessages().subscribe(message => {
        if (this.isJSON(message)) {
            const data = JSON.parse(message);
            this.alertMessage = data.message;
            alert(this.alertMessage.message)

        } else {
            this.alertMessage = message;  // Handle as plain text
            
            alert(this.alertMessage.message)

        }
      });
  }

    // Helper function to check if a string is valid JSON
    isJSON(message: string): boolean {
        try {
            JSON.parse(message);
            return true;
        } catch (e) {
            return false;
        }
    }

    sendMessage(message: string){
      this.loading=true
      try {
        this.sockets.sendMessage(message);
        this.presentToast('Alert Sent!')
        this.loading=false;
      } catch (error) {
          this.presentToast('Error sending message')
          this.loading = false;
      }
    }

    public alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
          this.sendMessage('Emergency Alert!!!')
        },
      },
    ];

    async presentToast(message:string) {
      this.help.presentToast('top', message);
    }

    setResult(ev:any) {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    }


}
