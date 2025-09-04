# RadioButton

RadioButton is an extension to standard radio button element with theming.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { RadioButtonModule } from 'primeng/radiobutton';
```

### Group {#group}

RadioButton is used as a controlled input with value and ngModel properties.

```html
<div class="flex flex-wrap gap-4">
    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>
```

### Dynamic {#dynamic}

RadioButtons can be generated using a list of values.

```html
<div class="flex flex-col gap-4">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radiobutton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory" />
        <label [for]="category.key" class="ml-2">{{ category.name }}</label>
    </div>
</div>
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-radiobutton [(ngModel)]="checked" variant="filled" />
```

### Sizes {#sizes}

RadioButton provides small and large sizes as alternatives to the base.

```html
<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-radiobutton [(ngModel)]="value" [value]="1" [disabled]="true" />
<p-radiobutton [(ngModel)]="value" [value]="2" [disabled]="true" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-radiobutton [(ngModel)]="value" [invalid]="!value"  />
```

### Forms {#forms}

RadioButton can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (category of categories; track category.name) {
            <div class="flex items-center gap-2">
                <p-radiobutton [(ngModel)]="ingredient" [inputId]="category.key" [value]="category" [invalid]="isInvalid(exampleForm)" name="ingredient" />
                <label [for]="category.key"> {{ category.name }} </label>
            </div>
        }
    </div>
    @if (isInvalid(exampleForm)) {
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
        @for (category of categories; track category) {
            <div class="flex items-center gap-2">
                <p-radiobutton formControlName="selectedCategory" name="selectedCategory" [inputId]="category.key" [value]="category" [invalid]="isInvalid('selectedCategory')" />
                <label [for]="category.key"> {{ category.name }} </label>
            </div>
        }
    </div>
    @if (isInvalid('selectedCategory')) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }
    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>
```

### Accessibility {#accessibility}

RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="rb1">One</label>
<p-radiobutton inputId="rb1" />

<span id="rb2">Two</span>
<p-radiobutton ariaLabelledBy="rb2" />

<p-radiobutton ariaLabel="Three" />
```

### RadioButton {#radiobutton}

RadioButton is an extension to standard radio button element with theming.

[↑ Back to Top](#table-of-contents)

## API {#api}

### RadioButton API

API defines helper props, events and others for the PrimeNG RadioButton module.

#### RadioButton {#api-radiobutton}

RadioButton is an extension to standard radio button element with theming.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| value | any | null | Value of the radiobutton. |
| tabindex | number | null | Index of the element in tabbing order. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | null | Used to define a string that labels the input element. |
| styleClass | string | null | Style class of the component. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| binary | boolean | false | Allows to select a boolean value. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClick | event :  RadioButtonClickEvent | Callback to invoke on radio button click. |
| onFocus | event :  Event | Callback to invoke when the receives focus. |
| onBlur | event :  Event | Callback to invoke when the loses focus. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| focus |  | Applies focus to input field. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### RadioButton Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-radiobutton | Class name of the root element |
| p-radiobutton-box | Class name of the box element |
| p-radiobutton-input | Class name of the input element |
| p-radiobutton-icon | Class name of the icon element |

#### RadioButton Design Tokens {#theming-radiobutton-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| radiobutton.root.width | radiobutton.width | --p-radiobutton-width | Width of root |
| radiobutton.root.height | radiobutton.height | --p-radiobutton-height | Height of root |
| radiobutton.root.background | radiobutton.background | --p-radiobutton-background | Background of root |
| radiobutton.root.checkedBackground | radiobutton.checked.background | --p-radiobutton-checked-background | Checked background of root |
| radiobutton.root.checkedHoverBackground | radiobutton.checked.hover.background | --p-radiobutton-checked-hover-background | Checked hover background of root |
| radiobutton.root.disabledBackground | radiobutton.disabled.background | --p-radiobutton-disabled-background | Disabled background of root |
| radiobutton.root.filledBackground | radiobutton.filled.background | --p-radiobutton-filled-background | Filled background of root |
| radiobutton.root.borderColor | radiobutton.border.color | --p-radiobutton-border-color | Border color of root |
| radiobutton.root.hoverBorderColor | radiobutton.hover.border.color | --p-radiobutton-hover-border-color | Hover border color of root |
| radiobutton.root.focusBorderColor | radiobutton.focus.border.color | --p-radiobutton-focus-border-color | Focus border color of root |
| radiobutton.root.checkedBorderColor | radiobutton.checked.border.color | --p-radiobutton-checked-border-color | Checked border color of root |
| radiobutton.root.checkedHoverBorderColor | radiobutton.checked.hover.border.color | --p-radiobutton-checked-hover-border-color | Checked hover border color of root |
| radiobutton.root.checkedFocusBorderColor | radiobutton.checked.focus.border.color | --p-radiobutton-checked-focus-border-color | Checked focus border color of root |
| radiobutton.root.checkedDisabledBorderColor | radiobutton.checked.disabled.border.color | --p-radiobutton-checked-disabled-border-color | Checked disabled border color of root |
| radiobutton.root.invalidBorderColor | radiobutton.invalid.border.color | --p-radiobutton-invalid-border-color | Invalid border color of root |
| radiobutton.root.shadow | radiobutton.shadow | --p-radiobutton-shadow | Shadow of root |
| radiobutton.root.focusRing.width | radiobutton.focus.ring.width | --p-radiobutton-focus-ring-width | Focus ring width of root |
| radiobutton.root.focusRing.style | radiobutton.focus.ring.style | --p-radiobutton-focus-ring-style | Focus ring style of root |
| radiobutton.root.focusRing.color | radiobutton.focus.ring.color | --p-radiobutton-focus-ring-color | Focus ring color of root |
| radiobutton.root.focusRing.offset | radiobutton.focus.ring.offset | --p-radiobutton-focus-ring-offset | Focus ring offset of root |
| radiobutton.root.focusRing.shadow | radiobutton.focus.ring.shadow | --p-radiobutton-focus-ring-shadow | Focus ring shadow of root |
| radiobutton.root.transitionDuration | radiobutton.transition.duration | --p-radiobutton-transition-duration | Transition duration of root |
| radiobutton.root.sm.width | radiobutton.sm.width | --p-radiobutton-sm-width | Sm width of root |
| radiobutton.root.sm.height | radiobutton.sm.height | --p-radiobutton-sm-height | Sm height of root |
| radiobutton.root.lg.width | radiobutton.lg.width | --p-radiobutton-lg-width | Lg width of root |
| radiobutton.root.lg.height | radiobutton.lg.height | --p-radiobutton-lg-height | Lg height of root |
| radiobutton.icon.size | radiobutton.icon.size | --p-radiobutton-icon-size | Size of icon |
| radiobutton.icon.checkedColor | radiobutton.icon.checked.color | --p-radiobutton-icon-checked-color | Checked color of icon |
| radiobutton.icon.checkedHoverColor | radiobutton.icon.checked.hover.color | --p-radiobutton-icon-checked-hover-color | Checked hover color of icon |
| radiobutton.icon.disabledColor | radiobutton.icon.disabled.color | --p-radiobutton-icon-disabled-color | Disabled color of icon |
| radiobutton.icon.sm.size | radiobutton.icon.sm.size | --p-radiobutton-icon-sm-size | Sm size of icon |
| radiobutton.icon.lg.size | radiobutton.icon.lg.size | --p-radiobutton-icon-lg-size | Lg size of icon |

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

[View Official Documentation](https://primeng.org/radiobutton)
