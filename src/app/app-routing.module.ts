import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponentComponent } from './doctor-component/doctor-component.component';
import { PartiesComponentComponent } from './parties-component/parties-component.component';

const routes: Routes = [
  { path : '', component : PartiesComponentComponent },
  { path : 'doctor', component : DoctorComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
