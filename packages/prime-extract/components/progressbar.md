# ProgressBar

ProgressBar is a process status indicator.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
```

### Basic {#basic}

ProgressBar is used with the value property.

```html
<p-progressbar [value]="50" />
```

### Dynamic {#dynamic}

Value is reactive so updating it dynamically changes the bar as well.

```html
<p-progressbar [value]="value" />
```

### Template {#template}

content template allows displaying custom content inside the progressbar.

```html
<p-progressbar [value]="50">
    <ng-template #content let-value>
        <span>{{value}}/100</span>
    </ng-template>
</p-progressbar>
```

### Indeterminate {#indeterminate}

For progresses with no value to track, set the mode property to indeterminate.

```html
<p-progressbar mode="indeterminate" [style]="{ height: '6px' }" />
```

### Accessibility {#accessibility}

ProgressBar components uses progressbar role along with aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined usingaria-labelledby and aria-label props.

```html
<span id="label_status">Status</span>
<p-progressbar aria-labelledby="label_status" />

<p-progressbar aria-label="Status" />
```

### ProgressBar {#progressbar}

ProgressBar is a process status indicator.

[↑ Back to Top](#table-of-contents)

## API {#api}

### ProgressBar API

API defines helper props, events and others for the PrimeNG ProgressBar module.

#### ProgressBar {#api-progressbar}

ProgressBar is a process status indicator.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | number | null | Current value of the progress. |
| showValue | boolean | true | Whether to display the progress bar value. |
| styleClass | string | null | Style class of the element. |
| valueStyleClass | string | null | Style class of the value element. |
| unit | string | % | Unit sign appended to the value. |
| mode | string | determinate | Defines the mode of the progress |
| color | string | null | Color for the background of the progress. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ProgressBar Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-progressbar | Class name of the root element |
| p-progressbar-value | Class name of the value element |
| p-progressbar-label | Class name of the label element |

#### ProgressBar Design Tokens {#theming-progressbar-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| progressbar.root.background | progressbar.background | --p-progressbar-background | Background of root |
| progressbar.root.borderRadius | progressbar.border.radius | --p-progressbar-border-radius | Border radius of root |
| progressbar.root.height | progressbar.height | --p-progressbar-height | Height of root |
| progressbar.value.background | progressbar.value.background | --p-progressbar-value-background | Background of value |
| progressbar.label.color | progressbar.label.color | --p-progressbar-label-color | Color of label |
| progressbar.label.fontSize | progressbar.label.font.size | --p-progressbar-label-font-size | Font size of label |
| progressbar.label.fontWeight | progressbar.label.font.weight | --p-progressbar-label-font-weight | Font weight of label |

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

[View Official Documentation](https://primeng.org/progressbar)
