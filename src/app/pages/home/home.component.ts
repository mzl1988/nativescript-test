import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    title = 'Home';
    hiddenBack = true;
    selectTabIndex = 1;
    items = new Array<any>(
        { id: 1, name: "bar code scanner"}
    );

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

    tabTap(index: number) {
        this.selectTabIndex = index;
    }
}
