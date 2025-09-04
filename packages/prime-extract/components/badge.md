# Badge

Badge is a small status indicator for another element.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
```

### Basic {#basic}

Content of the badge is specified using the value property.

```html
<p-badge value="2" />
```

### Severity {#severity}

Severity defines the color of the badge, possible values are success, info, warn and danger

```html
<p-badge [value]="2" severity="success" />
```

### Size {#size}

Badge sizes are adjusted with the badgeSize property that accepts small, large and xlarge as the possible alternatives to the default size. Currently sizes only apply to component mode.

```html
<p-badge value="8" badgeSize="xlarge" severity="success" />
```

### Overlay {#overlay}

A badge can be added to any element by encapsulating the content with the OverlayBadge component.

```html
<p-overlaybadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem"></i>
</p-overlaybadge>
```

### Button {#button}

Buttons have built-in support for badges to display a badge inline.

```html
<p-button label="Emails" icon="pi pi-bell" label="Notifications" badge="2" />
```

### Accessibility {#accessibility}

Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, aria-live may be utilized as well. In case badges need to be tabbable, tabIndex can be added to implement custom key handlers.

### Badge {#badge}

Badge is a small status indicator for another element.

### BadgeDirective {#badgedirective}

Badge Directive is directive usage of badge component.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Badge API

API defines helper props, events and others for the PrimeNG Badge module.

#### Badge {#api-badge}

Badge is a small status indicator for another element.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | InputSignal<string> | ... | Class of the element. |
| badgeSize | InputSignal<"small" | "large" | "xlarge"> | ... | Size of the badge, valid options are "large" and "xlarge". |
| size | InputSignal<"small" | "large" | "xlarge"> | ... | Size of the badge, valid options are "large" and "xlarge". |
| severity | InputSignal<"info" | "success" | "warn" | "danger" | "secondary" | "contrast"> | ... | Severity type of the badge. |
| value | InputSignal<string | number> | ... | Value to display inside the badge. |
| badgeDisabled | InputSignalWithTransform<boolean, boolean> | ... | When specified, disables the component. |

#### BadgeDirective {#api-badgedirective}

Badge Directive is directive usage of badge component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| disabled | boolean | false | When specified, disables the component. |
| badgeSize | "small" | "large" | "xlarge" | null | Size of the badge, valid options are "large" and "xlarge". |
| size | "small" | "large" | "xlarge" | null | Size of the badge, valid options are "large" and "xlarge". |
| severity | "info" | "success" | "warn" | "danger" | "secondary" | "contrast" | null | Severity type of the badge. |
| value | string | number | null | Value to display inside the badge. |
| badgeStyle | { [klass: string]: any } | null | Inline style of the element. |
| badgeStyleClass | string | null | Class of the element. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Badge Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-badge | Class name of the root element |

#### Badge Design Tokens {#theming-badge-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| badge.root.borderRadius | badge.border.radius | --p-badge-border-radius | Border radius of root |
| badge.root.padding | badge.padding | --p-badge-padding | Padding of root |
| badge.root.fontSize | badge.font.size | --p-badge-font-size | Font size of root |
| badge.root.fontWeight | badge.font.weight | --p-badge-font-weight | Font weight of root |
| badge.root.minWidth | badge.min.width | --p-badge-min-width | Min width of root |
| badge.root.height | badge.height | --p-badge-height | Height of root |
| badge.dot.size | badge.dot.size | --p-badge-dot-size | Size of dot |
| badge.sm.fontSize | badge.sm.font.size | --p-badge-sm-font-size | Font size of sm |
| badge.sm.minWidth | badge.sm.min.width | --p-badge-sm-min-width | Min width of sm |
| badge.sm.height | badge.sm.height | --p-badge-sm-height | Height of sm |
| badge.lg.fontSize | badge.lg.font.size | --p-badge-lg-font-size | Font size of lg |
| badge.lg.minWidth | badge.lg.min.width | --p-badge-lg-min-width | Min width of lg |
| badge.lg.height | badge.lg.height | --p-badge-lg-height | Height of lg |
| badge.xl.fontSize | badge.xl.font.size | --p-badge-xl-font-size | Font size of xl |
| badge.xl.minWidth | badge.xl.min.width | --p-badge-xl-min-width | Min width of xl |
| badge.xl.height | badge.xl.height | --p-badge-xl-height | Height of xl |
| badge.primary.background | badge.primary.background | --p-badge-primary-background | Background of primary |
| badge.primary.color | badge.primary.color | --p-badge-primary-color | Color of primary |
| badge.secondary.background | badge.secondary.background | --p-badge-secondary-background | Background of secondary |
| badge.secondary.color | badge.secondary.color | --p-badge-secondary-color | Color of secondary |
| badge.success.background | badge.success.background | --p-badge-success-background | Background of success |
| badge.success.color | badge.success.color | --p-badge-success-color | Color of success |
| badge.info.background | badge.info.background | --p-badge-info-background | Background of info |
| badge.info.color | badge.info.color | --p-badge-info-color | Color of info |
| badge.warn.background | badge.warn.background | --p-badge-warn-background | Background of warn |
| badge.warn.color | badge.warn.color | --p-badge-warn-color | Color of warn |
| badge.danger.background | badge.danger.background | --p-badge-danger-background | Background of danger |
| badge.danger.color | badge.danger.color | --p-badge-danger-color | Color of danger |
| badge.contrast.background | badge.contrast.background | --p-badge-contrast-background | Background of contrast |
| badge.contrast.color | badge.contrast.color | --p-badge-contrast-color | Color of contrast |

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

[View Official Documentation](https://primeng.org/badge)
