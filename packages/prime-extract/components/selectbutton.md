# SelectButton

SelectButton is used to choose single or multiple items from a list using buttons.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { SelectButtonModule } from 'primeng/selectbutton';
```

### Basic {#basic}

SelectButton requires a value to bind and a collection of options.

```html
<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />
```

### Multiple {#multiple}

SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array.

```html
<p-selectbutton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value" />
```

### Template {#template}

For custom content support define a template named item where the default local template variable refers to an option.

```html
<p-selectbutton [options]="justifyOptions" [(ngModel)]="value" optionLabel="justify">
    <ng-template #item let-item>
        <i [class]="item.icon"></i>
    </ng-template>
</p-selectbutton>
```

### Sizes {#sizes}

SelectButton provides small and large sizes as alternatives to the base.

```html
<p-selectbutton [(ngModel)]="value1" [options]="options" size="small" />
<p-selectbutton [(ngModel)]="value2" [options]="options" />
<p-selectbutton [(ngModel)]="value3" [options]="options" size="large" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the optionDisabled property.

```html
<p-selectbutton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true" />

<p-selectbutton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" [invalid]="value === null" />
```

### Forms {#forms}

SelectButton can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-selectbutton #model="ngModel" [(ngModel)]="value" [options]="stateOptions" optionLabel="label" optionValue="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" required name="value" />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-selectbutton [options]="stateOptions" formControlName="value" [invalid]="isInvalid('value')" optionLabel="label" optionValue="value" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Selection is required</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

The container element that wraps the buttons has a group role whereas each button element uses button role and aria-pressed is updated depending on selection state. Value to describe an option is automatically set using the ariaLabel property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only.

### SelectButton {#selectbutton}

SelectButton is used to choose single or multiple items from a list using buttons.

[↑ Back to Top](#table-of-contents)

## API {#api}

### SelectButton API

API defines helper props, events and others for the PrimeNG SelectButton module.

#### SelectButton {#api-selectbutton}

SelectButton is used to choose single or multiple items from a list using buttons.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| options | any[] | null | An array of selectitems to display as the available options. |
| optionLabel | string | null | Name of the label field of an option. |
| optionValue | string | null | Name of the value field of an option. |
| optionDisabled | string | null | Name of the disabled field of an option. |
| unselectable | boolean | null | Whether selection can be cleared. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| multiple | boolean | false | When specified, allows selecting multiple values. |
| allowEmpty | boolean | true | Whether selection can not be cleared. |
| styleClass | string | null | Style class of the component. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| dataKey | string | null | A property to uniquely identify a value in options. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onOptionClick | event :  SelectButtonOptionClickEvent | Callback to invoke on input click. |
| onChange | event :  SelectButtonChangeEvent | Callback to invoke on selection change. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Template of an item in the list. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### SelectButton Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-selectbutton | Class name of the root element |

#### SelectButton Design Tokens {#theming-selectbutton-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| selectbutton.root.borderRadius | selectbutton.border.radius | --p-selectbutton-border-radius | Border radius of root |
| selectbutton.root.invalidBorderColor | selectbutton.invalid.border.color | --p-selectbutton-invalid-border-color | Invalid border color of root |

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

[View Official Documentation](https://primeng.org/selectbutton)
