import { Component } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';
import { delay } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dado: number = 0;
  sorteando:boolean = false;

  constructor() {}

  async sortear() {
    for (let i = 0; i < 10; i++) {
      this.sorteando = true;
      let numSorteado = Math.random();
      this.dado = Math.floor(numSorteado * 6 + 1);
      await new Promise(f => setTimeout(f, 200));
      console.log(this.dado);
    }
    this.sorteando = false;
  }
}
