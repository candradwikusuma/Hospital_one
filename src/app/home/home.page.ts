import { Component, ViewChildren } from '@angular/core';
import { SliderService } from '../slider.service';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // items = [];
  // slide1pts = {
  //   slidesPerView: 1,
  //   initialSlide: 0,
  //   loop: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  // };
  // breakpoints: {
  //   640: {

  //     slidesPerView: 1
  //     // spaceBetween: -18,
  //     // centeredSlides: true,
  //     loop: true,
  //     // centeredSlidesBounds: true,
  //   },
  //   768: {

  //     slidesPerView: 1,


  //     loop: true,

  //   },
  //   1024: {

  //     slidesPerView: 1,


  //     loop: true,

  //   }
  // }
  @ViewChildren('slides') slides: IonSlides;
  buttonName = "APPOINTMENT";
  selectedSlide: any;
  slideOpts = {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  };

  constructor(private slider: SliderService, private route: Router) { }

  ionSlideChange(slides) {
    this.selectedSlide = slides;

    //   slides.getActiveIndex().then(
    //     (slidesIndex) => {
    //       if (slidesIndex == 5) {
    //         //   this.buttonName = "Continue";
    //         // } else {
    //         this.buttonName = "Next";
    //       }
    //     });
    // }

    // next() {
    //   this.selectedSlide.getActiveIndex().then((slidesIndex) => {
    //     if (slidesIndex == 5) {
    //       console.log("Done Slider");
    //     } else {
    //       this.selectedSlide.slideNext();
    //     }
    //   });
    // }
  }
  // ngOnInit() {
  //   this.items = this.slider.getProducts();
  // }
  next() {
    this.route.navigateByUrl('/filter')
    // this.route.navigate(['tab3']);
  }
}
