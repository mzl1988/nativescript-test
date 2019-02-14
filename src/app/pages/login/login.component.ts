import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../../models";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;


    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
        
    }

    ngOnInit(): void {
    }

    submit() {
        this.processing = true;
        console.log('submit...');
        setTimeout(() => {
            this.routerExtensions.navigate(["home"], { clearHistory: true, transition: { name: 'slide' } })
        }, 2000);

    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
}
