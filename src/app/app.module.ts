import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardService } from './product-card/product-card-service/product-card.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, ShoppingCardComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [ProductCardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
