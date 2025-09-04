# IftaLabel

IftaLabel is used to create infield top aligned labels.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { IftaLabelModule } from 'primeng/iftalabel';
```

### Basic {#basic}

IftaLabel is used by wrapping the input and its label.

```html
<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</p-iftalabel>
```

### Invalid {#invalid}

When the form element is invalid, the label is also highlighted.

```html
<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" [invalid]="!value" />
    <label for="username">Username</label>
</p-iftalabel>
```

### Accessibility {#accessibility}

IftaLabel does not require any roles and attributes.

### IftaLabel {#iftalabel}

IftaLabel is used to create infield top aligned labels.

[↑ Back to Top](#table-of-contents)

## API {#api}

### IftaLabel API

API defines helper props, events and others for the PrimeNG IftaLabel module.

#### IftaLabel {#api-iftalabel}

IftaLabel is used to create infield top aligned labels.

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### IftaLabel Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-iftalabel | Class name of the root element |

#### IftaLabel Design Tokens {#theming-iftalabel-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| iftalabel.root.color | iftalabel.color | --p-iftalabel-color | Color of root |
| iftalabel.root.focusColor | iftalabel.focus.color | --p-iftalabel-focus-color | Focus color of root |
| iftalabel.root.invalidColor | iftalabel.invalid.color | --p-iftalabel-invalid-color | Invalid color of root |
| iftalabel.root.transitionDuration | iftalabel.transition.duration | --p-iftalabel-transition-duration | Transition duration of root |
| iftalabel.root.positionX | iftalabel.position.x | --p-iftalabel-position-x | Position x of root |
| iftalabel.root.top | iftalabel.top | --p-iftalabel-top | Top of root |
| iftalabel.root.fontSize | iftalabel.font.size | --p-iftalabel-font-size | Font size of root |
| iftalabel.root.fontWeight | iftalabel.font.weight | --p-iftalabel-font-weight | Font weight of root |
| iftalabel.input.paddingTop | iftalabel.input.padding.top | --p-iftalabel-input-padding-top | Padding top of input |
| iftalabel.input.paddingBottom | iftalabel.input.padding.bottom | --p-iftalabel-input-padding-bottom | Padding bottom of input |

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

[View Official Documentation](https://primeng.org/iftalabel)
