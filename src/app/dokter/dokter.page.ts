import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dokter',
  templateUrl: './dokter.page.html',
  styleUrls: ['./dokter.page.scss'],
})
export class DokterPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  next() {
    this.route.navigateByUrl('/no-antrian')

  }
  back() {
    this.route.navigateByUrl('/filter')

  }
}
