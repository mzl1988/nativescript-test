import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "BottomTabs",
    moduleId: module.id,
    templateUrl: "./bottom-tabs.component.html",
    styleUrls: ["./bottom-tabs.component.scss"]
})
export class BottomTabsComponent implements OnInit {
    @Input() selectTabIndex = 0;
    @Output() selectTabEvent: EventEmitter<number> = new EventEmitter();

    constructor(
    ) { }

    ngOnInit(): void {
        
    }

    onTabItemTap(index: number) {
        this.selectTabIndex = index;
        this.selectTabEvent.emit(index);
    }
}
