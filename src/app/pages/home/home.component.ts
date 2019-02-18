import { Component, OnInit, AfterViewInit } from "@angular/core";
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
    hiddenMenu = false;
    selectTabIndex = 0;
    items = new Array<any>(
        { id: 0, name: "feedback", router: "/feedback" }
    );

    constructor(
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    tabTap(index: number) {
        this.selectTabIndex = index;
    }
}
