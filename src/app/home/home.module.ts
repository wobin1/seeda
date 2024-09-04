import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from '../services/socket.service';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClient } from '@angular/common/http';

const config: SocketIoConfig = { url: 'http://127.0.0.1:8000', options: { path: '/alerts/websocket' }  };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [HomePage],
  providers: [SocketService]
})
export class HomePageModule {}
