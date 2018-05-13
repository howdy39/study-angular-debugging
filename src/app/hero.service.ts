import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
