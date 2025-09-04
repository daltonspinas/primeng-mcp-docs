# Textarea

Textarea adds styling and autoResize functionality to standard textarea element.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TextareaModule } from 'primeng/textarea';
```

### Basic {#basic}

Textarea is applied to an input field with pTextarea directive.

```html
<textarea rows="5" cols="30" pTextarea [(ngModel)]="value"></textarea>
```

### AutoResize {#autoresize}

When autoResize is enabled, textarea grows instead of displaying a scrollbar.

```html
<textarea rows="5"cols="30" pTextarea [autoResize]="true"></textarea>
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <textarea pTextarea id="over_label" [(ngModel)]="value1" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <textarea pTextarea id="over_label" [(ngModel)]="value2" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <textarea pTextarea id="over_label" [(ngModel)]="value3" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <textarea pTextarea id="description" [(ngModel)]="value" rows="5" cols="30" style="resize: none"></textarea>
    <label for="description">Description</label>
</p-iftalabel>
```

### Sizes {#sizes}

Textarea provides small and large sizes as alternatives to the base.

```html
<textarea pTextarea [(ngModel)]="value1" pSize="small" placeholder="Small" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value2" placeholder="Normal" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value3" pSize="large" placeholder="Large" rows="3"></textarea>
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<textarea [(ngModel)]="value" variant="filled" rows="5" cols="30" pTextarea></textarea>
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<textarea rows="5"cols="30" pTextarea [disabled]="true"></textarea>
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<textarea rows="5" cols="30" pTextarea [(ngModel)]="value" [invalid]="!value" placeholder="Address"></textarea>
```

### Forms {#forms}

Textarea can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('adress')"></textarea>
        @if (isInvalid('adress')) {
            <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('address')"></textarea>
        @if (isInvalid('address')) {
            <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Textarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby, aria-label props.

```html
<label for="address1">Address 1</label>
<textarea pTextarea id="address1"></textarea>

<span id="address2">Address 2</span>
<textarea pTextarea aria-labelledby="address2"></textarea>

<textarea pTextarea aria-label="Address Details"></textarea>
```

### Textarea {#textarea}

Textarea adds styling and autoResize functionality to standard textarea element.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Textarea API

API defines helper props, events and others for the PrimeNG Textarea module.

#### Textarea {#api-textarea}

Textarea adds styling and autoResize functionality to standard textarea element.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| autoResize | boolean | false | When present, textarea size changes as being typed. |
| pSize | "small" | "large" | null | Defines the size of the component. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onResize | event :  {} | Event | Callback to invoke on textarea resize. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Textarea Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-textarea | Class name of the root element |

#### Textarea Design Tokens {#theming-textarea-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| textarea.root.background | textarea.background | --p-textarea-background | Background of root |
| textarea.root.disabledBackground | textarea.disabled.background | --p-textarea-disabled-background | Disabled background of root |
| textarea.root.filledBackground | textarea.filled.background | --p-textarea-filled-background | Filled background of root |
| textarea.root.filledHoverBackground | textarea.filled.hover.background | --p-textarea-filled-hover-background | Filled hover background of root |
| textarea.root.filledFocusBackground | textarea.filled.focus.background | --p-textarea-filled-focus-background | Filled focus background of root |
| textarea.root.borderColor | textarea.border.color | --p-textarea-border-color | Border color of root |
| textarea.root.hoverBorderColor | textarea.hover.border.color | --p-textarea-hover-border-color | Hover border color of root |
| textarea.root.focusBorderColor | textarea.focus.border.color | --p-textarea-focus-border-color | Focus border color of root |
| textarea.root.invalidBorderColor | textarea.invalid.border.color | --p-textarea-invalid-border-color | Invalid border color of root |
| textarea.root.color | textarea.color | --p-textarea-color | Color of root |
| textarea.root.disabledColor | textarea.disabled.color | --p-textarea-disabled-color | Disabled color of root |
| textarea.root.placeholderColor | textarea.placeholder.color | --p-textarea-placeholder-color | Placeholder color of root |
| textarea.root.invalidPlaceholderColor | textarea.invalid.placeholder.color | --p-textarea-invalid-placeholder-color | Invalid placeholder color of root |
| textarea.root.shadow | textarea.shadow | --p-textarea-shadow | Shadow of root |
| textarea.root.paddingX | textarea.padding.x | --p-textarea-padding-x | Padding x of root |
| textarea.root.paddingY | textarea.padding.y | --p-textarea-padding-y | Padding y of root |
| textarea.root.borderRadius | textarea.border.radius | --p-textarea-border-radius | Border radius of root |
| textarea.root.focusRing.width | textarea.focus.ring.width | --p-textarea-focus-ring-width | Focus ring width of root |
| textarea.root.focusRing.style | textarea.focus.ring.style | --p-textarea-focus-ring-style | Focus ring style of root |
| textarea.root.focusRing.color | textarea.focus.ring.color | --p-textarea-focus-ring-color | Focus ring color of root |
| textarea.root.focusRing.offset | textarea.focus.ring.offset | --p-textarea-focus-ring-offset | Focus ring offset of root |
| textarea.root.focusRing.shadow | textarea.focus.ring.shadow | --p-textarea-focus-ring-shadow | Focus ring shadow of root |
| textarea.root.transitionDuration | textarea.transition.duration | --p-textarea-transition-duration | Transition duration of root |
| textarea.root.sm.fontSize | textarea.sm.font.size | --p-textarea-sm-font-size | Sm font size of root |
| textarea.root.sm.paddingX | textarea.sm.padding.x | --p-textarea-sm-padding-x | Sm padding x of root |
| textarea.root.sm.paddingY | textarea.sm.padding.y | --p-textarea-sm-padding-y | Sm padding y of root |
| textarea.root.lg.fontSize | textarea.lg.font.size | --p-textarea-lg-font-size | Lg font size of root |
| textarea.root.lg.paddingX | textarea.lg.padding.x | --p-textarea-lg-padding-x | Lg padding x of root |
| textarea.root.lg.paddingY | textarea.lg.padding.y | --p-textarea-lg-padding-y | Lg padding y of root |

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

[View Official Documentation](https://primeng.org/textarea)
