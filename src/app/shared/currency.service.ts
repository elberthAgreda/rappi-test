import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class CurrencyService {

    private _currency = new BehaviorSubject<any>({ value: '', currency: '' });
    currency = this._currency.asObservable();

    public setCurrency( currency: any) {
      this._currency.next(currency);
    }

}
