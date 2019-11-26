import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyService } from './shared/currency.service';
import { AppComponent } from './app.component';
import { YenComponent } from './yen/yen.component';
import { USDComponent } from './usd/usd.component';
import { OnlyNumber } from './shared/onlyNumber.directive';

@NgModule({
  declarations: [
    AppComponent,
    YenComponent,
    USDComponent,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
