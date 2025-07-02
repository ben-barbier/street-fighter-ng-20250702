import { Routes } from '@angular/router';

import { ArenaPage } from './pages/arena-page/arena-page';
import { CharacterPage } from './pages/character-page/character-page';
import { CharactersPage } from './pages/characters-page/characters-page';
import { RankingPage } from './pages/ranking-page/ranking-page';

export const routes: Routes = [
  { path: '', component: CharactersPage },
  { path: 'arena', component: ArenaPage },
  { path: 'ranking', component: RankingPage },
  { path: 'character', component: CharacterPage },
];
