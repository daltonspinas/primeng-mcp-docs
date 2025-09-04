# Checkbox

Checkbox is an extension to standard checkbox element with theming.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { CheckboxModule } from 'primeng/checkbox';
```

### Basic {#basic}

Binary checkbox is used as a controlled input with ngModel and binary properties.

```html
<p-checkbox [(ngModel)]="checked" [binary]="true" />
```

### Indeterminate {#indeterminate}

The indeterminate state indicates that a checkbox is neither "on" or "off".

```html
<p-checkbox [(ngModel)]="checked" [binary]="true" [indeterminate]="true" />
```

### Group {#group}

Multiple checkboxes can be grouped together.

```html
<div class="flex items-center">
    <p-checkbox inputId="ingredient1" name="pizza"value="Cheese" [(ngModel)]="pizza" />
    <label for="ingredient1" class="ml-2"> Cheese </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient2" name="pizza" value="Mushroom" [(ngModel)]="pizza" />
    <label for="ingredient2" class="ml-2"> Mushroom </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient3" name="pizza" value="Pepper" [(ngModel)]="pizza" />
    <label for="ingredient3" class="ml-2"> Pepper </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient4" name="pizza" value="Onion" [(ngModel)]="pizza" />
    <label for="ingredient4" class="ml-2"> Onion </label>
</div>
```

### Dynamic {#dynamic}

Checkboxes can be generated using a list of values.

```html
<div *ngFor="let category of categories" class="flex items-center">
    <p-checkbox [inputId]="category.key" name="group" [value]="category" [(ngModel)]="selectedCategories" />
    <label [for]="category.key" class="ml-2"> {{ category.name }} </label>
</div>
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-checkbox [(ngModel)]="checked" [binary]="true" variant="filled" />
```

### Sizes {#sizes}

Checkbox provides small and large sizes as alternatives to the base.

```html
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
    <label for="size_small" class="text-sm">Small</label>
</div>
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
    <label for="size_normal">Normal</label>
</div>
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
    <label for="size_large" class="text-lg">Large</label>
</div>
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-checkbox [(ngModel)]="checked1" [binary]="true" [disabled]="true" />
<p-checkbox [(ngModel)]="checked2" [binary]="true" [disabled]="true" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-checkbox [(ngModel)]="checked" [binary]="true" [invalid]="!checked" />
```

### Forms {#forms}

Checkbox can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #form="ngForm" (ngSubmit)="onSubmit(form)" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (item of formKeys; track item) {
            <div class="flex items-center gap-2">
                <p-checkbox [inputId]="item" [name]="item" [(ngModel)]="formModel[item]" [binary]="true" [invalid]="isInvalid()"></p-checkbox>
                <label [for]="item">{{ item | titlecase }}</label>
            </div>
        }
    </div>
    @if (isInvalid()) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }

    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (item of formKeys; track item) {
            <div class="flex items-center gap-2">
                <p-checkbox [formControlName]="item" [binary]="true" [inputId]="item" [invalid]="isInvalid(item)" />
                <label [for]="item"> {{ item | titlecase }} </label>
            </div>
        }
    </div>
    @if (hasAnyInvalid()) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }
    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>
```

### Accessibility {#accessibility}

Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="chkbox1">Remember Me</label>
<p-checkbox inputId="chkbox1"/>

<span id="chkbox2">Remember Me</span>
<p-checkbox ariaLabelledBy="chkbox2"/>

<p-checkbox ariaLabel="Remember Me"/>
```

### Checkbox {#checkbox}

Checkbox is an extension to standard checkbox element with theming.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Checkbox API

API defines helper props, events and others for the PrimeNG Checkbox module.

#### Checkbox {#api-checkbox}

Checkbox is an extension to standard checkbox element with theming.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| value | any | null | Value of the checkbox. |
| binary | boolean | false | Allows to select a boolean value instead of multiple values. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | null | Used to define a string that labels the input element. |
| tabindex | number | null | Index of the element in tabbing order. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| inputStyle | { [klass: string]: any } | null | Inline style of the input element. |
| styleClass | string | null | Style class of the component. |
| inputClass | string | null | Style class of the input element. |
| indeterminate | boolean | false | When present, it specifies input state as indeterminate. |
| formControl | FormControl<any> | null | Form control value. |
| checkboxIcon | string | null | Icon class of the checkbox icon. |
| readonly | boolean | false | When present, it specifies that the component cannot be edited. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| trueValue | any | true | Value in checked state. |
| falseValue | any | false | Value in unchecked state. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  CheckboxChangeEvent | Callback to invoke on value change. |
| onFocus | event :  Event | Callback to invoke when the receives focus. |
| onBlur | event :  Event | Callback to invoke when the loses focus. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| checkboxicon |  | The template of the checkbox icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Checkbox Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-checkbox | Class name of the root element |
| p-checkbox-box | Class name of the box element |
| p-checkbox-input | Class name of the input element |
| p-checkbox-icon | Class name of the icon element |

#### Checkbox Design Tokens {#theming-checkbox-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| checkbox.root.borderRadius | checkbox.border.radius | --p-checkbox-border-radius | Border radius of root |
| checkbox.root.width | checkbox.width | --p-checkbox-width | Width of root |
| checkbox.root.height | checkbox.height | --p-checkbox-height | Height of root |
| checkbox.root.background | checkbox.background | --p-checkbox-background | Background of root |
| checkbox.root.checkedBackground | checkbox.checked.background | --p-checkbox-checked-background | Checked background of root |
| checkbox.root.checkedHoverBackground | checkbox.checked.hover.background | --p-checkbox-checked-hover-background | Checked hover background of root |
| checkbox.root.disabledBackground | checkbox.disabled.background | --p-checkbox-disabled-background | Disabled background of root |
| checkbox.root.filledBackground | checkbox.filled.background | --p-checkbox-filled-background | Filled background of root |
| checkbox.root.borderColor | checkbox.border.color | --p-checkbox-border-color | Border color of root |
| checkbox.root.hoverBorderColor | checkbox.hover.border.color | --p-checkbox-hover-border-color | Hover border color of root |
| checkbox.root.focusBorderColor | checkbox.focus.border.color | --p-checkbox-focus-border-color | Focus border color of root |
| checkbox.root.checkedBorderColor | checkbox.checked.border.color | --p-checkbox-checked-border-color | Checked border color of root |
| checkbox.root.checkedHoverBorderColor | checkbox.checked.hover.border.color | --p-checkbox-checked-hover-border-color | Checked hover border color of root |
| checkbox.root.checkedFocusBorderColor | checkbox.checked.focus.border.color | --p-checkbox-checked-focus-border-color | Checked focus border color of root |
| checkbox.root.checkedDisabledBorderColor | checkbox.checked.disabled.border.color | --p-checkbox-checked-disabled-border-color | Checked disabled border color of root |
| checkbox.root.invalidBorderColor | checkbox.invalid.border.color | --p-checkbox-invalid-border-color | Invalid border color of root |
| checkbox.root.shadow | checkbox.shadow | --p-checkbox-shadow | Shadow of root |
| checkbox.root.focusRing.width | checkbox.focus.ring.width | --p-checkbox-focus-ring-width | Focus ring width of root |
| checkbox.root.focusRing.style | checkbox.focus.ring.style | --p-checkbox-focus-ring-style | Focus ring style of root |
| checkbox.root.focusRing.color | checkbox.focus.ring.color | --p-checkbox-focus-ring-color | Focus ring color of root |
| checkbox.root.focusRing.offset | checkbox.focus.ring.offset | --p-checkbox-focus-ring-offset | Focus ring offset of root |
| checkbox.root.focusRing.shadow | checkbox.focus.ring.shadow | --p-checkbox-focus-ring-shadow | Focus ring shadow of root |
| checkbox.root.transitionDuration | checkbox.transition.duration | --p-checkbox-transition-duration | Transition duration of root |
| checkbox.root.sm.width | checkbox.sm.width | --p-checkbox-sm-width | Sm width of root |
| checkbox.root.sm.height | checkbox.sm.height | --p-checkbox-sm-height | Sm height of root |
| checkbox.root.lg.width | checkbox.lg.width | --p-checkbox-lg-width | Lg width of root |
| checkbox.root.lg.height | checkbox.lg.height | --p-checkbox-lg-height | Lg height of root |
| checkbox.icon.size | checkbox.icon.size | --p-checkbox-icon-size | Size of icon |
| checkbox.icon.color | checkbox.icon.color | --p-checkbox-icon-color | Color of icon |
| checkbox.icon.checkedColor | checkbox.icon.checked.color | --p-checkbox-icon-checked-color | Checked color of icon |
| checkbox.icon.checkedHoverColor | checkbox.icon.checked.hover.color | --p-checkbox-icon-checked-hover-color | Checked hover color of icon |
| checkbox.icon.disabledColor | checkbox.icon.disabled.color | --p-checkbox-icon-disabled-color | Disabled color of icon |
| checkbox.icon.sm.size | checkbox.icon.sm.size | --p-checkbox-icon-sm-size | Sm size of icon |
| checkbox.icon.lg.size | checkbox.icon.lg.size | --p-checkbox-icon-lg-size | Lg size of icon |

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

[View Official Documentation](https://primeng.org/checkbox)
