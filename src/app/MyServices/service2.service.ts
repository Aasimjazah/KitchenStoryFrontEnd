import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service
{

   key = 'navFlag';
constructor()
{
  
}
 saveState(state: any) {
  localStorage.setItem(this.key, JSON.stringify(state));
}

 getState(): any {
  const state = localStorage.getItem(this.key);
  console.log(state);
  return state ;
}


}
