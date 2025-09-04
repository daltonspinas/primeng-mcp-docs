# Chip

Chip represents entities using icons, labels and images.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ChipModule } from 'primeng/chip';
```

### Basic {#basic}

A basic chip with a text is created with the label property. In addition when removable is added, a delete icon is displayed to remove a chip, the optional onRemove event is available to get notified when a chip is hidden.

```html
<p-chip label="Action" />
<p-chip label="Comedy" />
<p-chip label="Mystery" />
<p-chip label="Thriller" [removable]="true" />
```

### Icon {#icon}

A font icon next to the label can be displayed with the icon property.

```html
<p-chip label="Apple" icon="pi pi-apple" />
```

### Image {#image}

The image property is used to display an image like an avatar.

```html
<p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
<p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
<p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
<p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />
```

### Template {#template}

Content can easily be customized with the dynamic content instead of using the built-in modes.

```html
<p-chip class="!py-0 !pl-0 !pr-4">
    <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
        P
    </span>
    <span class="ml-2 font-medium">
        PRIME
    </span>
</p-chip>
```

### Accessibility {#accessibility}

Chip uses the label property as the default aria-label, since any attribute is passed to the root element aria-labelledby or aria-label can be used to override the default behavior. Removable chips have a tabindex and focusable with the tab key.

### Chip {#chip}

Chip represents people using icons, labels and images.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Chip API

API defines helper props, events and others for the PrimeNG Chip module.

#### Chip {#api-chip}

Chip represents people using icons, labels and images.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| label | string | null | Defines the text to display. |
| icon | string | null | Defines the icon to display. |
| image | string | null | Defines the image to display. |
| alt | string | null | Alt attribute of the image. |
| styleClass | string | null | Class of the element. |
| removable | boolean | false | Whether to display a remove icon. |
| removeIcon | string | null | Icon of the remove element. |
| chipProps | ChipProps | null | Used to pass all properties of the chipProps to the Chip component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onRemove | event :  MouseEvent | Callback to invoke when a chip is removed. |
| onImageError | event :  Event | This event is triggered if an error occurs while loading an image file. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Chip Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-chip | Class name of the root element |
| p-chip-image | Class name of the image element |
| p-chip-icon | Class name of the icon element |
| p-chip-label | Class name of the label element |
| p-chip-remove-icon | Class name of the remove icon element |

#### Chip Design Tokens {#theming-chip-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| chip.root.borderRadius | chip.border.radius | --p-chip-border-radius | Border radius of root |
| chip.root.paddingX | chip.padding.x | --p-chip-padding-x | Padding x of root |
| chip.root.paddingY | chip.padding.y | --p-chip-padding-y | Padding y of root |
| chip.root.gap | chip.gap | --p-chip-gap | Gap of root |
| chip.root.transitionDuration | chip.transition.duration | --p-chip-transition-duration | Transition duration of root |
| chip.root.background | chip.background | --p-chip-background | Background of root |
| chip.root.color | chip.color | --p-chip-color | Color of root |
| chip.image.width | chip.image.width | --p-chip-image-width | Width of image |
| chip.image.height | chip.image.height | --p-chip-image-height | Height of image |
| chip.icon.size | chip.icon.size | --p-chip-icon-size | Size of icon |
| chip.icon.color | chip.icon.color | --p-chip-icon-color | Color of icon |
| chip.removeIcon.size | chip.remove.icon.size | --p-chip-remove-icon-size | Size of remove icon |
| chip.removeIcon.focusRing.width | chip.remove.icon.focus.ring.width | --p-chip-remove-icon-focus-ring-width | Focus ring width of remove icon |
| chip.removeIcon.focusRing.style | chip.remove.icon.focus.ring.style | --p-chip-remove-icon-focus-ring-style | Focus ring style of remove icon |
| chip.removeIcon.focusRing.color | chip.remove.icon.focus.ring.color | --p-chip-remove-icon-focus-ring-color | Focus ring color of remove icon |
| chip.removeIcon.focusRing.offset | chip.remove.icon.focus.ring.offset | --p-chip-remove-icon-focus-ring-offset | Focus ring offset of remove icon |
| chip.removeIcon.focusRing.shadow | chip.remove.icon.focus.ring.shadow | --p-chip-remove-icon-focus-ring-shadow | Focus ring shadow of remove icon |
| chip.removeIcon.color | chip.remove.icon.color | --p-chip-remove-icon-color | Color of remove icon |

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

[View Official Documentation](https://primeng.org/chip)
