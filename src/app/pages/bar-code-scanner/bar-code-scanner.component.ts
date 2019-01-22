import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: "BarCodeScanner",
    moduleId: module.id,
    templateUrl: "./bar-code-scanner.component.html",
    styleUrls: ["./bar-code-scanner.component.scss"]
})
export class BarCodeScannerComponent implements OnInit {
    title = "bar code scanner";
    scanResult: any;
    constructor(
        private barcodeScanner: BarcodeScanner
    ) {
    }

    ngOnInit(): void {
    }

    public onScanResult(evt: any) {
        this.scanResult = evt;
        // console.log(evt.object);
        console.log(`onScanResult: ${evt.text} (${evt.format})`);
    }

    scanTapped(): void {
        let scan = () => {
            this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                beepOnScan: true,
                reportDuplicates: true,
                preferFrontCamera: false
            })
                .then(result => {
                    this.scanResult = result;
                    console.log(JSON.stringify(result))
                })
                .catch(error => console.log(error));
        };

        this.barcodeScanner.hasCameraPermission()
            .then(granted => granted ? scan() : console.log("Permission denied"))
            .catch(() => {
                this.barcodeScanner.requestCameraPermission()
                    .then(() => scan());
            });
    }
}
