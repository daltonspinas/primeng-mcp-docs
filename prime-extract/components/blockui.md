# BlockUI

BlockUI can either block other components or the whole page.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { BlockUIModule } from 'primeng/blockui';
```

### Basic {#basic}

The element to block should be placed as a child of BlockUI and blocked property is required to control the state.

```html
<p-button label="Block" (click)="blockedPanel = true" />
<p-button label="Unblock" (click)="blockedPanel = false" />
<p-blockui [target]="pnl" [blocked]="blockedPanel" />
<p-panel #pnl header="Header" class="mt-6">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-panel>
```

### Document {#document}

If the target element is not specified, BlockUI blocks the document by default.

```html
<p-blockui [blocked]="blockedDocument" />
```

### Accessibility {#accessibility}

BlockUI manages aria-busy state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like role and aria-live can be used to define live regions.

### BlockUI {#blockui}

BlockUI can either block other components or the whole page.

[↑ Back to Top](#table-of-contents)

## API {#api}

### BlockUI API

API defines helper props, events and others for the PrimeNG BlockUI module.

#### BlockUI {#api-blockui}

BlockUI can either block other components or the whole page.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| target | any | null | Name of the local ng-template variable referring to another component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| styleClass | string | null | Class of the element. |
| blocked | boolean | null | Current blocked state as a boolean. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | template of the content |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### BlockUI Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-blockui | Class name of the root element |

#### BlockUI Design Tokens {#theming-blockui-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| blockui.root.borderRadius | blockui.border.radius | --p-blockui-border-radius | Border radius of root |

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

[View Official Documentation](https://primeng.org/blockui)
