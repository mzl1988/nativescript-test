import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { screen } from "tns-core-modules/platform";

@Component({
    selector: "HeaderBar",
    moduleId: module.id,
    templateUrl: "./header-bar.component.html",
    styleUrls: ["./header-bar.component.scss"]
})
export class HeaderBarComponent implements OnInit {
    @Input() hiddenBack = false;
    @Input() title = 'Title';
    screenWidth: number;

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.screenWidth = screen.mainScreen.widthDIPs;
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
