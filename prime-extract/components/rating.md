# Rating

Rating component is a star based selection input.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { RatingModule } from 'primeng/rating';
```

### Basic {#basic}

Two-way value binding is defined using ngModel.

```html
<p-rating [(ngModel)]="value" />
```

### Number of Stars {#number-of-stars}

Number of stars to display is defined with stars property.

```html
<p-rating [(ngModel)]="value" [stars]="10" />
```

### Template {#template}

Templating allows customizing the content where the icon instance is available as the implicit variable.

```html
<p-rating [(ngModel)]="value">
    <ng-template #onicon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24" width="24" />
    </ng-template>
    <ng-template #officon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
    </ng-template>
</p-rating>
```

### Readonly {#readonly}

When readonly present, value cannot be edited.

```html
<p-rating [(ngModel)]="value" [readonly]="true" />
```

### Disabled {#disabled}

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```html
<p-rating [(ngModel)]="value" [disabled]="true" />
```

### Forms {#forms}

Rating can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <p-rating #ratingValue="ngModel" [(ngModel)]="value" required name="ratingValue" [invalid]="ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)"/>
        @if (ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <p-rating formControlName="ratingValue" [invalid]="isInvalid('ratingValue')"/>
        @if (isInvalid('ratingValue')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the locale API via star and stars of the aria property.

### Rating {#rating}

Rating is an extension to standard radio button element with theming.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Rating API

API defines helper props, events and others for the PrimeNG Rating module.

#### Rating {#api-rating}

Rating is an extension to standard radio button element with theming.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| readonly | boolean | false | When present, changing the value is not possible. |
| stars | number | 5 | Number of stars. |
| iconOnClass | string | null | Style class of the on icon. |
| iconOnStyle | { [klass: string]: any } | null | Inline style of the on icon. |
| iconOffClass | string | null | Style class of the off icon. |
| iconOffStyle | { [klass: string]: any } | null | Inline style of the off icon. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onRate | event :  RatingRateEvent | Emitted on value change. |
| onFocus | event :  FocusEvent | Emitted when the rating receives focus. |
| onBlur | event :  FocusEvent | Emitted when the rating loses focus. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| onicon |  | Custom on icon template. |
| officon |  | Custom off icon template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Rating Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-rating | Class name of the root element |
| p-rating-option | Class name of the option element |
| p-rating-on-icon | Class name of the on icon element |
| p-rating-off-icon | Class name of the off icon element |

#### Rating Design Tokens {#theming-rating-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| rating.root.gap | rating.gap | --p-rating-gap | Gap of root |
| rating.root.transitionDuration | rating.transition.duration | --p-rating-transition-duration | Transition duration of root |
| rating.root.focusRing.width | rating.focus.ring.width | --p-rating-focus-ring-width | Focus ring width of root |
| rating.root.focusRing.style | rating.focus.ring.style | --p-rating-focus-ring-style | Focus ring style of root |
| rating.root.focusRing.color | rating.focus.ring.color | --p-rating-focus-ring-color | Focus ring color of root |
| rating.root.focusRing.offset | rating.focus.ring.offset | --p-rating-focus-ring-offset | Focus ring offset of root |
| rating.root.focusRing.shadow | rating.focus.ring.shadow | --p-rating-focus-ring-shadow | Focus ring shadow of root |
| rating.icon.size | rating.icon.size | --p-rating-icon-size | Size of icon |
| rating.icon.color | rating.icon.color | --p-rating-icon-color | Color of icon |
| rating.icon.hoverColor | rating.icon.hover.color | --p-rating-icon-hover-color | Hover color of icon |
| rating.icon.activeColor | rating.icon.active.color | --p-rating-icon-active-color | Active color of icon |

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

[View Official Documentation](https://primeng.org/rating)
