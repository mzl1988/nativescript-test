"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var BarCodeScannerComponent = /** @class */ (function () {
    function BarCodeScannerComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.title = "bar code scanner";
    }
    BarCodeScannerComponent.prototype.ngOnInit = function () {
    };
    BarCodeScannerComponent.prototype.onScanResult = function (evt) {
        this.scanResult = evt;
        // console.log(evt.object);
        console.log("onScanResult: " + evt.text + " (" + evt.format + ")");
    };
    BarCodeScannerComponent.prototype.scanTapped = function () {
        var _this = this;
        var scan = function () {
            _this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                beepOnScan: true,
                reportDuplicates: true,
                preferFrontCamera: false
            })
                .then(function (result) {
                _this.scanResult = result;
                console.log(JSON.stringify(result));
            })
                .catch(function (error) { return console.log(error); });
        };
        this.barcodeScanner.hasCameraPermission()
            .then(function (granted) { return granted ? scan() : console.log("Permission denied"); })
            .catch(function () {
            _this.barcodeScanner.requestCameraPermission()
                .then(function () { return scan(); });
        });
    };
    BarCodeScannerComponent = __decorate([
        core_1.Component({
            selector: "BarCodeScanner",
            moduleId: module.id,
            templateUrl: "./bar-code-scanner.component.html",
            styleUrls: ["./bar-code-scanner.component.scss"]
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], BarCodeScannerComponent);
    return BarCodeScannerComponent;
}());
exports.BarCodeScannerComponent = BarCodeScannerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNvZGUtc2Nhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXItY29kZS1zY2FubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyRUFBNkQ7QUFRN0Q7SUFHSSxpQ0FDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIMUMsVUFBSyxHQUFHLGtCQUFrQixDQUFDO0lBSzNCLENBQUM7SUFFRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLDhDQUFZLEdBQW5CLFVBQW9CLEdBQVE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsMkJBQTJCO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLEdBQUcsQ0FBQyxJQUFJLFVBQUssR0FBRyxDQUFDLE1BQU0sTUFBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxJQUFJLEdBQUc7WUFDUCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDckIsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGlCQUFpQixFQUFFLEtBQUs7YUFDM0IsQ0FBQztpQkFDRyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNSLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7YUFDcEMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO2FBQ3BFLEtBQUssQ0FBQztZQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLEVBQUU7aUJBQ3hDLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFFLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdENRLHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRCxDQUFDO3lDQUs4Qiw0Q0FBYztPQUpqQyx1QkFBdUIsQ0F1Q25DO0lBQUQsOEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkJhckNvZGVTY2FubmVyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jhci1jb2RlLXNjYW5uZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYmFyLWNvZGUtc2Nhbm5lci5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJDb2RlU2Nhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGl0bGUgPSBcImJhciBjb2RlIHNjYW5uZXJcIjtcbiAgICBzY2FuUmVzdWx0OiBhbnk7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2NhblJlc3VsdChldnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNjYW5SZXN1bHQgPSBldnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2dC5vYmplY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgb25TY2FuUmVzdWx0OiAke2V2dC50ZXh0fSAoJHtldnQuZm9ybWF0fSlgKTtcbiAgICB9XG5cbiAgICBzY2FuVGFwcGVkKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2NhbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcbiAgICAgICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlcG9ydER1cGxpY2F0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhblJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuaGFzQ2FtZXJhUGVybWlzc2lvbigpXG4gICAgICAgICAgICAudGhlbihncmFudGVkID0+IGdyYW50ZWQgPyBzY2FuKCkgOiBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZGVuaWVkXCIpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2NhbigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==