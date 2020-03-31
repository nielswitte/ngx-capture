# ngx-capture
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9+.

## Usage

The `ngx-capture` module needs to be added to your project by using `npm install ngx-capture`

### NgxHtml2canvasModule

in your `app.module.ts` import the `ngx-capture` module by using `NgxHtml2canvasModule.forRoot()`

Example:
```typescript
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
```

the `.forRoot()` method can be extended with configuration properties:

| Property      | Type              | Description                                                       | Required      |
|---------------|-------------------|-------------------------------------------------------------------|---------------|
| element       | `HTMLElement`     | Element to capture, default `document.body`                       | No            |
| element       | `HTMLElement`     | Element to capture, default `document.body`                       | No            |


### NgxHtml2canvasService

You can inject the service in your component, for example:

```typescript
public constructor(
        private readonly _ngxHtml2canvasService: NgxHtml2canvasService
    ) { }
```

Capture the result:

```typescript
this._ngxHtml2canvasService.onCapture().subscribe((canvas: HTMLCanvasElement) => {
    // example: convert captured element to png
    const pngImage = canvas.toDataURL('image/png');

    // ... do other stuff
});
```

Manual trigger the capture (without using the directive ``)

```typescript

// Capture the configured element, default: document.body
this._ngxHtml2canvasService.captureElement();

// Capture specific element, example: <div id="element-id"></div>
const element: HTMLElement = document.getElementById('element-id');
this._ngxHtml2canvasService.captureElement(element);
```


### NgxHtml2canvasTriggerDirective
Simply apply the `ngxHtml2canvasTrigger` to an element to add a click handler which triggers the capture

```html
<button ngxHtml2canvasTrigger>Capture!</button>
```

## Develop
### Build the lib

Run `ng build ngx-capture-lib` to build the project. The build artifacts will be stored in the `dist/ngx-capture-lib` directory.

### Publishing to npm

After building your library with `ng build ngx-capture-lib`, go to the dist folder `cd dist/ngx-capture-lib` and run `npm publish`.

### Running unit tests

Run `ng test ngx-capture-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).
