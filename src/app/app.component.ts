import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { device } from "tns-core-modules/platform";
import { GlobalService } from "./services";
declare let android: any;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    constructor(
        private globalService: GlobalService,
        private _changeDetectionRef: ChangeDetectorRef
    ) {
        this.globalService.rootSideDrawerEvent.subscribe((value: string) => {
            if (value === 'openDrawer') {
                this.openDrawer();
            }
        });
    }
    ngOnInit(): void {
        if (app.android && device.sdkVersion >= '21') {
            let window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x00000000);
            let decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                //| android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
                // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
                | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            );
        }

    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }


    openDrawer() {
        this.drawer.showDrawer();
    }

    onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }
}
