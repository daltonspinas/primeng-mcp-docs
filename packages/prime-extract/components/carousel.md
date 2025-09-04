# Carousel

Carousel is a content slider featuring various customization options.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { CarouselModule } from 'primeng/carousel';
```

### Basic {#basic}

Carousel requires a collection of items as its value along with a template to render each item.

```html
<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
    <ng-template let-product #item>
        <div class="border border-surface rounded-border m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Circular {#circular}

When autoplayInterval is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling circular property needs to be added which is enabled automatically in auto play mode.

```html
<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Responsive {#responsive}

Carousel supports specific configuration per screen size with the responsiveOptions property that takes an array of objects where each object defines the max-width breakpoint, numVisible for the number of items items per page and numScroll for number of items to scroll. When responsiveOptions is defined, the numScroll and numVisible properties of the Carousel are used as default when there is breakpoint that applies.

```html
<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Vertical {#vertical}

To create a vertical Carousel, orientation needs to be set to vertical along with a verticalViewPortHeight.

```html
<p-carousel [value]="products" [numVisible]="1" [numScroll]="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Accessibility {#accessibility}

Carousel uses region role and since any attribute is passed to the main container element, attributes such as aria-label and aria-roledescription can be used as well. The slides container has aria-live attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay.

### Carousel {#carousel}

Carousel is a content slider featuring various customization options.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Carousel API

API defines helper props, events and others for the PrimeNG Carousel module.

#### Carousel {#api-carousel}

Carousel is a content slider featuring various customization options.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| page | number | null | Index of the first item. |
| numVisible | number | null | Number of items per page. |
| numScroll | number | null | Number of items to scroll. |
| responsiveOptions | CarouselResponsiveOptions[] | null | An array of options for responsive design. |
| orientation | "vertical" | "horizontal" | horizontal | Specifies the layout of the component. |
| verticalViewPortHeight | string | 300px | Height of the viewport in vertical layout. |
| contentClass | string | null | Style class of main content. |
| indicatorsContentClass | string | null | Style class of the indicator items. |
| indicatorsContentStyle | { [klass: string]: any } | null | Inline style of the indicator items. |
| indicatorStyleClass | string | null | Style class of the indicators. |
| indicatorStyle | { [klass: string]: any } | null | Style of the indicators. |
| value | any[] | null | An array of objects to display. |
| circular | boolean | false | Defines if scrolling would be infinite. |
| showIndicators | boolean | true | Whether to display indicator container. |
| showNavigators | boolean | true | Whether to display navigation buttons in container. |
| autoplayInterval | number | 0 | Time in milliseconds to scroll items automatically. |
| styleClass | string | null | Style class of the viewport container. |
| prevButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |
| nextButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onPage | event :  CarouselPageEvent | Callback to invoke after scroll. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Template for carousel items. |
| header |  | Template for the carousel header. |
| footer |  | Template for the carousel footer. |
| previousicon |  | Template for the previous button icon. |
| nexticon |  | Template for the next button icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Carousel Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-carousel | Class name of the root element |
| p-carousel-header | Class name of the header element |
| p-carousel-content-container | Class name of the content container element |
| p-carousel-content | Class name of the content element |
| p-carousel-prev-button | Class name of the previous button element |
| p-carousel-viewport | Class name of the viewport element |
| p-carousel-item-list | Class name of the item list element |
| p-carousel-item-clone | Class name of the item clone element |
| p-carousel-item | Class name of the item element |
| p-carousel-next-button | Class name of the next button element |
| p-carousel-indicator-list | Class name of the indicator list element |
| p-carousel-indicator | Class name of the indicator element |
| p-carousel-indicator-button | Class name of the indicator button element |
| p-carousel-footer | Class name of the footer element |

#### Carousel Design Tokens {#theming-carousel-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| carousel.root.transitionDuration | carousel.transition.duration | --p-carousel-transition-duration | Transition duration of root |
| carousel.content.gap | carousel.content.gap | --p-carousel-content-gap | Gap of content |
| carousel.indicatorList.padding | carousel.indicator.list.padding | --p-carousel-indicator-list-padding | Padding of indicator list |
| carousel.indicatorList.gap | carousel.indicator.list.gap | --p-carousel-indicator-list-gap | Gap of indicator list |
| carousel.indicator.width | carousel.indicator.width | --p-carousel-indicator-width | Width of indicator |
| carousel.indicator.height | carousel.indicator.height | --p-carousel-indicator-height | Height of indicator |
| carousel.indicator.borderRadius | carousel.indicator.border.radius | --p-carousel-indicator-border-radius | Border radius of indicator |
| carousel.indicator.focusRing.width | carousel.indicator.focus.ring.width | --p-carousel-indicator-focus-ring-width | Focus ring width of indicator |
| carousel.indicator.focusRing.style | carousel.indicator.focus.ring.style | --p-carousel-indicator-focus-ring-style | Focus ring style of indicator |
| carousel.indicator.focusRing.color | carousel.indicator.focus.ring.color | --p-carousel-indicator-focus-ring-color | Focus ring color of indicator |
| carousel.indicator.focusRing.offset | carousel.indicator.focus.ring.offset | --p-carousel-indicator-focus-ring-offset | Focus ring offset of indicator |
| carousel.indicator.focusRing.shadow | carousel.indicator.focus.ring.shadow | --p-carousel-indicator-focus-ring-shadow | Focus ring shadow of indicator |
| carousel.indicator.background | carousel.indicator.background | --p-carousel-indicator-background | Background of indicator |
| carousel.indicator.hoverBackground | carousel.indicator.hover.background | --p-carousel-indicator-hover-background | Hover background of indicator |
| carousel.indicator.activeBackground | carousel.indicator.active.background | --p-carousel-indicator-active-background | Active background of indicator |

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

[View Official Documentation](https://primeng.org/carousel)
