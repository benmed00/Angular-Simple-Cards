import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardObjectDisplay, listOfCardsData } from '../product-card-data';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  constructor() { }

  public getCardsData(): Observable<Array<CardObjectDisplay>>{
    return of(listOfCardsData);
  }
}
