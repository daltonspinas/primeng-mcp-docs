# TieredMenu

TieredMenu displays submenus in nested overlays.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TieredMenuModule } from 'primeng/tieredmenu';
```

### Basic {#basic}

TieredMenu requires a collection of menuitems as its model.

```html
<p-tieredmenu [model]="items" />
```

### Popup {#popup}

Popup mode is enabled by adding popup property and calling toggle method with an event of the target.

```html
<p-button label="Toggle" (click)="menu.toggle($event)" />
<p-tieredmenu #menu [model]="items" [popup]="true" />
```

### Template {#template}

TieredMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```html
<p-tieredMenu [model]="items">
    <ng-template #item let-item let-hasSubmenu="hasSubmenu">
        <a pRipple class="flex items-center p-tieredmenu-item-link">
            <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
            <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-tieredMenu>
```

### Command {#command}

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast/>
<p-tieredmenu [model]="items" />
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-tieredmenu [model]="items" />
```

### Accessibility {#accessibility}

TieredMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a TieredMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### TieredMenu {#tieredmenu}

TieredMenu displays submenus in nested overlays.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### TieredMenu API

API defines helper props, events and others for the PrimeNG TieredMenu module.

#### TieredMenu {#api-tieredmenu}

TieredMenu displays submenus in nested overlays.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| popup | boolean | false | Defines if menu would displayed as a popup. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| autoDisplay | boolean | true | Whether to show a root submenu on mouse over. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| id | string | null | Current id state as a string. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  any | Callback to invoke when overlay menu is shown. |
| onHide | value :  any | Callback to invoke when overlay menu is hidden. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| hide | event :  anyisFocus :  boolean | Hides the popup menu. |
| toggle | event :  any | Toggles the visibility of the popup menu. |
| show | event :  anyisFocus :  any | Displays the popup menu. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| submenuicon |  | Template of the submenu icon. |
| item |  | Template of the item. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### TieredMenu Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-tieredmenu | Class name of the root element |
| p-tieredmenu-start | Class name of the start element |
| p-tieredmenu-root-list | Class name of the root list element |
| p-tieredmenu-item | Class name of the item element |
| p-tieredmenu-item-content | Class name of the item content element |
| p-tieredmenu-item-link | Class name of the item link element |
| p-tieredmenu-item-icon | Class name of the item icon element |
| p-tieredmenu-item-label | Class name of the item label element |
| p-tieredmenu-submenu-icon | Class name of the submenu icon element |
| p-tieredmenu-submenu | Class name of the submenu element |
| p-tieredmenu-separator | Class name of the separator element |
| p-tieredmenu-end | Class name of the end element |

#### TieredMenu Design Tokens {#theming-tieredmenu-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| tieredmenu.root.background | tieredmenu.background | --p-tieredmenu-background | Background of root |
| tieredmenu.root.borderColor | tieredmenu.border.color | --p-tieredmenu-border-color | Border color of root |
| tieredmenu.root.color | tieredmenu.color | --p-tieredmenu-color | Color of root |
| tieredmenu.root.borderRadius | tieredmenu.border.radius | --p-tieredmenu-border-radius | Border radius of root |
| tieredmenu.root.shadow | tieredmenu.shadow | --p-tieredmenu-shadow | Shadow of root |
| tieredmenu.root.transitionDuration | tieredmenu.transition.duration | --p-tieredmenu-transition-duration | Transition duration of root |
| tieredmenu.list.padding | tieredmenu.list.padding | --p-tieredmenu-list-padding | Padding of list |
| tieredmenu.list.gap | tieredmenu.list.gap | --p-tieredmenu-list-gap | Gap of list |
| tieredmenu.item.focusBackground | tieredmenu.item.focus.background | --p-tieredmenu-item-focus-background | Focus background of item |
| tieredmenu.item.activeBackground | tieredmenu.item.active.background | --p-tieredmenu-item-active-background | Active background of item |
| tieredmenu.item.color | tieredmenu.item.color | --p-tieredmenu-item-color | Color of item |
| tieredmenu.item.focusColor | tieredmenu.item.focus.color | --p-tieredmenu-item-focus-color | Focus color of item |
| tieredmenu.item.activeColor | tieredmenu.item.active.color | --p-tieredmenu-item-active-color | Active color of item |
| tieredmenu.item.padding | tieredmenu.item.padding | --p-tieredmenu-item-padding | Padding of item |
| tieredmenu.item.borderRadius | tieredmenu.item.border.radius | --p-tieredmenu-item-border-radius | Border radius of item |
| tieredmenu.item.gap | tieredmenu.item.gap | --p-tieredmenu-item-gap | Gap of item |
| tieredmenu.item.icon.color | tieredmenu.item.icon.color | --p-tieredmenu-item-icon-color | Icon color of item |
| tieredmenu.item.icon.focusColor | tieredmenu.item.icon.focus.color | --p-tieredmenu-item-icon-focus-color | Icon focus color of item |
| tieredmenu.item.icon.activeColor | tieredmenu.item.icon.active.color | --p-tieredmenu-item-icon-active-color | Icon active color of item |
| tieredmenu.submenu.mobileIndent | tieredmenu.submenu.mobile.indent | --p-tieredmenu-submenu-mobile-indent | Mobile indent of submenu |
| tieredmenu.submenuIcon.size | tieredmenu.submenu.icon.size | --p-tieredmenu-submenu-icon-size | Size of submenu icon |
| tieredmenu.submenuIcon.color | tieredmenu.submenu.icon.color | --p-tieredmenu-submenu-icon-color | Color of submenu icon |
| tieredmenu.submenuIcon.focusColor | tieredmenu.submenu.icon.focus.color | --p-tieredmenu-submenu-icon-focus-color | Focus color of submenu icon |
| tieredmenu.submenuIcon.activeColor | tieredmenu.submenu.icon.active.color | --p-tieredmenu-submenu-icon-active-color | Active color of submenu icon |
| tieredmenu.separator.borderColor | tieredmenu.separator.border.color | --p-tieredmenu-separator-border-color | Border color of separator |

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

[View Official Documentation](https://primeng.org/tieredmenu)
