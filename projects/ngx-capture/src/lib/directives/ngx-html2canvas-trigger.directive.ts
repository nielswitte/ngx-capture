import { Directive, HostListener, Input } from '@angular/core';
import { NgxHtml2canvasService } from '../services/ngx-html2canvas.service';

@Directive({
    selector: '[ngxHtml2canvasTrigger]'
})
export class NgxHtml2canvasTriggerDirective {
    public constructor(
        private readonly _ngxHtml2canvasService: NgxHtml2canvasService
    ) { }

    @HostListener('click')
    public onClick(): void {
        this._ngxHtml2canvasService.captureElement();
    }
}
