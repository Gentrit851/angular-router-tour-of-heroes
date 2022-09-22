import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisCenterService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(CRISES);
  }


getCrisis(id: number | string) {
  return this.getCrises().pipe(
    // (+) before `id` turns the string into a number
    map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)!)
  );
}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/