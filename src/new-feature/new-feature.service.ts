import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NewFeatureService {
    constructor(private http: HttpService) { }

    async getCustomerData() {
        const url = 'http://customer-service/api/v1/customers';
        return lastValueFrom(this.http.get(url).pipe(map(response => response.data)));
    }

    async getMasterData() {
        const url = 'http://masterdata-service/api/v1/masterdata';
        return lastValueFrom(this.http.get(url).pipe(map(response => response.data)));
    }

    async getTransactionData() {
        const url = 'http://transactiondata-service/api/v1/transactions';
        return lastValueFrom(this.http.get(url).pipe(map(response => response.data)));
    }

    async getNewFeatureData() {
        const [customers, masterData, transactions] = await Promise.all([
            this.getCustomerData(),
            this.getMasterData(),
            this.getTransactionData()
        ]);

        return {
            customers,
            masterData,
            transactions
        };
    }
}
