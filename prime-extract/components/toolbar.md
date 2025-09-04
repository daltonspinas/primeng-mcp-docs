# Toolbar

Toolbar is a grouping component for buttons and other content.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ToolbarModule } from 'primeng/toolbar';
```

### Basic {#basic}

Toolbar is a grouping component for buttons and other content. Its content can be placed inside the start, center and end sections.

```html
<p-toolbar>
    <ng-template #start>
        <p-button icon="pi pi-plus" class="mr-2" text severity="secondary" />
        <p-button icon="pi pi-print" class="mr-2" text severity="secondary" />
        <p-button icon="pi pi-upload" text severity="secondary" />
    </ng-template>
    <ng-template #center>
        <p-iconfield iconPosition="left">
            <p-inputicon class="pi pi-search" />
            <input type="text" pInputText placeholder="Search" />
        </p-iconfield>
    </ng-template>
    <ng-template #end>
        <p-splitbutton label="Save" [model]="items" />
    </ng-template>
</p-toolbar>
```

### Custom {#custom}

Content can also be placed using the start, center and end templates.

```html
<p-toolbar [style]="{ 'border-radius': '3rem', 'padding': '1rem 1rem 1rem 1.5rem' }">
    <ng-template #start>
        <div class="flex items-center gap-2">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; margin-right: 1rem">
                <path d="..." fill="var(--p-primary-color)" />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33"></mask>
            </svg>
            <p-button label="Files" text plain />
            <p-button label="Edit" text plain />
            <p-button label="View" text plain />
        </div>
    </ng-template>

    <ng-template #end>
        <div class="flex items-center gap-2">
            <p-button label="Share" severity="contrast" size="small" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" [style]="{ width: '32px', height: '32px' }" />
        </div>
    </ng-template>
</p-toolbar>
```

### Accessibility {#accessibility}

Toolbar uses toolbar role for the root element, aria-orientation is not included as it defaults to horizontal. Any valid attribute is passed to the root element so you may add additional properties like aria-labelledby and aria-labelled to define the element if required.

```html
<p-toolbar aria-label="Actions">
    Content
</p-toolbar>
```

### Toolbar {#toolbar}

Toolbar is a grouping component for buttons and other content.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Toolbar API

API defines helper props, events and others for the PrimeNG Toolbar module.

#### Toolbar {#api-toolbar}

Toolbar is a grouping component for buttons and other content.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Style class of the component. |
| ariaLabelledBy | string | null | Defines a string value that labels an interactive element. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| start |  | Defines template option for start. |
| end |  | Defines template option for end. |
| center |  | Defines template option for center. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Toolbar Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-toolbar | Class name of the root element |
| p-toolbar-start | Class name of the start element |
| p-toolbar-center | Class name of the center element |
| p-toolbar-end | Class name of the end element |

#### Toolbar Design Tokens {#theming-toolbar-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| toolbar.root.background | toolbar.background | --p-toolbar-background | Background of root |
| toolbar.root.borderColor | toolbar.border.color | --p-toolbar-border-color | Border color of root |
| toolbar.root.borderRadius | toolbar.border.radius | --p-toolbar-border-radius | Border radius of root |
| toolbar.root.color | toolbar.color | --p-toolbar-color | Color of root |
| toolbar.root.gap | toolbar.gap | --p-toolbar-gap | Gap of root |
| toolbar.root.padding | toolbar.padding | --p-toolbar-padding | Padding of root |

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

[View Official Documentation](https://primeng.org/toolbar)
