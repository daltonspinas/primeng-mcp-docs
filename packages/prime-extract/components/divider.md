# Divider

Divider is used to separate contents.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { DividerModule } from 'primeng/divider';
```

### Basic {#basic}

Divider is basically placed between the items to separate.

```html
<p>
    Lorem ipsum dolor sit amet...
</p>
<p-divider />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
</p>
<p-divider />
<p>
    At vero eos et accusamus et iusto odio dignissimos...
</p>
<p-divider />
<p>
    Temporibus autem quibusdam et aut officiis...
</p>
```

### Type {#type}

Style of the border is configured with the type property that can either be solid, dotted or dashed.

```html
<p>
    Lorem ipsum dolor sit amet...
</p>
<p-divider type="solid" />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
</p>
<p-divider type="dotted" />
<p>
    At vero eos et accusamus et iusto odio dignissimos...
</p>
<p-divider type="dashed" />
<p>
    Temporibus autem quibusdam et aut officiis...
</p>
```

### Vertical {#vertical}

Vertical divider is enabled by setting the layout property as vertical.

```html
<p>
    Lorem ipsum dolor sit amet...
</p>
<p-divider layout="vertical" />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
</p>
<p-divider layout="vertical" />
<p>
    At vero eos et accusamus et iusto odio dignissimos...
</p>
```

### Content {#content}

Children are rendered within the boundaries of the divider where location of the content is configured with the align property. In horizontal layout, alignment options are left, center and right whereas vertical mode supports top, center and bottom.

```html
<p class="m-0">
    Lorem ipsum dolor sit amet...
    </p>

    <p-divider align="left" type="solid">
    <b>Left</b>
    </p-divider>

    <p class="m-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>

    <p-divider align="center" type="dotted">
    <b>Center</b>
    </p-divider>

    <p class="m-0">
    At vero eos et accusamus et iusto odio dignissimos...
    </p>

    <p-divider align="right" type="dashed">
    <b>Right</b>
    </p-divider>

    <p class="m-0">
    Temporibus autem quibusdam et aut officiis...
</p>
```

### Login {#login}

Sample implementation of a login form using a divider with content.

```html
<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <input pInputText id="username" type="text" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input pInputText id="password" type="password" />
        </div>
        <div class="flex">
            <p-button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem]" styleClass="w-full mx-auto" />
        </div>
    </div>
    <div class="w-full md:w-2/12">
        <p-divider layout="vertical" class="!hidden md:!flex"><b>OR</b></p-divider>
        <p-divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></p-divider>
    </div>
    <div class="w-full md:w-5/12 flex items-center justify-center py-5">
        <p-button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-full max-w-[17.35rem]" styleClass="w-full mx-auto" />
    </div>
</div>
```

### Accessibility {#accessibility}

Divider uses a separator role with aria-orientation set to either "horizontal" or "vertical".

### Divider {#divider}

Divider is used to separate contents.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Divider API

API defines helper props, events and others for the PrimeNG Divider module.

#### Divider {#api-divider}

Divider is used to separate contents.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Style class of the component. |
| layout | "vertical" | "horizontal" | horizontal | Specifies the orientation. |
| type | "solid" | "dashed" | "dotted" | solid | Border style type. |
| align | "right" | "left" | "top" | "bottom" | "center" | null | Alignment of the content. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Divider Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-divider | Class name of the root element |
| p-divider-content | Class name of the content element |

#### Divider Design Tokens {#theming-divider-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| divider.root.borderColor | divider.border.color | --p-divider-border-color | Border color of root |
| divider.content.background | divider.content.background | --p-divider-content-background | Background of content |
| divider.content.color | divider.content.color | --p-divider-content-color | Color of content |
| divider.horizontal.margin | divider.horizontal.margin | --p-divider-horizontal-margin | Margin of horizontal |
| divider.horizontal.padding | divider.horizontal.padding | --p-divider-horizontal-padding | Padding of horizontal |
| divider.horizontal.content.padding | divider.horizontal.content.padding | --p-divider-horizontal-content-padding | Content padding of horizontal |
| divider.vertical.margin | divider.vertical.margin | --p-divider-vertical-margin | Margin of vertical |
| divider.vertical.padding | divider.vertical.padding | --p-divider-vertical-padding | Padding of vertical |
| divider.vertical.content.padding | divider.vertical.content.padding | --p-divider-vertical-content-padding | Content padding of vertical |

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

[View Official Documentation](https://primeng.org/divider)
