# AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { AutoCompleteModule } from 'primeng/autocomplete';
```

### Basic {#basic}

AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod gets the query text as event.query property and should update the suggestions with the search results.

```html
<p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" />
```

### Dropdown {#dropdown}

Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes blank or current as possible values. blank is the default mode to send a query with an empty string whereas current setting sends a query with the current value of the input.

```html
<p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="search($event)" />
```

### Objects {#objects}

AutoComplete can also work with objects using the optionLabel property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as {name: "United States", code:"USA"}.

```html
<p-autocomplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
```

### Template {#template}

AutoComplete offers multiple templates for customization through templating.

```html
<p-autocomplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 py-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-autocomplete>
```

### Group {#group}

Option grouping is enabled when group property is set to true. group template is available to customize the option groups. All templates get the option instance as the default local template variable.

```html
<p-autocomplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-autocomplete>
```

### Force Selection {#force-selection}

ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions.

```html
<p-autocomplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
```

### Virtual Scroll {#virtual-scroll}

Virtual scrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable virtual scrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-autocomplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" optionLabel="label" [dropdown]="true" />
```

### Multiple {#multiple}

Multiple mode is enabled using multiple property used to select more than one value from the autocomplete. In this case, value reference should be an array.

```html
<label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
<p-autocomplete [(ngModel)]="value1" inputId="multiple-ac-1" multiple fluid [suggestions]="items" (completeMethod)="search($event)" />

<label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
<p-autocomplete [(ngModel)]="value2" inputId="multiple-ac-2" multiple fluid (completeMethod)="search($event)" [typeahead]="false" />
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search($event)" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search($event)" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search($event)" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" inputId="ac" />
    <label for="ac">Identifier</label>
</p-iftalabel>
```

### Sizes {#sizes}

AutoComplete provides small and large sizes as alternatives to the base.

```html
<p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search()" size="small" placeholder="Small" dropdown />
<p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search()" placeholder="Normal" dropdown />
<p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search()" size="large" placeholder="Large" dropdown />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" variant="filled" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" placeholder="Disabled" (completeMethod)="search($event)" [disabled]="true" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-autocomplete [(ngModel)]="value1" [suggestions]="suggestions" [invalid]="!value1" (completeMethod)="search($event)" placeholder="Code" />
<p-autocomplete [(ngModel)]="value2" [suggestions]="suggestions" [invalid]="!value2" (completeMethod)="search($event)" variant="filled" placeholder="Code" />
```

### Forms {#forms}

AutoComplete can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-autocomplete
            #val="ngModel"
            [(ngModel)]="value"
            [suggestions]="items"
            [invalid]="val.invalid && (val.touched || exampleForm.submitted)"
            name="val"
            (completeMethod)="search($event)"
            required
            fluid
        />
        @if (val.invalid && (val.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-autocomplete formControlName="value" [suggestions]="items" [invalid]="isInvalid('value')" (completeMethod)="search($event)" fluid />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props. The input element has combobox role in addition to aria-autocomplete, aria-haspopup and aria-expanded attributes. The relation between the input and the popup is created with aria-controls and aria-activedescendant attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list.

```html
<label for="ac1">Username</label>
<p-autocomplete inputId="ac1"/>

<span id="ac2">Email</span>
<p-autocomplete ariaLabelledBy="ac2" />

<p-autocomplete ariaLabel="City" />
```

### AutoComplete {#autocomplete}

AutoComplete is an input component that provides real-time suggestions when being typed.

[↑ Back to Top](#table-of-contents)

## API {#api}

### AutoComplete API

API defines helper props, events and others for the PrimeNG AutoComplete module.

#### AutoComplete {#api-autocomplete}

AutoComplete is an input component that provides real-time suggestions when being typed.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| minLength | number | 1 | Minimum number of characters to initiate a search. |
| minQueryLength | number | null | Minimum number of characters to initiate a search. |
| delay | number | 300 | Delay between keystrokes to wait before sending a query. |
| panelStyle | { [klass: string]: any } | null | Inline style of the overlay panel element. |
| styleClass | string | null | Style class of the component. |
| panelStyleClass | string | null | Style class of the overlay panel element. |
| inputStyle | { [klass: string]: any } | null | Inline style of the input field. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| inputStyleClass | string | null | Inline style of the input field. |
| placeholder | string | null | Hint text for the input field. |
| readonly | boolean | false | When present, it specifies that the input cannot be typed. |
| scrollHeight | string | 200px | Maximum height of the suggestions panel. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| virtualScrollItemSize | number | null | Height of an item in the list for VirtualScrolling. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| autoHighlight | boolean | false | When enabled, highlights the first item in the list by default. |
| forceSelection | boolean | false | When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions. |
| type | string | text | Type of the input, defaults to "text". |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| dropdownAriaLabel | string | null | Defines a string that labels the dropdown button for accessibility. |
| ariaLabelledBy | string | null | Specifies one or more IDs in the DOM that labels the input field. |
| dropdownIcon | string | null | Icon class of the dropdown icon. |
| unique | boolean | true | Ensures uniqueness of selected items on multiple mode. |
| group | boolean | false | Whether to display options as grouped when nested options are provided. |
| completeOnFocus | boolean | false | Whether to run a query when input receives focus. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| dropdown | boolean | false | Displays a button next to the input field when enabled. |
| showEmptyMessage | boolean | true | Whether to show the empty message or not. |
| dropdownMode | string | blank | Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value. |
| multiple | boolean | false | Specifies if multiple values can be selected. |
| tabindex | number | null | Index of the element in tabbing order. |
| dataKey | string | null | A property to uniquely identify a value in options. |
| emptyMessage | string | null | Text to display when there is no data. Defaults to global value in i18n translation configuration. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| autocomplete | string | off | Used to define a string that autocomplete attribute the current element. |
| optionGroupChildren | string | items | Name of the options field of an option group. |
| optionGroupLabel | string | label | Name of the label field of an option group. |
| overlayOptions | OverlayOptions | null | Options for the overlay element. |
| suggestions | any[] | null | An array of suggestions to display. |
| optionLabel | string | ((item: any) => string) | null | Property name or getter function to use as the label of an option. |
| optionValue | string | ((item: any) => string) | null | Property name or getter function to use as the value of an option. |
| id | string | null | Unique identifier of the component. |
| searchMessage | string | '{0} results are available' | Text to display when the search is active. Defaults to global value in i18n translation configuration. |
| emptySelectionMessage | string | 'No selected item' | Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| selectOnFocus | boolean | false | When enabled, the focused option is selected. |
| searchLocale | boolean | false | Locale to use in searching. The default locale is the host environment's current locale. |
| optionDisabled | string | ((item: any) => string) | null | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. |
| focusOnHover | boolean | true | When enabled, the hovered option will be focused. |
| typeahead | boolean | true | Whether typeahead is active or not. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
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

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| completeMethod | event :  AutoCompleteCompleteEvent | Callback to invoke to search for suggestions. |
| onSelect | event :  AutoCompleteSelectEvent | Callback to invoke when a suggestion is selected. |
| onUnselect | event :  AutoCompleteUnselectEvent | Callback to invoke when a selected value is removed. |
| onFocus | event :  Event | Callback to invoke when the component receives focus. |
| onBlur | event :  Event | Callback to invoke when the component loses focus. |
| onDropdownClick | event :  AutoCompleteDropdownClickEvent | Callback to invoke to when dropdown button is clicked. |
| onClear | event :  Event | Callback to invoke when clear button is clicked. |
| onKeyUp | event :  KeyboardEvent | Callback to invoke on input key up. |
| onShow | event :  Event | Callback to invoke on overlay is shown. |
| onHide | event :  Event | Callback to invoke on overlay is hidden. |
| onLazyLoad | event :  AutoCompleteLazyLoadEvent | Callback to invoke on lazy load data. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Custom item template. |
| empty |  | Custom empty message template. |
| header |  | Custom header template. |
| footer |  | Custom footer template. |
| selecteditem |  | Custom selected item template. |
| group |  | Custom group item template. |
| loader |  | Custom loader template. |
| removeicon |  | Custom remove icon template. |
| loadingicon |  | Custom loading icon template. |
| clearicon |  | Custom clear icon template. |
| dropdownicon |  | Custom dropdown icon template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### AutoComplete Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-autocomplete | Class name of the root element |
| p-autocomplete-input | Class name of the input element |
| p-autocomplete-input-multiple | Class name of the input multiple element |
| p-autocomplete-chip-item | Class name of the chip item element |
| p-autocomplete-chip | Class name of the chip element |
| p-autocomplete-chip-icon | Class name of the chip icon element |
| p-autocomplete-input-chip | Class name of the input chip element |
| p-autocomplete-loader | Class name of the loader element |
| p-autocomplete-dropdown | Class name of the dropdown element |
| p-autocomplete-overlay | Class name of the panel element |
| p-autocomplete-list | Class name of the list element |
| p-autocomplete-option-group | Class name of the option group element |
| p-autocomplete-option | Class name of the option element |
| p-autocomplete-empty-message | Class name of the empty message element |
| p-autocomplete-clear-icon | Class name of the clear icon |

#### AutoComplete Design Tokens {#theming-autocomplete-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| autocomplete.root.background | autocomplete.background | --p-autocomplete-background | Background of root |
| autocomplete.root.disabledBackground | autocomplete.disabled.background | --p-autocomplete-disabled-background | Disabled background of root |
| autocomplete.root.filledBackground | autocomplete.filled.background | --p-autocomplete-filled-background | Filled background of root |
| autocomplete.root.filledHoverBackground | autocomplete.filled.hover.background | --p-autocomplete-filled-hover-background | Filled hover background of root |
| autocomplete.root.filledFocusBackground | autocomplete.filled.focus.background | --p-autocomplete-filled-focus-background | Filled focus background of root |
| autocomplete.root.borderColor | autocomplete.border.color | --p-autocomplete-border-color | Border color of root |
| autocomplete.root.hoverBorderColor | autocomplete.hover.border.color | --p-autocomplete-hover-border-color | Hover border color of root |
| autocomplete.root.focusBorderColor | autocomplete.focus.border.color | --p-autocomplete-focus-border-color | Focus border color of root |
| autocomplete.root.invalidBorderColor | autocomplete.invalid.border.color | --p-autocomplete-invalid-border-color | Invalid border color of root |
| autocomplete.root.color | autocomplete.color | --p-autocomplete-color | Color of root |
| autocomplete.root.disabledColor | autocomplete.disabled.color | --p-autocomplete-disabled-color | Disabled color of root |
| autocomplete.root.placeholderColor | autocomplete.placeholder.color | --p-autocomplete-placeholder-color | Placeholder color of root |
| autocomplete.root.invalidPlaceholderColor | autocomplete.invalid.placeholder.color | --p-autocomplete-invalid-placeholder-color | Invalid placeholder color of root |
| autocomplete.root.shadow | autocomplete.shadow | --p-autocomplete-shadow | Shadow of root |
| autocomplete.root.paddingX | autocomplete.padding.x | --p-autocomplete-padding-x | Padding x of root |
| autocomplete.root.paddingY | autocomplete.padding.y | --p-autocomplete-padding-y | Padding y of root |
| autocomplete.root.borderRadius | autocomplete.border.radius | --p-autocomplete-border-radius | Border radius of root |
| autocomplete.root.focusRing.width | autocomplete.focus.ring.width | --p-autocomplete-focus-ring-width | Focus ring width of root |
| autocomplete.root.focusRing.style | autocomplete.focus.ring.style | --p-autocomplete-focus-ring-style | Focus ring style of root |
| autocomplete.root.focusRing.color | autocomplete.focus.ring.color | --p-autocomplete-focus-ring-color | Focus ring color of root |
| autocomplete.root.focusRing.offset | autocomplete.focus.ring.offset | --p-autocomplete-focus-ring-offset | Focus ring offset of root |
| autocomplete.root.focusRing.shadow | autocomplete.focus.ring.shadow | --p-autocomplete-focus-ring-shadow | Focus ring shadow of root |
| autocomplete.root.transitionDuration | autocomplete.transition.duration | --p-autocomplete-transition-duration | Transition duration of root |
| autocomplete.overlay.background | autocomplete.overlay.background | --p-autocomplete-overlay-background | Background of overlay |
| autocomplete.overlay.borderColor | autocomplete.overlay.border.color | --p-autocomplete-overlay-border-color | Border color of overlay |
| autocomplete.overlay.borderRadius | autocomplete.overlay.border.radius | --p-autocomplete-overlay-border-radius | Border radius of overlay |
| autocomplete.overlay.color | autocomplete.overlay.color | --p-autocomplete-overlay-color | Color of overlay |
| autocomplete.overlay.shadow | autocomplete.overlay.shadow | --p-autocomplete-overlay-shadow | Shadow of overlay |
| autocomplete.list.padding | autocomplete.list.padding | --p-autocomplete-list-padding | Padding of list |
| autocomplete.list.gap | autocomplete.list.gap | --p-autocomplete-list-gap | Gap of list |
| autocomplete.option.focusBackground | autocomplete.option.focus.background | --p-autocomplete-option-focus-background | Focus background of option |
| autocomplete.option.selectedBackground | autocomplete.option.selected.background | --p-autocomplete-option-selected-background | Selected background of option |
| autocomplete.option.selectedFocusBackground | autocomplete.option.selected.focus.background | --p-autocomplete-option-selected-focus-background | Selected focus background of option |
| autocomplete.option.color | autocomplete.option.color | --p-autocomplete-option-color | Color of option |
| autocomplete.option.focusColor | autocomplete.option.focus.color | --p-autocomplete-option-focus-color | Focus color of option |
| autocomplete.option.selectedColor | autocomplete.option.selected.color | --p-autocomplete-option-selected-color | Selected color of option |
| autocomplete.option.selectedFocusColor | autocomplete.option.selected.focus.color | --p-autocomplete-option-selected-focus-color | Selected focus color of option |
| autocomplete.option.padding | autocomplete.option.padding | --p-autocomplete-option-padding | Padding of option |
| autocomplete.option.borderRadius | autocomplete.option.border.radius | --p-autocomplete-option-border-radius | Border radius of option |
| autocomplete.optionGroup.background | autocomplete.option.group.background | --p-autocomplete-option-group-background | Background of option group |
| autocomplete.optionGroup.color | autocomplete.option.group.color | --p-autocomplete-option-group-color | Color of option group |
| autocomplete.optionGroup.fontWeight | autocomplete.option.group.font.weight | --p-autocomplete-option-group-font-weight | Font weight of option group |
| autocomplete.optionGroup.padding | autocomplete.option.group.padding | --p-autocomplete-option-group-padding | Padding of option group |
| autocomplete.dropdown.width | autocomplete.dropdown.width | --p-autocomplete-dropdown-width | Width of dropdown |
| autocomplete.dropdown.sm.width | autocomplete.dropdown.sm.width | --p-autocomplete-dropdown-sm-width | Sm width of dropdown |
| autocomplete.dropdown.lg.width | autocomplete.dropdown.lg.width | --p-autocomplete-dropdown-lg-width | Lg width of dropdown |
| autocomplete.dropdown.borderColor | autocomplete.dropdown.border.color | --p-autocomplete-dropdown-border-color | Border color of dropdown |
| autocomplete.dropdown.hoverBorderColor | autocomplete.dropdown.hover.border.color | --p-autocomplete-dropdown-hover-border-color | Hover border color of dropdown |
| autocomplete.dropdown.activeBorderColor | autocomplete.dropdown.active.border.color | --p-autocomplete-dropdown-active-border-color | Active border color of dropdown |
| autocomplete.dropdown.borderRadius | autocomplete.dropdown.border.radius | --p-autocomplete-dropdown-border-radius | Border radius of dropdown |
| autocomplete.dropdown.focusRing.width | autocomplete.dropdown.focus.ring.width | --p-autocomplete-dropdown-focus-ring-width | Focus ring width of dropdown |
| autocomplete.dropdown.focusRing.style | autocomplete.dropdown.focus.ring.style | --p-autocomplete-dropdown-focus-ring-style | Focus ring style of dropdown |
| autocomplete.dropdown.focusRing.color | autocomplete.dropdown.focus.ring.color | --p-autocomplete-dropdown-focus-ring-color | Focus ring color of dropdown |
| autocomplete.dropdown.focusRing.offset | autocomplete.dropdown.focus.ring.offset | --p-autocomplete-dropdown-focus-ring-offset | Focus ring offset of dropdown |
| autocomplete.dropdown.focusRing.shadow | autocomplete.dropdown.focus.ring.shadow | --p-autocomplete-dropdown-focus-ring-shadow | Focus ring shadow of dropdown |
| autocomplete.dropdown.background | autocomplete.dropdown.background | --p-autocomplete-dropdown-background | Background of dropdown |
| autocomplete.dropdown.hoverBackground | autocomplete.dropdown.hover.background | --p-autocomplete-dropdown-hover-background | Hover background of dropdown |
| autocomplete.dropdown.activeBackground | autocomplete.dropdown.active.background | --p-autocomplete-dropdown-active-background | Active background of dropdown |
| autocomplete.dropdown.color | autocomplete.dropdown.color | --p-autocomplete-dropdown-color | Color of dropdown |
| autocomplete.dropdown.hoverColor | autocomplete.dropdown.hover.color | --p-autocomplete-dropdown-hover-color | Hover color of dropdown |
| autocomplete.dropdown.activeColor | autocomplete.dropdown.active.color | --p-autocomplete-dropdown-active-color | Active color of dropdown |
| autocomplete.chip.borderRadius | autocomplete.chip.border.radius | --p-autocomplete-chip-border-radius | Border radius of chip |
| autocomplete.chip.focusBackground | autocomplete.chip.focus.background | --p-autocomplete-chip-focus-background | Focus background of chip |
| autocomplete.chip.focusColor | autocomplete.chip.focus.color | --p-autocomplete-chip-focus-color | Focus color of chip |
| autocomplete.emptyMessage.padding | autocomplete.empty.message.padding | --p-autocomplete-empty-message-padding | Padding of empty message |

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

[View Official Documentation](https://primeng.org/autocomplete)
