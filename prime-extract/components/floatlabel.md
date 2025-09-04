# FloatLabel

FloatLabel appears on top of the input field when focused.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { FloatLabelModule } from 'primeng/floatlabel';
```

### Basic {#basic}

FloatLabel is used by wrapping the input and its label.

```html
<p-floatlabel>
    <input id="username" pInputText [(ngModel)]="value" />
    <label for="username">Username</label>
</p-floatlabel>
```

### Variants {#variants}

The variant property defines the position of the label. Default value is over, whereas in and on are the alternatives.

```html
<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Invalid {#invalid}

When the form element is invalid, the label is also highlighted.

```html
<p-floatlabel>
    <input pInputText id="value1" [(ngModel)]="value1" [invalid]="!value1" autocomplete="off" />
    <label for="value1">Username</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="value2" [(ngModel)]="value2" [invalid]="!value2" autocomplete="off" />
    <label for="value2">Username</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="value3" [(ngModel)]="value3" [invalid]="!value3" autocomplete="off" />
    <label for="value3">Username</label>
</p-floatlabel>
```

### Accessibility {#accessibility}

FloatLabel does not require any roles and attributes.

### FloatLabel {#floatlabel}

FloatLabel appears on top of the input field when focused.

[↑ Back to Top](#table-of-contents)

## API {#api}

### FloatLabel API

API defines helper props, events and others for the PrimeNG FloatLabel module.

#### FloatLabel {#api-floatlabel}

FloatLabel appears on top of the input field when focused.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| variant | "in" | "over" | "on" | over | Defines the positioning of the label relative to the input. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### FloatLabel Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-floatlabel | Class name of the root element |

#### FloatLabel Design Tokens {#theming-floatlabel-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| floatlabel.root.color | floatlabel.color | --p-floatlabel-color | Color of root |
| floatlabel.root.focusColor | floatlabel.focus.color | --p-floatlabel-focus-color | Focus color of root |
| floatlabel.root.activeColor | floatlabel.active.color | --p-floatlabel-active-color | Active color of root |
| floatlabel.root.invalidColor | floatlabel.invalid.color | --p-floatlabel-invalid-color | Invalid color of root |
| floatlabel.root.transitionDuration | floatlabel.transition.duration | --p-floatlabel-transition-duration | Transition duration of root |
| floatlabel.root.positionX | floatlabel.position.x | --p-floatlabel-position-x | Position x of root |
| floatlabel.root.positionY | floatlabel.position.y | --p-floatlabel-position-y | Position y of root |
| floatlabel.root.fontWeight | floatlabel.font.weight | --p-floatlabel-font-weight | Font weight of root |
| floatlabel.root.active.fontSize | floatlabel.active.font.size | --p-floatlabel-active-font-size | Active font size of root |
| floatlabel.root.active.fontWeight | floatlabel.active.font.weight | --p-floatlabel-active-font-weight | Active font weight of root |
| floatlabel.over.active.top | floatlabel.over.active.top | --p-floatlabel-over-active-top | Active top of over |
| floatlabel.in.input.paddingTop | floatlabel.in.input.padding.top | --p-floatlabel-in-input-padding-top | Input padding top of in |
| floatlabel.in.input.paddingBottom | floatlabel.in.input.padding.bottom | --p-floatlabel-in-input-padding-bottom | Input padding bottom of in |
| floatlabel.in.active.top | floatlabel.in.active.top | --p-floatlabel-in-active-top | Active top of in |
| floatlabel.on.borderRadius | floatlabel.on.border.radius | --p-floatlabel-on-border-radius | Border radius of on |
| floatlabel.on.active.background | floatlabel.on.active.background | --p-floatlabel-on-active-background | Active background of on |
| floatlabel.on.active.padding | floatlabel.on.active.padding | --p-floatlabel-on-active-padding | Active padding of on |

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

[View Official Documentation](https://primeng.org/floatlabel)
