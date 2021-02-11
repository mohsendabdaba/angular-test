import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { Party } from '../Party';
import { PartiesServiceService } from '../services/parties-service.service';

@Component({
  selector: 'app-parties-component',
  templateUrl: './parties-component.component.html',
  styleUrls: ['./parties-component.component.css']
})
export class PartiesComponentComponent implements OnInit {
  AllParties = [];

  Party1: Array<Party> = [];
  Party2: Array<Party> = [];
  Party3: Array<Party> = [];
  Party4: Array<Party> = [];

  color: any;
  index: any
  place1: any;
  


  constructor(private partie_services: PartiesServiceService) { }

  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.partie_services.liste_soirees().subscribe(res => {
      this.AllParties = res;


      this.Party1=this.AllParties[0]
      this.Party1 = Object.values(this.AllParties[0])
      this.place1=this.Party1[4]

      this.Party2=this.AllParties[1]
      this.Party2 = Object.values(this.AllParties[1])

      this.Party3=this.AllParties[2]
      this.Party3 = Object.values(this.AllParties[2])

      this.Party4=this.AllParties[3]
      this.Party4 = Object.values(this.AllParties[3])


   
    });

  }

  public getColor(index: number): string {
    if (index < 40) { return "blue" }
    else if (index> 40 && index < 100) { return "green" }
    else { return "orange" }
  }

}

