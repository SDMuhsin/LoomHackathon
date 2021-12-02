import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charades-create-menu',
  templateUrl: './charades-create-menu.component.html',
  styleUrls: ['./charades-create-menu.component.css']
})
export class CharadesCreateMenuComponent implements OnInit {

  gameName:string = "";
  gameMaxPlayers:number = 0;
  gameMaxRounds:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
