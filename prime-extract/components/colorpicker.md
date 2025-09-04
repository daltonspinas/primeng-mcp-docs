# ColorPicker

ColorPicker is an input component to select a color.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ColorPickerModule } from 'primeng/colorpicker';
```

### Basic {#basic}

ColorPicker is used as a controlled input with ngModel property.

```html
<p-colorpicker [(ngModel)]="color" />
```

### Inline {#inline}

ColorPicker is displayed as a popup by default, add inline property to customize this behavior.

```html
<p-colorpicker [(ngModel)]="color" [inline]="true" />
```

### Format {#format}

Default color format to use in value binding is hex and other possible values can be rgb and hsb using the format property.

```html
<p-colorpicker [(ngModel)]="color" inputId="cp-hex" />

<p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" />

<p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" />
```

### Forms {#forms}

ColorPicker can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <p-colorpicker name="color" [(ngModel)]="color" #colorModel="ngModel" required defaultColor="989898" />
        @if (colorModel.invalid && (colorModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <p-colorpicker formControlName="color" defaultColor="989898" />
        @if (isInvalid('color')) {
            <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-colorpicker [(ngModel)]="color" [disabled]="true" />
```

### Accessibility {#accessibility}

Specification does not cover a color picker yet and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats.

### ColorPicker {#colorpicker}

ColorPicker groups a collection of contents in tabs.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ColorPicker API

API defines helper props, events and others for the PrimeNG ColorPicker module.

#### ColorPicker {#api-colorpicker}

ColorPicker groups a collection of contents in tabs.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| styleClass | string | null | Style class of the component. |
| inline | boolean | false | Whether to display as an overlay or not. |
| format | "rgb" | "hex" | "hsb" | hex | Format to use in value binding. |
| tabindex | string | null | Index of the element in tabbing order. |
| inputId | string | null | Identifier of the focus input to match a label defined for the dropdown. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| defaultColor | string | ff0000 | Default color to display initially when model value is not present. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  ColorPickerChangeEvent | Callback to invoke on value change. |
| onShow | value :  any | Callback to invoke on panel is shown. |
| onHide | value :  any | Callback to invoke on panel is hidden. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ColorPicker Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-colorpicker | Class name of the root element |
| p-colorpicker-preview | Class name of the preview element |
| p-colorpicker-panel | Class name of the panel element |
| p-colorpicker-color-selector | Class name of the color selector element |
| p-colorpicker-color-background | Class name of the color background element |
| p-colorpicker-color-handle | Class name of the color handle element |
| p-colorpicker-hue | Class name of the hue element |
| p-colorpicker-hue-handle | Class name of the hue handle element |

#### ColorPicker Design Tokens {#theming-colorpicker-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| colorpicker.root.transitionDuration | colorpicker.transition.duration | --p-colorpicker-transition-duration | Transition duration of root |
| colorpicker.preview.width | colorpicker.preview.width | --p-colorpicker-preview-width | Width of preview |
| colorpicker.preview.height | colorpicker.preview.height | --p-colorpicker-preview-height | Height of preview |
| colorpicker.preview.borderRadius | colorpicker.preview.border.radius | --p-colorpicker-preview-border-radius | Border radius of preview |
| colorpicker.preview.focusRing.width | colorpicker.preview.focus.ring.width | --p-colorpicker-preview-focus-ring-width | Focus ring width of preview |
| colorpicker.preview.focusRing.style | colorpicker.preview.focus.ring.style | --p-colorpicker-preview-focus-ring-style | Focus ring style of preview |
| colorpicker.preview.focusRing.color | colorpicker.preview.focus.ring.color | --p-colorpicker-preview-focus-ring-color | Focus ring color of preview |
| colorpicker.preview.focusRing.offset | colorpicker.preview.focus.ring.offset | --p-colorpicker-preview-focus-ring-offset | Focus ring offset of preview |
| colorpicker.preview.focusRing.shadow | colorpicker.preview.focus.ring.shadow | --p-colorpicker-preview-focus-ring-shadow | Focus ring shadow of preview |
| colorpicker.panel.shadow | colorpicker.panel.shadow | --p-colorpicker-panel-shadow | Shadow of panel |
| colorpicker.panel.borderRadius | colorpicker.panel.border.radius | --p-colorpicker-panel-border-radius | Border radius of panel |
| colorpicker.panel.background | colorpicker.panel.background | --p-colorpicker-panel-background | Background of panel |
| colorpicker.panel.borderColor | colorpicker.panel.border.color | --p-colorpicker-panel-border-color | Border color of panel |
| colorpicker.handle.color | colorpicker.handle.color | --p-colorpicker-handle-color | Color of handle |

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

[View Official Documentation](https://primeng.org/colorpicker)
