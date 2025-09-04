# IconField

IconField wraps an input and an icon.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
```

### Basic {#basic}

A group is created by wrapping the input and icon with the IconField component. Each icon is defined as a child of InputIcon component. In addition, position of the icon can be changed using iconPosition property that the default value is right and also left option is available.

```html
<p-iconfield>
    <p-inputicon class="pi pi-search" />
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>
<p-iconfield>
    <input type="text" pInputText />
    <p-inputicon class="pi pi-spinner pi-spin" />
</p-iconfield>
```

### Template {#template}

An eye icon is displayed by default when the image is hovered in preview mode. Use the indicator template for custom content.

```html
<p-iconfield iconPosition="left">
    <p-inputicon>
        <svg width="20" height="20" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </p-inputicon>
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>
```

### Float Label {#float-label}

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    </p-iconfield>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    </p-iconfield>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    </p-iconfield>
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-iconfield>
        <p-inputicon class="pi pi-user" />
        <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    </p-iconfield>
    <label for="username">Username</label>
</p-iftalabel>
```

### Sizes {#sizes}

IconField is compatible with the pSize setting of the input field.

```html
<p-iconfield>
    <p-inputicon class="pi pi-search" />
    <input pInputText [(ngModel)]="value1" placeholder="Small" pSize="small" />
</p-iconfield>

<p-iconfield>
    <input pInputText [(ngModel)]="value2" placeholder="Normal" />
    <p-inputicon class="pi pi-user" />
</p-iconfield>

<p-iconfield>
    <p-inputicon class="pi pi-lock" />
    <input pInputText [(ngModel)]="value3" placeholder="Large" pSize="large" />
    <p-inputicon class="pi pi-spin pi-spinner" />
</p-iconfield>
```

### Accessibility {#accessibility}

IconField and InputIcon does not require any roles and attributes.

### IconField {#iconfield}

IconField wraps an input and an icon.

### InputIcon {#inputicon}

[↑ Back to Top](#table-of-contents)

## API {#api}

### IconField API

API defines helper props, events and others for the PrimeNG IconField module.

#### IconField {#api-iconfield}

IconField wraps an input and an icon.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| iconPosition | "right" | "left" | left | Position of the icon. |
| styleClass | string | null | Style class of the component. |

#### InputIcon {#api-inputicon}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### IconField Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-iconfield | Class name of the root element |

#### IconField Design Tokens {#theming-iconfield-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| iconfield.icon.color | iconfield.icon.color | --p-iconfield-icon-color | Color of icon |

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

[View Official Documentation](https://primeng.org/iconfield)
