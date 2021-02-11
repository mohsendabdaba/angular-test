import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../Party';
import { PartiesServiceService } from '../services/parties-service.service';

@Component({
  selector: 'app-details-party-component',
  templateUrl: './details-party-component.component.html',
  styleUrls: ['./details-party-component.component.css']
})
export class DetailsPartyComponentComponent implements OnInit {


  constructor(private partie_services: PartiesServiceService) { }

  @Input() Party1: any = [];
  @Input() Party2: any = [];
  @Input() Party3: any = [];
  @Input() Party4: any = [];

 

  open1: boolean = false;
  open2: boolean = false;
  open3: boolean = false;
  open4: boolean = false;
  model: any = {};
  placeNonReserver1: any;
  placeNonReserver2: any;
  placeNonReserver3: any;
  placeNonReserver4: any;
  ngOnInit(): void {



  }
  openReserver1() {
    console.log(this.Party1[3], 'test')
    this.open1 = !this.open1;
  }
  openReserver2() {

    this.open2 = !this.open2;
  }
  openReserver3() {

    this.open3 = !this.open3;
  }

  openReserver4() {

    this.open4 = !this.open4;
  }
  decrementeNombre1() {
    this.placeNonReserver1 = this.model.placeNonReserver1
    if (this.placeNonReserver1 < this.Party1[3]) {
      this.Party1[4] = this.Party1[4] - this.placeNonReserver1
    }
    console.log(this.placeNonReserver1, 'number à réserver')
  }
  decrementeNombre2() {

    this.placeNonReserver2 = this.model.placeNonReserver2
    if (this.placeNonReserver2 < this.Party2[3]) {
      this.Party2[4] = this.Party2[4] - this.placeNonReserver2
    }
    console.log(this.placeNonReserver2, 'number à réserver')
  }
  decrementeNombre3() {

    this.placeNonReserver3 = this.model.placeNonReserver3
    if (this.placeNonReserver3 < this.Party3[3]) {
      this.Party3[4] = this.Party3[4] - this.placeNonReserver3
    }
    console.log(this.placeNonReserver3, 'number à réserver')
  }
  decrementeNombre4() {

    this.placeNonReserver4 = this.model.placeNonReserver4
    if (this.placeNonReserver4 < this.Party4[3]) {
      this.Party4[4] = this.Party4[4] - this.placeNonReserver4
    }
    console.log(this.placeNonReserver4, 'number à réserver')
  }
}
