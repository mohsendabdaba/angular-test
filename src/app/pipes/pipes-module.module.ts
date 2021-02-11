import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinPipe } from './medecin.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedecinPipe],

  exports: [MedecinPipe]

})
export class PipesModule { }

