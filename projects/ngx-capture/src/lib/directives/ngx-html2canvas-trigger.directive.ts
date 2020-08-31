import {
    Directive,
    EventEmitter,
    HostListener,
    OnDestroy,
    OnInit,
    Output
    } from '@angular/core';
import { NgxHtml2canvasService } from '../services/ngx-html2canvas.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[ngxHtml2canvasTrigger]'
})
export class NgxHtml2canvasTriggerDirective implements OnDestroy, OnInit {
    @Output() public captureCanvas: EventEmitter<HTMLCanvasElement> = new EventEmitter<HTMLCanvasElement>();
    private _onCaptureSubscription: Subscription;

    public constructor(
        private readonly _ngxHtml2canvasService: NgxHtml2canvasService
    ) { }

    @HostListener('click')
    public onClick(): void {
        this._ngxHtml2canvasService.captureElement();
    }


    public ngOnInit(): void {
        this._onCaptureSubscription = this._ngxHtml2canvasService.onCapture().subscribe((canvas) => this.captureCanvas.next(canvas));
    }

    public ngOnDestroy(): void {
        this._onCaptureSubscription.unsubscribe();
    }
}
