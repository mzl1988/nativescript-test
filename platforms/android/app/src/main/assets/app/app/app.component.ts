import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { Color } from "color";
import { screen, device } from "tns-core-modules/platform";
declare let android: any;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    constructor(
    ) { }
    ngOnInit(): void {
        if (app.android && device.sdkVersion >= '21') {
            let window = app.android.startActivity.getWindow();
            // set the status bar to Color.Transparent
            window.setStatusBarColor(new Color("#803d5afe").android);

            let decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
                // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
                | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }

    }
}
