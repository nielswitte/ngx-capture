import { inject, TestBed } from '@angular/core/testing';
import { NgxHtml2canvasModule } from '../ngx-html2canvas.module';
import { NgxHtml2canvasService } from './ngx-html2canvas.service';


describe('NgxHtml2canvasService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxHtml2canvasModule.forRoot()
            ]
        });
    });

    it('should be injected', inject([NgxHtml2canvasService], (service: NgxHtml2canvasService) => {
        expect(service).toBeTruthy();
    }));
});
