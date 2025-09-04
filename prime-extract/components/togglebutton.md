# ToggleButton

ToggleButton is used to select a boolean value using a button.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ToggleButtonModule } from 'primeng/togglebutton';
```

### Basic {#basic}

Two-way binding to a boolean property is defined using the standard ngModel directive.

```html
<p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" class="w-24" />
```

### Customized {#customized}

Icons and Labels can be customized using onLabel, offLabel, onIcon and offIcon properties.

```html
<p-togglebutton [(ngModel)]="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-check" offIcon="pi pi-times" onIcon="pi pi-lock" offIcon="pi pi-lock-open" class="w-36" ariaLabel="Do you confirm" />
```

### Sizes {#sizes}

ToggleButton provides small and large sizes as alternatives to the base.

```html
<p-togglebutton [(ngModel)]="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
<p-togglebutton [(ngModel)]="value2" onLabel="On" offLabel="Off" class="min-w-20" />
<p-togglebutton [(ngModel)]="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-togglebutton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" class="w-full sm:w-40" ariaLabel="Confirmation" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-togglebutton [(ngModel)]="checked" onIcon="pi pi-check" offIcon="pi pi-times" [invalid]="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
```

### Forms {#forms}

ToggleButton can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-togglebutton #model="ngModel" [(ngModel)]="checked" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="country" onLabel="Accept All" offLabel="Reject All" required />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-togglebutton name="consent" formControlName="checked" [invalid]="isInvalid('checked')" onLabel="Accept All" offLabel="Reject All" />
        @if (isInvalid('checked')) {
            <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

ToggleButton component uses an element with button role and updates aria-pressed state for screen readers. Value to describe the component can be defined with ariaLabelledBy or ariaLabel props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state.

```html
<span id="rememberme">Remember Me</span>
<p-togglebutton ariaLabelledBy="rememberme" />

<p-togglebutton ariaLabel="Remember Me" />
```

### ToggleButton {#togglebutton}

ToggleButton is used to select a boolean value using a button.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ToggleButton API

API defines helper props, events and others for the PrimeNG ToggleButton module.

#### ToggleButton {#api-togglebutton}

ToggleButton is used to select a boolean value using a button.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| onLabel | string | Yes | Label for the on state. |
| offLabel | string | No | Label for the off state. |
| onIcon | string | null | Icon for the on state. |
| offIcon | string | null | Icon for the off state. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| styleClass | string | null | Style class of the element. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| iconPos | "right" | "left" | left | Position of the icon. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| size | "small" | "large" | null | Defines the size of the component. |
| allowEmpty | boolean | false | Whether selection can not be cleared. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  ToggleButtonChangeEvent | Callback to invoke on value change. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| icon |  | Custom icon template. |
| content |  | Custom content template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ToggleButton Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-togglebutton | Class name of the root element |
| p-togglebutton-icon | Class name of the icon element |
| p-togglebutton-icon-left | Class name of the left icon |
| p-togglebutton-icon-right | Class name of the right icon |
| p-togglebutton-label | Class name of the label element |

#### ToggleButton Design Tokens {#theming-togglebutton-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| togglebutton.root.padding | togglebutton.padding | --p-togglebutton-padding | Padding of root |
| togglebutton.root.borderRadius | togglebutton.border.radius | --p-togglebutton-border-radius | Border radius of root |
| togglebutton.root.gap | togglebutton.gap | --p-togglebutton-gap | Gap of root |
| togglebutton.root.fontWeight | togglebutton.font.weight | --p-togglebutton-font-weight | Font weight of root |
| togglebutton.root.disabledBackground | togglebutton.disabled.background | --p-togglebutton-disabled-background | Disabled background of root |
| togglebutton.root.disabledBorderColor | togglebutton.disabled.border.color | --p-togglebutton-disabled-border-color | Disabled border color of root |
| togglebutton.root.disabledColor | togglebutton.disabled.color | --p-togglebutton-disabled-color | Disabled color of root |
| togglebutton.root.invalidBorderColor | togglebutton.invalid.border.color | --p-togglebutton-invalid-border-color | Invalid border color of root |
| togglebutton.root.focusRing.width | togglebutton.focus.ring.width | --p-togglebutton-focus-ring-width | Focus ring width of root |
| togglebutton.root.focusRing.style | togglebutton.focus.ring.style | --p-togglebutton-focus-ring-style | Focus ring style of root |
| togglebutton.root.focusRing.color | togglebutton.focus.ring.color | --p-togglebutton-focus-ring-color | Focus ring color of root |
| togglebutton.root.focusRing.offset | togglebutton.focus.ring.offset | --p-togglebutton-focus-ring-offset | Focus ring offset of root |
| togglebutton.root.focusRing.shadow | togglebutton.focus.ring.shadow | --p-togglebutton-focus-ring-shadow | Focus ring shadow of root |
| togglebutton.root.transitionDuration | togglebutton.transition.duration | --p-togglebutton-transition-duration | Transition duration of root |
| togglebutton.root.sm.fontSize | togglebutton.sm.font.size | --p-togglebutton-sm-font-size | Sm font size of root |
| togglebutton.root.sm.padding | togglebutton.sm.padding | --p-togglebutton-sm-padding | Sm padding of root |
| togglebutton.root.lg.fontSize | togglebutton.lg.font.size | --p-togglebutton-lg-font-size | Lg font size of root |
| togglebutton.root.lg.padding | togglebutton.lg.padding | --p-togglebutton-lg-padding | Lg padding of root |
| togglebutton.root.background | togglebutton.background | --p-togglebutton-background | Background of root |
| togglebutton.root.checkedBackground | togglebutton.checked.background | --p-togglebutton-checked-background | Checked background of root |
| togglebutton.root.hoverBackground | togglebutton.hover.background | --p-togglebutton-hover-background | Hover background of root |
| togglebutton.root.borderColor | togglebutton.border.color | --p-togglebutton-border-color | Border color of root |
| togglebutton.root.color | togglebutton.color | --p-togglebutton-color | Color of root |
| togglebutton.root.hoverColor | togglebutton.hover.color | --p-togglebutton-hover-color | Hover color of root |
| togglebutton.root.checkedColor | togglebutton.checked.color | --p-togglebutton-checked-color | Checked color of root |
| togglebutton.root.checkedBorderColor | togglebutton.checked.border.color | --p-togglebutton-checked-border-color | Checked border color of root |
| togglebutton.icon.disabledColor | togglebutton.icon.disabled.color | --p-togglebutton-icon-disabled-color | Disabled color of icon |
| togglebutton.icon.color | togglebutton.icon.color | --p-togglebutton-icon-color | Color of icon |
| togglebutton.icon.hoverColor | togglebutton.icon.hover.color | --p-togglebutton-icon-hover-color | Hover color of icon |
| togglebutton.icon.checkedColor | togglebutton.icon.checked.color | --p-togglebutton-icon-checked-color | Checked color of icon |
| togglebutton.content.padding | togglebutton.content.padding | --p-togglebutton-content-padding | Padding of content |
| togglebutton.content.borderRadius | togglebutton.content.border.radius | --p-togglebutton-content-border-radius | Border radius of content |
| togglebutton.content.checkedShadow | togglebutton.content.checked.shadow | --p-togglebutton-content-checked-shadow | Checked shadow of content |
| togglebutton.content.sm.padding | togglebutton.content.sm.padding | --p-togglebutton-content-sm-padding | Sm padding of content |
| togglebutton.content.lg.padding | togglebutton.content.lg.padding | --p-togglebutton-content-lg-padding | Lg padding of content |
| togglebutton.content.checkedBackground | togglebutton.content.checked.background | --p-togglebutton-content-checked-background | Checked background of content |

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

[View Official Documentation](https://primeng.org/togglebutton)
