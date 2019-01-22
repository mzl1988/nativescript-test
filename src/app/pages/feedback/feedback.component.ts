import { Component, OnInit } from "@angular/core";
import { Color } from "tns-core-modules/color";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { isIOS } from "tns-core-modules/platform";
import { Observable } from "tns-core-modules/data/observable";

@Component({
    selector: "Feedback",
    moduleId: module.id,
    templateUrl: "./feedback.component.html",
    styleUrls: ["./feedback.component.scss"]
})
export class FeedbackComponent extends Observable implements OnInit {
    title = "Feedback";
    feedback: Feedback;
    constructor(
    ) {
        super();
        this.feedback = new Feedback();
    }

    ngOnInit(): void {
    }

    showSuccess(): void {
        this.feedback.success({
            title: "Successfully shown myself!",
            message: "I'm configured to hide after 2.5 seconds.",
            duration: 2500,
            // type: FeedbackType.Success, // no need to specify when using 'success' instead of 'show'
            onTap: () => {
                console.log("showSuccess tapped");
            }
        });
    }

    showSuccessAltColors(): void {
        this.feedback.show({
            title: "Custom colors :)",
            titleColor: new Color("black"),
            message: "Custom text colors and background color.",
            messageColor: new Color("#516a78"),
            duration: 2500,
            type: FeedbackType.Success,
            backgroundColor: new Color("lightskyblue"),
            onTap: () => {
                console.log("showSuccessAltColor tapped");
            }
        });
    }

    showInfo(): void {
        this.feedback.show({
            title: "Some info for you",
            message: "This is the default Info style.",
            duration: 2000,
            type: FeedbackType.Info,
            onTap: () => {
                console.log("showInfo tapped");
            },
            onShow: (animating?: boolean) => {
                if (animating) {
                    console.log('showInfo animating');
                } else {
                    console.log("showInfo shown");
                }
            },
            onHide: () => {
                console.log("showInfo hidden");
            },
        });
    }

    showWarning(): void {
        this.feedback.show({
            // title: "The warning title",
            message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
            duration: 4000,
            position: FeedbackPosition.Top,
            type: FeedbackType.Warning,
            onTap: () => {
                console.log("showWarning tapped");
            }
        });
    }

    showNoIcon(): void {
        this.feedback.show({
            title: "Title only, not even an icon..",
            duration: 3000,
            // type: FeedbackType.Custom,
            onTap: () => {
                console.log("showNoIcon tapped");
            }
        });
    }

    showError(): void {
        this.feedback.show({
            title: "The error title",
            message: "Not too long a text here. But it could be..",
            duration: 1000,
            type: FeedbackType.Error,
            onTap: () => {
                console.log("showError tapped");
            }
        });
    }

    showErrorBottom(): void {
        this.feedback.show({
            title: "The title",
            titleSize: 18.0,
            message: "A very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
            messageSize: 14.0,
            duration: 5000,
            position: FeedbackPosition.Bottom,
            type: FeedbackType.Error,
            onTap: () => {
                console.log("showErrorBottom tapped");
            }
        });
    }

    showCustomFont(): void {
        this.feedback.success({
            title: "With custom font",
            titleSize: 19,
            message: "I'm configured to show with a custom font.",
            messageSize: 14,
            duration: 2500,
            titleFont: isIOS ? "Indie Flower" : "IndieFlower.ttf",
            messageFont: isIOS ? "Indie Flower" : "IndieFlower.ttf",
            onTap: () => console.log("customFont tapped")
        });
    }

    hide(): void {
        this.feedback.hide();
    }
}
