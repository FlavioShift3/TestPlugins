import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

 
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { CaptureComponent } from "./capture/capture.component";
import { CameraPlus } from '@nstudio/nativescript-camera-plus';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        CaptureComponent
    ],
    providers: [
        BarcodeScanner,
        CameraPlus
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
