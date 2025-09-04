# PanelMenu

PanelMenu is a hybrid of Accordion and Tree components.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { PanelMenuModule } from 'primeng/panelmenu';
```

### Basic {#basic}

PanelMenu requires a collection of menuitems as its model.

```html
<p-panelmenu [model]="items" class="w-full md:w-20rem" />
```

### Multiple {#multiple}

Only one single root menuitem can be active by default, enable multiple property to be able to open more than one items.

```html
<p-panelmenu [model]="items" [style]="{'width':'300px'}" [multiple]="true" />
```

### Controlled {#controlled}

Menu items can be controlled programmatically.

```html
<p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

### Template {#template}

PanelMenu requires a collection of menuitems as its model.

```html
<p-panelmenu [model]="items" class="w-full md:w-80">
    <ng-template #item let-item>
        <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
            <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
            <span class="ml-2">
                {{ item.label }}
            </span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
            bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
</p-panelmenu>
```

### Command {#command}

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast />
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

### Accessibility {#accessibility}

Accordion header elements have a button role, an aria-label defined using the label property of the menuitem model and aria-controls to define the id of the content section along with aria-expanded for the visibility state.

### PanelMenu {#panelmenu}

PanelMenu is a hybrid of Accordion and Tree components.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### PanelMenu API

API defines helper props, events and others for the PrimeNG PanelMenu module.

#### PanelMenu {#api-panelmenu}

PanelMenu is a hybrid of Accordion and Tree components.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| styleClass | string | null | Style class of the component. |
| multiple | boolean | false | Whether multiple tabs can be activated at the same time or not. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |
| id | string | null | Current id state as a string. |
| tabindex | number | 0 | Index of the element in tabbing order. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| collapseAll |  | Collapses open panels. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| submenuicon |  | Template option of submenu icon. |
| headericon |  | Template option of header icon. |
| item |  | Template option of item. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### PanelMenu Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-panelmenu | Class name of the root element |
| p-panelmenu-panel | Class name of the panel element |
| p-panelmenu-header | Class name of the header element |
| p-panelmenu-header-content | Class name of the header content element |
| p-panelmenu-header-link | Class name of the header link element |
| p-panelmenu-header-icon | Class name of the header icon element |
| p-panelmenu-header-label | Class name of the header label element |
| p-panelmenu-content-container | Class name of the content container element |
| p-panelmenu-content | Class name of the content element |
| p-panelmenu-root-list | Class name of the root list element |
| p-panelmenu-item | Class name of the item element |
| p-panelmenu-item-content | Class name of the item content element |
| p-panelmenu-item-link | Class name of the item link element |
| p-panelmenu-item-icon | Class name of the item icon element |
| p-panelmenu-item-label | Class name of the item label element |
| p-panelmenu-submenu-icon | Class name of the submenu icon element |
| p-panelmenu-submenu | Class name of the submenu element |
| p-menuitem-separator |  |

#### PanelMenu Design Tokens {#theming-panelmenu-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| panelmenu.root.gap | panelmenu.gap | --p-panelmenu-gap | Gap of root |
| panelmenu.root.transitionDuration | panelmenu.transition.duration | --p-panelmenu-transition-duration | Transition duration of root |
| panelmenu.panel.background | panelmenu.panel.background | --p-panelmenu-panel-background | Background of panel |
| panelmenu.panel.borderColor | panelmenu.panel.border.color | --p-panelmenu-panel-border-color | Border color of panel |
| panelmenu.panel.borderWidth | panelmenu.panel.border.width | --p-panelmenu-panel-border-width | Border width of panel |
| panelmenu.panel.color | panelmenu.panel.color | --p-panelmenu-panel-color | Color of panel |
| panelmenu.panel.padding | panelmenu.panel.padding | --p-panelmenu-panel-padding | Padding of panel |
| panelmenu.panel.borderRadius | panelmenu.panel.border.radius | --p-panelmenu-panel-border-radius | Border radius of panel |
| panelmenu.panel.first.borderWidth | panelmenu.panel.first.border.width | --p-panelmenu-panel-first-border-width | First border width of panel |
| panelmenu.panel.first.topBorderRadius | panelmenu.panel.first.top.border.radius | --p-panelmenu-panel-first-top-border-radius | First top border radius of panel |
| panelmenu.panel.last.borderWidth | panelmenu.panel.last.border.width | --p-panelmenu-panel-last-border-width | Last border width of panel |
| panelmenu.panel.last.bottomBorderRadius | panelmenu.panel.last.bottom.border.radius | --p-panelmenu-panel-last-bottom-border-radius | Last bottom border radius of panel |
| panelmenu.item.focusBackground | panelmenu.item.focus.background | --p-panelmenu-item-focus-background | Focus background of item |
| panelmenu.item.color | panelmenu.item.color | --p-panelmenu-item-color | Color of item |
| panelmenu.item.focusColor | panelmenu.item.focus.color | --p-panelmenu-item-focus-color | Focus color of item |
| panelmenu.item.gap | panelmenu.item.gap | --p-panelmenu-item-gap | Gap of item |
| panelmenu.item.padding | panelmenu.item.padding | --p-panelmenu-item-padding | Padding of item |
| panelmenu.item.borderRadius | panelmenu.item.border.radius | --p-panelmenu-item-border-radius | Border radius of item |
| panelmenu.item.icon.color | panelmenu.item.icon.color | --p-panelmenu-item-icon-color | Icon color of item |
| panelmenu.item.icon.focusColor | panelmenu.item.icon.focus.color | --p-panelmenu-item-icon-focus-color | Icon focus color of item |
| panelmenu.submenu.indent | panelmenu.submenu.indent | --p-panelmenu-submenu-indent | Indent of submenu |
| panelmenu.submenuIcon.color | panelmenu.submenu.icon.color | --p-panelmenu-submenu-icon-color | Color of submenu icon |
| panelmenu.submenuIcon.focusColor | panelmenu.submenu.icon.focus.color | --p-panelmenu-submenu-icon-focus-color | Focus color of submenu icon |

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

[View Official Documentation](https://primeng.org/panelmenu)
