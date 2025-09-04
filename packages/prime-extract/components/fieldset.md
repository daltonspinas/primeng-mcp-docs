# Fieldset

Fieldset is a grouping component with a content toggle feature.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { FieldsetModule } from 'primeng/fieldset';
```

### Basic {#basic}

A simple Fieldset is created with a legend property along with the content as children.

```html
<p-fieldset legend="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

### Toggleable {#toggleable}

Content of the fieldset can be expanded and collapsed using toggleable option, default state is defined with collapsed option.

```html
<p-fieldset legend="Header" [toggleable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

### Template {#template}

Header section can also be defined with custom content instead of primitive values.

```html
<p-fieldset>
    <ng-template #header>
        <div class="flex items-center gap-2 px-2">
            <p-avatar
                image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

### Accessibility {#accessibility}

Fieldset component uses the semantic fieldset element. When toggleable option is enabled, a clickable element with button role is included inside the legend element, this button has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the legend property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property.

### Fieldset {#fieldset}

Fieldset is a grouping component with the optional content toggle feature.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Fieldset API

API defines helper props, events and others for the PrimeNG Fieldset module.

#### Fieldset {#api-fieldset}

Fieldset is a grouping component with the optional content toggle feature.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| legend | string | null | Header text of the fieldset. |
| toggleable | boolean | false | When specified, content can toggled by clicking the legend. |
| collapsed | boolean | false | Defines the default visibility state of the content.
* |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the panel animation. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| collapsedChange | value :  boolean | Emits when the collapsed state changes. |
| onBeforeToggle | event :  FieldsetBeforeToggleEvent | Callback to invoke before panel toggle. |
| onAfterToggle | event :  FieldsetAfterToggleEvent | Callback to invoke after panel toggle. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| header |  | Defines the header template. |
| expandicon |  | Defines the expandicon template. |
| collapseicon |  | Defines the collapseicon template. |
| content |  | Defines the content template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Fieldset Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-fieldset | Class name of the root element |
| p-fieldset-legend | Class name of the legend element |
| p-fieldset-legend-label | Class name of the legend label element |
| p-fieldset-toggle-icon | Class name of the toggle icon element |
| p-fieldset-content-container | Class name of the content container element |
| p-fieldset-content | Class name of the content element |

#### Fieldset Design Tokens {#theming-fieldset-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| fieldset.root.background | fieldset.background | --p-fieldset-background | Background of root |
| fieldset.root.borderColor | fieldset.border.color | --p-fieldset-border-color | Border color of root |
| fieldset.root.borderRadius | fieldset.border.radius | --p-fieldset-border-radius | Border radius of root |
| fieldset.root.color | fieldset.color | --p-fieldset-color | Color of root |
| fieldset.root.padding | fieldset.padding | --p-fieldset-padding | Padding of root |
| fieldset.root.transitionDuration | fieldset.transition.duration | --p-fieldset-transition-duration | Transition duration of root |
| fieldset.legend.background | fieldset.legend.background | --p-fieldset-legend-background | Background of legend |
| fieldset.legend.hoverBackground | fieldset.legend.hover.background | --p-fieldset-legend-hover-background | Hover background of legend |
| fieldset.legend.color | fieldset.legend.color | --p-fieldset-legend-color | Color of legend |
| fieldset.legend.hoverColor | fieldset.legend.hover.color | --p-fieldset-legend-hover-color | Hover color of legend |
| fieldset.legend.borderRadius | fieldset.legend.border.radius | --p-fieldset-legend-border-radius | Border radius of legend |
| fieldset.legend.borderWidth | fieldset.legend.border.width | --p-fieldset-legend-border-width | Border width of legend |
| fieldset.legend.borderColor | fieldset.legend.border.color | --p-fieldset-legend-border-color | Border color of legend |
| fieldset.legend.padding | fieldset.legend.padding | --p-fieldset-legend-padding | Padding of legend |
| fieldset.legend.gap | fieldset.legend.gap | --p-fieldset-legend-gap | Gap of legend |
| fieldset.legend.fontWeight | fieldset.legend.font.weight | --p-fieldset-legend-font-weight | Font weight of legend |
| fieldset.legend.focusRing.width | fieldset.legend.focus.ring.width | --p-fieldset-legend-focus-ring-width | Focus ring width of legend |
| fieldset.legend.focusRing.style | fieldset.legend.focus.ring.style | --p-fieldset-legend-focus-ring-style | Focus ring style of legend |
| fieldset.legend.focusRing.color | fieldset.legend.focus.ring.color | --p-fieldset-legend-focus-ring-color | Focus ring color of legend |
| fieldset.legend.focusRing.offset | fieldset.legend.focus.ring.offset | --p-fieldset-legend-focus-ring-offset | Focus ring offset of legend |
| fieldset.legend.focusRing.shadow | fieldset.legend.focus.ring.shadow | --p-fieldset-legend-focus-ring-shadow | Focus ring shadow of legend |
| fieldset.toggleIcon.color | fieldset.toggle.icon.color | --p-fieldset-toggle-icon-color | Color of toggle icon |
| fieldset.toggleIcon.hoverColor | fieldset.toggle.icon.hover.color | --p-fieldset-toggle-icon-hover-color | Hover color of toggle icon |
| fieldset.content.padding | fieldset.content.padding | --p-fieldset-content-padding | Padding of content |

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

[View Official Documentation](https://primeng.org/fieldset)
