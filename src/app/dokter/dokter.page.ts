import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-dokter',
  templateUrl: './dokter.page.html',
  styleUrls: ['./dokter.page.scss'],
})
export class DokterPage implements OnInit {
  // schedule = ''
  selectedUser: any;
  users = ['07:00-09:00', '09:00-11:00', '13:00-15:00'];
  constructor(private route: Router, private pickerController: PickerController) {

  }

  ngOnInit() {
  }
  next() {
    this.route.navigateByUrl('/no-antrian')

  }
  back() {
    this.route.navigateByUrl('/filter')

  }
  // async showBasicPicker() {
  //   let opts: PickerOptions = {
  //     buttons: [{
  //       text: 'Cancel',
  //       role: 'cancel'
  //     }, {
  //       text: 'Done'
  //     }
  //     ],
  //     columns: [
  //       {
  //         name: 'schedule',
  //         options: [
  //           { text: '07:00 - 09:00', value: 'a' },
  //           { text: '09:00 - 12:00', value: 'b' },
  //           { text: '13:00 - 15:00', value: 'c' },
  //           { text: '15:00 - 17:00', value: 'd' },
  //         ]
  //       }
  //     ]
  //   };
  //   let picker = await this.pickerController.create(opts);

  //   picker.present();
  //   picker.onDidDismiss().then(async data => {
  //     let col = await picker.getColumn('schedule');
  //     console.log('col: ', col);
  //     this.schedule = col.options[col.selectedIndex].text;
  //   });
  // }
}
