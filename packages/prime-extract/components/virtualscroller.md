# Scroller

VirtualScroller is a performance-approach to handle huge data efficiently.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ScrollerModule } from 'primeng/scroller';
```

### Basic {#basic}

VirtualScroller requires items as the data to display, itemSize for the dimensions of an item and item template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using scrollWidth, scrollHeight properties directly or with CSS width and height styles.

```html
<p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

### Horizontal {#horizontal}

Setting orientation to horizontal enables scrolling horizontally. In this case, the itemSize should refer to the width of an item.

```html
<p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" orientation="horizontal" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" style="writing-mode: vertical-lr; width: 50px;" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

### Grid {#grid}

Scrolling can be enabled vertically and horizontally when orientation is set as both. In this mode, itemSize should be an array where first value is the height of an item and second is the width.

```html
<p-virtualscroller [items]="items" [itemSize]="[50, 100]" orientation="both" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <div *ngFor="let el of item" style="width: 100px">{{ el }}</div>
        </div>
    </ng-template>
</p-virtualscroller>
```

### Delay {#delay}

Scroll delay is adjusted by using delay property.

```html
<p-virtualscroller [items]="items" [itemSize]="50" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

<p-virtualscroller [items]="items" [itemSize]="50" [delay]="150" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

<p-virtualscroller [items]="items" [itemSize]="50" [delay]="500" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

### Loading {#loading}

Busy state is enabled by adding showLoader property which blocks the UI with a modal by default. Alternatively, loader template can be used to customize items e.g. with Skeleton.

```html
<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

 <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
    <ng-template pTemplate="loader" let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
        </div>
    </ng-template>
</p-virtualscroller>
```

### Lazy {#lazy}

Lazy mode is handy to deal with large datasets where instead of loading the entire data, small chunks of data are loaded on demand by invoking onLazyLoad callback everytime scrolling requires a new chunk. To implement lazy loading, enable lazy attribute, initialize your data as a placeholder with a length and finally implement a method callback using onLazyLoad that actually loads a chunk from a datasource. onLazyLoad gets an event object that contains information about the chunk of data to load such as the index and number of items to load. Notice that a new template called loadingItem is also required to display as a placeholder while the new items are being loaded.

```html
<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" [loading]="lazyLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

### Programmatic {#programmatic}

Scrolling to a specific index can be done with the scrollToIndex function.

```html
<p-button label="Reset" (click)="reset()" />
<p-virtualscroller #sc [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

### Template {#template}

Scroller content is customizable by using ng-template. Valid values are content, item, loader and loadericon

```html
<p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
            <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
            <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
            <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
            <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
            <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
            <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
        </div>
    </ng-template>
    <ng-template #loader let-options="options">
        <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
        </div>
    </ng-template>
</p-virtualscroller>
```

### Accessibility {#accessibility}

VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element.

### Scroller {#scroller}

Scroller is a performance-approach to handle huge data efficiently.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Scroller API

API defines helper props, events and others for the PrimeNG Scroller module.

#### Scroller {#api-scroller}

Scroller is a performance-approach to handle huge data efficiently.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| id | string | null | Unique identifier of the element. |
| style | any | null | Inline style of the component. |
| styleClass | string | null | Style class of the element. |
| tabindex | number | null | Index of the element in tabbing order. |
| items | any[] | null | An array of objects to display. |
| itemSize | number | number[] | null | The height/width of item according to orientation. |
| scrollHeight | string | null | Height of the scroll viewport. |
| scrollWidth | string | null | Width of the scroll viewport. |
| orientation | "vertical" | "horizontal" | "both" | null | The orientation of scrollbar. |
| step | number | null | Used to specify how many items to load in each load method in lazy mode. |
| delay | number | null | Delay in scroll before new data is loaded. |
| resizeDelay | number | null | Delay after window's resize finishes. |
| appendOnly | boolean | null | Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash. |
| inline | boolean | null | Specifies whether the scroller should be displayed inline or not. |
| lazy | boolean | null | Defines if data is loaded and interacted with in lazy manner. |
| disabled | boolean | null | If disabled, the scroller feature is eliminated and the content is displayed directly. |
| loaderDisabled | boolean | null | Used to implement a custom loader instead of using the loader feature in the scroller. |
| columns | any[] | null | Columns to display. |
| showSpacer | boolean | null | Used to implement a custom spacer instead of using the spacer feature in the scroller. |
| showLoader | boolean | null | Defines whether to show loader. |
| numToleratedItems | number | null | Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view. |
| loading | boolean | null | Defines whether the data is loaded. |
| autoSize | boolean | null | Defines whether to dynamically change the height or width of scrollable container. |
| trackBy | Function | null | Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity. |
| options | ScrollerOptions | null | Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onLazyLoad | event :  ScrollerLazyLoadEvent | Callback to invoke in lazy mode to load new data. |
| onScroll | event :  ScrollerScrollEvent | Callback to invoke when scroll position changes. |
| onScrollIndexChange | event :  ScrollerScrollIndexChangeEvent | Callback to invoke when scroll position and item's range in view changes. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Content template of the component. |
| item |  | Item template of the component. |
| loader |  | Loader template of the component. |
| loadericon |  | Loader icon template of the component. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Scroller Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-virtualscroller | Class name of the root element |
| p-virtualscroller-content | Class name of the content element |
| p-virtualscroller-spacer | Class name of the spacer element |
| p-virtualscroller-loader | Class name of the loader element |
| p-virtualscroller-loading-icon | Class name of the loading icon element |

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

[View Official Documentation](https://primeng.org/virtualscroller)
