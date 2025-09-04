# PickList

PickList is used to reorder items between different lists.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { PickListModule } from 'primeng/picklist';
```

### Basic {#basic}

PickList is used as a controlled input with source and target properties. Content of a list item needs to be defined with the item template that receives an object in the list as parameter. Drag & drop functionality depends on @angular/cdk package.

```html
<p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" breakpoint="1400px">
    <ng-template let-item #item>
        {{ item.name }}
    </ng-template>
</p-picklist>
```

### Filter {#filter}

Filter value is checked against the property of an object configured with the filterBy property.

```html
<p-picklist
    [source]="sourceProducts"
    [target]="targetProducts"
    [dragdrop]="true"
    [responsive]="true"
    filterBy="name"
    sourceFilterPlaceholder="Search by name"
    targetFilterPlaceholder="Search by name"
    breakpoint="1400px"
    scrollHeight="20rem"
>
    <ng-template let-option let-selected="selected" #option>
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
</p-picklist>
```

### Template {#template}

For custom content support define an item template that gets the item instance as a parameter. In addition sourceheader and targetheader templates are provided for further customization.

```html
<p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" breakpoint="1400px" scrollHeight="20rem">
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
</p-picklist>
```

### Accessibility {#accessibility}

Value to describe the source listbox and target listbox can be provided with ariaLabelledBy or ariaLabel props. The list elements has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected and aria-disabled as their attributes.

```html
<span id="lb">Options</span>
<p-picklist ariaLabelledBy="lb" />

<p-picklist ariaLabel="City" />
```

### PickList {#picklist}

PickList is used to reorder items between different lists.

[↑ Back to Top](#table-of-contents)

## API {#api}

### PickList API

API defines helper props, events and others for the PrimeNG PickList module.

#### PickList {#api-picklist}

PickList is used to reorder items between different lists.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| source | any[] | null | An array of objects for the source list. |
| target | any[] | null | An array of objects for the target list. |
| sourceHeader | string | null | Text for the source list caption |
| tabindex | number | 0 | Index of the element in tabbing order. |
| rightButtonAriaLabel | string | null | Defines a string that labels the move to right button for accessibility. |
| leftButtonAriaLabel | string | null | Defines a string that labels the move to left button for accessibility. |
| allRightButtonAriaLabel | string | null | Defines a string that labels the move to all right button for accessibility. |
| allLeftButtonAriaLabel | string | null | Defines a string that labels the move to all left button for accessibility. |
| upButtonAriaLabel | string | null | Defines a string that labels the move to up button for accessibility. |
| downButtonAriaLabel | string | null | Defines a string that labels the move to down button for accessibility. |
| topButtonAriaLabel | string | null | Defines a string that labels the move to top button for accessibility. |
| bottomButtonAriaLabel | string | null | Defines a string that labels the move to bottom button for accessibility. |
| targetHeader | string | null | Text for the target list caption |
| responsive | boolean | false | When enabled orderlist adjusts its controls based on screen size. |
| filterBy | string | null | When specified displays an input field to filter the items on keyup and decides which field to search (Accepts multiple fields with a comma). |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| trackBy | Function | ... | Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity. Use sourceTrackBy or targetTrackBy in case different algorithms are needed per list. |
| sourceTrackBy | Function | null | Function to optimize the dom operations by delegating to ngForTrackBy in source list, default algorithm checks for object identity. |
| targetTrackBy | Function | null | Function to optimize the dom operations by delegating to ngForTrackBy in target list, default algorithm checks for object identity. |
| showSourceFilter | boolean | true | Whether to show filter input for source list when filterBy is enabled. |
| showTargetFilter | boolean | true | Whether to show filter input for target list when filterBy is enabled. |
| metaKeySelection | boolean | false | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| dragdrop | boolean | false | Whether to enable dragdrop based reordering. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| sourceStyle | any | null | Inline style of the source list element. |
| targetStyle | any | null | Inline style of the target list element. |
| showSourceControls | boolean | true | Whether to show buttons of source list. |
| showTargetControls | boolean | true | Whether to show buttons of target list. |
| sourceFilterPlaceholder | string | null | Placeholder text on source filter input. |
| targetFilterPlaceholder | string | null | Placeholder text on target filter input. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| sourceOptionDisabled | string | ((item: any) => boolean) | null | Name of the disabled field of a target option or function to determine disabled state. |
| targetOptionDisabled | string | ((item: any) => boolean) | null | Name of the disabled field of a target option or function to determine disabled state. |
| ariaSourceFilterLabel | string | null | Defines a string that labels the filter input of source list. |
| ariaTargetFilterLabel | string | null | Defines a string that labels the filter input of target list. |
| filterMatchMode | string | contains | Defines how the items are filtered. |
| stripedRows | boolean | false | Whether to displays rows with alternating colors. |
| keepSelection | boolean | false | Keeps selection on the transfer list. |
| scrollHeight | string | 14rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| autoOptionFocus | boolean | true | Whether to focus on the first visible or selected element. |
| buttonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |
| moveUpButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move up button inside the component. |
| moveTopButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move top button inside the component. |
| moveDownButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move down button inside the component. |
| moveBottomButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move bottom button inside the component. |
| moveToTargetProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move to target button inside the component. |
| moveAllToTargetProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move all to target button inside the component. |
| moveToSourceProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move to source button inside the component. |
| moveAllToSourceProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the move all to source button inside the component. |
| breakpoint | string | null | Indicates the width of the screen at which the component should change its behavior. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onMoveToSource | event :  PickListMoveToSourceEvent | Callback to invoke when items are moved from target to source. |
| onMoveAllToSource | event :  PickListMoveAllToSourceEvent | Callback to invoke when all items are moved from target to source. |
| onMoveAllToTarget | event :  PickListMoveAllToTargetEvent | Callback to invoke when all items are moved from source to target. |
| onMoveToTarget | event :  PickListMoveToTargetEvent | Callback to invoke when items are moved from source to target. |
| onSourceReorder | event :  PickListSourceReorderEvent | Callback to invoke when items are reordered within source list. |
| onTargetReorder | event :  PickListTargetReorderEvent | Callback to invoke when items are reordered within target list. |
| onSourceSelect | event :  PickListSourceSelectEvent | Callback to invoke when items are selected within source list. |
| onTargetSelect | event :  PickListTargetSelectEvent | Callback to invoke when items are selected within target list. |
| onSourceFilter | event :  PickListSourceFilterEvent | Callback to invoke when the source list is filtered |
| onTargetFilter | event :  PickListTargetFilterEvent | Callback to invoke when the target list is filtered |
| onFocus | event :  Event | Callback to invoke when the list is focused |
| onBlur | event :  Event | Callback to invoke when the list is blurred |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Custom item template. |
| sourceheader |  | Custom source header template. |
| targetheader |  | Custom target header template. |
| sourcefilter |  | Custom source filter template. |
| targetfilter |  | Custom target filter template. |
| emptymessagesource |  | Custom empty message when source is empty template. |
| emptyfiltermessagesource |  | Custom empty filter message when source is empty template. |
| emptymessagetarget |  | Custom empty message when target is empty template. |
| emptyfiltermessagetarget |  | Custom empty filter message when target is empty template. |
| moveupicon |  | Custom move up icon template. |
| movetopicon |  | Custom move top icon template. |
| movedownicon |  | Custom move down icon template. |
| movebottomicon |  | Custom move bottom icon template. |
| movetotargeticon |  | Custom move to target icon template. |
| movealltotargeticon |  | Custom move all to target icon template. |
| movetosourceicon |  | Custom move to source icon template. |
| movealltosourceicon |  | Custom move all to source icon template. |
| targetfiltericon |  | Custom target filter icon template. |
| sourcefiltericon |  | Custom source filter icon template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### PickList Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-picklist | Class name of the root element |
| p-picklist-source-controls | Class name of the source controls element |
| p-picklist-source-list-container | Class name of the source list container element |
| p-picklist-transfer-controls | Class name of the transfer controls element |
| p-picklist-target-list-container | Class name of the target list container element |
| p-picklist-target-controls | Class name of the target controls element |

#### PickList Design Tokens {#theming-picklist-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| picklist.root.gap | picklist.gap | --p-picklist-gap | Gap of root |
| picklist.controls.gap | picklist.controls.gap | --p-picklist-controls-gap | Gap of controls |

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

[View Official Documentation](https://primeng.org/picklist)
