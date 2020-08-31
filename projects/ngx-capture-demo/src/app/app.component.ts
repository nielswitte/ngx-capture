import { Component, OnInit } from '@angular/core';
import { NgxHtml2canvasService } from 'ngx-capture';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public resultFromService: string;
    public resultFromDirective: string;

    public constructor(
        private readonly _ngxHtml2canvasService: NgxHtml2canvasService
    ) {

    }

    public ngOnInit(): void {
        this._ngxHtml2canvasService.onCapture().subscribe((canvas: HTMLCanvasElement) => this.onCaptureFromService(canvas));
    }

    public onCaptureFromService(canvas: HTMLCanvasElement): void {
        this.resultFromService = canvas.toDataURL('image/png');
    }

    public onCaptureFromDirective(canvas: HTMLCanvasElement): void {
        this.resultFromDirective = canvas.toDataURL('image/png');
    }
}
