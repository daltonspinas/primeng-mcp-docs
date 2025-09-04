# Menubar

Menubar is a horizontal menu component.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { MenubarModule } from 'primeng/menubar';
```

### Basic {#basic}

Menubar requires nested menuitems as its model.

```html
<p-menubar [model]="items" />
```

### Template {#template}

Custom content can be placed inside the menubar using the start and end templates.

```html
<p-menubar [model]="items">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item let-root="root">
        <a pRipple class="flex items-center p-menubar-item-link">
            <span>{{ item.label }}</span>
            <p-badge *ngIf="item.badge" [ngClass]="{ 'ml-auto': !root, 'ml-2': root }" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" [ngClass]="['ml-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
        </a>
    </ng-template>
    <ng-template #end>
        <div class="flex items-center gap-2">
            <input type="text" pInputText placeholder="Search" class="w-36" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </div>
    </ng-template>
</p-menubar>
```

### Command {#command}

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast />
<p-menubar [model]="items" />
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-menubar [model]="items" />
```

### Accessibility {#accessibility}

Menubar component uses the menubar role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MenuBar uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### Menubar {#menubar}

Menubar is a horizontal menu component.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Menubar API

API defines helper props, events and others for the PrimeNG Menubar module.

#### Menubar {#api-menubar}

Menubar is a horizontal menu component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| styleClass | string | null | Class of the element. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| autoDisplay | boolean | true | Whether to show a root submenu on mouse over. |
| autoHide | boolean | false | Whether to hide a root submenu when mouse leaves. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| autoHideDelay | number | 100 | Delay to hide the root submenu in milliseconds when mouse leaves. |
| id | string | null | Current id state as a string. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onFocus | event :  FocusEvent | Callback to execute when button is focused. |
| onBlur | event :  FocusEvent | Callback to execute when button loses focus. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| start |  | Defines template option for start. |
| end |  | Defines template option for end. |
| item |  | Defines template option for item. |
| menuicon |  | Defines template option for item. |
| submenuicon |  | Defines template option for submenu icon. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Menubar Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-menubar | Class name of the root element |
| p-menubar-start | Class name of the start element |
| p-menubar-button | Class name of the button element |
| p-menubar-root-list | Class name of the root list element |
| p-menubar-item | Class name of the item element |
| p-menubar-item-content | Class name of the item content element |
| p-menubar-item-link | Class name of the item link element |
| p-menubar-item-icon | Class name of the item icon element |
| p-menubar-item-label | Class name of the item label element |
| p-menubar-submenu-icon | Class name of the submenu icon element |
| p-menubar-submenu | Class name of the submenu element |
| p-menubar-separator | Class name of the separator element |
| p-menubar-end | Class name of the end element |

#### Menubar Design Tokens {#theming-menubar-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| menubar.root.background | menubar.background | --p-menubar-background | Background of root |
| menubar.root.borderColor | menubar.border.color | --p-menubar-border-color | Border color of root |
| menubar.root.borderRadius | menubar.border.radius | --p-menubar-border-radius | Border radius of root |
| menubar.root.color | menubar.color | --p-menubar-color | Color of root |
| menubar.root.gap | menubar.gap | --p-menubar-gap | Gap of root |
| menubar.root.padding | menubar.padding | --p-menubar-padding | Padding of root |
| menubar.root.transitionDuration | menubar.transition.duration | --p-menubar-transition-duration | Transition duration of root |
| menubar.baseItem.borderRadius | menubar.base.item.border.radius | --p-menubar-base-item-border-radius | Border radius of base item |
| menubar.baseItem.padding | menubar.base.item.padding | --p-menubar-base-item-padding | Padding of base item |
| menubar.item.focusBackground | menubar.item.focus.background | --p-menubar-item-focus-background | Focus background of item |
| menubar.item.activeBackground | menubar.item.active.background | --p-menubar-item-active-background | Active background of item |
| menubar.item.color | menubar.item.color | --p-menubar-item-color | Color of item |
| menubar.item.focusColor | menubar.item.focus.color | --p-menubar-item-focus-color | Focus color of item |
| menubar.item.activeColor | menubar.item.active.color | --p-menubar-item-active-color | Active color of item |
| menubar.item.padding | menubar.item.padding | --p-menubar-item-padding | Padding of item |
| menubar.item.borderRadius | menubar.item.border.radius | --p-menubar-item-border-radius | Border radius of item |
| menubar.item.gap | menubar.item.gap | --p-menubar-item-gap | Gap of item |
| menubar.item.icon.color | menubar.item.icon.color | --p-menubar-item-icon-color | Icon color of item |
| menubar.item.icon.focusColor | menubar.item.icon.focus.color | --p-menubar-item-icon-focus-color | Icon focus color of item |
| menubar.item.icon.activeColor | menubar.item.icon.active.color | --p-menubar-item-icon-active-color | Icon active color of item |
| menubar.submenu.padding | menubar.submenu.padding | --p-menubar-submenu-padding | Padding of submenu |
| menubar.submenu.gap | menubar.submenu.gap | --p-menubar-submenu-gap | Gap of submenu |
| menubar.submenu.background | menubar.submenu.background | --p-menubar-submenu-background | Background of submenu |
| menubar.submenu.borderColor | menubar.submenu.border.color | --p-menubar-submenu-border-color | Border color of submenu |
| menubar.submenu.borderRadius | menubar.submenu.border.radius | --p-menubar-submenu-border-radius | Border radius of submenu |
| menubar.submenu.shadow | menubar.submenu.shadow | --p-menubar-submenu-shadow | Shadow of submenu |
| menubar.submenu.mobileIndent | menubar.submenu.mobile.indent | --p-menubar-submenu-mobile-indent | Mobile indent of submenu |
| menubar.submenu.icon.size | menubar.submenu.icon.size | --p-menubar-submenu-icon-size | Icon size of submenu |
| menubar.submenu.icon.color | menubar.submenu.icon.color | --p-menubar-submenu-icon-color | Icon color of submenu |
| menubar.submenu.icon.focusColor | menubar.submenu.icon.focus.color | --p-menubar-submenu-icon-focus-color | Icon focus color of submenu |
| menubar.submenu.icon.activeColor | menubar.submenu.icon.active.color | --p-menubar-submenu-icon-active-color | Icon active color of submenu |
| menubar.separator.borderColor | menubar.separator.border.color | --p-menubar-separator-border-color | Border color of separator |
| menubar.mobileButton.borderRadius | menubar.mobile.button.border.radius | --p-menubar-mobile-button-border-radius | Border radius of mobile button |
| menubar.mobileButton.size | menubar.mobile.button.size | --p-menubar-mobile-button-size | Size of mobile button |
| menubar.mobileButton.color | menubar.mobile.button.color | --p-menubar-mobile-button-color | Color of mobile button |
| menubar.mobileButton.hoverColor | menubar.mobile.button.hover.color | --p-menubar-mobile-button-hover-color | Hover color of mobile button |
| menubar.mobileButton.hoverBackground | menubar.mobile.button.hover.background | --p-menubar-mobile-button-hover-background | Hover background of mobile button |
| menubar.mobileButton.focusRing.width | menubar.mobile.button.focus.ring.width | --p-menubar-mobile-button-focus-ring-width | Focus ring width of mobile button |
| menubar.mobileButton.focusRing.style | menubar.mobile.button.focus.ring.style | --p-menubar-mobile-button-focus-ring-style | Focus ring style of mobile button |
| menubar.mobileButton.focusRing.color | menubar.mobile.button.focus.ring.color | --p-menubar-mobile-button-focus-ring-color | Focus ring color of mobile button |
| menubar.mobileButton.focusRing.offset | menubar.mobile.button.focus.ring.offset | --p-menubar-mobile-button-focus-ring-offset | Focus ring offset of mobile button |
| menubar.mobileButton.focusRing.shadow | menubar.mobile.button.focus.ring.shadow | --p-menubar-mobile-button-focus-ring-shadow | Focus ring shadow of mobile button |

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

[View Official Documentation](https://primeng.org/menubar)
