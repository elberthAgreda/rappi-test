import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'rapi-yen',
  templateUrl: './yen.component.html'
})

export class YenComponent implements OnInit {

  yenValue: number;

  constructor( private currencyService: CurrencyService ) { }

  ngOnInit() {
    this.currencyService.currency.subscribe(
      ({ currency, value }) => {
        if ( currency === 'us' ) {
          this.yenValue = Number(value) * 113;
        }
      }
    );
  }

  changeValuePrice( newPrice: string ): void {
    const value = { value: newPrice, currency: 'yen' } ;
    this.currencyService.setCurrency(value);
  }

}

