import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
    storeValue: any;
    setValue(da) {
        this.storeValue = da;
    }

    getValue(){
        return this.storeValue;
    }

    
}
