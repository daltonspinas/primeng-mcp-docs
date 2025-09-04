# ToggleSwitch

ToggleSwitch is used to select a boolean value.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ToggleSwitchModule } from 'primeng/toggleswitch';
```

### Basic {#basic}

Two-way value binding is defined using ngModel.

```html
<p-toggleswitch [(ngModel)]="checked" />
```

### Preselection {#preselection}

Enabling ngModel property displays the component as active initially.

```html
<p-toggleswitch [(ngModel)]="checked" />
```

### Template {#template}

The handle template is available to display custom content.

```html
<p-toggleswitch [(ngModel)]="checked">
    <ng-template #handle let-checked="checked">
        <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
    </ng-template>
</p-toggleswitch>
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-toggleswitch [(ngModel)]="checked" [disabled]="true" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-toggleswitch [(ngModel)]="checked" [invalid]="!checked" />
```

### Forms {#forms}

ToggleSwitch can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-48">
    <div class="flex flex-col items-center gap-2">
        <p-toggleswitch #model="ngModel" [(ngModel)]="checked" name="activation" [invalid]="model.invalid && exampleForm.submitted" required />
        @if (model.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-48">
        <div class="flex flex-col items-center gap-2">
            <p-toggleswitch name="activation" formControlName="activation" [invalid]="isInvalid('activation')" />
            @if (isInvalid('activation')) {
                <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>
```

### Accessibility {#accessibility}

InputSwitch component uses a hidden native checkbox element with switch role internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="switch1">Remember Me</label>
<p-toggleswitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<p-toggleswitch ariaLabelledBy="switch2" />

<p-toggleswitch ariaLabel="Remember Me" />
```

### ToggleSwitch {#toggleswitch}

ToggleSwitch is used to select a boolean value.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ToggleSwitch API

API defines helper props, events and others for the PrimeNG ToggleSwitch module.

#### ToggleSwitch {#api-toggleswitch}

ToggleSwitch is used to select a boolean value.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| styleClass | string | null | Style class of the component. |
| tabindex | number | null | Index of the element in tabbing order. |
| inputId | string | null | Identifier of the input element. |
| readonly | boolean | false | When present, it specifies that the component cannot be edited. |
| trueValue | any | true | Value in checked state. |
| falseValue | any | false | Value in unchecked state. |
| ariaLabel | string | null | Used to define a string that autocomplete attribute the current element. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  ToggleSwitchChangeEvent | Callback to invoke when the on value change. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| handle |  | Callback to invoke when the on value change. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ToggleSwitch Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-toggleswitch | Class name of the root element |
| p-toggleswitch-input | Class name of the input element |
| p-toggleswitch-slider | Class name of the slider element |

#### ToggleSwitch Design Tokens {#theming-toggleswitch-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| toggleswitch.root.width | toggleswitch.width | --p-toggleswitch-width | Width of root |
| toggleswitch.root.height | toggleswitch.height | --p-toggleswitch-height | Height of root |
| toggleswitch.root.borderRadius | toggleswitch.border.radius | --p-toggleswitch-border-radius | Border radius of root |
| toggleswitch.root.gap | toggleswitch.gap | --p-toggleswitch-gap | Gap of root |
| toggleswitch.root.shadow | toggleswitch.shadow | --p-toggleswitch-shadow | Shadow of root |
| toggleswitch.root.focusRing.width | toggleswitch.focus.ring.width | --p-toggleswitch-focus-ring-width | Focus ring width of root |
| toggleswitch.root.focusRing.style | toggleswitch.focus.ring.style | --p-toggleswitch-focus-ring-style | Focus ring style of root |
| toggleswitch.root.focusRing.color | toggleswitch.focus.ring.color | --p-toggleswitch-focus-ring-color | Focus ring color of root |
| toggleswitch.root.focusRing.offset | toggleswitch.focus.ring.offset | --p-toggleswitch-focus-ring-offset | Focus ring offset of root |
| toggleswitch.root.focusRing.shadow | toggleswitch.focus.ring.shadow | --p-toggleswitch-focus-ring-shadow | Focus ring shadow of root |
| toggleswitch.root.borderWidth | toggleswitch.border.width | --p-toggleswitch-border-width | Border width of root |
| toggleswitch.root.borderColor | toggleswitch.border.color | --p-toggleswitch-border-color | Border color of root |
| toggleswitch.root.hoverBorderColor | toggleswitch.hover.border.color | --p-toggleswitch-hover-border-color | Hover border color of root |
| toggleswitch.root.checkedBorderColor | toggleswitch.checked.border.color | --p-toggleswitch-checked-border-color | Checked border color of root |
| toggleswitch.root.checkedHoverBorderColor | toggleswitch.checked.hover.border.color | --p-toggleswitch-checked-hover-border-color | Checked hover border color of root |
| toggleswitch.root.invalidBorderColor | toggleswitch.invalid.border.color | --p-toggleswitch-invalid-border-color | Invalid border color of root |
| toggleswitch.root.transitionDuration | toggleswitch.transition.duration | --p-toggleswitch-transition-duration | Transition duration of root |
| toggleswitch.root.slideDuration | toggleswitch.slide.duration | --p-toggleswitch-slide-duration | Slide duration of root |
| toggleswitch.root.background | toggleswitch.background | --p-toggleswitch-background | Background of root |
| toggleswitch.root.disabledBackground | toggleswitch.disabled.background | --p-toggleswitch-disabled-background | Disabled background of root |
| toggleswitch.root.hoverBackground | toggleswitch.hover.background | --p-toggleswitch-hover-background | Hover background of root |
| toggleswitch.root.checkedBackground | toggleswitch.checked.background | --p-toggleswitch-checked-background | Checked background of root |
| toggleswitch.root.checkedHoverBackground | toggleswitch.checked.hover.background | --p-toggleswitch-checked-hover-background | Checked hover background of root |
| toggleswitch.handle.borderRadius | toggleswitch.handle.border.radius | --p-toggleswitch-handle-border-radius | Border radius of handle |
| toggleswitch.handle.size | toggleswitch.handle.size | --p-toggleswitch-handle-size | Size of handle |
| toggleswitch.handle.background | toggleswitch.handle.background | --p-toggleswitch-handle-background | Background of handle |
| toggleswitch.handle.disabledBackground | toggleswitch.handle.disabled.background | --p-toggleswitch-handle-disabled-background | Disabled background of handle |
| toggleswitch.handle.hoverBackground | toggleswitch.handle.hover.background | --p-toggleswitch-handle-hover-background | Hover background of handle |
| toggleswitch.handle.checkedBackground | toggleswitch.handle.checked.background | --p-toggleswitch-handle-checked-background | Checked background of handle |
| toggleswitch.handle.checkedHoverBackground | toggleswitch.handle.checked.hover.background | --p-toggleswitch-handle-checked-hover-background | Checked hover background of handle |
| toggleswitch.handle.color | toggleswitch.handle.color | --p-toggleswitch-handle-color | Color of handle |
| toggleswitch.handle.hoverColor | toggleswitch.handle.hover.color | --p-toggleswitch-handle-hover-color | Hover color of handle |
| toggleswitch.handle.checkedColor | toggleswitch.handle.checked.color | --p-toggleswitch-handle-checked-color | Checked color of handle |
| toggleswitch.handle.checkedHoverColor | toggleswitch.handle.checked.hover.color | --p-toggleswitch-handle-checked-hover-color | Checked hover color of handle |

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

[View Official Documentation](https://primeng.org/toggleswitch)
