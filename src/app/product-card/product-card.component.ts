import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardObjectDisplay } from './product-card-data';
import { ProductCardService } from './product-card-service/product-card.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  public listOfCardsData: Observable<Array<CardObjectDisplay>> = of([]);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _productCardService: ProductCardService
  ) {}

  ngOnInit(): void {
        this.listOfCardsData = this._productCardService.getCardsData();
  }

  public redirectToWebSite(): void {
    // this.route.navigate('/blog');
    window.location.href = 'https://www.benyakoub.fr';
    // this.document.location.href = 'https://stackoverflow.com';
  }
}
