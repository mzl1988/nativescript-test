import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    rootSideDrawerEvent: EventEmitter<string>;

    constructor(
    ) {
        this.rootSideDrawerEvent = new EventEmitter();
    }
}
