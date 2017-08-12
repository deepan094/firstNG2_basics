import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
    storeValue: any;
    getLocal:any;

    setValue(da) {
        this.storeValue = da;
    }

    getValue(){
        return this.storeValue;
    }

    isValidUser(){
        //localstorg.cu
    }
    
    setLocalStorageValue(lsName, val){
        let storageArray = [];
        storageArray.push(val);
        if(localStorage.getItem(lsName) === null){
            localStorage.setItem(lsName, JSON.stringify(storageArray));
        }
        else{
            var existStorage = JSON.parse(localStorage.getItem(lsName));
            existStorage.push(val);
            localStorage.removeItem(lsName);
            localStorage.setItem(lsName, JSON.stringify(existStorage));
        }
    }

    getLocalStorageValue(lsName){
         this.getLocal = JSON.parse(localStorage.getItem(lsName)) ;
            if( this.getLocal !== null )
                return this.getLocal;
            else
                return null;
    }
}
