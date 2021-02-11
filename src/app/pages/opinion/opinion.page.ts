import { Component, Input, OnInit } from '@angular/core';

import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { OpinionsService } from 'src/app/services/opinions.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.page.html',
  styleUrls: ['./opinion.page.scss'],
})
export class OpinionPage implements OnInit {
  @Input('id') id:any;
  constructor(private modalController:ModalController, private opinionS:OpinionsService) { }

  ngOnInit() {
  }

}
