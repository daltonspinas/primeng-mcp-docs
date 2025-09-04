# Speed Dial

SpeedDial is a floating button with a popup menu.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { SpeedDialModule } from 'primeng/speeddial';
```

### Linear {#linear}

SpeedDial items are defined with the model property based on MenuModel API. Default orientation of the items is linear and direction property is used to define the position of the items related to the button.

```html
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
<p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
```

### Circle {#circle}

Items can be displayed around the button when type is set to circle. Additional radius property defines the radius of the circle.

```html
<p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />
```

### Semi Circle {#semi-circle}

When type is defined as semi-circle, items are displayed in a half-circle around the button.

```html
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
```

### Quarter Circle {#quarter-circle}

When type is defined as quarter-circle, items are displayed in a half-circle around the button.

```html
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />
```

### Tooltip {#tooltip}

Items display a tooltip on hover when a standalone Tooltip is present with a target that matches the items.

```html
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />
```

### Mask {#mask}

Adding mask property displays a modal layer behind the popup items.

```html
<p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
```

### Template {#template}

SpeedDial offers item customization with the item template that receives the menuitem instance from the model as a parameter. The button has its own button template, additional template named icon is provided to embed icon content for default button.

```html
<p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
    <ng-template #button let-toggleCallback="toggleCallback">
        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-primary-color)" />
            </svg>
        </p-button>
    </ng-template>
    <ng-template #item let-item let-toggleCallback="toggleCallback">
        <div
            class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
            (click)="toggleCallback($event, item)"
        >
            <span [class]="item.icon"></span>
            <span>
                {{ item.label }}
            </span>
        </div>
    </ng-template>
</p-speeddial>
```

### Accessibility {#accessibility}

SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the aria-labelledby or aria-label props. Addititonally the button includes includes aria-haspopup, aria-expanded for states along with aria-controls to define the relation between the popup and the button.

```html
<p-speeddial aria-label="Options" />
```

### SpeedDial {#speeddial}

When pressed, a floating action button can display multiple primary actions that can be performed on a page.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Speed Dial API

API defines helper props, events and others for the PrimeNG Speed Dial module.

#### SpeedDial {#api-speeddial}

When pressed, a floating action button can display multiple primary actions that can be performed on a page.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| id | string | null | List of items id. |
| model | MenuItem[] | null | MenuModel instance to define the action items. |
| visible | boolean | null | Specifies the visibility of the overlay. |
| style | { [klass: string]: any } | null | Inline style of the element. |
| className | string | null | Style class of the element. |
| transitionDelay | number | 30 | Transition delay step for each action item. |
| type | "circle" | "linear" | "semi-circle" | "quarter-circle" | linear | Specifies the opening type of actions. |
| radius | number | 0 | Radius for *circle types. |
| mask | boolean | false | Whether to show a mask element behind the speeddial. |
| disabled | boolean | false | Whether the component is disabled. |
| hideOnClickOutside | boolean | true | Whether the actions close when clicked outside. |
| buttonStyle | { [klass: string]: any } | null | Inline style of the button element. |
| buttonClassName | string | null | Style class of the button element. |
| maskStyle | { [klass: string]: any } | null | Inline style of the mask element. |
| maskClassName | string | null | Style class of the mask element. |
| showIcon | string | null | Show icon of the button element. |
| hideIcon | string | null | Hide icon of the button element. |
| rotateAnimation | boolean | true | Defined to rotate showIcon when hideIcon is not present. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| tooltipOptions | TooltipOptions | null | Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'. |
| buttonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the Button component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onVisibleChange | value :  boolean | Fired when the visibility of element changed. |
| visibleChange | value :  boolean | Fired when the visibility of element changed. |
| onClick | event :  MouseEvent | Fired when the button element clicked. |
| onShow | event :  Event | Fired when the actions are visible. |
| onHide | event :  Event | Fired when the actions are hidden. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| button |  | Template of the button. |
| item |  | Template of the item. |
| icon |  | Template of the item. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Speed Dial Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-speeddial | Class name of the root element |
| p-speeddial-button | Class name of the button element |
| p-speeddial-list | Class name of the list element |
| p-speeddial-item | Class name of the item element |
| p-speeddial-action | Class name of the action element |
| p-speeddial-action-icon | Class name of the action icon element |
| p-speeddial-mask | Class name of the mask element |

#### Speed Dial Design Tokens {#theming-speed-dial-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| speeddial.root.gap | speeddial.gap | --p-speeddial-gap | Gap of root |
| speeddial.root.transitionDuration | speeddial.transition.duration | --p-speeddial-transition-duration | Transition duration of root |

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

[View Official Documentation](https://primeng.org/speeddial)
