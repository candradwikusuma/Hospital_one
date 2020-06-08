import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SegmentChangeEventDetail } from "@ionic/core";

import { SliderService } from "../slider.service";
import { ListdokterService } from "../listdokter.service";
import { Docter } from "../docter.model";
import { DocterService } from "../docter.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.page.html",
  styleUrls: ["./filter.page.scss"],
  //encapsulation: ViewEncapsulation.None,// Add this line
})
export class FilterPage implements OnInit {
  loadedDocter: Docter[];
  today: Docter[];
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
    slidesPerView: 1,
    slidesPerColumn: 4,

    breakpoints: {
      640: {
        slidesPerView: 1.1,
        slidesPerColumn: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 3,
        //spaceBetween: -20,
      },
      800: {
        slidesPerView: 2,
        slidesPerColumn: 4,
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
    private docterService: DocterService,
    private route: Router,

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

    this.loadedDocter = this.docterService.dokter;
    this.today = this.loadedDocter;
    // this.items = this.listdokter.getDokters();
  }
  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
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
