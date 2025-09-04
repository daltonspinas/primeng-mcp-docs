# Listbox

Listbox is used to select one or more values from a list of items.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ListboxModule } from 'primeng/listbox';
```

### Basic {#basic}

Listbox is used as a controlled component with ngModel property along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Default property name for the optionLabel is label and value for the optionValue. If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" />
```

### Checkmark {#checkmark}

An alternative way to highlight the selected option is displaying a checkmark instead.

```html
<p-listbox [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" [checkmark]="true" [highlightOnSelect]="false" class="w-full md:w-56"/>
```

### Checkbox {#checkbox}

Listbox allows item selection using checkboxes.

```html
<p-listbox [(ngModel)]="selectedCity" [options]="cities" [multiple]="true" [checkbox]="true" optionLabel="name" class="w-full md:w-56" />
```

### Multiple {#multiple}

ListBox allows choosing a single item by default, enable multiple property to choose more than one. When the optional metaKeySelection is present, behavior is changed in a way that selecting a new item requires meta key to be present.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true" [metaKeySelection]="false" class="w-full md:w-56" />
```

### Group {#group}

Options can be grouped when a nested data structures is provided.

```html
<p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-listbox>
```

### Filter {#filter}

ListBox provides built-in filtering that is enabled by adding the filter property.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [filter]="true" class="w-full md:w-56" />
```

### Template {#template}

For custom content support define a template named item where the default local template variable refers to an option.

```html
<p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" class="w-full md:w-56">
    <ng-template #item let-country>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-listbox>
```

### Virtual Scroll {#virtual-scroll}

VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-listbox [options]="items" [(ngModel)]="selectedItems" [checkbox]="true" [filter]="true" [selectAll]="selectAll" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="40" [multiple]="true" [metaKeySelection]="false" (onSelectAllChange)="onSelectAllChange($event)" (onChange)="onChange($event)" scrollHeight="250px" [striped]="true" class="w-full md:w-56" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" [invalid]="selectedCity === undefined" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
```

### Forms {#forms}

Listbox can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-listbox #city="ngModel" [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" [invalid]="city.invalid && exampleForm.submitted" name="city" required />
        @if (city.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-listbox [options]="cities" formControlName="selectedCity" optionLabel="name" class="w-full md:w-56" [invalid]="isInvalid('selectedCity')" />
        @if (isInvalid('selectedCity')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can be provided ariaLabelledBy or ariaLabel props. The list element has a listbox role with the aria-multiselectable attribute that sets to true when multiple selection is enabled. Each list item has an option role with aria-selected and aria-disabled as their attributes.

```html
<span id="lb">Options</span>
<p-listbox ariaLabelledBy="lb"/>

<p-listbox ariaLabel="City"/>
```

### Listbox {#listbox}

ListBox is used to select one or more values from a list of items.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Listbox API

API defines helper props, events and others for the PrimeNG Listbox module.

#### Listbox {#api-listbox}

ListBox is used to select one or more values from a list of items.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| id | string | null | Unique identifier of the component. |
| searchMessage | string | '{0} results are available' | Text to display when the search is active. Defaults to global value in i18n translation configuration. |
| emptySelectionMessage | string | 'No selected item' | Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration. |
| autoOptionFocus | boolean | true | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| selectOnFocus | boolean | false | When enabled, the focused option is selected. |
| searchLocale | boolean | false | Locale to use in searching. The default locale is the host environment's current locale. |
| focusOnHover | boolean | true | When enabled, the hovered option will be focused. |
| filterMessage | string | null | Text to display when filtering. |
| filterFields | any[] | null | Fields used when filtering the options, defaults to optionLabel. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| virtualScrollItemSize | number | null | Height of an item in the list for VirtualScrolling. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| scrollHeight | string | 14rem | Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| multiple | boolean | false | When specified, allows selecting multiple values. |
| styleClass | string | null | Style class of the container. |
| listStyle | { [klass: string]: any } | null | Inline style of the list element. |
| listStyleClass | string | null | Style class of the list element. |
| readonly | boolean | false | When present, it specifies that the element value cannot be changed. |
| checkbox | boolean | false | When specified, allows selecting items with checkboxes. |
| filter | boolean | false | When specified, displays a filter input at header. |
| filterBy | string | null | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. |
| filterMatchMode | string | contains | Defines how the items are filtered. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| metaKeySelection | boolean | false | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| dataKey | string | null | A property to uniquely identify a value in options. |
| showToggleAll | boolean | true | Whether header checkbox is shown in multiple mode. |
| optionLabel | string | null | Name of the label field of an option. |
| optionValue | string | null | Name of the value field of an option. |
| optionGroupChildren | string | items | Name of the options field of an option group. |
| optionGroupLabel | string | label | Name of the label field of an option group. |
| optionDisabled | string | ((item: any) => boolean) | null | Name of the disabled field of an option or function to determine disabled state. |
| ariaFilterLabel | string | null | Defines a string that labels the filter input. |
| filterPlaceHolder | string | null | Defines placeholder of the filter input. |
| emptyFilterMessage | string | null | Text to display when filtering does not return any results. |
| emptyMessage | string | null | Text to display when there is no data. Defaults to global value in i18n translation configuration. |
| group | boolean | false | Whether to display options as grouped when nested options are provided. |
| options | any[] | null | An array of selectitems to display as the available options. |
| filterValue | string | null | When specified, filter displays with this value. |
| selectAll | boolean | null | Whether all data is selected. |
| striped | boolean | false | Whether to displays rows with alternating colors. |
| highlightOnSelect | boolean | true | Whether the selected option will be add highlight class. |
| checkmark | boolean | false | Whether the selected option will be shown with a check mark. |
| dragdrop | boolean | false | Whether to enable dragdrop based reordering. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  ListboxChangeEvent | Callback to invoke on value change. |
| onClick | event :  ListboxClickEvent | Callback to invoke when option is clicked. |
| onDblClick | event :  ListboxDoubleClickEvent | Callback to invoke when option is double clicked. |
| onFilter | event :  ListboxFilterEvent | Callback to invoke when data is filtered. |
| onFocus | event :  FocusEvent | Callback to invoke when component receives focus. |
| onBlur | event :  FocusEvent | Callback to invoke when component loses focus. |
| onSelectAllChange | event :  ListboxSelectAllChangeEvent | Callback to invoke when all data is selected. |
| onLazyLoad | event :  ScrollerLazyLoadEvent | Emits on lazy load. |
| onDrop | value :  CdkDragDrop | Emits on item is dropped. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| updateModel | value :  anyevent :  any | Updates the model value. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Custom item template. |
| group |  | Custom group template. |
| header |  | Custom header template. |
| filter |  | Custom filter template. |
| footer |  | Custom footer template. |
| emptyfilter |  | Custom empty filter message template. |
| empty |  | Custom empty message template. |
| filtericon |  | Custom filter icon template. |
| checkicon |  | Custom check icon template. |
| checkmark |  | Custom checkmark icon template. |
| loader |  | Custom loader template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Listbox Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-listbox | Class name of the root element |
| p-listbox-header | Class name of the header element |
| p-listbox-filter | Class name of the filter element |
| p-listbox-list-container | Class name of the list container element |
| p-listbox-list | Class name of the list element |
| p-listbox-option-group | Class name of the option group element |
| p-listbox-option | Class name of the option element |
| p-listbox-option-check-icon | Class name of the option check icon element |
| p-listbox-option-blank-icon | Class name of the option blank icon element |
| p-listbox-empty-message | Class name of the empty message element |

#### Listbox Design Tokens {#theming-listbox-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| listbox.root.background | listbox.background | --p-listbox-background | Background of root |
| listbox.root.disabledBackground | listbox.disabled.background | --p-listbox-disabled-background | Disabled background of root |
| listbox.root.borderColor | listbox.border.color | --p-listbox-border-color | Border color of root |
| listbox.root.invalidBorderColor | listbox.invalid.border.color | --p-listbox-invalid-border-color | Invalid border color of root |
| listbox.root.color | listbox.color | --p-listbox-color | Color of root |
| listbox.root.disabledColor | listbox.disabled.color | --p-listbox-disabled-color | Disabled color of root |
| listbox.root.shadow | listbox.shadow | --p-listbox-shadow | Shadow of root |
| listbox.root.borderRadius | listbox.border.radius | --p-listbox-border-radius | Border radius of root |
| listbox.root.transitionDuration | listbox.transition.duration | --p-listbox-transition-duration | Transition duration of root |
| listbox.list.padding | listbox.list.padding | --p-listbox-list-padding | Padding of list |
| listbox.list.gap | listbox.list.gap | --p-listbox-list-gap | Gap of list |
| listbox.list.header.padding | listbox.list.header.padding | --p-listbox-list-header-padding | Header padding of list |
| listbox.option.focusBackground | listbox.option.focus.background | --p-listbox-option-focus-background | Focus background of option |
| listbox.option.selectedBackground | listbox.option.selected.background | --p-listbox-option-selected-background | Selected background of option |
| listbox.option.selectedFocusBackground | listbox.option.selected.focus.background | --p-listbox-option-selected-focus-background | Selected focus background of option |
| listbox.option.color | listbox.option.color | --p-listbox-option-color | Color of option |
| listbox.option.focusColor | listbox.option.focus.color | --p-listbox-option-focus-color | Focus color of option |
| listbox.option.selectedColor | listbox.option.selected.color | --p-listbox-option-selected-color | Selected color of option |
| listbox.option.selectedFocusColor | listbox.option.selected.focus.color | --p-listbox-option-selected-focus-color | Selected focus color of option |
| listbox.option.padding | listbox.option.padding | --p-listbox-option-padding | Padding of option |
| listbox.option.borderRadius | listbox.option.border.radius | --p-listbox-option-border-radius | Border radius of option |
| listbox.option.stripedBackground | listbox.option.striped.background | --p-listbox-option-striped-background | Striped background of option |
| listbox.optionGroup.background | listbox.option.group.background | --p-listbox-option-group-background | Background of option group |
| listbox.optionGroup.color | listbox.option.group.color | --p-listbox-option-group-color | Color of option group |
| listbox.optionGroup.fontWeight | listbox.option.group.font.weight | --p-listbox-option-group-font-weight | Font weight of option group |
| listbox.optionGroup.padding | listbox.option.group.padding | --p-listbox-option-group-padding | Padding of option group |
| listbox.checkmark.color | listbox.checkmark.color | --p-listbox-checkmark-color | Color of checkmark |
| listbox.checkmark.gutterStart | listbox.checkmark.gutter.start | --p-listbox-checkmark-gutter-start | Gutter start of checkmark |
| listbox.checkmark.gutterEnd | listbox.checkmark.gutter.end | --p-listbox-checkmark-gutter-end | Gutter end of checkmark |
| listbox.emptyMessage.padding | listbox.empty.message.padding | --p-listbox-empty-message-padding | Padding of empty message |

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

[View Official Documentation](https://primeng.org/listbox)
