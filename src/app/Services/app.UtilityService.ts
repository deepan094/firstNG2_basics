import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
    currentUser: any;
    storeValue: any;
    getLocal:any;

    setValue(da) {
        this.storeValue = da;
    }

    getValue(){
        return this.storeValue;
    }

     isLoggedIn(): boolean {
        try {
            const theUser:any = JSON.parse(localStorage.getItem('currentCredential'));
            if (theUser) {
                this.currentUser = theUser;
            }
        } catch (e) {
            return false;
        }
        
        return !!this.currentUser;
    }
    
    logout(): void {
        this.currentUser = "";
        localStorage.removeItem('currentCredential');
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
