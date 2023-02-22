import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions;

  customOptions2: OwlOptions;

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 700,
      autoplay: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1280: {
          items: 4,
        },
      },
    };

    this.customOptions2 = {
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 400,
      autoplay: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    };
  }
}
