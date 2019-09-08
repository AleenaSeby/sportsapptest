import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent} from './components/add-player/add-player.component';
import { ListPlayersComponent} from './components/list-players/list-players.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-player' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'players-list', component: ListPlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
