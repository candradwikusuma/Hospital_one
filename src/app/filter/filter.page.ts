import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderService } from '../slider.service';
import { ListdokterService } from '../listdokter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  items = [];
  slideOpts = {
    slidesPerView: 4,
    slidesPerColumn: 2,
    speed: 400,
    breakpoints: {
      640: {

        slidesPerView: 2,
        // spaceBetween: -18,

      },
      768: {

        slidesPerView: 3,
        slidesPerColumn: 3,
        // spaceBetween: -4,

      },
      1024: {

        slidesPerView: 4,
        slidesPerColumn: 2,

      },
      1366: {
        slidesPerView: 4,
        slidesPerColumn: 3,

      },

      // '@0.75': {
      //   slidesPerView: 2,
      //   slidesPerColumn: 2,
      // },

      // '@1.00': {
      //   slidesPerView: 3,
      //   slidesPerColumn: 2,
      // },


    }
  };

  constructor(private route: Router, private listdokter: ListdokterService) { }

  ngOnInit() {
    this.items = this.listdokter.getDokters();
  }
  next() {
    this.route.navigateByUrl('/dokter')
    // this.route.navigate(['tab3']);
  }
}
