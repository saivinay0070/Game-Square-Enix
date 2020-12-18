import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardsComponent } from './game-cards/game-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { GameDescriptionComponent } from './game-description/game-description.component';
import { GameImageComponent } from './game-image/game-image.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardsComponent,
    GameDescriptionComponent,
    GameImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
