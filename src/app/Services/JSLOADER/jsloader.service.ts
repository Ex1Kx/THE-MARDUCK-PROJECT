//Service to load JavaScript files to components //
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JSLOADERService {

  constructor() { }

  Charge(files:string[]){
    for(let file of files){
      let script = document.createElement("script");
      script.src = "./assets/js/" + file + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}