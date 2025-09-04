# Tag

Tag component is used to categorize content.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TagModule } from 'primeng/tag';
```

### Basic {#basic}

Label of the tag is defined with the value property.

```html
<p-tag value="New" />
```

### Severity {#severity}

Severity defines the color of the tag, possible values are success, info, warn and danger in addition to the default theme color.

```html
<p-tag value="Primary" />
<p-tag severity="secondary" value="Secondary" />
<p-tag severity="success" value="Success" />
<p-tag severity="info" value="Info" />
<p-tag severity="warn" value="Warn" />
<p-tag severity="danger" value="Danger" />
<p-tag severity="contrast" value="Contrast" />
```

### Pill {#pill}

Enabling rounded, displays a tag as a pill.

```html
<p-tag value="Primary" [rounded]="true" />
<p-tag severity="secondary" value="Secondary" [rounded]="true" />
<p-tag severity="success" value="Success" [rounded]="true" />
<p-tag severity="info" value="Info" [rounded]="true" />
<p-tag severity="warn" value="Warn" [rounded]="true" />
<p-tag severity="danger" value="Danger" [rounded]="true" />
<p-tag severity="contrast" value="Contrast" [rounded]="true" />
```

### Icon {#icon}

A font icon next to the value can be displayed with the icon property.

```html
<p-tag icon="pi pi-user" value="Primary" />
<p-tag icon="pi pi-search" severity="secondary" value="Secondary" />
<p-tag icon="pi pi-check" severity="success" value="Success" />
<p-tag icon="pi pi-info-circle" severity="info" value="Info" />
<p-tag icon="pi pi-exclamation-triangle" severity="warn" value="Warn" />
<p-tag icon="pi pi-times" severity="danger" value="Danger" />
<p-tag icon="pi pi-cog" severity="contrast" value="Contrast" />
```

### Template {#template}

Children of the component are passed as the content for templating.

```html
<p-tag [style]="{ border: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)'}">
    <div class="flex items-center gap-2 px-1">
        <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
        <span class="text-base">
            Italy
        </span>
    </div>
</p-tag>
```

### Accessibility {#accessibility}

Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,aria-live may be utilized as well. In case badges need to be tabbable, tabIndex can be added to implement custom key handlers.

### Tag {#tag}

Tag component is used to categorize content.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Tag API

API defines helper props, events and others for the PrimeNG Tag module.

#### Tag {#api-tag}

Tag component is used to categorize content.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Style class of the component. |
| severity | string | null | Severity type of the tag. |
| value | string | null | Value to display inside the tag. |
| icon | string | null | Icon of the tag to display next to the value. |
| rounded | boolean | false | Whether the corners of the tag are rounded. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Tag Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-tag | Class name of the root element |
| p-tag-icon | Class name of the icon element |
| p-tag-label | Class name of the label element |

#### Tag Design Tokens {#theming-tag-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| tag.root.fontSize | tag.font.size | --p-tag-font-size | Font size of root |
| tag.root.fontWeight | tag.font.weight | --p-tag-font-weight | Font weight of root |
| tag.root.padding | tag.padding | --p-tag-padding | Padding of root |
| tag.root.gap | tag.gap | --p-tag-gap | Gap of root |
| tag.root.borderRadius | tag.border.radius | --p-tag-border-radius | Border radius of root |
| tag.root.roundedBorderRadius | tag.rounded.border.radius | --p-tag-rounded-border-radius | Rounded border radius of root |
| tag.icon.size | tag.icon.size | --p-tag-icon-size | Size of icon |
| tag.primary.background | tag.primary.background | --p-tag-primary-background | Background of primary |
| tag.primary.color | tag.primary.color | --p-tag-primary-color | Color of primary |
| tag.secondary.background | tag.secondary.background | --p-tag-secondary-background | Background of secondary |
| tag.secondary.color | tag.secondary.color | --p-tag-secondary-color | Color of secondary |
| tag.success.background | tag.success.background | --p-tag-success-background | Background of success |
| tag.success.color | tag.success.color | --p-tag-success-color | Color of success |
| tag.info.background | tag.info.background | --p-tag-info-background | Background of info |
| tag.info.color | tag.info.color | --p-tag-info-color | Color of info |
| tag.warn.background | tag.warn.background | --p-tag-warn-background | Background of warn |
| tag.warn.color | tag.warn.color | --p-tag-warn-color | Color of warn |
| tag.danger.background | tag.danger.background | --p-tag-danger-background | Background of danger |
| tag.danger.color | tag.danger.color | --p-tag-danger-color | Color of danger |
| tag.contrast.background | tag.contrast.background | --p-tag-contrast-background | Background of contrast |
| tag.contrast.color | tag.contrast.color | --p-tag-contrast-color | Color of contrast |

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

[View Official Documentation](https://primeng.org/tag)
