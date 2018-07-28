import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { EventData } from "data/observable";

import { CameraPlus } from "@nstudio/nativescript-camera-plus";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("CameraPlus", () => <any>CameraPlus);

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    
}
