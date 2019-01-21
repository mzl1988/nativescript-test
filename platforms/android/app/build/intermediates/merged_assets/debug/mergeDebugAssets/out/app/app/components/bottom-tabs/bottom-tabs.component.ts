import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "BottomTabs",
    moduleId: module.id,
    templateUrl: "./bottom-tabs.component.html",
    styleUrls: ["./bottom-tabs.component.scss"]
})
export class BottomTabsComponent implements OnInit {
    @Input() selectTabIndex = 0;

    constructor(
    ) { }

    ngOnInit(): void {
        
    }

    onTabItemTap(index: number) {
        this.selectTabIndex = index;
    }
}
