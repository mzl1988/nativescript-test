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

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.screenWidth = screen.mainScreen.widthDIPs;
        if (app.android && device.sdkVersion >= '21') {
            var window = app.android.startActivity.getWindow();
            // set the status bar to Color.Transparent
            window.setStatusBarColor(0x000000);
     
            // var decorView = window.getDecorView();
            // decorView.setSystemUiVisibility(
            //     View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            //     | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            //     | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            //     // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
            //     // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
            //     | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
     
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
