import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import {LayoutModule} from '@angular/cdk/layout';

const materialui=[
  MatButtonModule,
  LayoutModule
]
@NgModule({
  exports:[
    materialui
  ],
  imports: [
   materialui
  ]
})
export class MaterialUiModule { }
