import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-component',
  templateUrl: './doctor-component.component.html',
  styleUrls: ['./doctor-component.component.css']
})
export class DoctorComponentComponent implements OnInit {
   specialites=['Ophtalmologiste','Pédiatre','radiologue']
   medecins=[
    {"nom":'DR SOPHIE PIERREPONT',"specialite":'Ophtalmologiste',"disponibilite":true},
    {"nom":'DR Alexandra Dupont',"specialite":'Ophtalmologiste',"disponibilite":false},
    {"nom":'Dr Alexandre Paul',"specialite":'radiologue',"disponibilite":true},
    {"nom":'Dr Nadir Madani',"specialite":'Pédiatre',"disponibilite":false}
  ]
  headElements = ['Nom', 'specialite', 'disponibilite'];
  model: any = {};
  open: boolean=false;
  selectedNom:any
  editmode: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  openRendezVous(){
    this.editmode=true;
    this.open=!this.open;
    this.selectedNom=document.getElementById('nom')?.innerHTML
  }
  changeDispo(){
this.medecins.forEach(element => {
    element.disponibilite=false;
  });
  }
}
