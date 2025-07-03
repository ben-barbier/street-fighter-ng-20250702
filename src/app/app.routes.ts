import { Routes } from '@angular/router';

import { hasTwoCharactersInArenaGuardGuard } from './pages/arena-page/has-two-characters-in-arena-guard-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/characters-page/characters-page'),
  },
  {
    path: 'arena',
    loadComponent: () => import('./pages/arena-page/arena-page'),
    canActivate: [hasTwoCharactersInArenaGuardGuard],
  },
  {
    path: 'ranking',
    loadComponent: () => import('./pages/ranking-page/ranking-page'),
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./pages/character-page/character-page'),
  },
  { path: 'character', redirectTo: '/character/ryu' },
  { path: '**', redirectTo: '' },
];
