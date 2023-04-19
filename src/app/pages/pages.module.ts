import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackscreenComponent } from 'src/app/pages/backscreen/backscreen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [



    // LogoComponent,
    BackscreenComponent,


    // HomeComponent,  

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {

};
exports: [
]
