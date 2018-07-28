import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Image } from "ui/image";
import * as camera from "nativescript-camera";
import { EventData } from "data/observable";

import { BarcodeScanner } from 'nativescript-barcodescanner';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public bcRead: string="barcode show here";

    constructor(
        private barcodeScanner: BarcodeScanner  
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        
    }

    onTap(args: EventData){
        if (camera.requestPermissions()){
            camera.takePicture().
              then((imageAsset) => {
              console.log("Result is an image asset instance");
              var image = new Image();
              image.src = imageAsset;
            }).catch((err) => {
              console.log("Error -> " + err.message);
            });
        }
    }

    onScan(args: EventData): void {

        let scan = () => {
            this.barcodeScanner.scan({
                formats:"QR_CODE, EAN_13",
                beepOnScan:true,
                reportDuplicates:true,
                preferFrontCamera:false
            }).then(result=> {
                console.log(result);
                this.bcRead=result.text; 
            }).catch(error => {
                console.log(error);
                this.bcRead=error;
            }); 
        }

        this.barcodeScanner.hasCameraPermission().then(
            (granted) =>{
                scan();
            }
        ).catch(()=>{
            this.barcodeScanner.requestCameraPermission().then(
                () =>{
                  scan();
                }
            );
        });       
  
    }
    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    
}
