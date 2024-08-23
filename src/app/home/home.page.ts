import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate = new Date();

  constructor(private loadingCtrl: LoadingController, private toastController: ToastController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Alerting security team...',
      duration: 3000,
    });

    loading.present();
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
        this.showLoading()
        this.presentToast()
      },
    },
  ];

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Security team alerted',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }



  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }


}
