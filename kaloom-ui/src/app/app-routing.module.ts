import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharadesCreateMenuComponent } from './components/charades-create-menu/charades-create-menu.component';
import { GameGalleryComponent } from './components/game-gallery/game-gallery.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/gallery' },
  { path: 'gallery', component : GameGalleryComponent},
  {path:'Charades/create',component:CharadesCreateMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
