import { Injectable } from '@angular/core';
import { UserServicService } from './user-servic.service';

const destnitions = ["italy","london","usa","french","izrael"];

@Injectable({
  providedIn: 'root'
})
export class DestanitionServisService {
private destnitions=destnitions;
  constructor(private user: UserServicService) { 
  
  }

getDestnaition(){
  return this.destnitions
}
addDestnaition(d:string){
  if(this.user.getUser().role==="agent"){
    this.destnitions.push(d);    

  }

}
}
