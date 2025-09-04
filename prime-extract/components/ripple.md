# Ripple

Ripple directive adds ripple effect to the host element.

## Table of Contents

- [Features](#features)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { RippleModule } from 'primeng/ripple';
```

### Default {#default}

Default Demo Content.

```html
<div pRipple class="ripple-box">Default</div>
```

### Custom {#custom}

Styling Demo Content.

```html
<div pRipple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">
    Green
</div>
<div pRipple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">
    Orange
</div>
<div pRipple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">
    Purple
</div>
```

### Accessibility {#accessibility}

Ripple element has the aria-hidden attribute as true so that it gets ignored by the screen readers.

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Ripple Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-ink | Class name of the root element |

#### Ripple Design Tokens {#theming-ripple-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| ripple.root.background | ripple.background | --p-ripple-background | Background of root |

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
- [Theming](#theming)

[View Official Documentation](https://primeng.org/ripple)
