import { Component, inject, OnInit } from '@angular/core';

import { RankingPageStore } from './ranking-page-store';

@Component({
  selector: 'app-ranking-page',
  imports: [],
  providers: [RankingPageStore],
  templateUrl: './ranking-page.html',
  styleUrl: './ranking-page.scss',
})
export default class RankingPage implements OnInit {
  #store = inject(RankingPageStore);

  rank = this.#store.rank;

  ngOnInit(): void {
    this.#store.loadRanking();
  }
}
