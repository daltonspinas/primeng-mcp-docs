# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { BreadcrumbModule } from 'primeng/breadcrumb';
```

### Basic {#basic}

Breadcrumb provides contextual information about page hierarchy.

```html
<p-breadcrumb [model]="items" [home]="home" />
```

### Template {#template}

Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.

```html
<p-breadcrumb [model]="items" [home]="home">
    <ng-template #item let-item>
        <a class="cursor-pointer" [routerLink]="item.url">
            <i [class]="item.icon"></i>
        </a>
    </ng-template>
    <ng-template #separator> / </ng-template>
</p-breadcrumb>
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-breadcrumb [home]="home" [model]="items" />
```

### Accessibility {#accessibility}

Breadcrumb uses the nav element and since any attribute is passed to the root implicitly aria-labelledby or aria-label can be used to describe the component. Inside an ordered list is used where the list item separators have aria-hidden to be able to ignored by the screen readers. If the last link represents the current route, aria-current is added with "page" as the value.

### Breadcrumb {#breadcrumb}

Breadcrumb provides contextual information about page hierarchy.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Breadcrumb API

API defines helper props, events and others for the PrimeNG Breadcrumb module.

#### Breadcrumb {#api-breadcrumb}

Breadcrumb provides contextual information about page hierarchy.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| home | MenuItem | null | MenuItem configuration for the home icon. |
| homeAriaLabel | string | null | Defines a string that labels the home icon for accessibility. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onItemClick | event :  BreadcrumbItemClickEvent | Fired when an item is selected. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Defines template option for item. |
| separator |  | Defines template option for separator. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Breadcrumb Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-breadcrumb | Class name of the root element |
| p-breadcrumb-list | Class name of the list element |
| p-breadcrumb-home-item | Class name of the home item element |
| p-breadcrumb-separator | Class name of the separator element |
| p-breadcrumb-item | Class name of the item element |
| p-breadcrumb-item-link | Class name of the item link element |
| p-breadcrumb-item-icon | Class name of the item icon element |
| p-breadcrumb-item-label | Class name of the item label element |

#### Breadcrumb Design Tokens {#theming-breadcrumb-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| breadcrumb.root.padding | breadcrumb.padding | --p-breadcrumb-padding | Padding of root |
| breadcrumb.root.background | breadcrumb.background | --p-breadcrumb-background | Background of root |
| breadcrumb.root.gap | breadcrumb.gap | --p-breadcrumb-gap | Gap of root |
| breadcrumb.root.transitionDuration | breadcrumb.transition.duration | --p-breadcrumb-transition-duration | Transition duration of root |
| breadcrumb.item.color | breadcrumb.item.color | --p-breadcrumb-item-color | Color of item |
| breadcrumb.item.hoverColor | breadcrumb.item.hover.color | --p-breadcrumb-item-hover-color | Hover color of item |
| breadcrumb.item.borderRadius | breadcrumb.item.border.radius | --p-breadcrumb-item-border-radius | Border radius of item |
| breadcrumb.item.gap | breadcrumb.item.gap | --p-breadcrumb-item-gap | Gap of item |
| breadcrumb.item.icon.color | breadcrumb.item.icon.color | --p-breadcrumb-item-icon-color | Icon color of item |
| breadcrumb.item.icon.hoverColor | breadcrumb.item.icon.hover.color | --p-breadcrumb-item-icon-hover-color | Icon hover color of item |
| breadcrumb.item.focusRing.width | breadcrumb.item.focus.ring.width | --p-breadcrumb-item-focus-ring-width | Focus ring width of item |
| breadcrumb.item.focusRing.style | breadcrumb.item.focus.ring.style | --p-breadcrumb-item-focus-ring-style | Focus ring style of item |
| breadcrumb.item.focusRing.color | breadcrumb.item.focus.ring.color | --p-breadcrumb-item-focus-ring-color | Focus ring color of item |
| breadcrumb.item.focusRing.offset | breadcrumb.item.focus.ring.offset | --p-breadcrumb-item-focus-ring-offset | Focus ring offset of item |
| breadcrumb.item.focusRing.shadow | breadcrumb.item.focus.ring.shadow | --p-breadcrumb-item-focus-ring-shadow | Focus ring shadow of item |
| breadcrumb.separator.color | breadcrumb.separator.color | --p-breadcrumb-separator-color | Color of separator |

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

[View Official Documentation](https://primeng.org/breadcrumb)
