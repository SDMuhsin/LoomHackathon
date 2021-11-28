import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
  styleUrls: ['./game-gallery.component.css']
})
export class GameGalleryComponent implements OnInit {

  games:string[] = ['Charades','game 2','game 3','game 4']
  gamesPerRow = 3;
  gamesSplitToGrids:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.splitGamesList();
  }

  splitGamesList(){
    for(let i = 0; i < this.games.length; i+= 3){
      let sub = []
      for(let j = 0; j < this.gamesPerRow; j++){
        if(i + j < this.games.length){
          sub.push(this.games[i+j])
        }
      }
      this.gamesSplitToGrids.push(sub)
    }
    console.log(this.gamesSplitToGrids)
  }

  setGameInLink(link:string,game:string){
    return link.replace('game',game)
  }
}
