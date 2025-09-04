# InputText

InputText is an extension to standard input element with theming and keyfiltering.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { InputTextModule } from 'primeng/inputtext';
```

### Basic {#basic}

InputText is used as a controlled input with ngModel property.

```html
<input type="text" pInputText [(ngModel)]="value" />
```

### Float Label {#float-label}

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    <label for="username">Username</label>
</p-iftalabel>
```

### Sizes {#sizes}

InputText provides small and large sizes as alternatives to the standard.

```html
<input pInputText [(ngModel)]="value1" type="text" pSize="small" placeholder="Small" />
<input pInputText [(ngModel)]="value2" type="text" placeholder="Normal" />
<input pInputText [(ngModel)]="value3" type="text" pSize="large" placeholder="Large" />
```

### Help Text {#help-text}

An advisory text can be defined with the semantic small tag.

```html
<div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<input type="text" pInputText [(ngModel)]="value" variant="filled" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<input pInputText [disabled]="true" [(ngModel)]="value" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<input pInputText [(ngModel)]="value1" [invalid]="!value1" placeholder="Name" />
<input pInputText [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Name" />
```

### Forms {#forms}

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <input pInputText type="text" id="username" placeholder="Username" name="username" [(ngModel)]="user.username" #username="ngModel" [invalid]="username.invalid && (username.touched || exampleForm.submitted)" required />
        @if (username.invalid && (username.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <input pInputText type="email" id="email" name="email" placeholder="Email" [(ngModel)]="user.email" #email="ngModel" required email [invalid]="email.invalid && (email.touched || exampleForm.submitted)" />
        @if (email.invalid && (email.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">
                @if (email.hasError('required')) {
                    Email is Required.
                }
                @if (email.hasError('email')) {
                    Please enter a valid email.
                }
            </p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <input pInputText type="text" id="username" placeholder="Username" formControlName="username" [invalid]="isInvalid('username')" />
        @if (isInvalid('username')) {
            <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <input pInputText type="email" id="email" placeholder="Email" formControlName="email" [invalid]="isInvalid('email')" />
        @if (isInvalid('email')) {
            @if (exampleForm.get('email')?.errors?.['required']) {
                <p-message severity="error" size="small" variant="simple">Email is required.</p-message>
            }
            @if (exampleForm.get('email')?.errors?.['email']) {
                <p-message severity="error" size="small" variant="simple">Please enter a valid email.</p-message>
            }
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby, aria-label props.

```html
<label for="firstname">Firstname</label>
<input pInputText id="firstname" />

<span id="lastname">Lastname</span>
<input pInputText aria-labelledby="lastname" />

<input pInputText aria-label="Age" />
```

### InputText {#inputtext}

InputText directive is an extension to standard input element with theming.

[↑ Back to Top](#table-of-contents)

## API {#api}

### InputText API

API defines helper props, events and others for the PrimeNG InputText module.

#### InputText {#api-inputtext}

InputText directive is an extension to standard input element with theming.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| pSize | "small" | "large" | null | Defines the size of the component. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### InputText Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-inputtext | The class of root element |

#### InputText Design Tokens {#theming-inputtext-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| inputtext.root.background | inputtext.background | --p-inputtext-background | Background of root |
| inputtext.root.disabledBackground | inputtext.disabled.background | --p-inputtext-disabled-background | Disabled background of root |
| inputtext.root.filledBackground | inputtext.filled.background | --p-inputtext-filled-background | Filled background of root |
| inputtext.root.filledHoverBackground | inputtext.filled.hover.background | --p-inputtext-filled-hover-background | Filled hover background of root |
| inputtext.root.filledFocusBackground | inputtext.filled.focus.background | --p-inputtext-filled-focus-background | Filled focus background of root |
| inputtext.root.borderColor | inputtext.border.color | --p-inputtext-border-color | Border color of root |
| inputtext.root.hoverBorderColor | inputtext.hover.border.color | --p-inputtext-hover-border-color | Hover border color of root |
| inputtext.root.focusBorderColor | inputtext.focus.border.color | --p-inputtext-focus-border-color | Focus border color of root |
| inputtext.root.invalidBorderColor | inputtext.invalid.border.color | --p-inputtext-invalid-border-color | Invalid border color of root |
| inputtext.root.color | inputtext.color | --p-inputtext-color | Color of root |
| inputtext.root.disabledColor | inputtext.disabled.color | --p-inputtext-disabled-color | Disabled color of root |
| inputtext.root.placeholderColor | inputtext.placeholder.color | --p-inputtext-placeholder-color | Placeholder color of root |
| inputtext.root.invalidPlaceholderColor | inputtext.invalid.placeholder.color | --p-inputtext-invalid-placeholder-color | Invalid placeholder color of root |
| inputtext.root.shadow | inputtext.shadow | --p-inputtext-shadow | Shadow of root |
| inputtext.root.paddingX | inputtext.padding.x | --p-inputtext-padding-x | Padding x of root |
| inputtext.root.paddingY | inputtext.padding.y | --p-inputtext-padding-y | Padding y of root |
| inputtext.root.borderRadius | inputtext.border.radius | --p-inputtext-border-radius | Border radius of root |
| inputtext.root.focusRing.width | inputtext.focus.ring.width | --p-inputtext-focus-ring-width | Focus ring width of root |
| inputtext.root.focusRing.style | inputtext.focus.ring.style | --p-inputtext-focus-ring-style | Focus ring style of root |
| inputtext.root.focusRing.color | inputtext.focus.ring.color | --p-inputtext-focus-ring-color | Focus ring color of root |
| inputtext.root.focusRing.offset | inputtext.focus.ring.offset | --p-inputtext-focus-ring-offset | Focus ring offset of root |
| inputtext.root.focusRing.shadow | inputtext.focus.ring.shadow | --p-inputtext-focus-ring-shadow | Focus ring shadow of root |
| inputtext.root.transitionDuration | inputtext.transition.duration | --p-inputtext-transition-duration | Transition duration of root |
| inputtext.root.sm.fontSize | inputtext.sm.font.size | --p-inputtext-sm-font-size | Sm font size of root |
| inputtext.root.sm.paddingX | inputtext.sm.padding.x | --p-inputtext-sm-padding-x | Sm padding x of root |
| inputtext.root.sm.paddingY | inputtext.sm.padding.y | --p-inputtext-sm-padding-y | Sm padding y of root |
| inputtext.root.lg.fontSize | inputtext.lg.font.size | --p-inputtext-lg-font-size | Lg font size of root |
| inputtext.root.lg.paddingX | inputtext.lg.padding.x | --p-inputtext-lg-padding-x | Lg padding x of root |
| inputtext.root.lg.paddingY | inputtext.lg.padding.y | --p-inputtext-lg-padding-y | Lg padding y of root |

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

[View Official Documentation](https://primeng.org/inputtext)
