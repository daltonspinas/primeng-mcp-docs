# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { InplaceModule } from 'primeng/inplace';
```

### Basic {#basic}

Inplace component requires display and content templates to define the content of each state.

```html
<p-inplace>
    <ng-template #display>
        <span>View Content</span>
    </ng-template>
    <ng-template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </ng-template>
</p-inplace>
```

### Input {#input}

The closeCallback switches the state back to display mode when called from an event.

```html
<p-inplace>
    <ng-template #display>
        <span>Click to Edit</span>
    </ng-template>
    <ng-template #content let-closeCallback="closeCallback">
        <span class="inline-flex gap-2">
            <input type="text" pInputText [pAutoFocus]="true" />
            <button type="button" pButton (click)="closeCallback($event)" text severity="danger">
                <i class="pi pi-times" pButtonIcon></i>
            </button>
        </span>
    </ng-template>
</p-inplace>
```

### Image {#image}

Any content such as an image can be placed inside an Inplace.

```html
<p-inplace>
    <ng-template #display>
        <span class="inline-flex items-center gap-2">
            <span class="pi pi-image" style="vertical-align: middle"></span>
            <span class="ml-2">View Photo</span>
        </span>
    </ng-template>
    <ng-template #content>
        <img
            class="w-full sm:w-80 shadow-md"
            src="https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg"
            alt="Nature"
        />
    </ng-template>
</p-inplace>
```

### Lazy {#lazy}

Using the onActivate event, data can be loaded in a lazy manner before displaying it in a table.

```html
<p-inplace (onActivate)="loadData()">
    <ng-template #display>
        <span>View Data</span>
    </ng-template>
    <ng-template #content>
        <p-table [value]="products" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-inplace>
```

### Accessibility {#accessibility}

Inplace component defines aria-live as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.

### Inplace {#inplace}

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Inplace API

API defines helper props, events and others for the PrimeNG Inplace module.

#### Inplace {#api-inplace}

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| active | boolean | false | Whether the content is displayed or not. |
| closable | boolean | false | Displays a button to switch back to display mode. |
| disabled | boolean | false | When present, it specifies that the element should be disabled. |
| preventClick | boolean | false | Allows to prevent clicking. |
| styleClass | string | null | Class of the element. |
| closeIcon | string | null | Icon to display in the close button. |
| closeAriaLabel | string | null | Establishes a string value that labels the close button. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onActivate | event :  Event | Callback to invoke when inplace is opened. |
| onDeactivate | event :  Event | Callback to invoke when inplace is closed. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| activate | event :  Event | Activates the content. |
| deactivate | event :  Event | Deactivates the content. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| display |  | Display template of the element. |
| content |  | Content template of the element. |
| closeicon |  | Close icon template of the element. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Inplace Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-inplace | Class name of the root element |
| p-inplace-display | Class name of the display element |
| p-inplace-content | Class name of the content element |

#### Inplace Design Tokens {#theming-inplace-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| inplace.root.padding | inplace.padding | --p-inplace-padding | Padding of root |
| inplace.root.borderRadius | inplace.border.radius | --p-inplace-border-radius | Border radius of root |
| inplace.root.focusRing.width | inplace.focus.ring.width | --p-inplace-focus-ring-width | Focus ring width of root |
| inplace.root.focusRing.style | inplace.focus.ring.style | --p-inplace-focus-ring-style | Focus ring style of root |
| inplace.root.focusRing.color | inplace.focus.ring.color | --p-inplace-focus-ring-color | Focus ring color of root |
| inplace.root.focusRing.offset | inplace.focus.ring.offset | --p-inplace-focus-ring-offset | Focus ring offset of root |
| inplace.root.focusRing.shadow | inplace.focus.ring.shadow | --p-inplace-focus-ring-shadow | Focus ring shadow of root |
| inplace.root.transitionDuration | inplace.transition.duration | --p-inplace-transition-duration | Transition duration of root |
| inplace.display.hoverBackground | inplace.display.hover.background | --p-inplace-display-hover-background | Hover background of display |
| inplace.display.hoverColor | inplace.display.hover.color | --p-inplace-display-hover-color | Hover color of display |

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

[View Official Documentation](https://primeng.org/inplace)
