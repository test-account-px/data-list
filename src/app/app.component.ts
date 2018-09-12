import { Component, OnInit, ViewChild } from '@angular/core';
import { VERSION, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  version = VERSION;
 list = 
   
     {'georgeWashington': 1789,
     'johnAdams': 1796,
     'thomasJefferson': 1800,
     'jamesMadison': 1808,
     'jamesMonroe': 1812,
     }
   
 ;
 
}

  
