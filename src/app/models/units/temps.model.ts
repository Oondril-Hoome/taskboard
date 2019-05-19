export class Temps{
  minuts: number;
  nbJours: number;
  nbHours: number;
  nbMinutes: number;
  nbSeconds: number;
  nbMilliseconds: number;

  constructor(minuts: number){
    this.minuts = minuts;
    this.nbJours = Math.floor(minuts / 1440);
    let reste = minuts - this.nbJours * 1440;

    this.nbHours = Math.floor(reste / 60);
    reste = reste - (this.nbHours * 60);

    this.nbMinutes = reste;
  }

  toString() {
    let str;
    str = this.nbMinutes + 'min';
    if(this.nbHours > 0 ){
      str = this.nbHours + 'h' + str;
    }
    if(this.nbJours > 0){
      str = this.nbJours + 'j' + str;
    }
    return str;
  }
}
