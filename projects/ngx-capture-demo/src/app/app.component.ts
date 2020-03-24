import { Component, OnInit } from '@angular/core';
import { NgxHtml2canvasService } from 'projects/ngx-capture/src/lib/services/ngx-html2canvas.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public result: string;

    public constructor(
        private readonly _ngxHtml2canvasService: NgxHtml2canvasService
    ) {

    }

    public ngOnInit(): void {
        this._ngxHtml2canvasService.onCapture().subscribe((canvas: HTMLCanvasElement) => this.onCapture(canvas));
    }

    public onCapture(canvas: HTMLCanvasElement): void {
        this.result = canvas.toDataURL('image/png');
    }
}
