# Select

Select is used to choose an item from a collection of options.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { SelectModule } from 'primeng/select';
```

### Basic {#basic}

Select is used as a controlled component with ngModel property along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

### Checkmark {#checkmark}

An alternative way to highlight the selected option is displaying a checkmark instead.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
```

### Editable {#editable}

When editable is present, the input can also be entered with typing.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name" class="w-full md:w-56" />
```

### Group {#group}

Options can be grouped when a nested data structures is provided.

```html
<p-select [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-select>
```

### Template {#template}

Both the selected option and the options list can be templated to provide customizated representation. Use selectedItem template to customize the selected label display and the item template to change the content of the options in the select panel. In addition when grouping is enabled, group template is available to customize the option groups. All templates get the option instance as the default local template variable.

```html
<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" placeholder="Select a country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2" *ngIf="selectedOption">
            <img
                src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + selectedOption.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img
                src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + country.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium p-3">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-select>
```

### Filter {#filter}

Select provides built-in filtering that is enabled by adding the filter property.

```html
<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-select>
```

### Clear Icon {#clear-icon}

When showClear is enabled, a clear icon is added to reset the Select.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
```

### Loading State {#loading-state}

Loading state can be used loading property.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-56" />
```

### Virtual Scroll {#virtual-scroll}

VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" class="w-full md:w-56" />
```

### Lazy Virtual Scroll {#lazy-virtual-scroll}

```html
<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options" class="w-full md:w-56" />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel class="w-full md:w-56">
    <p-select [(ngModel)]="value1" inputId="over_label" [options]="cities" optionLabel="name" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="in">
    <p-select [(ngModel)]="value2" inputId="in_label" [options]="cities" optionLabel="name" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="on">
    <p-select [(ngModel)]="value3" inputId="on_label" [options]="cities" optionLabel="name" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel class="w-full md:w-56">
    <p-select [(ngModel)]="selectedCity" inputId="dd-city" [options]="cities" optionLabel="name" class="w-full" />
    <label for="dd-city">City</label>
</p-iftalabel>
```

### Sizes {#sizes}

Select provides small and large sizes as alternatives to the base.

```html
<p-select [(ngModel)]="value1" [options]="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
<p-select [(ngModel)]="value2" [options]="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
<p-select [(ngModel)]="value3" [options]="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity1" optionLabel="name" [showClear]="true" [invalid]="value1" placeholder="Select a City" class="w-full md:w-56" />
<p-select [options]="cities" [(ngModel)]="selectedCity2" optionLabel="name" [showClear]="true" [invalid]="value2" placeholder="Select a City" class="w-full md:w-56" variant="filled"/>
```

### Forms {#forms}

Select can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <p-select #city="ngModel" [(ngModel)]="selectedCity" [options]="cities" [invalid]="city.invalid && (city.touched || exampleForm.submitted)" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" required />
        @if (city.invalid && (city.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <p-select formControlName="selectedCity" [options]="cities" [invalid]="isInvalid('city')" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
        @if (isInvalid('city')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can either be provided with ariaLabelledBy or ariaLabel props. The select element has a combobox role in addition to aria-haspopup and aria-expanded attributes. If the editable option is enabled aria-autocomplete is also added. The relation between the combobox and the popup is created with aria-controls and aria-activedescendant attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list.

```html
<span id="dd1">Options</span>
<p-select ariaLabelledBy="dd1"/>

<p-select ariaLabel="Options"/>
```

### Select {#select}

Select is used to choose an item from a collection of options.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Select API

API defines helper props, events and others for the PrimeNG Select module.

#### Select {#api-select}

Select is used to choose an item from a collection of options.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| fluid | InputSignalWithTransform<boolean, unknown> | false | Spans 100% width of the container when enabled. |
| variant | InputSignal<"outlined" | "filled"> | 'outlined' | Specifies the input variant of the component. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| inputSize | InputSignal<number> | undefined | Specifies the visible width of the input element in characters. |
| pattern | InputSignal<string> | undefined | Specifies the value must match the pattern. |
| min | InputSignal<number> | undefined | The value must be greater than or equal to the value. |
| max | InputSignal<number> | undefined | The value must be less than or equal to the value. |
| step | InputSignal<number> | undefined | Unless the step is set to the any literal, the value must be min + an integral multiple of the step. |
| minlength | InputSignal<number> | undefined | The number of characters (code points) must not be less than the value of the attribute, if non-empty. |
| maxlength | InputSignal<number> | undefined | The number of characters (code points) must not exceed the value of the attribute. |
| id | string | null | Unique identifier of the component |
| scrollHeight | string | 200px | Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. |
| filter | boolean | false | When specified, displays an input field to filter the items on keyup. |
| panelStyle | { [klass: string]: any } | null | Inline style of the overlay panel element. |
| styleClass | string | null | Style class of the element. |
| panelStyleClass | string | null | Style class of the overlay panel element. |
| readonly | boolean | false | When present, it specifies that the component cannot be edited. |
| editable | boolean | false | When present, custom value instead of predefined options can be entered using the editable input field. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| placeholder | Signal<string> | null | Default text to display when no option is selected. |
| loadingIcon | string | null | Icon to display in loading state. |
| filterPlaceholder | string | null | Placeholder text to show when filter input is empty. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| inputId | string | null | Identifier of the accessible input element. |
| dataKey | string | null | A property to uniquely identify a value in options. |
| filterBy | string | null | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. |
| filterFields | any[] | null | Fields used when filtering the options, defaults to optionLabel. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| resetFilterOnHide | boolean | false | Clears the filter value when hiding the select. |
| checkmark | boolean | false | Whether the selected option will be shown with a check mark. |
| dropdownIcon | string | null | Icon class of the select icon. |
| loading | boolean | false | Whether the select is in loading state. |
| optionLabel | string | null | Name of the label field of an option. |
| optionValue | string | null | Name of the value field of an option. |
| optionDisabled | string | null | Name of the disabled field of an option. |
| optionGroupLabel | string | label | Name of the label field of an option group. |
| optionGroupChildren | string | items | Name of the options field of an option group. |
| group | boolean | false | Whether to display options as grouped when nested options are provided. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| emptyFilterMessage | string | null | Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration. |
| emptyMessage | string | null | Text to display when there is no data. Defaults to global value in i18n translation configuration. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| virtualScrollItemSize | number | null | Height of an item in the list for VirtualScrolling. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| overlayOptions | OverlayOptions | null | Whether to use overlay API feature. The properties of overlay API can be used like an object in it. |
| ariaFilterLabel | string | null | Defines a string that labels the filter input. |
| ariaLabel | string | null | Used to define a aria label attribute the current element. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| filterMatchMode | "gt" | "lt" | "in" | "startsWith" | "contains" | "endsWith" | "equals" | "notEquals" | "lte" | "gte" | contains | Defines how the items are filtered. |
| tooltip | string | null | Advisory information to display in a tooltip on hover. |
| tooltipPosition | "right" | "left" | "top" | "bottom" | right | Position of the tooltip. |
| tooltipPositionStyle | string | absolute | Type of CSS position. |
| tooltipStyleClass | string | null | Style class of the tooltip. |
| focusOnHover | boolean | true | Fields used when filtering the options, defaults to optionLabel. |
| selectOnFocus | boolean | false | Determines if the option will be selected on focus. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| autofocusFilter | boolean | true | Applies focus to the filter element when the overlay is shown. |
| filterValue | string | null | When specified, filter displays with this value. |
| options | any[] | null | An array of objects to display as the available options. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  SelectChangeEvent | Callback to invoke when value of select changes. |
| onFilter | event :  SelectFilterEvent | Callback to invoke when data is filtered. |
| onFocus | event :  Event | Callback to invoke when select gets focus. |
| onBlur | event :  Event | Callback to invoke when select loses focus. |
| onClick | event :  MouseEvent | Callback to invoke when component is clicked. |
| onShow | event :  AnimationEvent | Callback to invoke when select overlay gets visible. |
| onHide | event :  AnimationEvent | Callback to invoke when select overlay gets hidden. |
| onClear | event :  Event | Callback to invoke when select clears the value. |
| onLazyLoad | event :  SelectLazyLoadEvent | Callback to invoke in lazy mode to load new data. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| resetFilter |  | Callback to invoke on filter reset. |
| show | isFocus :  any | Displays the panel. |
| hide | isFocus :  any | Hides the panel. |
| focus |  | Applies focus. |
| clear | event :  Event | Clears the model. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Custom item template. |
| group |  | Custom group template. |
| loader |  | Custom loader template. |
| selecteditem |  | Custom selected item template. |
| header |  | Custom header template. |
| filter |  | Custom filter template. |
| footer |  | Custom footer template. |
| emptyfilter |  | Custom empty filter template. |
| empty |  | Custom empty template. |
| dropdownicon |  | Custom dropdown icon template. |
| loadingicon |  | Custom loading icon template. |
| clearicon |  | Custom clear icon template. |
| filtericon |  | Custom filter icon template. |
| onicon |  | Custom on icon template. |
| officon |  | Custom off icon template. |
| cancelicon |  | Custom cancel icon template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Select Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-select | Class name of the root element |
| p-select-label | Class name of the label element |
| p-select-clear-icon | Class name of the clear icon element |
| p-select-dropdown | Class name of the dropdown element |
| p-select-loading-icon | Class name of the loadingicon element |
| p-select-dropdown-icon | Class name of the dropdown icon element |
| p-select-overlay | Class name of the overlay element |
| p-select-header | Class name of the header element |
| p-select-filter | Class name of the filter element |
| p-select-list-container | Class name of the list container element |
| p-select-list | Class name of the list element |
| p-select-option-group | Class name of the option group element |
| p-select-option-group-label | Class name of the option group label element |
| p-select-option | Class name of the option element |
| p-select-option-label | Class name of the option label element |
| p-select-option-check-icon | Class name of the option check icon element |
| p-select-option-blank-icon | Class name of the option blank icon element |
| p-select-empty-message | Class name of the empty message element |

#### Select Design Tokens {#theming-select-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| select.root.background | select.background | --p-select-background | Background of root |
| select.root.disabledBackground | select.disabled.background | --p-select-disabled-background | Disabled background of root |
| select.root.filledBackground | select.filled.background | --p-select-filled-background | Filled background of root |
| select.root.filledHoverBackground | select.filled.hover.background | --p-select-filled-hover-background | Filled hover background of root |
| select.root.filledFocusBackground | select.filled.focus.background | --p-select-filled-focus-background | Filled focus background of root |
| select.root.borderColor | select.border.color | --p-select-border-color | Border color of root |
| select.root.hoverBorderColor | select.hover.border.color | --p-select-hover-border-color | Hover border color of root |
| select.root.focusBorderColor | select.focus.border.color | --p-select-focus-border-color | Focus border color of root |
| select.root.invalidBorderColor | select.invalid.border.color | --p-select-invalid-border-color | Invalid border color of root |
| select.root.color | select.color | --p-select-color | Color of root |
| select.root.disabledColor | select.disabled.color | --p-select-disabled-color | Disabled color of root |
| select.root.placeholderColor | select.placeholder.color | --p-select-placeholder-color | Placeholder color of root |
| select.root.invalidPlaceholderColor | select.invalid.placeholder.color | --p-select-invalid-placeholder-color | Invalid placeholder color of root |
| select.root.shadow | select.shadow | --p-select-shadow | Shadow of root |
| select.root.paddingX | select.padding.x | --p-select-padding-x | Padding x of root |
| select.root.paddingY | select.padding.y | --p-select-padding-y | Padding y of root |
| select.root.borderRadius | select.border.radius | --p-select-border-radius | Border radius of root |
| select.root.focusRing.width | select.focus.ring.width | --p-select-focus-ring-width | Focus ring width of root |
| select.root.focusRing.style | select.focus.ring.style | --p-select-focus-ring-style | Focus ring style of root |
| select.root.focusRing.color | select.focus.ring.color | --p-select-focus-ring-color | Focus ring color of root |
| select.root.focusRing.offset | select.focus.ring.offset | --p-select-focus-ring-offset | Focus ring offset of root |
| select.root.focusRing.shadow | select.focus.ring.shadow | --p-select-focus-ring-shadow | Focus ring shadow of root |
| select.root.transitionDuration | select.transition.duration | --p-select-transition-duration | Transition duration of root |
| select.root.sm.fontSize | select.sm.font.size | --p-select-sm-font-size | Sm font size of root |
| select.root.sm.paddingX | select.sm.padding.x | --p-select-sm-padding-x | Sm padding x of root |
| select.root.sm.paddingY | select.sm.padding.y | --p-select-sm-padding-y | Sm padding y of root |
| select.root.lg.fontSize | select.lg.font.size | --p-select-lg-font-size | Lg font size of root |
| select.root.lg.paddingX | select.lg.padding.x | --p-select-lg-padding-x | Lg padding x of root |
| select.root.lg.paddingY | select.lg.padding.y | --p-select-lg-padding-y | Lg padding y of root |
| select.dropdown.width | select.dropdown.width | --p-select-dropdown-width | Width of dropdown |
| select.dropdown.color | select.dropdown.color | --p-select-dropdown-color | Color of dropdown |
| select.overlay.background | select.overlay.background | --p-select-overlay-background | Background of overlay |
| select.overlay.borderColor | select.overlay.border.color | --p-select-overlay-border-color | Border color of overlay |
| select.overlay.borderRadius | select.overlay.border.radius | --p-select-overlay-border-radius | Border radius of overlay |
| select.overlay.color | select.overlay.color | --p-select-overlay-color | Color of overlay |
| select.overlay.shadow | select.overlay.shadow | --p-select-overlay-shadow | Shadow of overlay |
| select.list.padding | select.list.padding | --p-select-list-padding | Padding of list |
| select.list.gap | select.list.gap | --p-select-list-gap | Gap of list |
| select.list.header.padding | select.list.header.padding | --p-select-list-header-padding | Header padding of list |
| select.option.focusBackground | select.option.focus.background | --p-select-option-focus-background | Focus background of option |
| select.option.selectedBackground | select.option.selected.background | --p-select-option-selected-background | Selected background of option |
| select.option.selectedFocusBackground | select.option.selected.focus.background | --p-select-option-selected-focus-background | Selected focus background of option |
| select.option.color | select.option.color | --p-select-option-color | Color of option |
| select.option.focusColor | select.option.focus.color | --p-select-option-focus-color | Focus color of option |
| select.option.selectedColor | select.option.selected.color | --p-select-option-selected-color | Selected color of option |
| select.option.selectedFocusColor | select.option.selected.focus.color | --p-select-option-selected-focus-color | Selected focus color of option |
| select.option.padding | select.option.padding | --p-select-option-padding | Padding of option |
| select.option.borderRadius | select.option.border.radius | --p-select-option-border-radius | Border radius of option |
| select.optionGroup.background | select.option.group.background | --p-select-option-group-background | Background of option group |
| select.optionGroup.color | select.option.group.color | --p-select-option-group-color | Color of option group |
| select.optionGroup.fontWeight | select.option.group.font.weight | --p-select-option-group-font-weight | Font weight of option group |
| select.optionGroup.padding | select.option.group.padding | --p-select-option-group-padding | Padding of option group |
| select.clearIcon.color | select.clear.icon.color | --p-select-clear-icon-color | Color of clear icon |
| select.checkmark.color | select.checkmark.color | --p-select-checkmark-color | Color of checkmark |
| select.checkmark.gutterStart | select.checkmark.gutter.start | --p-select-checkmark-gutter-start | Gutter start of checkmark |
| select.checkmark.gutterEnd | select.checkmark.gutter.end | --p-select-checkmark-gutter-end | Gutter end of checkmark |
| select.emptyMessage.padding | select.empty.message.padding | --p-select-empty-message-padding | Padding of empty message |

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

[View Official Documentation](https://primeng.org/select)
