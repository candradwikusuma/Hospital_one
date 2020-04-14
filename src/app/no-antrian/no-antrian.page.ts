import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-no-antrian',
  templateUrl: './no-antrian.page.html',
  styleUrls: ['./no-antrian.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('1000ms 1000ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ])
  ]
})
export class NoAntrianPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  next() {
    this.route.navigateByUrl('/home')

  }
}
