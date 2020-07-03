import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable({ providedIn: 'root' })
export class ConcreteService extends AbstractService {

  constructor() {
    super('ConcreteService');
  }
}
