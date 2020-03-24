import html2canvas, { Options } from 'html2canvas';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { NGX_HTML2CANVAS_CONFIGURATION_TOKEN } from '../tokens/config.injection-token';
import { NgxHtml2canvasConfiguration } from '../models/ngx-html2canvas-configuration';
import { Observable, ReplaySubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class NgxHtml2canvasService implements OnDestroy {
    public static DEFAULT_CONFIGURATION: NgxHtml2canvasConfiguration = {
        element: document.body
    };

    private _options: Partial<Options>;
    private _capture$: ReplaySubject<HTMLCanvasElement> = new ReplaySubject<HTMLCanvasElement>(1);

    public constructor(
        @Inject(NGX_HTML2CANVAS_CONFIGURATION_TOKEN) private readonly _configuration?: NgxHtml2canvasConfiguration
    ) { }

    /***
     * [optional] Options of html2canvas
     * See: http://html2canvas.hertzen.com/configuration
     */
    public setHtml2canvasOptions(options: Partial<Options>): void {
        this._options = options;
    }

    /**
     * Captures the configured element
     * Use onCapture() to retrieve the result
     */
    public captureElement(): void {
        html2canvas(this._configuration.element, this._options)
            .then((canvas: HTMLCanvasElement) => this._capture$.next(canvas));
    }

    /**
     * Capture result as observable
     */
    public onCapture(): Observable<HTMLCanvasElement> {
        return this._capture$.asObservable();
    }

    public ngOnDestroy(): void {
        this._capture$.complete();
    }
}
