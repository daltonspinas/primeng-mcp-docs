# ScrollPanel

ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ScrollPanelModule } from 'primeng/scrollpanel';
```

### Basic {#basic}

ScrollPanel is defined using dimensions for the scrollable viewport.

```html
<p-scrollpanel [style]="{ width: '100%', height: '150px' }">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>
```

### Custom {#custom}

Scrollbar visuals can be styled for a unified look across different platforms.

```html
<p-scrollpanel [style]="{ width: '100%', height: '200px' }" >
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>
```

### Accessibility {#accessibility}

Scrollbars of the ScrollPanel has a scrollbar role along with the aria-controls attribute that refers to the id of the scrollable content container and the aria-orientation to indicate the orientation of scrolling.

### ScrollPanel {#scrollpanel}

ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ScrollPanel API

API defines helper props, events and others for the PrimeNG ScrollPanel module.

#### ScrollPanel {#api-scrollpanel}

ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Style class of the component. |
| step | number | 5 | Step factor to scroll the content while pressing the arrow keys. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| scrollTop | scrollTop :  number | Scrolls the top location to the given value. |
| refresh |  | Refreshes the position and size of the scrollbar. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Defines template option for content. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ScrollPanel Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-scrollpanel | Class name of the root element |
| p-scrollpanel-content-container | Class name of the content container element |
| p-scrollpanel-content | Class name of the content element |
| p-scrollpanel-bar-x | Class name of the bar x element |
| p-scrollpanel-bar-y | Class name of the bar y element |

#### ScrollPanel Design Tokens {#theming-scrollpanel-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| scrollpanel.root.transitionDuration | scrollpanel.transition.duration | --p-scrollpanel-transition-duration | Transition duration of root |
| scrollpanel.bar.size | scrollpanel.bar.size | --p-scrollpanel-bar-size | Size of bar |
| scrollpanel.bar.borderRadius | scrollpanel.bar.border.radius | --p-scrollpanel-bar-border-radius | Border radius of bar |
| scrollpanel.bar.focusRing.width | scrollpanel.bar.focus.ring.width | --p-scrollpanel-bar-focus-ring-width | Focus ring width of bar |
| scrollpanel.bar.focusRing.style | scrollpanel.bar.focus.ring.style | --p-scrollpanel-bar-focus-ring-style | Focus ring style of bar |
| scrollpanel.bar.focusRing.color | scrollpanel.bar.focus.ring.color | --p-scrollpanel-bar-focus-ring-color | Focus ring color of bar |
| scrollpanel.bar.focusRing.offset | scrollpanel.bar.focus.ring.offset | --p-scrollpanel-bar-focus-ring-offset | Focus ring offset of bar |
| scrollpanel.bar.focusRing.shadow | scrollpanel.bar.focus.ring.shadow | --p-scrollpanel-bar-focus-ring-shadow | Focus ring shadow of bar |
| scrollpanel.bar.background | scrollpanel.bar.background | --p-scrollpanel-bar-background | Background of bar |

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

[View Official Documentation](https://primeng.org/scrollpanel)
