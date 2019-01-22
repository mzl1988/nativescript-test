"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color");
var nativescript_feedback_1 = require("nativescript-feedback");
var platform_1 = require("tns-core-modules/platform");
var observable_1 = require("tns-core-modules/data/observable");
var FeedbackComponent = /** @class */ (function (_super) {
    __extends(FeedbackComponent, _super);
    function FeedbackComponent() {
        var _this = _super.call(this) || this;
        _this.title = "Feedback";
        _this.feedback = new nativescript_feedback_1.Feedback();
        return _this;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.prototype.showSuccess = function () {
        this.feedback.success({
            title: "Successfully shown myself!",
            message: "I'm configured to hide after 2.5 seconds.",
            duration: 2500,
            // type: FeedbackType.Success, // no need to specify when using 'success' instead of 'show'
            onTap: function () {
                console.log("showSuccess tapped");
            }
        });
    };
    FeedbackComponent.prototype.showSuccessAltColors = function () {
        this.feedback.show({
            title: "Custom colors :)",
            titleColor: new color_1.Color("black"),
            message: "Custom text colors and background color.",
            messageColor: new color_1.Color("#516a78"),
            duration: 2500,
            type: nativescript_feedback_1.FeedbackType.Success,
            backgroundColor: new color_1.Color("lightskyblue"),
            onTap: function () {
                console.log("showSuccessAltColor tapped");
            }
        });
    };
    FeedbackComponent.prototype.showInfo = function () {
        this.feedback.show({
            title: "Some info for you",
            message: "This is the default Info style.",
            duration: 2000,
            type: nativescript_feedback_1.FeedbackType.Info,
            onTap: function () {
                console.log("showInfo tapped");
            },
            onShow: function (animating) {
                if (animating) {
                    console.log('showInfo animating');
                }
                else {
                    console.log("showInfo shown");
                }
            },
            onHide: function () {
                console.log("showInfo hidden");
            },
        });
    };
    FeedbackComponent.prototype.showWarning = function () {
        this.feedback.show({
            // title: "The warning title",
            message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
            duration: 4000,
            position: nativescript_feedback_1.FeedbackPosition.Top,
            type: nativescript_feedback_1.FeedbackType.Warning,
            onTap: function () {
                console.log("showWarning tapped");
            }
        });
    };
    FeedbackComponent.prototype.showNoIcon = function () {
        this.feedback.show({
            title: "Title only, not even an icon..",
            duration: 3000,
            // type: FeedbackType.Custom,
            onTap: function () {
                console.log("showNoIcon tapped");
            }
        });
    };
    FeedbackComponent.prototype.showError = function () {
        this.feedback.show({
            title: "The error title",
            message: "Not too long a text here. But it could be..",
            duration: 1000,
            type: nativescript_feedback_1.FeedbackType.Error,
            onTap: function () {
                console.log("showError tapped");
            }
        });
    };
    FeedbackComponent.prototype.showErrorBottom = function () {
        this.feedback.show({
            title: "The title",
            titleSize: 18.0,
            message: "A very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
            messageSize: 14.0,
            duration: 5000,
            position: nativescript_feedback_1.FeedbackPosition.Bottom,
            type: nativescript_feedback_1.FeedbackType.Error,
            onTap: function () {
                console.log("showErrorBottom tapped");
            }
        });
    };
    FeedbackComponent.prototype.showCustomFont = function () {
        this.feedback.success({
            title: "With custom font",
            titleSize: 19,
            message: "I'm configured to show with a custom font.",
            messageSize: 14,
            duration: 2500,
            titleFont: platform_1.isIOS ? "Indie Flower" : "IndieFlower.ttf",
            messageFont: platform_1.isIOS ? "Indie Flower" : "IndieFlower.ttf",
            onTap: function () { return console.log("customFont tapped"); }
        });
    };
    FeedbackComponent.prototype.hide = function () {
        this.feedback.hide();
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: "Feedback",
            moduleId: module.id,
            templateUrl: "./feedback.component.html",
            styleUrls: ["./feedback.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}(observable_1.Observable));
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdEQUErQztBQUMvQywrREFBaUY7QUFDakYsc0RBQWtEO0FBQ2xELCtEQUE4RDtBQVE5RDtJQUF1QyxxQ0FBVTtJQUc3QztRQUFBLFlBRUksaUJBQU8sU0FFVjtRQU5ELFdBQUssR0FBRyxVQUFVLENBQUM7UUFLZixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDOztJQUNuQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDbEIsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxPQUFPLEVBQUUsMkNBQTJDO1lBQ3BELFFBQVEsRUFBRSxJQUFJO1lBQ2QsMkZBQTJGO1lBQzNGLEtBQUssRUFBRTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdEMsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsVUFBVSxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixPQUFPLEVBQUUsMENBQTBDO1lBQ25ELFlBQVksRUFBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsb0NBQVksQ0FBQyxPQUFPO1lBQzFCLGVBQWUsRUFBRSxJQUFJLGFBQUssQ0FBQyxjQUFjLENBQUM7WUFDMUMsS0FBSyxFQUFFO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM5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LENBQUMsQ0FBQyxpQkFBaUI7WUFDdkQsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEVBQWhDLENBQWdDO1NBQ2hELENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBL0hRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FnSTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhJRCxDQUF1Qyx1QkFBVSxHQWdJaEQ7QUFoSVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IHsgRmVlZGJhY2ssIEZlZWRiYWNrVHlwZSwgRmVlZGJhY2tQb3NpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmVlZGJhY2tcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRmVlZGJhY2tcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmVlZGJhY2suY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZmVlZGJhY2suY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB0aXRsZSA9IFwiRmVlZGJhY2tcIjtcbiAgICBmZWVkYmFjazogRmVlZGJhY2s7XG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzaG93U3VjY2VzcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZWVkYmFjay5zdWNjZXNzKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NmdWxseSBzaG93biBteXNlbGYhXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkknbSBjb25maWd1cmVkIHRvIGhpZGUgYWZ0ZXIgMi41IHNlY29uZHMuXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjUwMCxcbiAgICAgICAgICAgIC8vIHR5cGU6IEZlZWRiYWNrVHlwZS5TdWNjZXNzLCAvLyBubyBuZWVkIHRvIHNwZWNpZnkgd2hlbiB1c2luZyAnc3VjY2VzcycgaW5zdGVhZCBvZiAnc2hvdydcbiAgICAgICAgICAgIG9uVGFwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93U3VjY2VzcyB0YXBwZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dTdWNjZXNzQWx0Q29sb3JzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZlZWRiYWNrLnNob3coe1xuICAgICAgICAgICAgdGl0bGU6IFwiQ3VzdG9tIGNvbG9ycyA6KVwiLFxuICAgICAgICAgICAgdGl0bGVDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkN1c3RvbSB0ZXh0IGNvbG9ycyBhbmQgYmFja2dyb3VuZCBjb2xvci5cIixcbiAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogbmV3IENvbG9yKFwiIzUxNmE3OFwiKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAwLFxuICAgICAgICAgICAgdHlwZTogRmVlZGJhY2tUeXBlLlN1Y2Nlc3MsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcImxpZ2h0c2t5Ymx1ZVwiKSxcbiAgICAgICAgICAgIG9uVGFwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93U3VjY2Vzc0FsdENvbG9yIHRhcHBlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0luZm8oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2suc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogXCJTb21lIGluZm8gZm9yIHlvdVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGlzIHRoZSBkZWZhdWx0IEluZm8gc3R5bGUuXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5JbmZvLFxuICAgICAgICAgICAgb25UYXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3dJbmZvIHRhcHBlZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNob3c6IChhbmltYXRpbmc/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvd0luZm8gYW5pbWF0aW5nJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93SW5mbyBzaG93blwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IaWRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93SW5mbyBoaWRkZW5cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93V2FybmluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZWVkYmFjay5zaG93KHtcbiAgICAgICAgICAgIC8vIHRpdGxlOiBcIlRoZSB3YXJuaW5nIHRpdGxlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgb25lIGRvZXNuJ3QgaGF2ZSBhIHRpdGxlLCBidXQgYSB2ZXJ5IGxvbmcgbWVzc2FnZSBzbyB0aGlzIGJhYnkgd2lsbCB3cmFwLiBTaG93aW5nIG9mZiBtdWx0aS1saW5lIGZlZWRiYWNrLiBXb29ob28hXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBGZWVkYmFja1Bvc2l0aW9uLlRvcCxcbiAgICAgICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5XYXJuaW5nLFxuICAgICAgICAgICAgb25UYXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3dXYXJuaW5nIHRhcHBlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd05vSWNvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZWVkYmFjay5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpdGxlIG9ubHksIG5vdCBldmVuIGFuIGljb24uLlwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAvLyB0eXBlOiBGZWVkYmFja1R5cGUuQ3VzdG9tLFxuICAgICAgICAgICAgb25UYXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3dOb0ljb24gdGFwcGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2suc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogXCJUaGUgZXJyb3IgdGl0bGVcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm90IHRvbyBsb25nIGEgdGV4dCBoZXJlLiBCdXQgaXQgY291bGQgYmUuLlwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICB0eXBlOiBGZWVkYmFja1R5cGUuRXJyb3IsXG4gICAgICAgICAgICBvblRhcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvd0Vycm9yIHRhcHBlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yQm90dG9tKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZlZWRiYWNrLnNob3coe1xuICAgICAgICAgICAgdGl0bGU6IFwiVGhlIHRpdGxlXCIsXG4gICAgICAgICAgICB0aXRsZVNpemU6IDE4LjAsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkEgdmVyeSBsb25nIG1lc3NhZ2Ugc28gdGhpcyBiYWJ5IHdpbGwgd3JhcC4gU2hvd2luZyBvZmYgbXVsdGktbGluZSBmZWVkYmFjay4gV29vaG9vIVwiLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IDE0LjAsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBGZWVkYmFja1Bvc2l0aW9uLkJvdHRvbSxcbiAgICAgICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5FcnJvcixcbiAgICAgICAgICAgIG9uVGFwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93RXJyb3JCb3R0b20gdGFwcGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93Q3VzdG9tRm9udCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZWVkYmFjay5zdWNjZXNzKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIldpdGggY3VzdG9tIGZvbnRcIixcbiAgICAgICAgICAgIHRpdGxlU2l6ZTogMTksXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkknbSBjb25maWd1cmVkIHRvIHNob3cgd2l0aCBhIGN1c3RvbSBmb250LlwiLFxuICAgICAgICAgICAgbWVzc2FnZVNpemU6IDE0LFxuICAgICAgICAgICAgZHVyYXRpb246IDI1MDAsXG4gICAgICAgICAgICB0aXRsZUZvbnQ6IGlzSU9TID8gXCJJbmRpZSBGbG93ZXJcIiA6IFwiSW5kaWVGbG93ZXIudHRmXCIsXG4gICAgICAgICAgICBtZXNzYWdlRm9udDogaXNJT1MgPyBcIkluZGllIEZsb3dlclwiIDogXCJJbmRpZUZsb3dlci50dGZcIixcbiAgICAgICAgICAgIG9uVGFwOiAoKSA9PiBjb25zb2xlLmxvZyhcImN1c3RvbUZvbnQgdGFwcGVkXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2suaGlkZSgpO1xuICAgIH1cbn1cbiJdfQ==