import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxHtml2canvasService } from '../services/ngx-html2canvas.service';
import { NgxHtml2canvasTriggerDirective } from './ngx-html2canvas-trigger.directive';

// * Host component:
@Component({
    template: `<button ngxHtml2canvasTrigger>Capture</button>`
})
class HostComponent { }

describe('Directive: NgxHtml2canvasTrigger', () => {
    let ngxHtml2canvasService: NgxHtml2canvasService;
    let component: HostComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
        // Create a fake NgxHtml2canvasService object with a `captureElement()` spy
        ngxHtml2canvasService = jasmine.createSpyObj('NgxHtml2canvasService', ['captureElement']);

        TestBed.configureTestingModule({
            declarations: [
                HostComponent,
                NgxHtml2canvasTriggerDirective
            ],
            imports: [
                CommonModule
            ],
            providers: [
                { provide: NgxHtml2canvasService, useValue: ngxHtml2canvasService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create an instance', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should trigger capture on click', () => {
        const el = element.querySelector('button');

        el.click();
        expect(ngxHtml2canvasService.captureElement).toHaveBeenCalled();
    });
});
