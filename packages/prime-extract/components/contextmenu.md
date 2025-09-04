# ContextMenu

ContextMenu displays an overlay menu on right click of its target.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ContextMenuModule } from 'primeng/contextmenu';
```

### Basic {#basic}

ContextMenu can be attached to a particular element whose local template variable name is defined using the target property.

```html
<img #img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg" alt="Logo" aria-haspopup="true" class="w-full md:w-[30rem] rounded shadow-lg" />
<p-contextmenu [target]="img" [model]="items" />
```

### Document {#document}

Setting global property to true attaches the context menu to the document.

```html
<p-contextmenu [model]="items" [global]="true" />
```

### Template {#template}

ContextMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```html
<ul class="m-0 p-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]">
    <li
        *ngFor="let product of data"
        class="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200"
        [ngClass]="{ 'border-primary': selectedId === product.id }"
        (contextmenu)="onContextMenu($event)"
    >
        <div class="flex flex-wrap p-2 items-center gap-4">
            <img class="w-16 shrink-0 rounded" src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
            <div class="flex-1 flex flex-col gap-1">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold ml-8">&#36;{{ product.price }}</span>
        </div>
    </li>
</ul>

<p-contextmenu #cm [model]="items" (onHide)="onHide()">
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-contextmenu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-contextmenu>
```

### Command {#command}

The function to invoke when an item is clicked is defined using the command property.

```html
<p-toast />
<ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
    <li
        *ngFor="let user of users"
        class="p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between"
        [ngClass]="{ 'border-primary': selectedId === user.id }"
        (contextmenu)="onContextMenu($event, user)"
    >
        <div class="flex flex-1 items-center gap-2">
            <img class="w-8 h-8" [alt]="user.name" [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + user.image" />
            <span class="font-bold">{{ user.name }}</span>
        </div>
        <p-tag [value]="user.role" [severity]="getBadge(user)" />
    </li>
</ul>

<p-contextmenu #cm [model]="items" (onHide)="onHide()" />
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<span #span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" aria-haspopup="true">
    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="var(--p-primary-color)" />
    </svg>
</span>
<p-contextmenu [target]="span" [model]="items" />
```

### Table {#table}

Table has built-in support for ContextMenu, see the ContextMenu demo for an example.

### Accessibility {#accessibility}

ContextMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a ContextMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### ContextMenu {#contextmenu}

ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### ContextMenu API

API defines helper props, events and others for the PrimeNG ContextMenu module.

#### ContextMenu {#api-contextmenu}

ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| triggerEvent | string | contextmenu | Event for which the menu must be displayed. |
| target | string | HTMLElement | null | Local template variable name of the element to attach the context menu. |
| global | boolean | false | Attaches the menu to document instead of a particular item. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| id | string | null | Current id state as a string. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| pressDelay | number | 500 | Press delay in touch devices as miliseconds. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  null | Callback to invoke when overlay menu is shown. |
| onHide | value :  null | Callback to invoke when overlay menu is hidden. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Defines template option for item. |
| submenuicon |  | Defines template option for submenuIcon. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ContextMenu Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-contextmenu | Class name of the root element |
| p-contextmenu-root-list | Class name of the root list element |
| p-contextmenu-item | Class name of the item element |
| p-contextmenu-item-content | Class name of the item content element |
| p-contextmenu-item-link | Class name of the item link element |
| p-contextmenu-item-icon | Class name of the item icon element |
| p-contextmenu-item-label | Class name of the item label element |
| p-contextmenu-submenu-icon | Class name of the submenu icon element |
| p-contextmenu-submenu | Class name of the submenu element |
| p-contextmenu-separator | Class name of the separator element |

#### ContextMenu Design Tokens {#theming-contextmenu-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| contextmenu.root.background | contextmenu.background | --p-contextmenu-background | Background of root |
| contextmenu.root.borderColor | contextmenu.border.color | --p-contextmenu-border-color | Border color of root |
| contextmenu.root.color | contextmenu.color | --p-contextmenu-color | Color of root |
| contextmenu.root.borderRadius | contextmenu.border.radius | --p-contextmenu-border-radius | Border radius of root |
| contextmenu.root.shadow | contextmenu.shadow | --p-contextmenu-shadow | Shadow of root |
| contextmenu.root.transitionDuration | contextmenu.transition.duration | --p-contextmenu-transition-duration | Transition duration of root |
| contextmenu.list.padding | contextmenu.list.padding | --p-contextmenu-list-padding | Padding of list |
| contextmenu.list.gap | contextmenu.list.gap | --p-contextmenu-list-gap | Gap of list |
| contextmenu.item.focusBackground | contextmenu.item.focus.background | --p-contextmenu-item-focus-background | Focus background of item |
| contextmenu.item.activeBackground | contextmenu.item.active.background | --p-contextmenu-item-active-background | Active background of item |
| contextmenu.item.color | contextmenu.item.color | --p-contextmenu-item-color | Color of item |
| contextmenu.item.focusColor | contextmenu.item.focus.color | --p-contextmenu-item-focus-color | Focus color of item |
| contextmenu.item.activeColor | contextmenu.item.active.color | --p-contextmenu-item-active-color | Active color of item |
| contextmenu.item.padding | contextmenu.item.padding | --p-contextmenu-item-padding | Padding of item |
| contextmenu.item.borderRadius | contextmenu.item.border.radius | --p-contextmenu-item-border-radius | Border radius of item |
| contextmenu.item.gap | contextmenu.item.gap | --p-contextmenu-item-gap | Gap of item |
| contextmenu.item.icon.color | contextmenu.item.icon.color | --p-contextmenu-item-icon-color | Icon color of item |
| contextmenu.item.icon.focusColor | contextmenu.item.icon.focus.color | --p-contextmenu-item-icon-focus-color | Icon focus color of item |
| contextmenu.item.icon.activeColor | contextmenu.item.icon.active.color | --p-contextmenu-item-icon-active-color | Icon active color of item |
| contextmenu.submenu.mobileIndent | contextmenu.submenu.mobile.indent | --p-contextmenu-submenu-mobile-indent | Mobile indent of submenu |
| contextmenu.submenuIcon.size | contextmenu.submenu.icon.size | --p-contextmenu-submenu-icon-size | Size of submenu icon |
| contextmenu.submenuIcon.color | contextmenu.submenu.icon.color | --p-contextmenu-submenu-icon-color | Color of submenu icon |
| contextmenu.submenuIcon.focusColor | contextmenu.submenu.icon.focus.color | --p-contextmenu-submenu-icon-focus-color | Focus color of submenu icon |
| contextmenu.submenuIcon.activeColor | contextmenu.submenu.icon.active.color | --p-contextmenu-submenu-icon-active-color | Active color of submenu icon |
| contextmenu.separator.borderColor | contextmenu.separator.border.color | --p-contextmenu-separator-border-color | Border color of separator |

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

[View Official Documentation](https://primeng.org/contextmenu)
