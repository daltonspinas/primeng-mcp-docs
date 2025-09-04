# InputNumber

InputNumber is an input component to provide numerical input.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { InputNumberModule } from 'primeng/inputnumber';
```

### Numerals {#numerals}

InputNumber is used as a controlled input with ngModel property.

```html
<p-inputnumber inputId="integeronly" [(ngModel)]="value1" />
<p-inputnumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false" />
<p-inputnumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5" />
<p-inputnumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100" />
```

### Locale {#locale}

Localization information such as grouping and decimal symbols are defined with the locale property which defaults to the user locale.

```html
<p-inputnumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2" />
```

### Currency {#currency}

Currency formatting is specified by setting the mode option to currency and currency property. In addition currencyDisplay option allows how the currency is displayed, valid values are "symbol" (default) or "code".

```html
<p-inputnumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value2" mode="currency"inputId="currency-germany"currency="EUR" locale="de-DE" />
<p-inputnumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN" />
<p-inputnumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP" />
```

### Prefix & Suffix {#prefix-suffix}

Custom texts e.g. units can be placed before or after the input section with the prefix and suffix properties.

```html
<p-inputnumber [(ngModel)]="value1" inputId="mile" suffix=" mi" />
<p-inputnumber [(ngModel)]="value2" inputId="percent" prefix="%" />
<p-inputnumber [(ngModel)]="value3"inputId="expiry" prefix="Expires in " suffix=" days" />
<p-inputnumber [(ngModel)]="value4" prefix="↑ " inputId="temperature" suffix="℃" [min]="0" [max]="40" />
```

### Buttons {#buttons}

Spinner buttons are enabled using the showButtons options and layout is defined with the buttonLayout. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard.

```html
<p-inputnumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD" />
<p-inputnumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100" />
<p-inputnumber [(ngModel)]="value3" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25" mode="currency" currency="EUR">
    <ng-template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
    </ng-template>
    <ng-template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
    </ng-template>
</p-inputnumber>
```

### Vertical {#vertical}

Buttons can also placed vertically by setting buttonLayout as vertical.

```html
<p-inputnumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" [inputStyle]="{ width: '3rem' }">
    <ng-template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
    </ng-template>
    <ng-template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
    </ng-template>
</p-inputnumber>
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-inputnumber [(ngModel)]="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputnumber [(ngModel)]="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputnumber [(ngModel)]="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" />
    <label for="price_input">Price</label>
</p-iftalabel>
```

### Sizes {#sizes}

InputNumber provides small and large sizes as alternatives to the base.

```html
<p-inputnumber [(ngModel)]="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-inputnumber variant="filled" [(ngModel)]="value1" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-inputnumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-inputnumber [(ngModel)]="value1" [invalid]="value1 === undefined" mode="decimal" [minFractionDigits]="2" placeholder="Amount" />
<p-inputnumber [(ngModel)]="value2" [invalid]="value2 === undefined" mode="decimal" [minFractionDigits]="2" variant="filled" placeholder="Amount" />
```

### Forms {#forms}

InputNumber can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputnumber inputId="integeronly" #inputValue="ngModel" name="inputValue" [(ngModel)]="value" [invalid]="inputValue.invalid && (inputValue.touched || exampleForm.submitted)" required/>
        @if (inputValue.invalid && (inputValue.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputnumber inputId="integeronly" formControlName="value" [invalid]="isInvalid('value')"/>
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel, ariaDescribedBy props. The input element uses spinbutton role in addition to the aria-valuemin, aria-valuemax and aria-valuenow attributes.

```html
<label for="price">Price</label>
<p-inputnumber inputId="price" />

<span id="label_number">Number</span>
<p-inputnumber ariaLabelledBy="label_number" />

<p-inputnumber ariaLabel="Number" />

<p-inputnumber ariaDescribedBy="describe" />
<small id="describe">Information</small>
```

### InputNumber {#inputnumber}

InputNumber is an input component to provide numerical input.

[↑ Back to Top](#table-of-contents)

## API {#api}

### InputNumber API

API defines helper props, events and others for the PrimeNG InputNumber module.

#### InputNumber {#api-inputnumber}

InputNumber is an input component to provide numerical input.

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
| showButtons | boolean | false | Displays spinner buttons. |
| format | boolean | true | Whether to format the value. |
| buttonLayout | string | stacked | Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical". |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| styleClass | string | null | Style class of the component. |
| placeholder | string | null | Advisory information to display on input. |
| tabindex | number | null | Specifies tab order of the element. |
| title | string | null | Title text of the input text. |
| ariaLabelledBy | string | null | Specifies one or more IDs in the DOM that labels the input field. |
| ariaDescribedBy | string | null | Specifies one or more IDs in the DOM that describes the input field. |
| ariaLabel | string | null | Used to define a string that labels the input element. |
| ariaRequired | boolean | false | Used to indicate that user input is required on an element before a form can be submitted. |
| autocomplete | string | null | Used to define a string that autocomplete attribute the current element. |
| incrementButtonClass | string | null | Style class of the increment button. |
| decrementButtonClass | string | null | Style class of the decrement button. |
| incrementButtonIcon | string | null | Style class of the increment button. |
| decrementButtonIcon | string | null | Style class of the decrement button. |
| readonly | boolean | false | When present, it specifies that an input field is read-only. |
| allowEmpty | boolean | true | Determines whether the input field is empty. |
| locale | string | null | Locale to be used in formatting. |
| localeMatcher | any | null | The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details. |
| mode | any | decimal | Defines the behavior of the component, valid values are "decimal" and "currency". |
| currency | string | null | The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided. |
| currencyDisplay | any | null | How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol". |
| useGrouping | boolean | true | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. |
| minFractionDigits | number | null | The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information). |
| maxFractionDigits | number | null | The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information). |
| prefix | string | null | Text to display before the value. |
| suffix | string | null | Text to display after the value. |
| inputStyle | any | null | Inline style of the input field. |
| inputStyleClass | string | null | Style class of the input field. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onInput | event :  InputNumberInputEvent | Callback to invoke on input. |
| onFocus | event :  Event | Callback to invoke when the component receives focus. |
| onBlur | event :  Event | Callback to invoke when the component loses focus. |
| onKeyDown | event :  KeyboardEvent | Callback to invoke on input key press. |
| onClear | value :  void | Callback to invoke when clear token is clicked. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| clearicon |  | Template of the clear icon. |
| incrementbuttonicon |  | Template of the increment button icon. |
| decrementbuttonicon |  | Template of the decrement button icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### InputNumber Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-inputnumber | Class name of the root element |
| p-inputnumber-input | Class name of the input element |
| p-inputnumber-button-group | Class name of the button group element |
| p-inputnumber-increment-button | Class name of the increment button element |
| p-inputnumber-decrement-button | Class name of the decrement button element |
| p-autocomplete-clear-icon | Class name of the clear icon |

#### InputNumber Design Tokens {#theming-inputnumber-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| inputnumber.root.transitionDuration | inputnumber.transition.duration | --p-inputnumber-transition-duration | Transition duration of root |
| inputnumber.button.width | inputnumber.button.width | --p-inputnumber-button-width | Width of button |
| inputnumber.button.borderRadius | inputnumber.button.border.radius | --p-inputnumber-button-border-radius | Border radius of button |
| inputnumber.button.verticalPadding | inputnumber.button.vertical.padding | --p-inputnumber-button-vertical-padding | Vertical padding of button |
| inputnumber.button.background | inputnumber.button.background | --p-inputnumber-button-background | Background of button |
| inputnumber.button.hoverBackground | inputnumber.button.hover.background | --p-inputnumber-button-hover-background | Hover background of button |
| inputnumber.button.activeBackground | inputnumber.button.active.background | --p-inputnumber-button-active-background | Active background of button |
| inputnumber.button.borderColor | inputnumber.button.border.color | --p-inputnumber-button-border-color | Border color of button |
| inputnumber.button.hoverBorderColor | inputnumber.button.hover.border.color | --p-inputnumber-button-hover-border-color | Hover border color of button |
| inputnumber.button.activeBorderColor | inputnumber.button.active.border.color | --p-inputnumber-button-active-border-color | Active border color of button |
| inputnumber.button.color | inputnumber.button.color | --p-inputnumber-button-color | Color of button |
| inputnumber.button.hoverColor | inputnumber.button.hover.color | --p-inputnumber-button-hover-color | Hover color of button |
| inputnumber.button.activeColor | inputnumber.button.active.color | --p-inputnumber-button-active-color | Active color of button |

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

[View Official Documentation](https://primeng.org/inputnumber)
