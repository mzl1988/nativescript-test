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

    constructor(
    ) {
    }

    ngOnInit(): void {
    }
}
