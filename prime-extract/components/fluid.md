# Fluid

Fluid is a layout component to make descendant components span full width of their container.

## Table of Contents

- [Features](#features)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { FluidModule } from 'primeng/fluid';
```

### Basic {#basic}

Components with the fluid option like InputText have the ability to span the full width of their component. Enabling the fluid for each component individually may be cumbersome so wrap the content with Fluid to instead for an easier alternative.

```html
<div>
    <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
    <input type="text" pInputText id="non-fluid" />
</div>
<div>
    <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
    <input type="text" pInputText id="fluid" fluid />
</div>
<p-fluid>
    <span class="font-bold mb-2 block">Fluid Container</span>
    <div class="grid grid-cols-2 gap-4">
        <div><input type="text" pInputText /></div>
        <div><input type="text" pInputText /></div>
        <div class="col-span-full"><input type="text" pInputText /></div>
        <div><input type="text" pInputText [fluid]="false" placeholder="Non-Fluid" /></div>
    </div>
</p-fluid>
```

### Accessibility {#accessibility}

Fluid does not require any roles and attributes.

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Fluid Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-fluid | Class name of the root element |

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

[View Official Documentation](https://primeng.org/fluid)
