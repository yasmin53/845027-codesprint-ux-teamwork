import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateGiftcardsComponent } from './update-giftcards/update-giftcards.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    PlaceorderComponent,
    GiftcardsComponent,
    HomeComponent,
    UpdateGiftcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
