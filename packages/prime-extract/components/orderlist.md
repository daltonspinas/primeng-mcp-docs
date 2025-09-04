# OrderList

OrderList is used to sort a collection.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { OrderListModule } from 'primeng/orderlist';
```

### Basic {#basic}

OrderList is used as a controlled input with value property. Content of a list item needs to be defined with the item template that receives an object in the list as parameter.

```html
<p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px">
    <ng-template #item let-option>
        {{ option.name }}
    </ng-template>
</p-orderlist>
```

### Filter {#filter}

Filter value is checked against the property of an object configured with the filterBy property

```html
<p-orderlist [value]="products" filterBy="name" filterPlaceholder="Filter by name" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>
```

### Template {#template}

For custom content support define an item template that gets the item instance as a parameter. In addition header template is provided for further customization.

```html
<p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>
```

### Accessibility {#accessibility}

Value to describe the source listbox and target listbox can be provided with sourceListProps and targetListProps by passing aria-labelledby or aria-label props. The list elements has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected and aria-disabled as their attributes.

```html
<span id="lb">Options</span>
<p-orderlist ariaLabelledBy="lb" />

<p-orderlist ariaLabel="City" />
```

### OrderList {#orderlist}

OrderList is used to manage the order of a collection.

[↑ Back to Top](#table-of-contents)

## API {#api}

### OrderList API

API defines helper props, events and others for the PrimeNG OrderList module.

#### OrderList {#api-orderlist}

OrderList is used to manage the order of a collection.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| header | string | null | Text for the caption. |
| styleClass | string | null | Style class of the component. |
| tabindex | number | null | Index of the element in tabbing order. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Specifies one or more IDs in the DOM that labels the input field. |
| listStyle | { [klass: string]: any } | null | Inline style of the list element. |
| responsive | boolean | false | A boolean value that indicates whether the component should be responsive. |
| filterBy | string | null | When specified displays an input field to filter the items on keyup and decides which fields to search against. |
| filterPlaceholder | string | null | Placeholder of the filter input. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| metaKeySelection | boolean | false | When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| dragdrop | boolean | false | Whether to enable dragdrop based reordering. |
| controlsPosition | "right" | "left" | left | Defines the location of the buttons with respect to the list. |
| ariaFilterLabel | string | null | Defines a string that labels the filter input. |
| filterMatchMode | "gt" | "lt" | "in" | "startsWith" | "contains" | "endsWith" | "equals" | "notEquals" | "lte" | "gte" | contains | Defines how the items are filtered. |
| breakpoint | string | 960px | Indicates the width of the screen at which the component should change its behavior. |
| stripedRows | boolean | false | Whether to displays rows with alternating colors. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| trackBy | Function | ... | Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity. |
| scrollHeight | string | 14rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| autoOptionFocus | boolean | true | Whether to focus on the first visible or selected element. |
| selection | any[] | null | A list of values that are currently selected. |
| value | any[] | null | Array of values to be displayed in the component.
It represents the data source for the list of items. |
| buttonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |
| moveUpButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move up button inside the component. |
| moveTopButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move top button inside the component. |
| moveDownButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move down button inside the component. |
| moveBottomButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move bottom button inside the component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| selectionChange | value :  any | Callback to invoke on selection change. |
| onReorder | value :  any | Callback to invoke when list is reordered. |
| onSelectionChange | event :  OrderListSelectionChangeEvent | Callback to invoke when selection changes. |
| onFilterEvent | event :  OrderListFilterEvent | Callback to invoke when filtering occurs. |
| onFocus | event :  Event | Callback to invoke when the list is focused |
| onBlur | event :  Event | Callback to invoke when the list is blurred |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| resetFilter |  | Callback to invoke on filter reset. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Custom item template. |
| emptymessage |  | Custom empty template. |
| emptyfiltermessage |  | Custom empty filter template. |
| filter |  | Custom filter template. |
| header |  | Custom header template. |
| moveupicon |  | Custom move up icon template. |
| movetopicon |  | Custom move top icon template. |
| movedownicon |  | Custom move down icon template. |
| movebottomicon |  | Custom move bottom icon template. |
| filtericon |  | Custom filter icon template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### OrderList Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-orderlist | Class name of the root element |
| p-orderlist-controls | Class name of the controls element |

#### OrderList Design Tokens {#theming-orderlist-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| orderlist.root.gap | orderlist.gap | --p-orderlist-gap | Gap of root |
| orderlist.controls.gap | orderlist.controls.gap | --p-orderlist-controls-gap | Gap of controls |

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

[View Official Documentation](https://primeng.org/orderlist)
