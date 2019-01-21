import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import * as app from "application";
import { screen, device } from "tns-core-modules/platform";
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
    statusHeight = 0;

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.screenWidth = screen.mainScreen.widthDIPs;
        if (app.android && device.sdkVersion >= '21') {
            let window = app.android.startActivity.getWindow();
            // set the status bar to Color.Transparent
            window.setStatusBarColor(0x000000);
            this.statusHeight = 26;
        }
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
