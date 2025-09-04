# Slider

Slider is a component to provide input with a drag handle.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { SliderModule } from 'primeng/slider';
```

### Basic {#basic}

Two-way binding is defined using the standard ngModel directive.

```html
<p-slider [(ngModel)]="value" class="w-56" />
```

### Input {#input}

Slider is connected to an input field using two-way binding.

```html
<input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
<p-slider [(ngModel)]="value" class="w-full" />
```

### Step {#step}

Size of each movement is defined with the step property.

```html
<p-slider [(ngModel)]="value" [step]="20" class="w-56" />
```

### Range {#range}

When range property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```html
<p-slider [(ngModel)]="rangeValues" [range]="true" class="w-56" />
```

### Filter {#filter}

Image filter implementation using multiple sliders.

```html
<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
<p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />
```

### Vertical {#vertical}

Default layout of slider is horizontal, use orientation property for the alternative vertical mode.

```html
<p-slider [(ngModel)]="value" orientation="vertical" class="h-56" />
```

### Forms {#forms}

Slider can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-4">
        <p-slider #model="ngModel" [(ngModel)]="value" class="w-56" required [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="slider" />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
        <p-slider formControlName="value" class="w-56" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Slider element component uses slider role on the handle in addition to the aria-orientation, aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using ariaLabelledBy and ariaLabel props.

```html
<span id="label_number">Number</span>
<p-slider ariaLabelledBy="label_number" />

<p-slider ariaLabel="Number" />
```

### Slider {#slider}

Slider is a component to provide input with a drag handle.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Slider API

API defines helper props, events and others for the PrimeNG Slider module.

#### Slider {#api-slider}

Slider is a component to provide input with a drag handle.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| animate | boolean | false | When enabled, displays an animation on click of the slider bar. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| orientation | "vertical" | "horizontal" | horizontal | Orientation of the slider. |
| step | number | null | Step factor to increment/decrement the value. |
| range | boolean | false | When specified, allows two boundary values to be picked. |
| styleClass | string | null | Style class of the component. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  SliderChangeEvent | Callback to invoke on value change. |
| onSlideEnd | event :  SliderSlideEndEvent | Callback to invoke when slide ended. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Slider Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-slider | Class name of the root element |
| p-slider-range | Class name of the range element |
| p-slider-handle | Class name of the handle element |

#### Slider Design Tokens {#theming-slider-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| slider.root.transitionDuration | slider.transition.duration | --p-slider-transition-duration | Transition duration of root |
| slider.track.background | slider.track.background | --p-slider-track-background | Background of track |
| slider.track.borderRadius | slider.track.border.radius | --p-slider-track-border-radius | Border radius of track |
| slider.track.size | slider.track.size | --p-slider-track-size | Size of track |
| slider.range.background | slider.range.background | --p-slider-range-background | Background of range |
| slider.handle.width | slider.handle.width | --p-slider-handle-width | Width of handle |
| slider.handle.height | slider.handle.height | --p-slider-handle-height | Height of handle |
| slider.handle.borderRadius | slider.handle.border.radius | --p-slider-handle-border-radius | Border radius of handle |
| slider.handle.background | slider.handle.background | --p-slider-handle-background | Background of handle |
| slider.handle.hoverBackground | slider.handle.hover.background | --p-slider-handle-hover-background | Hover background of handle |
| slider.handle.content.borderRadius | slider.handle.content.border.radius | --p-slider-handle-content-border-radius | Content border radius of handle |
| slider.handle.content.background | slider.handle.content.background | --p-slider-handle-content-background | Background of handle |
| slider.handle.content.hoverBackground | slider.handle.content.hover.background | --p-slider-handle-content-hover-background | Content hover background of handle |
| slider.handle.content.width | slider.handle.content.width | --p-slider-handle-content-width | Content width of handle |
| slider.handle.content.height | slider.handle.content.height | --p-slider-handle-content-height | Content height of handle |
| slider.handle.content.shadow | slider.handle.content.shadow | --p-slider-handle-content-shadow | Content shadow of handle |
| slider.handle.focusRing.width | slider.handle.focus.ring.width | --p-slider-handle-focus-ring-width | Focus ring width of handle |
| slider.handle.focusRing.style | slider.handle.focus.ring.style | --p-slider-handle-focus-ring-style | Focus ring style of handle |
| slider.handle.focusRing.color | slider.handle.focus.ring.color | --p-slider-handle-focus-ring-color | Focus ring color of handle |
| slider.handle.focusRing.offset | slider.handle.focus.ring.offset | --p-slider-handle-focus-ring-offset | Focus ring offset of handle |
| slider.handle.focusRing.shadow | slider.handle.focus.ring.shadow | --p-slider-handle-focus-ring-shadow | Focus ring shadow of handle |

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

[View Official Documentation](https://primeng.org/slider)
