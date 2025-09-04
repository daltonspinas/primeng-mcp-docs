# Galleria

Galleria is an advanced content gallery component.

## Table of Contents

- [Features](#features)
- [API](#api)

## Features {#features}

### Import {#import}

```typescript
import { GalleriaModule } from 'primeng/galleria';
```

### Basic {#basic}

Galleria requires a value as a collection of images, item template for the higher resolution image and thumbnail template to display as a thumbnail.

```html
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width:100%" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" />
    </ng-template>
</p-galleria>
```

### Controlled {#controlled}

Galleria can be controlled programmatically using the activeIndex property.

```html
<div class="mb-4">
    <p-button type="button" icon="pi pi-minus" (click)="prev()" />
    <p-button type="button" icon="pi pi-plus" (click)="next()" severity="secondary" styleClass="ml-2" />
</div>
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" [(activeIndex)]="activeIndex">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" />
    </ng-template>
</p-galleria>
```

### Indicator {#indicator}

Indicators are displayed at the bottom by enabling showIndicators property and interacted with the click event by default.

```html
<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [changeItemOnIndicatorHover]="true" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [indicatorsPosition]="position" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="showIndicatorsOnItem" [containerStyle]="{ 'max-width': '640px', 'margin-top': '2em' }" >
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [containerStyle]="{ 'max-width': '100%', 'margin-top': '2em' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="indicator" let-index>
        <span style="color: #ffffff; cursor: pointer">
            {{ index + 1 }}
        </span>
    </ng-template>
</p-galleria>
```

### Thumbnail {#thumbnail}

Galleria can be controlled programmatically using the activeIndex property.

```html
<div class="flex flex-wrap gap-4 mb-8">
    <div *ngFor="let option of positionOptions" class="flex items-center">
        <p-radiobutton [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label" />
        <label [for]="option.label" class="ml-2"> {{ option.label }} </label>
    </div>
</div>
<p-galleria [(value)]="images" [thumbnailsPosition]="position" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" >
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid gap-4 justify-center">
            <img [src]="item.thumbnailImageSrc" style="width: 100%; display: block" />
        </div>
    </ng-template>
</p-galleria>
```

### Responsive {#responsive}

Galleria responsiveness is defined with the responsiveOptions property.

```html
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="7" [circular]="true">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

### Full Screen {#full-screen}

Full screen mode is enabled by adding fullScreen property.

```html
<p-galleria [(value)]="images" [(visible)]="displayBasic"[responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '50%' }" [numVisible]="9" [circular]="true" [fullScreen]="true" [showItemNavigators]="true">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [(visible)]="displayBasic" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '850px' }" [numVisible]="7" [circular]="true" [fullScreen]="true" [showItemNavigators]="true" [showThumbnails]="false">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [(visible)]="displayCustom" [(activeIndex)]="activeIndex" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '850px' }" [numVisible]="7" [circular]="true" [fullScreen]="true" [showItemNavigators]="true" [showThumbnails]="false">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

### Navigator {#navigator}

Add showItemNavigators to display navigator elements and the left and right side.

```html
<p-galleria [(value)]="images" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [circular]="true" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [numVisible]="5" [circular]="true" [showItemNavigators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [showIndicators]="false" [showItemNavigatorsOnHover]="true" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>
```

```html
<p-galleria [(value)]="images" [showItemNavigators]="true" [showThumbnails]="false" [showIndicators]="true" [showItemNavigatorsOnHover]="true" [circular]="true"[responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>
```

### AutoPlay {#autoplay}

A slideshow implementation is defined by adding circular and autoPlay properties.

```html
<p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block" />
    </ng-template>
</p-galleria>
```

### Caption {#caption}

Description of an image is specified with the caption template.

```html
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
    <ng-template #caption let-item>
        <div class="text-xl mb-2 font-bold">{{ item.title }}</div>
        <p class="text-white">{{ item.alt }}</p>
    </ng-template>
</p-galleria>
```

### Advanced {#advanced}

Galleria can be extended further to implement complex requirements.

```html
<p-galleria #galleria [(value)]="images" [(activeIndex)]="activeIndex" [numVisible]="5" [showThumbnails]="showThumbnails" [showItemNavigators]="true" [showItemNavigatorsOnHover]="true"
    [circular]="true" [autoPlay]="isAutoPlay" [transitionInterval]="3000" [containerStyle]="{ 'max-width': '640px' }" [containerClass]="galleriaClass()"
>
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" [ngStyle]="{ width: !fullscreen ? '100%' : '', display: !fullscreen ? 'block' : '' }" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <div class="grid gap-4 justify-center">
            <img [src]="item.thumbnailImageSrc" style="display: block" />
        </div>
    </ng-template>
    <ng-template #footer let-item>
        <div class="flex items-stretch bg-surface-950 text-white h-10">
            <button
                type="button"
                pButton
                icon="pi pi-th-large"
                (click)="onThumbnailButtonClick()"
                class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"
            ></button>
            <button
                type="button"
                pButton
                [icon]="slideButtonIcon()"
                (click)="toggleAutoSlide()"
                class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"
            ></button>
            <span *ngIf="images" class="flex items-center gap-4 ml-3">
                <span class="text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="font-bold text-sm">{{ images[activeIndex].title }}</span>
                <span class="text-sm">{{ images[activeIndex].alt }}</span>
            </span>
            <button
                type="button"
                pButton
                [icon]="fullScreenIcon()"
                (click)="toggleFullScreen()"
                class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3 ml-auto"
            ></button>
        </div>
    </ng-template>
</p-galleria>
```

### Accessibility {#accessibility}

Galleria uses region role and since any attribute is passed to the main container element, attributes such as aria-label and aria-roledescription can be used as well. The slides container has aria-live attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay.

### Galleria {#galleria}

Galleria is an advanced content gallery component.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Galleria API

API defines helper props, events and others for the PrimeNG Galleria module.

#### Galleria {#api-galleria}

Galleria is an advanced content gallery component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| activeIndex | number | null | Index of the first item. |
| fullScreen | boolean | false | Whether to display the component on fullscreen. |
| id | string | null | Unique identifier of the element. |
| value | any[] | null | An array of objects to display. |
| numVisible | number | 3 | Number of items per page. |
| responsiveOptions | GalleriaResponsiveOptions[] | null | An array of options for responsive design. |
| showItemNavigators | boolean | false | Whether to display navigation buttons in item section. |
| showThumbnailNavigators | boolean | true | Whether to display navigation buttons in thumbnail container. |
| showItemNavigatorsOnHover | boolean | false | Whether to display navigation buttons on item hover. |
| changeItemOnIndicatorHover | boolean | false | When enabled, item is changed on indicator hover. |
| circular | boolean | false | Defines if scrolling would be infinite. |
| autoPlay | boolean | false | Items are displayed with a slideshow in autoPlay mode. |
| shouldStopAutoplayByClick | boolean | true | When enabled, autorun should stop by click. |
| transitionInterval | number | 4000 | Time in milliseconds to scroll items. |
| showThumbnails | boolean | true | Whether to display thumbnail container. |
| thumbnailsPosition | "right" | "left" | "top" | "bottom" | bottom | Position of thumbnails. |
| verticalThumbnailViewPortHeight | string | 300px | Height of the viewport in vertical thumbnail. |
| showIndicators | boolean | false | Whether to display indicator container. |
| showIndicatorsOnItem | boolean | false | When enabled, indicator container is displayed on item container. |
| indicatorsPosition | "right" | "left" | "top" | "bottom" | bottom | Position of indicators. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| maskClass | string | null | Style class of the mask on fullscreen mode. |
| containerClass | string | null | Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used. |
| containerStyle | { [klass: string]: any } | null | Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used. |
| showTransitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the hide animation. |
| visible | boolean | null | Specifies the visibility of the mask on fullscreen mode. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| activeIndexChange | value :  number | Callback to invoke on active index change. |
| visibleChange | value :  boolean | Callback to invoke on visiblity change. |

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)

[View Official Documentation](https://primeng.org/galleria)
