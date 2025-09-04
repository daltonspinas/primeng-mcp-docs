# Knob

Knob is a form component to define number inputs with a dial.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { KnobModule } from 'primeng/knob';
```

### Basic {#basic}

Knob is an input component and used with the standard ngModel directive.

```html
<p-knob [(ngModel)]="value" />
```

### Min/Max {#min-max}

Boundaries are configured with the min and max properties whose defaults are 0 and 100 respectively.

```html
<p-knob [(ngModel)]="value" [min]="-50" [max]="50" />
```

### Step {#step}

Size of each movement is defined with the step property.

```html
<p-knob [(ngModel)]="value" [step]="10" />
```

### Template {#template}

Label is a string template that can be customized with the valueTemplate property having 60 as the placeholder .

```html
<p-knob [(ngModel)]="value" valueTemplate="{value}%" />
```

### Stroke {#stroke}

The border size is specified with the strokeWidth property as a number in pixels.

```html
<p-knob [(ngModel)]="value" [strokeWidth]="5" />
```

### Size {#size}

Diameter of the knob is defined in pixels using the size property.

```html
<p-knob [(ngModel)]="value" [size]="200" />
```

### Color {#color}

Colors are customized with the textColor, rangeColor and valueColor properties.

```html
<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
```

### Reactive {#reactive}

Knob can be controlled with custom controls as well.

```html
<p-knob [(ngModel)]="value" size="150" readonly="true"/>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>
```

### ReadOnly {#readonly}

When readonly present, value cannot be edited.

```html
<p-knob [(ngModel)]="value" [readonly]="true" />
```

### Forms {#forms}

Knob can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <p-knob #model="ngModel" [(ngModel)]="value" [invalid]="isInvalid(model)" name="knob" />
        @if (isInvalid(model)) {
            <p-message severity="error" size="small" variant="simple">{{ getErrorMessage(model) }}</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <p-knob formControlName="value" [invalid]="isInvalid('value')" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">{{ getErrorMessage('value') }}</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Disabled {#disabled}

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```html
<p-knob [(ngModel)]="value" [disabled]="true" />
```

### Accessibility {#accessibility}

Knob element component uses slider role in addition to the aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using ariaLabelledBy and ariaLabel props.

```html
<span id="label_number">Number</span>
<p-knob ariaLabelledBy="label_number"/>

<p-knob ariaLabel="Number"/>
```

### Knob {#knob}

Knob is a form component to define number inputs with a dial.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Knob API

API defines helper props, events and others for the PrimeNG Knob module.

#### Knob {#api-knob}

Knob is a form component to define number inputs with a dial.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| styleClass | string | null | Style class of the component. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Specifies one or more IDs in the DOM that labels the input field. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| valueColor | string | ... | Background of the value. |
| rangeColor | string | ... | Background color of the range. |
| textColor | string | ... | Color of the value text. |
| valueTemplate | string | {value} | Template string of the value. |
| size | number | 100 | Size of the component in pixels. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| step | number | 1 | Step factor to increment/decrement the value. |
| strokeWidth | number | 14 | Width of the knob stroke. |
| showValue | boolean | true | Whether the show the value inside the knob. |
| readonly | boolean | false | When present, it specifies that the component value cannot be edited. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | value :  number | Callback to invoke on value change. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Knob Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-knob | Class name of the root element |
| p-knob-range | Class name of the range element |
| p-knob-value | Class name of the value element |
| p-knob-text | Class name of the text element |

#### Knob Design Tokens {#theming-knob-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| knob.root.transitionDuration | knob.transition.duration | --p-knob-transition-duration | Transition duration of root |
| knob.root.focusRing.width | knob.focus.ring.width | --p-knob-focus-ring-width | Focus ring width of root |
| knob.root.focusRing.style | knob.focus.ring.style | --p-knob-focus-ring-style | Focus ring style of root |
| knob.root.focusRing.color | knob.focus.ring.color | --p-knob-focus-ring-color | Focus ring color of root |
| knob.root.focusRing.offset | knob.focus.ring.offset | --p-knob-focus-ring-offset | Focus ring offset of root |
| knob.root.focusRing.shadow | knob.focus.ring.shadow | --p-knob-focus-ring-shadow | Focus ring shadow of root |
| knob.value.background | knob.value.background | --p-knob-value-background | Background of value |
| knob.range.background | knob.range.background | --p-knob-range-background | Background of range |
| knob.text.color | knob.text.color | --p-knob-text-color | Color of text |

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

[View Official Documentation](https://primeng.org/knob)
