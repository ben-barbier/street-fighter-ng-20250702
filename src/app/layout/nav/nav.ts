import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ArenaStatus } from './arena-status/arena-status';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  imports: [
    AsyncPipe,
    MatSidenav,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatSidenavContent,
    MatIconButton,
    MatIcon,
    MatSidenavContainer,
    RouterLink,
    ArenaStatus,
    RouterLinkActive,
  ],
})
export class Nav {
  #breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
}
