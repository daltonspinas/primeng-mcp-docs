# MegaMenu

MegaMenu is navigation component that displays submenus together.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { MegaMenuModule } from 'primeng/megamenu';
```

### Basic {#basic}

MegaMenu requires a collection of menuitems as its model.

```html
<p-megamenu [model]="items" />
```

### Vertical {#vertical}

Layout of the MegaMenu is changed with the orientation property that accepts horizontal and vertical as options.

```html
<p-megamenu [model]="items" orientation="vertical" />
```

### Template {#template}

Custom content can be placed between p-megamenu tags. Megamenu should be horizontal for custom content.

```html
<p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" class="p-4 bg-surface-0 dark:bg-surface-900">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item>
        <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
            <i [ngClass]="item.icon"></i>
            <span class="ml-2">{{ item.label }}</span>
        </a>
        <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
            <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                <i [ngClass]="item.icon + ' text-lg'"></i>
            </span>
            <span class="inline-flex flex-col gap-1">
                <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                <span class="whitespace-nowrap">{{ item.subtext }}</span>
            </span>
        </a>
        <div *ngIf="item.image" class="flex flex-col items-start gap-4">
            <img [src]="item.image" alt="megamenu-demo" class="w-full" />
            <span>{{ item.subtext }}</span>
            <p-button [label]="item.label" [outlined]="true"></p-button>
        </div>
    </ng-template>
    <ng-template #end>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
</p-megamenu>
```

### Command {#command}

The command property of a menuitem defines the callback to run when an item is activated by click or a key event.

```text
{
    label: 'Log out',
    icon: 'pi pi-signout',
    command: () => {
        // Callback to run
    }
}
```

### Router {#router}

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-megamenu [model]="items" />
```

### Accessibility {#accessibility}

MegaMenu component uses the menubar role along with aria-orientation and the value to describe the component can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MegaMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### MegaMenu {#megamenu}

MegaMenu is navigation component that displays submenus together.

### MegaMenuItem {#megamenuitem}

[↑ Back to Top](#table-of-contents)

## API {#api}

### MegaMenu API

API defines helper props, events and others for the PrimeNG MegaMenu module.

#### MegaMenu {#api-megamenu}

MegaMenu is navigation component that displays submenus together.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MegaMenuItem[] | null | An array of menuitems. |
| styleClass | string | null | Class of the element. |
| orientation | string | horizontal | Defines the orientation. |
| id | string | null | Current id state as a string. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| scrollHeight | string | 20rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | 0 | Index of the element in tabbing order. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| start |  | Defines template option for start. |
| end |  | Defines template option for end. |
| menuicon |  | Defines template option for menu icon. |
| submenuicon |  | Defines template option for submenu icon. |
| item |  | Defines template option for submenu icon. |
| button |  | Custom menu button template on responsive mode. |
| buttonicon |  | Custom menu button icon template on responsive mode. |

#### MegaMenuItem {#api-megamenuitem}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### MegaMenu Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-megamenu | Class name of the root element |
| p-megamenu-start | Class name of the start element |
| p-megamenu-button | Class name of the button element |
| p-megamenu-root-list | Class name of the root list element |
| p-megamenu-submenu-item | Class name of the submenu item element |
| p-megamenu-item | Class name of the item element |
| p-megamenu-item-content | Class name of the item content element |
| p-megamenu-item-link | Class name of the item link element |
| p-megamenu-item-icon | Class name of the item icon element |
| p-megamenu-item-label | Class name of the item label element |
| p-megamenu-submenu-icon | Class name of the submenu icon element |
| p-megamenu-panel | Class name of the panel element |
| p-megamenu-grid | Class name of the grid element |
| p-megamenu-submenu | Class name of the submenu element |
| p-megamenu-submenu-item-label | Class name of the submenu item label element |
| p-megamenu-separator | Class name of the separator element |
| p-megamenu-end | Class name of the end element |

#### MegaMenu Design Tokens {#theming-megamenu-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| megamenu.root.background | megamenu.background | --p-megamenu-background | Background of root |
| megamenu.root.borderColor | megamenu.border.color | --p-megamenu-border-color | Border color of root |
| megamenu.root.borderRadius | megamenu.border.radius | --p-megamenu-border-radius | Border radius of root |
| megamenu.root.color | megamenu.color | --p-megamenu-color | Color of root |
| megamenu.root.gap | megamenu.gap | --p-megamenu-gap | Gap of root |
| megamenu.root.verticalOrientation.padding | megamenu.vertical.orientation.padding | --p-megamenu-vertical-orientation-padding | Vertical orientation padding of root |
| megamenu.root.verticalOrientation.gap | megamenu.vertical.orientation.gap | --p-megamenu-vertical-orientation-gap | Vertical orientation gap of root |
| megamenu.root.horizontalOrientation.padding | megamenu.horizontal.orientation.padding | --p-megamenu-horizontal-orientation-padding | Horizontal orientation padding of root |
| megamenu.root.horizontalOrientation.gap | megamenu.horizontal.orientation.gap | --p-megamenu-horizontal-orientation-gap | Horizontal orientation gap of root |
| megamenu.root.transitionDuration | megamenu.transition.duration | --p-megamenu-transition-duration | Transition duration of root |
| megamenu.baseItem.borderRadius | megamenu.base.item.border.radius | --p-megamenu-base-item-border-radius | Border radius of base item |
| megamenu.baseItem.padding | megamenu.base.item.padding | --p-megamenu-base-item-padding | Padding of base item |
| megamenu.item.focusBackground | megamenu.item.focus.background | --p-megamenu-item-focus-background | Focus background of item |
| megamenu.item.activeBackground | megamenu.item.active.background | --p-megamenu-item-active-background | Active background of item |
| megamenu.item.color | megamenu.item.color | --p-megamenu-item-color | Color of item |
| megamenu.item.focusColor | megamenu.item.focus.color | --p-megamenu-item-focus-color | Focus color of item |
| megamenu.item.activeColor | megamenu.item.active.color | --p-megamenu-item-active-color | Active color of item |
| megamenu.item.padding | megamenu.item.padding | --p-megamenu-item-padding | Padding of item |
| megamenu.item.borderRadius | megamenu.item.border.radius | --p-megamenu-item-border-radius | Border radius of item |
| megamenu.item.gap | megamenu.item.gap | --p-megamenu-item-gap | Gap of item |
| megamenu.item.icon.color | megamenu.item.icon.color | --p-megamenu-item-icon-color | Icon color of item |
| megamenu.item.icon.focusColor | megamenu.item.icon.focus.color | --p-megamenu-item-icon-focus-color | Icon focus color of item |
| megamenu.item.icon.activeColor | megamenu.item.icon.active.color | --p-megamenu-item-icon-active-color | Icon active color of item |
| megamenu.overlay.padding | megamenu.overlay.padding | --p-megamenu-overlay-padding | Padding of overlay |
| megamenu.overlay.background | megamenu.overlay.background | --p-megamenu-overlay-background | Background of overlay |
| megamenu.overlay.borderColor | megamenu.overlay.border.color | --p-megamenu-overlay-border-color | Border color of overlay |
| megamenu.overlay.borderRadius | megamenu.overlay.border.radius | --p-megamenu-overlay-border-radius | Border radius of overlay |
| megamenu.overlay.color | megamenu.overlay.color | --p-megamenu-overlay-color | Color of overlay |
| megamenu.overlay.shadow | megamenu.overlay.shadow | --p-megamenu-overlay-shadow | Shadow of overlay |
| megamenu.overlay.gap | megamenu.overlay.gap | --p-megamenu-overlay-gap | Gap of overlay |
| megamenu.submenu.padding | megamenu.submenu.padding | --p-megamenu-submenu-padding | Padding of submenu |
| megamenu.submenu.gap | megamenu.submenu.gap | --p-megamenu-submenu-gap | Gap of submenu |
| megamenu.submenuLabel.padding | megamenu.submenu.label.padding | --p-megamenu-submenu-label-padding | Padding of submenu label |
| megamenu.submenuLabel.fontWeight | megamenu.submenu.label.font.weight | --p-megamenu-submenu-label-font-weight | Font weight of submenu label |
| megamenu.submenuLabel.background | megamenu.submenu.label.background | --p-megamenu-submenu-label-background | Background of submenu label |
| megamenu.submenuLabel.color | megamenu.submenu.label.color | --p-megamenu-submenu-label-color | Color of submenu label |
| megamenu.submenuIcon.size | megamenu.submenu.icon.size | --p-megamenu-submenu-icon-size | Size of submenu icon |
| megamenu.submenuIcon.color | megamenu.submenu.icon.color | --p-megamenu-submenu-icon-color | Color of submenu icon |
| megamenu.submenuIcon.focusColor | megamenu.submenu.icon.focus.color | --p-megamenu-submenu-icon-focus-color | Focus color of submenu icon |
| megamenu.submenuIcon.activeColor | megamenu.submenu.icon.active.color | --p-megamenu-submenu-icon-active-color | Active color of submenu icon |
| megamenu.separator.borderColor | megamenu.separator.border.color | --p-megamenu-separator-border-color | Border color of separator |
| megamenu.mobileButton.borderRadius | megamenu.mobile.button.border.radius | --p-megamenu-mobile-button-border-radius | Border radius of mobile button |
| megamenu.mobileButton.size | megamenu.mobile.button.size | --p-megamenu-mobile-button-size | Size of mobile button |
| megamenu.mobileButton.color | megamenu.mobile.button.color | --p-megamenu-mobile-button-color | Color of mobile button |
| megamenu.mobileButton.hoverColor | megamenu.mobile.button.hover.color | --p-megamenu-mobile-button-hover-color | Hover color of mobile button |
| megamenu.mobileButton.hoverBackground | megamenu.mobile.button.hover.background | --p-megamenu-mobile-button-hover-background | Hover background of mobile button |
| megamenu.mobileButton.focusRing.width | megamenu.mobile.button.focus.ring.width | --p-megamenu-mobile-button-focus-ring-width | Focus ring width of mobile button |
| megamenu.mobileButton.focusRing.style | megamenu.mobile.button.focus.ring.style | --p-megamenu-mobile-button-focus-ring-style | Focus ring style of mobile button |
| megamenu.mobileButton.focusRing.color | megamenu.mobile.button.focus.ring.color | --p-megamenu-mobile-button-focus-ring-color | Focus ring color of mobile button |
| megamenu.mobileButton.focusRing.offset | megamenu.mobile.button.focus.ring.offset | --p-megamenu-mobile-button-focus-ring-offset | Focus ring offset of mobile button |
| megamenu.mobileButton.focusRing.shadow | megamenu.mobile.button.focus.ring.shadow | --p-megamenu-mobile-button-focus-ring-shadow | Focus ring shadow of mobile button |

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

[View Official Documentation](https://primeng.org/megamenu)
