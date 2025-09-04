# Password

Password displays strength indicator for password fields.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { PasswordModule } from 'primeng/password';
```

### Basic {#basic}

Two-way value binding is defined using ngModel.

```html
<p-password [(ngModel)]="value" [feedback]="false" />
```

### Meter {#meter}

Strength meter is displayed as a popup while a value is being entered.

```html
<p-password [(ngModel)]="value" />
```

### Locale {#locale}

Labels are translated at component level by promptLabel, weakLabel, mediumLabel and strongLabel properties. In order to apply global translations for all Password components in the application, refer to the locale

```html
<p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
```

### Toggle Mask {#toggle-mask}

When toggleMask is present, an icon is displayed to show the value as plain text.

```html
<p-password [(ngModel)]="value" [toggleMask]="true" />
```

### Template {#template}

3 templates are included to customize the overlay. These are header, content and footer. Note that content overrides the default meter.

```html
<p-password [(ngModel)]="value" autocomplete="off">
    <ng-template #header>
        <div class="font-semibold text-xm mb-4">Reset Password</div>
    </ng-template>
    <ng-template #footer>
        <p-divider />
        <ul class="pl-2 my-0 leading-normal">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </ng-template>
</p-password>
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-password [(ngModel)]="value1" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-password [(ngModel)]="value2" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-password [(ngModel)]="value3" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-password [(ngModel)]="value" inputId="password" />
    <label for="password">Password</label>
</p-iftalabel>
```

### Sizes {#sizes}

Password provides small and large sizes as alternatives to the base.

```html
<p-password [(ngModel)]="value1" type="text" size="small" placeholder="Small" />
<p-password [(ngModel)]="value2" type="text" placeholder="Normal" />
<p-password [(ngModel)]="value3" type="text" size="large" placeholder="Large" />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-password [(ngModel)]="value" [feedback]="false" variant="filled" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-password [(ngModel)]="value" [disabled]="true" placeholder="Disabled" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-password [(ngModel)]="value1" [invalid]="!value1" placeholder="Password" />
<p-password [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Password" />
```

### Forms {#forms}

Password can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-password #model="ngModel" [(ngModel)]="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="password" [feedback]="false" autocomplete="off" required fluid />

        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-password formControlName="value" [invalid]="isInvalid('value')" [feedback]="false" autocomplete="off" fluid />

        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can either be provided via label tag combined with id prop or using ariaLabelledBy, ariaLabel props. Screen reader is notified about the changes to the strength of the password using a section that has aria-live while typing.

```html
<label for="pwd1">Password</label>
<p-password inputId="pwd1" />

<span id="pwd2">Password</span>
<p-password ariaLabelledBy="pwd2" />

<p-password ariaLabel="Password" />
```

### Password {#password}

Password displays strength indicator for password fields.

### PasswordDirective {#passworddirective}

Password directive.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Password API

API defines helper props, events and others for the PrimeNG Password module.

#### Password {#api-password}

Password displays strength indicator for password fields.

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
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Specifies one or more IDs in the DOM that labels the input field. |
| label | string | null | Label of the input for accessibility. |
| promptLabel | string | null | Text to prompt password entry. Defaults to PrimeNG I18N API configuration. |
| mediumRegex | string | ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}) | Regex value for medium regex. |
| strongRegex | string | ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}) | Regex value for strong regex. |
| weakLabel | string | null | Text for a weak password. Defaults to PrimeNG I18N API configuration. |
| mediumLabel | string | null | Text for a medium password. Defaults to PrimeNG I18N API configuration. |
| maxLength | number | null | specifies the maximum number of characters allowed in the input element. |
| strongLabel | string | null | Text for a strong password. Defaults to PrimeNG I18N API configuration. |
| inputId | string | null | Identifier of the accessible input element. |
| feedback | boolean | true | Whether to show the strength indicator or not. |
| toggleMask | boolean | false | Whether to show an icon to display the password as plain text. |
| inputStyleClass | string | null | Style class of the input field. |
| styleClass | string | null | Style class of the element. |
| inputStyle | { [klass: string]: any } | null | Inline style of the input field. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| autocomplete | string | null | Specify automated assistance in filling out password by browser. |
| placeholder | string | null | Advisory information to display on input. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| tabindex | number | null | Index of the element in tabbing order. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onFocus | event :  Event | Callback to invoke when the component receives focus. |
| onBlur | event :  Event | Callback to invoke when the component loses focus. |
| onClear | value :  any | Callback to invoke when clear button is clicked. |

#### PasswordDirective {#api-passworddirective}

Password directive.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| promptLabel | string | Enter a password | Text to prompt password entry. Defaults to PrimeNG I18N API configuration. |
| weakLabel | string | Weak | Text for a weak password. Defaults to PrimeNG I18N API configuration. |
| mediumLabel | string | Medium | Text for a medium password. Defaults to PrimeNG I18N API configuration. |
| strongLabel | string | Strong | Text for a strong password. Defaults to PrimeNG I18N API configuration. |
| feedback | boolean | true | Whether to show the strength indicator or not. |
| showPassword | - | null | Sets the visibility of the password field. |
| variant | InputSignal<"outlined" | "filled"> | 'outlined' | Specifies the input variant of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | false | Spans 100% width of the container when enabled. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Password Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-password | Class name of the root element |
| p-password-input | Class name of the pt input element |
| p-password-mask-icon | Class name of the mask icon element |
| p-password-unmask-icon | Class name of the unmask icon element |
| p-password-overlay | Class name of the overlay element |
| p-password-meter | Class name of the meter element |
| p-password-meter-label | Class name of the meter label element |
| p-password-meter-text | Class name of the meter text element |
| p-password-clear-icon | Class name of the clear icon |

#### Password Design Tokens {#theming-password-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| password.meter.background | password.meter.background | --p-password-meter-background | Background of meter |
| password.meter.borderRadius | password.meter.border.radius | --p-password-meter-border-radius | Border radius of meter |
| password.meter.height | password.meter.height | --p-password-meter-height | Height of meter |
| password.icon.color | password.icon.color | --p-password-icon-color | Color of icon |
| password.overlay.background | password.overlay.background | --p-password-overlay-background | Background of overlay |
| password.overlay.borderColor | password.overlay.border.color | --p-password-overlay-border-color | Border color of overlay |
| password.overlay.borderRadius | password.overlay.border.radius | --p-password-overlay-border-radius | Border radius of overlay |
| password.overlay.color | password.overlay.color | --p-password-overlay-color | Color of overlay |
| password.overlay.padding | password.overlay.padding | --p-password-overlay-padding | Padding of overlay |
| password.overlay.shadow | password.overlay.shadow | --p-password-overlay-shadow | Shadow of overlay |
| password.content.gap | password.content.gap | --p-password-content-gap | Gap of content |
| password.strength.weakBackground | password.strength.weak.background | --p-password-strength-weak-background | Weak background of strength |
| password.strength.mediumBackground | password.strength.medium.background | --p-password-strength-medium-background | Medium background of strength |
| password.strength.strongBackground | password.strength.strong.background | --p-password-strength-strong-background | Strong background of strength |

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

[View Official Documentation](https://primeng.org/password)
