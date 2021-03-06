import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Component1} from '../components/component1/1.component';
import {Component2} from "../components/component2/2.component";
import {GlobalService} from "../services/global.service";
import {MyDirectiveDirective} from "../directives/my.directive";
import {PopoverComponent} from "../components/popover/popover.component";
import {PopoverDirective} from "../directives/popover.directive";

@NgModule({
    bootstrap: [Component1, Component2],
    declarations: [
        Component1,
        Component2,
        PopoverComponent,
        MyDirectiveDirective,
        PopoverDirective
    ],
    entryComponents: [
        PopoverComponent
    ],
    imports: [BrowserModule],
    providers: [
        GlobalService
    ]
})
export class MainModule {}