import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GlobalService } from "../../services";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements AfterViewInit, OnInit {
    drawerComponent: any;
    title = 'Home';
    hiddenBack = true;
    selectTabIndex = 0;
    items = new Array<any>(
        { id: 0, name: "feedback", router: "/feedback" }
    );

    constructor(
        private globalService: GlobalService
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    openDrawer() {
        this.globalService.rootSideDrawerEvent.emit("openDrawer");
    }

    tabTap(index: number) {
        this.selectTabIndex = index;
    }
}
