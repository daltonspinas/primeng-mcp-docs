# ScrollTop

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ScrollTopModule } from 'primeng/scrolltop';
```

### Basic {#basic}

ScrollTop listens window scroll by default.

```html
<p-scrolltop />
```

### Target Element {#target-element}

Setting the target property to parent binds ScrollTop to its parent element that has scrolling content.

```html
<p-scrolltop target="parent" [threshold]="100" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }" />
```

### Accessibility {#accessibility}

ScrollTop uses a button element with an aria-label that refers to the aria.scrollTop property of the locale API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly.

### ScrollTop {#scrolltop}

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ScrollTop API

API defines helper props, events and others for the PrimeNG ScrollTop module.

#### ScrollTop {#api-scrolltop}

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Class of the element. |
| style | { [klass: string]: any } | null | Inline style of the element. |
| target | "window" | "parent" | window | Target of the ScrollTop. |
| threshold | number | 400 | Defines the threshold value of the vertical scroll position of the target to toggle the visibility. |
| icon | string | null | Name of the icon or JSX.Element for icon. |
| behavior | "auto" | "smooth" | smooth | Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump. |
| showTransitionOptions | string | .15s | A string value used to determine the display transition options. |
| hideTransitionOptions | string | .15s | A string value used to determine the hiding transition options. |
| buttonAriaLabel | string | null | Establishes a string value that labels the scroll-top button. |
| buttonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| icon |  | Template of the icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ScrollTop Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-scrolltop | Class name of the root element |
| p-scrolltop-icon | Class name of the icon element |

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

[View Official Documentation](https://primeng.org/scrolltop)
