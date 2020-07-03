import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export abstract class AbstractService implements OnDestroy {

  constructor(readonly name: string) { }

  ngOnDestroy() {
    console.log('cleaning up...');
  }
}
