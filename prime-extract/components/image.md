# Image

Displays an image with preview and tranformation options.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ImageModule } from 'primeng/image';
```

### Basic {#basic}

Image is used as the native img element and supports all properties that the native element has. For multiple image, see Galleria.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />
```

### Preview {#preview}

Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />
```

### Template {#template}

An eye icon is displayed by default when the image is hovered in preview mode. Use the indicator template for custom content.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" [preview]="true" alt="Image" width="250">
    <ng-template #indicator>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #image>
        <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" width="250" />
    </ng-template>
    <ng-template #preview let-style="style" let-previewCallback="previewCallback">
        <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" [style]="style" (click)="previewCallback()" />
    </ng-template>
</p-image>
```

### Accessibility {#accessibility}

The preview button is a native button element with an aria-label that refers to the aria.zoomImage property of the locale API by default.

### Image {#image}

Displays an image with preview and tranformation options. For multiple image, see Galleria.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Image API

API defines helper props, events and others for the PrimeNG Image module.

#### Image {#api-image}

Displays an image with preview and tranformation options. For multiple image, see Galleria.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| imageClass | string | null | Style class of the image element. |
| imageStyle | { [klass: string]: any } | null | Inline style of the image element. |
| styleClass | string | null | Class of the element. |
| src | string | SafeUrl | null | The source path for the main image. |
| srcSet | string | SafeUrl | null | The srcset definition for the main image. |
| sizes | string | null | The sizes definition for the main image. |
| previewImageSrc | string | SafeUrl | null | The source path for the preview image. |
| previewImageSrcSet | string | SafeUrl | null | The srcset definition for the preview image. |
| previewImageSizes | string | null | The sizes definition for the preview image. |
| alt | string | null | Attribute of the preview image element. |
| width | string | null | Attribute of the image element. |
| height | string | null | Attribute of the image element. |
| loading | "lazy" | "eager" | null | Attribute of the image element. |
| preview | boolean | false | Controls the preview functionality. |
| showTransitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation |
| hideTransitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the hide animation |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  any | Triggered when the preview overlay is shown. |
| onHide | value :  any | Triggered when the preview overlay is hidden. |
| onImageError | event :  Event | This event is triggered if an error occurs while loading an image file. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| indicator |  | Custom template of indicator. |
| rotaterighticon |  | Custom template of rotaterighticon. |
| rotatelefticon |  | Custom template of rotatelefticon. |
| zoomouticon |  | Custom template of zoomouticon. |
| zoominicon |  | Custom template of zoominicon. |
| closeicon |  | Custom template of closeicon. |
| preview |  | Custom template of preview. |
| image |  | Custom template of image. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Image Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-image | Class name of the root element |
| p-image-preview-mask | Class name of the preview mask element |
| p-image-preview-icon | Class name of the preview icon element |
| p-image-mask | Class name of the mask element |
| p-image-toolbar | Class name of the toolbar element |
| p-image-rotate-right-button | Class name of the rotate right button element |
| p-image-rotate-left-button | Class name of the rotate left button element |
| p-image-zoom-out-button | Class name of the zoom out button element |
| p-image-zoom-in-button | Class name of the zoom in button element |
| p-image-close-button | Class name of the close button element |
| p-image-original | Class name of the original element |

#### Image Design Tokens {#theming-image-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| image.root.transitionDuration | image.transition.duration | --p-image-transition-duration | Transition duration of root |
| image.preview.icon.size | image.preview.icon.size | --p-image-preview-icon-size | Icon size of preview |
| image.preview.mask.background | image.preview.mask.background | --p-image-preview-mask-background | Mask background of preview |
| image.preview.mask.color | image.preview.mask.color | --p-image-preview-mask-color | Mask color of preview |
| image.toolbar.position.left | image.toolbar.position.left | --p-image-toolbar-position-left | Position left of toolbar |
| image.toolbar.position.right | image.toolbar.position.right | --p-image-toolbar-position-right | Position right of toolbar |
| image.toolbar.position.top | image.toolbar.position.top | --p-image-toolbar-position-top | Position top of toolbar |
| image.toolbar.position.bottom | image.toolbar.position.bottom | --p-image-toolbar-position-bottom | Position bottom of toolbar |
| image.toolbar.blur | image.toolbar.blur | --p-image-toolbar-blur | Blur of toolbar |
| image.toolbar.background | image.toolbar.background | --p-image-toolbar-background | Background of toolbar |
| image.toolbar.borderColor | image.toolbar.border.color | --p-image-toolbar-border-color | Border color of toolbar |
| image.toolbar.borderWidth | image.toolbar.border.width | --p-image-toolbar-border-width | Border width of toolbar |
| image.toolbar.borderRadius | image.toolbar.border.radius | --p-image-toolbar-border-radius | Border radius of toolbar |
| image.toolbar.padding | image.toolbar.padding | --p-image-toolbar-padding | Padding of toolbar |
| image.toolbar.gap | image.toolbar.gap | --p-image-toolbar-gap | Gap of toolbar |
| image.action.hoverBackground | image.action.hover.background | --p-image-action-hover-background | Hover background of action |
| image.action.color | image.action.color | --p-image-action-color | Color of action |
| image.action.hoverColor | image.action.hover.color | --p-image-action-hover-color | Hover color of action |
| image.action.size | image.action.size | --p-image-action-size | Size of action |
| image.action.iconSize | image.action.icon.size | --p-image-action-icon-size | Icon size of action |
| image.action.borderRadius | image.action.border.radius | --p-image-action-border-radius | Border radius of action |
| image.action.focusRing.width | image.action.focus.ring.width | --p-image-action-focus-ring-width | Focus ring width of action |
| image.action.focusRing.style | image.action.focus.ring.style | --p-image-action-focus-ring-style | Focus ring style of action |
| image.action.focusRing.color | image.action.focus.ring.color | --p-image-action-focus-ring-color | Focus ring color of action |
| image.action.focusRing.offset | image.action.focus.ring.offset | --p-image-action-focus-ring-offset | Focus ring offset of action |
| image.action.focusRing.shadow | image.action.focus.ring.shadow | --p-image-action-focus-ring-shadow | Focus ring shadow of action |

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

[View Official Documentation](https://primeng.org/image)
