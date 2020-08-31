import * as html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NGX_HTML2CANVAS_CONFIGURATION_TOKEN } from './tokens/config.injection-token';
import { NgxHtml2canvasConfiguration } from './models/ngx-html2canvas-configuration';
import { NgxHtml2canvasService } from './services/ngx-html2canvas.service';
import { NgxHtml2canvasTriggerDirective } from './directives/ngx-html2canvas-trigger.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgxHtml2canvasTriggerDirective
    ],
    exports: [
        NgxHtml2canvasTriggerDirective
    ]
})
export class NgxHtml2canvasModule {
    public constructor() {
        if (html2canvas === undefined) {
            throw new Error('Failed to load html2canvas, please include html2canvas')
        }
    }

    public static forRoot(config: NgxHtml2canvasConfiguration = NgxHtml2canvasService.DEFAULT_CONFIGURATION): ModuleWithProviders<NgxHtml2canvasModule> {
        return {
            ngModule: NgxHtml2canvasModule,
            providers: [
                NgxHtml2canvasService,
                { provide: NGX_HTML2CANVAS_CONFIGURATION_TOKEN, useValue: config }
            ]
        };
    }
}
