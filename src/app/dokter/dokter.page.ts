import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PickerController, NavController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

import { Docter } from "../docter.model";
import { DocterService } from "../docter.service";
import { NgForm, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-dokter",
  templateUrl: "./dokter.page.html",
  styleUrls: ["./dokter.page.scss"],
})
export class DokterPage implements OnInit {
  docter: Docter;
  selectedUser: any;
  //form: NgForm;
  // form: FormGroup;

  constructor(
    private route: Router,
    private pickerController: PickerController,
    private navCtrl: NavController,
    private docterService: DocterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("docterId")) {
        this.navCtrl.navigateBack("/filter");
        return;
      }
      this.docter = this.docterService.getDokter(paramMap.get("docterId"));
    });

    // this.form = new FormGroup({
    //   name: new FormControl(null, {
    //     updateOn: "blur",
    //     validators: [Validators.required],
    //   }),
    //   email: new FormControl(null, {
    //     updateOn: "blur",
    //     validators: [Validators.required],
    //   }),
    //   handphone: new FormControl(null, {
    //     updateOn: "blur",
    //     validators: [Validators.required],
    //   }),
    //   schedule: new FormControl(null, {
    //     updateOn: "blur",
    //     validators: [Validators.required],
    //   }),
    // });
  }
  onBookDoctor() {
    this.route.navigateByUrl("/no-antrian");
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const name = form.value.name;
    const email = form.value.email;
    const handphone = form.value.handphone;
    const schedule = form.value.schedule;
    console.log(name, email, handphone, schedule);
  }
  back() {
    // this.route.navigateByUrl("/filter");
    this.navCtrl.navigateBack("/filter");
    //this.navCtrl.pop();
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
