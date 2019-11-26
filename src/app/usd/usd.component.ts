import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'rappi-usd',
  templateUrl: './usd.component.html'
})

export class USDComponent implements OnInit {

  usdValue: number;

  constructor( private currencyService: CurrencyService ) { }

  ngOnInit() {
    this.currencyService.currency.subscribe(
      ({ currency, value }) => {
        if ( currency === 'yen' ) {
          this.usdValue =  Number(value) * 0.0088;
        }
      }
    );
  }

  changeValuePrice( newPrice: any ): void {
    const value = { value: newPrice, currency: 'us' } ;
    this.currencyService.setCurrency(value);
  }

}
