# InputOtp

Input Otp is used to enter one time passwords.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { InputOtpModule } from 'primeng/inputotp';
```

### Basic {#basic}

Two-way value binding is defined using ngModel. The number of characters is defined with the length property, which is set to 4 by default.

```html
<p-inputotp [(ngModel)]="value" />
```

### Mask {#mask}

Enable the mask option to hide the values in the input fields.

```html
<p-inputotp [(ngModel)]="value" [mask]="true" />
```

### Integer Only {#integer-only}

When integerOnly is present, only integers can be accepted as input.

```html
<p-inputotp [(ngModel)]="value" [integerOnly]="true" />
```

### Sizes {#sizes}

InputOtp provides small and large sizes as alternatives to the base.

```html
<p-inputotp [(ngModel)]="value1" size="small" />
<p-inputotp [(ngModel)]="value2" />
<p-inputotp [(ngModel)]="value3" size="large" />
```

### Template {#template}

Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.

```html
<p-inputotp [(ngModel)]="value">
    <ng-template #input let-token let-events="events">
        <input class="custom-otp-input" (input)="events.input($event)" (keydown)="events.keydown($event)" type="text" [attr.value]="token" [maxLength]="1" />
    </ng-template>
</p-inputotp>
```

### Forms {#forms}

InputOtp can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputotp #otpModel="ngModel" [(ngModel)]="value" [invalid]="otpModel.invalid && (otpModel.touched || exampleForm.submitted)" name="value" required [minlength]="4" />

        @if (otpModel.invalid && (otpModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputotp formControlName="value" [invalid]="isInvalid('value')" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Sample {#sample}

A sample UI implementation with templating and additional elements.

```html
<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
    <p-inputotp [(ngModel)]="value" [length]="6">
        <ng-template #input let-token let-events="events" let-index="index">
            <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
            <div *ngIf="index === 3" class="px-4">
                <i class="pi pi-minus"></i>
            </div>
        </ng-template>
    </p-inputotp>
    <div class="flex justify-between mt-8 self-stretch">
        <p-button label="Resend Code" [link]="true" class="p-0"/>
        <p-button label="Submit Code"/>
    </div>
</div>
```

### Accessibility {#accessibility}

Input OTP uses a set of InputText components, refer to the InputText component for more information about the screen reader support.

### InputOtp {#inputotp}

Input Otp is used to enter one time passwords.

[↑ Back to Top](#table-of-contents)

## API {#api}

### InputOtp API

API defines helper props, events and others for the PrimeNG InputOtp module.

#### InputOtp {#api-inputotp}

Input Otp is used to enter one time passwords.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| readonly | boolean | false | When present, it specifies that an input field is read-only. |
| tabindex | number | null | Index of the element in tabbing order. |
| length | number | 4 | Number of characters to initiate. |
| styleClass | string | null | Style class of the input element. |
| mask | boolean | false | Mask pattern. |
| integerOnly | boolean | false | When present, it specifies that an input field is integer-only. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  InputOtpChangeEvent | Callback to invoke on value change. |
| onFocus | event :  Event | Callback to invoke when the component receives focus. |
| onBlur | event :  Event | Callback to invoke when the component loses focus. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| input | context :  any | Input template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### InputOtp Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-inputotp | Class name of the root element |
| p-inputotp-input | Class name of the input element |

#### InputOtp Design Tokens {#theming-inputotp-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| inputotp.root.gap | inputotp.gap | --p-inputotp-gap | Gap of root |
| inputotp.input.width | inputotp.input.width | --p-inputotp-input-width | Width of input |
| inputotp.input.sm.width | inputotp.input.sm.width | --p-inputotp-input-sm-width | Width of input in small screens |
| inputotp.input.lg.width | inputotp.input.lg.width | --p-inputotp-input-lg-width | Width of input in large screens |

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

[View Official Documentation](https://primeng.org/inputotp)
