import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { IndexComponent } from './index/index.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ServiceSliderComponent } from './service-slider/service-slider.component';
import {MaterialUiModule} from '../material-ui/material-ui.module';
import { TestimonialSliderComponent } from './testimonial-slider/testimonial-slider.component'

@NgModule({
  declarations: [
    IndexComponent,
    ServiceSliderComponent,
    TestimonialSliderComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    IvyCarouselModule,
    MaterialUiModule
    
  ]
})
export class ClientModule { }
