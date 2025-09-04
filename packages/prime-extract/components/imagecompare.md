# ImageCompare

Compare two images side by side with a slider.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ImageCompareModule } from 'primeng/imagecompare';
```

### Basic {#basic}

Images are defined using templating with left and right templates. Use the style or class properties to define the size of the container.

```html
<p-imagecompare class="shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>
```

### Responsive {#responsive}

Apply responsive styles to the container element to optimize display per screen size.

```html
<p-imagecompare class="sm:!w-96 shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>
```

### Accessibility {#accessibility}

ImageComponent component uses a native range slider internally. Value to describe the component can be defined using aria-labelledby and aria-label props.

```html
<span id="image_label">Compare Images</span>
<p-imagecompare class="shadow-lg rounded-2xl" aria-labelledby="image-label">
    ...
</p-imagecompare>

<p-imagecompare class="shadow-lg rounded-2xl" aria-label="Compare Images">
    ...
</p-imagecompare>
```

### ImageCompare {#imagecompare}

Compare two images side by side with a slider.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ImageCompare API

API defines helper props, events and others for the PrimeNG ImageCompare module.

#### ImageCompare {#api-imagecompare}

Compare two images side by side with a slider.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| tabindex | number | 0 | Index of the element in tabbing order. |
| ariaLabelledby | string | null | Defines a string value that labels an interactive element. |
| ariaLabel | string | null | Identifier of the underlying input element. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| left |  | Template for the left side. |
| right |  | Template for the right side. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ImageCompare Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-imagecompare | Class name of the root element |
| p-imagecompare-slider | Class name of the slider element |

#### ImageCompare Design Tokens {#theming-imagecompare-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| imagecompare.handle.size | imagecompare.handle.size | --p-imagecompare-handle-size | Size of handle |
| imagecompare.handle.hoverSize | imagecompare.handle.hover.size | --p-imagecompare-handle-hover-size | Hover size of handle |
| imagecompare.handle.background | imagecompare.handle.background | --p-imagecompare-handle-background | Background of handle |
| imagecompare.handle.hoverBackground | imagecompare.handle.hover.background | --p-imagecompare-handle-hover-background | Hover background of handle |
| imagecompare.handle.borderColor | imagecompare.handle.border.color | --p-imagecompare-handle-border-color | Border color of handle |
| imagecompare.handle.hoverBorderColor | imagecompare.handle.hover.border.color | --p-imagecompare-handle-hover-border-color | Hover border color of handle |
| imagecompare.handle.borderWidth | imagecompare.handle.border.width | --p-imagecompare-handle-border-width | Border width of handle |
| imagecompare.handle.borderRadius | imagecompare.handle.border.radius | --p-imagecompare-handle-border-radius | Border radius of handle |
| imagecompare.handle.transitionDuration | imagecompare.handle.transition.duration | --p-imagecompare-handle-transition-duration | Transition duration of handle |
| imagecompare.handle.focusRing.width | imagecompare.handle.focus.ring.width | --p-imagecompare-handle-focus-ring-width | Focus ring width of handle |
| imagecompare.handle.focusRing.style | imagecompare.handle.focus.ring.style | --p-imagecompare-handle-focus-ring-style | Focus ring style of handle |
| imagecompare.handle.focusRing.color | imagecompare.handle.focus.ring.color | --p-imagecompare-handle-focus-ring-color | Focus ring color of handle |
| imagecompare.handle.focusRing.offset | imagecompare.handle.focus.ring.offset | --p-imagecompare-handle-focus-ring-offset | Focus ring offset of handle |
| imagecompare.handle.focusRing.shadow | imagecompare.handle.focus.ring.shadow | --p-imagecompare-handle-focus-ring-shadow | Focus ring shadow of handle |

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

[View Official Documentation](https://primeng.org/imagecompare)
