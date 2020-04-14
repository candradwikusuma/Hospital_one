import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SliderService } from "../slider.service";
import { ListdokterService } from "../listdokter.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.page.html",
  styleUrls: ["./filter.page.scss"],
  //encapsulation: ViewEncapsulation.None,// Add this line
})
export class FilterPage implements OnInit {
  selectedUser: any;
  users = ["adam", "nicole", "alba"];
  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};
  //slider
  items = [];
  slideOpts = {
    slidesPerView: 2,
    slidesPerColumn: 3,
    //   breakpoints: {
    //     //768x1024
    //     '@0.75': {
    //       slidesPerView: 4,
    //       slidesPerColumn: 4,
    //     },
    //     //1024x768
    //     '@1.33': {
    //       slidesPerView: 4,
    //       slidesPerColumn: 4,
    //     },
    //     '@1.00': {
    //       slidesPerView: 4,
    //       slidesPerColumn: 4,
    //     },
    //     '@1.50': {
    //       slidesPerView: 4,
    //       slidesPerColumn: 4,
    //     }
    //   }
    // };
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerColumn: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 3,
        //spaceBetween: -20,
      },
      800: {
        slidesPerView: 2,
        slidesPerColumn: 3,
      },
      1024: {
        slidesPerView: 3,
        slidesPerColumn: 3,
      },
      1366: {
        slidesPerView: 4,
        slidesPerColumn: 3,
      },
    },
  };

  constructor(
    private route: Router,
    private listdokter: ListdokterService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.cities = [
      { item_id: 1, item_text: "Anak" },
      { item_id: 2, item_text: "Anestesiologi dan Reanimasi" },
      { item_id: 3, item_text: "Bedah Onkologi" },
      { item_id: 4, item_text: "Bedah Anak" },
      { item_id: 5, item_text: "Bedah Digestif" },
      { item_id: 6, item_text: "Bedah Mulut" },
      { item_id: 7, item_text: "Bedah Onkologi" },
      { item_id: 8, item_text: "Bedah Plastik dan Rekontruksi" },
      { item_id: 9, item_text: "Bedah Saraf" },
      { item_id: 10, item_text: "Bedah Umum" },
      { item_id: 11, item_text: "BDKV (Bedah Thorax Kardiovaskuler)" },
      { item_id: 12, item_text: "Dokter Umum" },
      { item_id: 13, item_text: "Gigi" },
      { item_id: 14, item_text: "Gigi Anak (Pedodontis)" },
      { item_id: 15, item_text: "Jantung dan Pembuluh Darah" },
    ];

    this.dropdownSettings = {
      singleSelection: true,
      idField: "item_id",
      textField: "item_text",

      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
    };
    this.myForm = this.fb.group({
      city: [this.selectedItems],
    });

    this.items = this.listdokter.getDokters();
  }
  next() {
    this.route.navigateByUrl("/dokter");
    // this.route.navigate(['tab3']);
  }

  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter,
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 2,
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: null,
      });
    }
  }
}
// function() {

//   'use strict';
//   // breakpoint where swiper will be destroyed
// // and switches to a dual-column layout
// const breakpoint = window.matchMedia( '(min-width:31.25em)' );

// // keep track of swiper instances to destroy later
// let mySwiper;
// const breakpointChecker = function() {

//   // if larger viewport and multi-row layout needed
//   if ( breakpoint.matches === true ) {

//     // clean up old instances and inline styles when available
//   if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

//   // or/and do nothing
//   return;

//     // else if a small viewport and single column layout needed
//     } else if ( breakpoint.matches === false ) {

//       // fire small viewport version of swiper
//       return enableSwiper();

//       };

//     }

// };
