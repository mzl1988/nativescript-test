import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { isAndroid } from "platform";
import { Page } from "ui/page";
declare const android: any;

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private routerExtensions: RouterExtensions,
        private itemService: ItemService,
        private route: ActivatedRoute,
        private page: Page
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    onActionBarLoadedLoaded(args) { 
        if (isAndroid) {
            let androidToolbar = this.page.actionBar.nativeView;
            androidToolbar.getNavigationIcon().setColorFilter(android.graphics.Color.parseColor("#ffffff"), (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
        } 
    }
}
