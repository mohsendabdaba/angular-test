import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medecin'
})
export class MedecinPipe implements PipeTransform {

  /**
   * filter AllAgences array by  city && localite 
   * @param AllAgences 
   * @param gouv 
   * @param localite 
   */
  transform(medecins:any,specialite: any): any {
    if (!medecins) {
      return null
    }
    if (!specialite) {
      return medecins.filter((item: any) => {
        return item;
      });
    }
    if (specialite) {
      return medecins.filter((item: { specialite: any; }) => {
        return item.specialite == specialite;
      });
    }
  
  }
}
