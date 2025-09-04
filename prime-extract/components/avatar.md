# Avatar

Avatar represents people using icons, labels and images.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
```

### Label {#label}

A letter Avatar is defined with the label property.

```html
<p-avatar label="P" class="mr-2" size="xlarge" />
<p-avatar label="V" class="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" />
<p-avatar label="U" class="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" />
<p-avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<p-avatar label="V" class="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" shape="circle" />
<p-avatar label="U" class="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar label="U" size="xlarge" />
</p-overlay-badge>
```

### Icon {#icon}

A font icon is displayed as an Avatar with the icon property.

```html
<p-avatar icon="pi pi-user" class="mr-2" size="xlarge" />
<p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
<p-avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
<p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar icon="pi pi-user" size="xlarge" />
</p-overlay-badge>
```

### Image {#image}

Use the image property to display an image as an Avatar.

```html
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="xlarge" />
</p-overlay-badge>

<p-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
```

### AvatarGroup {#avatargroup}

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

```html
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
<p-avatar label="+2" shape="circle" size="large" />
```

### Shape {#shape}

Avatar comes in two different styles specified with the shape property, square is the default and circle is the alternative.

```html
<p-avatar label="P" shape="circle" />
<p-avatar label="T" />
```

### Accessibility {#accessibility}

Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like img along with aria-labelledby or aria-label to describe the component. In case avatars need to be tabbable, tabIndex can be added as well to implement custom key handlers.

### Avatar {#avatar}

Avatar represents people using icons, labels and images.

### AvatarGroup {#avatargroup}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Avatar API

API defines helper props, events and others for the PrimeNG Avatar module.

#### Avatar {#api-avatar}

Avatar represents people using icons, labels and images.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| label | string | null | Defines the text to display. |
| icon | string | null | Defines the icon to display. |
| image | string | null | Defines the image to display. |
| size | "large" | "xlarge" | "normal" | normal | Size of the element. |
| shape | "circle" | "square" | square | Shape of the element. |
| styleClass | string | null | Class of the element. |
| ariaLabel | string | null | Establishes a string value that labels the component. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onImageError | event :  Event | This event is triggered if an error occurs while loading an image file. |

#### AvatarGroup {#api-avatargroup}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Avatar Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-avatar | Class name of the root element |
| p-avatar-label | Class name of the label element |
| p-avatar-icon | Class name of the icon element |

#### Avatar Design Tokens {#theming-avatar-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| avatar.root.width | avatar.width | --p-avatar-width | Width of root |
| avatar.root.height | avatar.height | --p-avatar-height | Height of root |
| avatar.root.fontSize | avatar.font.size | --p-avatar-font-size | Font size of root |
| avatar.root.background | avatar.background | --p-avatar-background | Background of root |
| avatar.root.color | avatar.color | --p-avatar-color | Color of root |
| avatar.root.borderRadius | avatar.border.radius | --p-avatar-border-radius | Border radius of root |
| avatar.icon.size | avatar.icon.size | --p-avatar-icon-size | Size of icon |
| avatar.group.borderColor | avatar.group.border.color | --p-avatar-group-border-color | Border color of group |
| avatar.group.offset | avatar.group.offset | --p-avatar-group-offset | Offset of group |
| avatar.lg.width | avatar.lg.width | --p-avatar-lg-width | Width of lg |
| avatar.lg.height | avatar.lg.height | --p-avatar-lg-height | Height of lg |
| avatar.lg.fontSize | avatar.lg.font.size | --p-avatar-lg-font-size | Font size of lg |
| avatar.lg.icon.size | avatar.lg.icon.size | --p-avatar-lg-icon-size | Icon size of lg |
| avatar.lg.group.offset | avatar.lg.group.offset | --p-avatar-lg-group-offset | Group offset of lg |
| avatar.xl.width | avatar.xl.width | --p-avatar-xl-width | Width of xl |
| avatar.xl.height | avatar.xl.height | --p-avatar-xl-height | Height of xl |
| avatar.xl.fontSize | avatar.xl.font.size | --p-avatar-xl-font-size | Font size of xl |
| avatar.xl.icon.size | avatar.xl.icon.size | --p-avatar-xl-icon-size | Icon size of xl |
| avatar.xl.group.offset | avatar.xl.group.offset | --p-avatar-xl-group-offset | Group offset of xl |

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

[View Official Documentation](https://primeng.org/avatar)
