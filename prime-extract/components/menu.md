# Menu

Menu is a navigation / command component that supports dynamic and static positioning.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { MenuModule } from 'primeng/menu';
```

### Basic {#basic}

Menu requires a collection of menuitems as its model.

```html
<p-menu [model]="items" />
```

### Group {#group}

Menu supports one level of nesting by defining children with items property.

```html
<p-menu [model]="items" />
```

### Popup {#popup}

Popup mode is enabled by setting popup property to true and calling toggle method with an event of the target.

```html
<p-menu #menu [model]="items" [popup]="true" />
<p-button (click)="menu.toggle($event)" icon="pi pi-ellipsis-v"/>
```

### Template {#template}

Menu offers item customization with the item template that receives the menuitem instance from the model as a parameter. The submenu header has its own submenuheader template, additional slots named start and end are provided to embed content before or after the menu.

```html
<p-menu [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
    <ng-template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="..." fill="var(--primary-color)" />
            </svg>
            <span class="text-xl font-semibold">
                PRIME<span class="text-primary">APP</span>
            </span>
        </span>
    </ng-template>
    <ng-template #submenuheader let-item>
        <span class="text-primary font-bold">{{ item.label }}</span>
    </ng-template>
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-menu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
    <ng-template #end>
        <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-col">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </ng-template>
</p-menu>
```

### Command {#command}

The function to invoke when an item is clicked is defined using the command property.

```html
<p-toast />
<p-menu [model]="items" />
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-menu [model]="items" />
```

### Accessibility {#accessibility}

Menu component uses the menu role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a Menu uses the group role with an aria-labelledby defined as the id of the submenu root menuitem label.

### Menu {#menu}

Menu is a navigation / command component that supports dynamic and static positioning.

### MenuItem {#menuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Menu API

API defines helper props, events and others for the PrimeNG Menu module.

#### Menu {#api-menu}

Menu is a navigation / command component that supports dynamic and static positioning.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| popup | boolean | false | Defines if menu would displayed as a popup. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| id | string | null | Current id state as a string. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  any | Callback to invoke when overlay menu is shown. |
| onHide | value :  any | Callback to invoke when overlay menu is hidden. |
| onBlur | event :  Event | Callback to invoke when the list loses focus. |
| onFocus | event :  Event | Callback to invoke when the list receives focus. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| toggle | event :  Event | Toggles the visibility of the popup menu. |
| show | event :  any | Displays the popup menu. |
| hide |  | Hides the popup menu. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| start |  | Defines template option for start. |
| end |  | Defines template option for end. |
| header |  | Defines template option for header. |
| item |  | Defines template option for item. |
| submenuheader |  | Defines template option for item. |

#### MenuItem {#api-menuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Menu Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-menu | Class name of the root element |
| p-menu-start | Class name of the start element |
| p-menu-list | Class name of the list element |
| p-menu-submenu-item | Class name of the submenu item element |
| p-menu-separator | Class name of the separator element |
| p-menu-end | Class name of the end element |
| p-menu-item | Class name of the item element |
| p-menu-item-content | Class name of the item content element |
| p-menu-item-link | Class name of the item link element |
| p-menu-item-icon | Class name of the item icon element |
| p-menu-item-label | Class name of the item label element |

#### Menu Design Tokens {#theming-menu-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| menu.root.background | menu.background | --p-menu-background | Background of root |
| menu.root.borderColor | menu.border.color | --p-menu-border-color | Border color of root |
| menu.root.color | menu.color | --p-menu-color | Color of root |
| menu.root.borderRadius | menu.border.radius | --p-menu-border-radius | Border radius of root |
| menu.root.shadow | menu.shadow | --p-menu-shadow | Shadow of root |
| menu.root.transitionDuration | menu.transition.duration | --p-menu-transition-duration | Transition duration of root |
| menu.list.padding | menu.list.padding | --p-menu-list-padding | Padding of list |
| menu.list.gap | menu.list.gap | --p-menu-list-gap | Gap of list |
| menu.item.focusBackground | menu.item.focus.background | --p-menu-item-focus-background | Focus background of item |
| menu.item.color | menu.item.color | --p-menu-item-color | Color of item |
| menu.item.focusColor | menu.item.focus.color | --p-menu-item-focus-color | Focus color of item |
| menu.item.padding | menu.item.padding | --p-menu-item-padding | Padding of item |
| menu.item.borderRadius | menu.item.border.radius | --p-menu-item-border-radius | Border radius of item |
| menu.item.gap | menu.item.gap | --p-menu-item-gap | Gap of item |
| menu.item.icon.color | menu.item.icon.color | --p-menu-item-icon-color | Icon color of item |
| menu.item.icon.focusColor | menu.item.icon.focus.color | --p-menu-item-icon-focus-color | Icon focus color of item |
| menu.submenuLabel.padding | menu.submenu.label.padding | --p-menu-submenu-label-padding | Padding of submenu label |
| menu.submenuLabel.fontWeight | menu.submenu.label.font.weight | --p-menu-submenu-label-font-weight | Font weight of submenu label |
| menu.submenuLabel.background | menu.submenu.label.background | --p-menu-submenu-label-background | Background of submenu label |
| menu.submenuLabel.color | menu.submenu.label.color | --p-menu-submenu-label-color | Color of submenu label |
| menu.separator.borderColor | menu.separator.border.color | --p-menu-separator-border-color | Border color of separator |

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

[View Official Documentation](https://primeng.org/menu)
