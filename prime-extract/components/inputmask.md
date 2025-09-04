# InputMask

InputMask component is used to enter input in a certain format such as numeric, date, currency and phone.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { InputMaskModule } from 'primeng/inputmask';
```

### Basic {#basic}

InputMask is used as a controlled input with ngModel properties.

```html
<p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" />
```

### Mask {#mask}

Mask format can be a combination of the following definitions; a for alphabetic characters, 9 for numeric characters and * for alphanumberic characters. In addition, formatting characters like ( , ) , - are also accepted.

```html
<span class="font-bold block mb-2">SSN</span>
<p-inputmask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999" />
<span class="font-bold block mb-2">Phone</span>
<p-inputmask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999" />
<span class="font-bold block mb-2">Serial Number</span>
<p-inputmask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999" />
```

### Optional {#optional}

When the input does not complete the mask definition, it is cleared by default. Use autoClear property to control this behavior. In addition, ? is used to mark anything after the question mark optional.

```html
<p-inputmask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999" />
```

### SlotChar {#slotchar}

Default placeholder for a mask is underscore that can be customized using slotChar property.

```html
<p-inputmask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-inputmask mask="99-999999" [(ngModel)]="value" variant="filled" placeholder="99-999999" />
```

### Float Label {#float-label}

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-inputmask id="over_label" [(ngModel)]="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputmask id="in_label" [(ngModel)]="value2" mask="999-99-9999" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputmask id="on_label" [(ngModel)]="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-inputmask id="ssn" [(ngModel)]="value" mask="999-99-9999" autocomplete="off" />
    <label for="ssn">SSN</label>
</p-iftalabel>
```

### Sizes {#sizes}

InputMask provides small and large sizes as alternatives to the base.

```html
<p-inputmask [(ngModel)]="value1" placeholder="Small" size="small" mask="99-999999" />
<p-inputmask [(ngModel)]="value2" placeholder="Normal" mask="99-999999" />
<p-inputmask [(ngModel)]="value3" placeholder="Large" size="large" mask="99-999999" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-inputmask mask="999-99-9999" [(ngModel)]="value" [disabled]="true" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-inputmask [(ngModel)]="value1" mask="99-999999" placeholder="Serial Key" [invalid]="!value1" />
<p-inputmask [(ngModel)]="value2" mask="99-999999" placeholder="Serial Key" [invalid]="!value2" variant="filled" />
```

### Forms {#forms}

InputMask can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-inputmask name="serial" mask="99-999999" #serialNumber="ngModel" [(ngModel)]="value" placeholder="99-999999" [invalid]="serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)" required fluid />
        @if (serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-inputmask mask="99-999999" formControlName="value" placeholder="99-999999" [invalid]="isInvalid('value')" fluid />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="date">Date</label>
<p-inputmask inputId="date"/>

<span id="phone">Phone</span>
<p-inputmask ariaLabelledBy="phone"/>

<p-inputmask ariaLabel="Age"/>
```

### InputMask {#inputmask}

InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.

[↑ Back to Top](#table-of-contents)

## API {#api}

### InputMask API

API defines helper props, events and others for the PrimeNG InputMask module.

#### InputMask {#api-inputmask}

InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.

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
| type | string | text | HTML5 input type. |
| slotChar | string | _ | Placeholder character in mask, default is underscore. |
| autoClear | boolean | true | Clears the incomplete value on blur. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| style | { [klass: string]: any } | null | Inline style of the input field. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| styleClass | string | null | Style class of the input field. |
| placeholder | string | null | Advisory information to display on input. |
| tabindex | string | null | Specifies tab order of the element. |
| title | string | null | Title text of the input text. |
| ariaLabel | string | null | Used to define a string that labels the input element. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaRequired | boolean | false | Used to indicate that user input is required on an element before a form can be submitted. |
| readonly | boolean | false | When present, it specifies that an input field is read-only. |
| unmask | boolean | false | Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value. |
| characterPattern | string | [A-Za-z] | Regex pattern for alpha characters |
| autofocus | boolean | false | When present, the input gets a focus automatically on load. |
| autocomplete | string | null | Used to define a string that autocomplete attribute the current element. |
| keepBuffer | boolean | false | When present, it specifies that whether to clean buffer value from model. |
| mask | string | null | Mask pattern. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onComplete | value :  any | Callback to invoke when the mask is completed. |
| onFocus | event :  Event | Callback to invoke when the component receives focus. |
| onBlur | event :  Event | Callback to invoke when the component loses focus. |
| onInput | event :  Event | Callback to invoke on input. |
| onKeydown | event :  Event | Callback to invoke on input key press. |
| onClear | value :  any | Callback to invoke when input field is cleared. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| clearicon |  | Template of the clear icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### InputMask Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-inputmask | Class name of the root element |
| p-inputmask-clear-icon | Class name of the clear icon element |

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

[View Official Documentation](https://primeng.org/inputmask)
