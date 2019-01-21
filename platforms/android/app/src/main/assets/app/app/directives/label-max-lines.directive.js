"use strict";
// Usage: <Label maxLines="3" .. />
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var label_1 = require("tns-core-modules/ui/label");
var LabelMaxLinesDirective = /** @class */ (function () {
    function LabelMaxLinesDirective(el) {
        this.el = el;
        this.maxLines = 1;
    }
    Object.defineProperty(LabelMaxLinesDirective.prototype, "nativeView", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LabelMaxLinesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var nativeView = this.nativeView;
        if (nativeView instanceof label_1.Label) {
            nativeView.on(label_1.Label.loadedEvent, function () {
                _this.applyMaxLines();
            });
        }
    };
    LabelMaxLinesDirective.prototype.ngOnChanges = function (changes) {
        if (changes.maxLines) {
            this.applyMaxLines();
        }
    };
    LabelMaxLinesDirective.prototype.applyMaxLines = function () {
        var nativeView = this.nativeView;
        var maxLines = Math.max(Number(this.maxLines) || 0, 1);
        if (nativeView.android) {
            nativeView.android.setMaxLines(maxLines);
            nativeView.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
        }
        else if (nativeView.ios) {
            setTimeout(function () {
                nativeView.ios.numberOfLines = maxLines;
                nativeView.ios.adjustsFontSizeToFitWidth = false;
                nativeView.ios.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
            }, 0);
        }
    };
    __decorate([
        core_1.Input('maxLines'),
        __metadata("design:type", Number)
    ], LabelMaxLinesDirective.prototype, "maxLines", void 0);
    LabelMaxLinesDirective = __decorate([
        core_1.Directive({
            selector: 'Label[maxLines]',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], LabelMaxLinesDirective);
    return LabelMaxLinesDirective;
}());
exports.LabelMaxLinesDirective = LabelMaxLinesDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwtbWF4LWxpbmVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhYmVsLW1heC1saW5lcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFtQzs7QUFFbkMsc0NBQWdGO0FBQ2hGLG1EQUFrRDtBQU9sRDtJQU9FLGdDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQU5SLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFNVixDQUFDO0lBSnRDLHNCQUFXLDhDQUFVO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUlNLHlDQUFRLEdBQWY7UUFBQSxpQkFRQztRQVBDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFbkMsSUFBSSxVQUFVLFlBQVksYUFBSyxFQUFFO1lBQy9CLFVBQVUsQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBWTtRQUM3QixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVPLDhDQUFhLEdBQXJCO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVuQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUN0QixVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDekIsVUFBVSxDQUFDO2dCQUNULFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztnQkFDeEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7Z0JBQ2pELFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7SUF2Q2tCO1FBQWxCLFlBQUssQ0FBQyxVQUFVLENBQUM7OzREQUE2QjtJQURwQyxzQkFBc0I7UUFIbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQzt5Q0FRd0IsaUJBQVU7T0FQdkIsc0JBQXNCLENBeUNsQztJQUFELDZCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNhZ2U6IDxMYWJlbCBtYXhMaW5lcz1cIjNcIiAuLiAvPlxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsJztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkLCBOU0xpbmVCcmVha01vZGU6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnTGFiZWxbbWF4TGluZXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxNYXhMaW5lc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdtYXhMaW5lcycpIHB1YmxpYyBtYXhMaW5lczogbnVtYmVyID0gMTtcblxuICBwdWJsaWMgZ2V0IG5hdGl2ZVZpZXcoKTogTGFiZWwge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVWaWV3ID0gdGhpcy5uYXRpdmVWaWV3O1xuXG4gICAgaWYgKG5hdGl2ZVZpZXcgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgbmF0aXZlVmlldy5vbihMYWJlbC5sb2FkZWRFdmVudCwgKCkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5TWF4TGluZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAoY2hhbmdlcy5tYXhMaW5lcykge1xuICAgICAgdGhpcy5hcHBseU1heExpbmVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseU1heExpbmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZVZpZXcgPSB0aGlzLm5hdGl2ZVZpZXc7XG5cbiAgICBjb25zdCBtYXhMaW5lcyA9IE1hdGgubWF4KE51bWJlcih0aGlzLm1heExpbmVzKSB8fCAwLCAxKTtcblxuICAgIGlmIChuYXRpdmVWaWV3LmFuZHJvaWQpIHtcbiAgICAgIG5hdGl2ZVZpZXcuYW5kcm9pZC5zZXRNYXhMaW5lcyhtYXhMaW5lcyk7XG4gICAgICBuYXRpdmVWaWV3LmFuZHJvaWQuc2V0RWxsaXBzaXplKGFuZHJvaWQudGV4dC5UZXh0VXRpbHMuVHJ1bmNhdGVBdC5FTkQpO1xuICAgIH0gZWxzZSBpZiAobmF0aXZlVmlldy5pb3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBuYXRpdmVWaWV3Lmlvcy5udW1iZXJPZkxpbmVzID0gbWF4TGluZXM7XG4gICAgICAgIG5hdGl2ZVZpZXcuaW9zLmFkanVzdHNGb250U2l6ZVRvRml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgbmF0aXZlVmlldy5pb3MubGluZUJyZWFrTW9kZSA9IE5TTGluZUJyZWFrTW9kZS5CeVRydW5jYXRpbmdUYWlsO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG59XG4iXX0=