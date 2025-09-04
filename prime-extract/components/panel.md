# Panel

Panel is a container component with an optional content toggle feature.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { PanelModule } from 'primeng/panel';
```

### Basic {#basic}

A simple Panel is created with a header property along with the content as children.

```html
<p-panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>
```

### Toggleable {#toggleable}

Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option. By default, toggle icon is used to toggle the contents whereas setting toggler to "header" enables clicking anywhere in the header to trigger a toggle.

```html
<p-panel header="Header" [toggleable]="true">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>
```

### Template {#template}

Header and Footers sections can be customized using header and footer templates.

```html
<p-panel [toggleable]="true">
    <ng-template #header>
        <div class="flex items-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <ng-template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                <p-button icon="pi pi-user" rounded text></p-button>
                <p-button icon="pi pi-bookmark" severity="secondary" rounded text></p-button>
            </div>
            <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
        </div>
    </ng-template>
    <ng-template #icons>
        <p-button icon="pi pi-cog" severity="secondary" rounded text (click)="menu.toggle($event)" />
        <p-menu #menu id="config_menu" [model]="items" [popup]="true" />
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-panel>
```

### Accessibility {#accessibility}

Toggleable panels use a content toggle button at the header that has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property.

### Panel {#panel}

Panel is a container with the optional content toggle feature.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Panel API

API defines helper props, events and others for the PrimeNG Panel module.

#### Panel {#api-panel}

Panel is a container with the optional content toggle feature.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| toggleable | boolean | false | Defines if content of panel can be expanded and collapsed. |
| _header | string | null | Header text of the panel. |
| collapsed | boolean | false | Defines the initial state of panel content, supports one or two-way binding as well. |
| styleClass | string | null | Style class of the component. |
| iconPos | "end" | "center" | "start" | end | Position of the icons. |
| showHeader | boolean | true | Specifies if header of panel cannot be displayed. |
| toggler | "icon" | "header" | icon | Specifies the toggler element to toggle the panel content. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |
| toggleButtonProps | any | null | Used to pass all properties of the ButtonProps to the Button component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| collapsedChange | value :  boolean | Emitted when the collapsed changes. |
| onBeforeToggle | event :  PanelBeforeToggleEvent | Callback to invoke before panel toggle. |
| onAfterToggle | event :  PanelAfterToggleEvent | Callback to invoke after panel toggle. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| header |  | Defines template option for header. |
| icon |  | Defines template option for icon. |
| content |  | Defines template option for content. |
| footer |  | Defines template option for footer. |
| headericons |  | Defines template option for headerIcon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Panel Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-panel | Class name of the root element |
| p-panel-header | Class name of the header element |
| p-panel-title | Class name of the title element |
| p-panel-header-actions | Class name of the header actions element |
| p-panel-toggle-button | Class name of the toggle button element |
| p-panel-content-container | Class name of the content container element |
| p-panel-content | Class name of the content element |
| p-panel-footer | Class name of the footer element |

#### Panel Design Tokens {#theming-panel-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| panel.root.background | panel.background | --p-panel-background | Background of root |
| panel.root.borderColor | panel.border.color | --p-panel-border-color | Border color of root |
| panel.root.color | panel.color | --p-panel-color | Color of root |
| panel.root.borderRadius | panel.border.radius | --p-panel-border-radius | Border radius of root |
| panel.header.background | panel.header.background | --p-panel-header-background | Background of header |
| panel.header.color | panel.header.color | --p-panel-header-color | Color of header |
| panel.header.padding | panel.header.padding | --p-panel-header-padding | Padding of header |
| panel.header.borderColor | panel.header.border.color | --p-panel-header-border-color | Border color of header |
| panel.header.borderWidth | panel.header.border.width | --p-panel-header-border-width | Border width of header |
| panel.header.borderRadius | panel.header.border.radius | --p-panel-header-border-radius | Border radius of header |
| panel.toggleableHeader.padding | panel.toggleable.header.padding | --p-panel-toggleable-header-padding | Padding of toggleable header |
| panel.title.fontWeight | panel.title.font.weight | --p-panel-title-font-weight | Font weight of title |
| panel.content.padding | panel.content.padding | --p-panel-content-padding | Padding of content |
| panel.footer.padding | panel.footer.padding | --p-panel-footer-padding | Padding of footer |

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

[View Official Documentation](https://primeng.org/panel)
