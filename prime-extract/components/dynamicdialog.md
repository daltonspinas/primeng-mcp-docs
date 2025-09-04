# Dynamic Dialog

Dialogs can be created dynamically with any component as the content using a DialogService.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { DynamicDialogModule } from 'primeng/dynamicdialog';
```

### Usage {#usage}

To use dynamic dialog, a reference should be declared as DynamicDialogRef after the DialogService injected into the component.

```typescript
import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@/domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo implements OnDestroy {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
}
```

### Opening a Dialog {#opening-a-dialog}

The open method of the DialogService is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.

```typescript
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, { header: 'Select a Product'});
    }
}
```

### Customization {#customization}

DynamicDialog uses the Dialog component internally, visit dialog for more information about the available props.

```typescript
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class CustomizationDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '50vw',
            modal:true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        });
}
```

### Passing Data {#passing-data}

To pass data to a dynamically loaded component, you can use either the data or inputValues property, depending on your requirements. The data property is ideal for passing generic information that is not directly tied to the component's inputs, while inputValues allows you to set specific input properties on the component in a more structured and type-safe way.

```typescript
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            data: {
                id: '51gF3'
            },
      		inputValues: {
        		selectedProduct: 'Laptop',
        		quantity: 2
      		},
            header: 'Select a Product'
        });
    }
}
```

### Closing a Dialog {#closing-a-dialog}

Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the onClose event at the caller. Here is an example on how to close the dialog from the ProductListDemo by passing a selected product.

```typescript
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@/domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }
}
```

### Example {#example}

Dynamic dialogs require an instance of a DialogService that is responsible for displaying a dialog with a component as its content. Calling open method of DialogService will display dynamic dialog. First parameter of open method is the type of component to load and the second parameter is the configuration of the Dialog such as header, width and more.

```html
<p-toast />
<p-button (click)="show()" icon="pi pi-search" label="Select a Product" />
```

### DynamicDialog-Ref {#dynamicdialog-ref}

### DynamicDialog-Config {#dynamicdialog-config}

### DialogService {#dialogservice}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Dynamic Dialog API

API defines helper props, events and others for the PrimeNG Dynamic Dialog module.

#### DynamicDialog-Ref {#api-dynamicdialog-ref}

#### DynamicDialog-Config {#api-dynamicdialog-config}

#### DialogService {#api-dialogservice}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Dynamic Dialog Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-dialog-mask | Class name of the mask element |
| p-dialog | Class name of the root element |
| p-dialog-header | Class name of the header element |
| p-dialog-title | Class name of the title element |
| p-dialog-header-actions | Class name of the header actions element |
| p-dialog-maximize-button | Class name of the maximize button element |
| p-dialog-close-button | Class name of the close button element |
| p-dialog-content | Class name of the content element |
| p-dialog-footer | Class name of the footer element |

#### Built-in Presets {#theming-built-in-presets}

PrimeNG offers various preset options that allow you to customize the component's styling to match your application's design system. Below you'll find links to the implementation and type definitions for each preset.

| Preset | Implementation | Types |
| --- | --- | --- |
| Aura | Aura | Aura |
| Lara | Lara | Lara |
| Nora | Nora | Nora |
| Material | Material | Material |

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)
- [Theming](#theming)

[View Official Documentation](https://primeng.org/dynamicdialog)
