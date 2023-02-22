import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ComponentsModule, RouterModule, CarouselModule],
})
export class ShellModule {}
