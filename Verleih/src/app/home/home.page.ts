import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  equipment= [
    {ski:'Atomic Bent Chetler', available:'y', type:'freeride', binding:'Atomic Shift'},
    {ski:'Armada Bubba', available:'n', type:'freeride', binding:'Marker Baron'},
    {ski:'Atomic Backland',available:'y', type:'backcountry', binding:'Atomic Shift'}
  ];

  onlyRent = true;

  constructor() {}

}
