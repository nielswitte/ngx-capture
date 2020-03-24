import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxHtml2canvasModule } from 'projects/ngx-capture/src/lib/ngx-html2canvas.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxHtml2canvasModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
