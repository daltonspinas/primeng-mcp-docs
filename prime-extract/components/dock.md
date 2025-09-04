# Dock

Dock is a navigation component consisting of menuitems.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { DockModule } from 'primeng/dock';
```

### Basic {#basic}

Dock requires a collection of menuitems as its model. Default location is bottom and other sides are also available when defined with the position property. Content of the dock component is defined by item template.

```html
<p-dock [model]="items" [position]="position">
    <ng-template #item let-item>
        <img [pTooltip]="item.label" tooltipPosition="top" [src]="item.icon" [alt]="item.label" width="100%" />
    </ng-template>
</p-dock>
```

### Advanced {#advanced}

A mock desktop UI implemented with various components in addition to Dock.

```html
<p-menubar [model]="menubarItems">
    <ng-template #start>
        <i class="pi pi-apple px-2"></i>
    </ng-template>
    <ng-template #end>
        <i class="pi pi-video px-2"></i>
        <i class="pi pi-wifi px-2"></i>
        <i class="pi pi-volume-up px-2"></i>
        <span class="px-2">Fri 13:07</span>
        <i class="pi pi-search px-2"></i>
        <i class="pi pi-bars px-2"></i>
    </ng-template>
</p-menubar>
<div class="dock-window">
    <p-dock [model]="dockItems" position="bottom">
        <ng-template #item let-item>
            <a [pTooltip]="item.label" tooltipPosition="top" class="p-dock-item-link">
                <img [alt]="item.label" [src]="item.icon" style="width: 100%" />
            </a>
        </ng-template>
    </p-dock>

    <p-toast position="top-center" key="tc" />

    <p-dialog
        [(visible)]="displayFinder"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw', height: '18rem' }"
        [draggable]="false"
        [resizable]="false"
        header="Finder"
    >
        <p-tree [value]="nodes" />
    </p-dialog>

    <p-dialog
        [maximizable]="true"
        [(visible)]="displayTerminal"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw' }"
        [draggable]="false"
        [resizable]="false"
        header="Terminal"
    >
        <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $" />
    </p-dialog>

    <p-galleria
        [(value)]="images"
        [showThumbnails]="false"
        [showThumbnailNavigators]="false"
        [showItemNavigators]="true"
        [(visible)]="displayGalleria"
        [circular]="true"
        [responsiveOptions]="responsiveOptions"
        [circular]="true"
        [fullScreen]="true"
        [containerStyle]="{ width: '400px' }"
    >
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
```

### Accessibility {#accessibility}

Dock component uses the menu role with the aria-orientation and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled.

### Dock {#dock}

Dock is a navigation component consisting of menuitems.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Dock API

API defines helper props, events and others for the PrimeNG Dock module.

#### Dock {#api-dock}

Dock is a navigation component consisting of menuitems.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| id | string | null | Current id state as a string. |
| styleClass | string | null | Class of the element. |
| model | MenuItem[] | null | MenuModel instance to define the action items. |
| position | "right" | "left" | "top" | "bottom" | bottom | Position of element. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| ariaLabelledBy | string | null | Defines a string that labels the dropdown button for accessibility. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onFocus | event :  FocusEvent | Callback to execute when button is focused. |
| onBlur | event :  FocusEvent | Callback to invoke when the component loses focus. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Dock Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-dock | Class name of the root element |
| p-dock-list-container | Class name of the list container element |
| p-dock-list | Class name of the list element |
| p-dock-item | Class name of the item element |
| p-dock-item-content | Class name of the item content element |
| p-dock-item-link | Class name of the item link element |
| p-dock-item-icon | Class name of the item icon element |

#### Dock Design Tokens {#theming-dock-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| dock.root.background | dock.background | --p-dock-background | Background of root |
| dock.root.borderColor | dock.border.color | --p-dock-border-color | Border color of root |
| dock.root.padding | dock.padding | --p-dock-padding | Padding of root |
| dock.root.borderRadius | dock.border.radius | --p-dock-border-radius | Border radius of root |
| dock.item.borderRadius | dock.item.border.radius | --p-dock-item-border-radius | Border radius of item |
| dock.item.padding | dock.item.padding | --p-dock-item-padding | Padding of item |
| dock.item.size | dock.item.size | --p-dock-item-size | Size of item |
| dock.item.focusRing.width | dock.item.focus.ring.width | --p-dock-item-focus-ring-width | Focus ring width of item |
| dock.item.focusRing.style | dock.item.focus.ring.style | --p-dock-item-focus-ring-style | Focus ring style of item |
| dock.item.focusRing.color | dock.item.focus.ring.color | --p-dock-item-focus-ring-color | Focus ring color of item |
| dock.item.focusRing.offset | dock.item.focus.ring.offset | --p-dock-item-focus-ring-offset | Focus ring offset of item |
| dock.item.focusRing.shadow | dock.item.focus.ring.shadow | --p-dock-item-focus-ring-shadow | Focus ring shadow of item |

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

[View Official Documentation](https://primeng.org/dock)
