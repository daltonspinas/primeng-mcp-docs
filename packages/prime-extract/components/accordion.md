# Accordion

Accordion groups a collection of contents in tabs.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { AccordionModule } from 'primeng/accordion';
```

### Basic {#basic}

Accordion is defined using AccordionPanel, AccordionHeader and AccordionContent components. Each AccordionPanel must contain a unique value property to specify the active item.

```html
<p-accordion value="0">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>

    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>

    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>
```

### Dynamic {#dynamic}

AccordionPanel can be generated dynamically using the standard @for block.

```html
<p-accordion [value]="0">
    @for (tab of tabs; track tab.title) {
        <p-accordion-panel [value]="tab.value">
            <p-accordion-header>{{ tab.title }}</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">{{ tab.content }}</p>
            </p-accordion-content>
        </p-accordion-panel>
    }
</p-accordion>
```

### Multiple {#multiple}

Only one tab at a time can be active by default, enabling multiple property changes this behavior to allow multiple tabs. In this case activeIndex needs to be an array.

```html
<p-accordion [value]="['0']" [multiple]="true">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>
```

### Disabled {#disabled}

Enabling disabled property of an AccordionTab prevents user interaction.

```html
<p-accordion [value]="['0']" [multiple]="true">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="3" [disabled]="true">
        <p-accordion-header>Header IV</p-accordion-header>
    </p-accordion-panel>
</p-accordion>
```

### Controlled {#controlled}

Panels can be controlled programmatically using value property as a model.

```html
<div class="flex mb-4 gap-2 justify-end">
        <p-button (onClick)="active = '0'" [rounded]="true" label="1" styleClass="w-8 h-8 p-0" [outlined]="active !== '0'" />
        <p-button (onClick)="active = '1'" [rounded]="true" label="2" styleClass="w-8 h-8 p-0" [outlined]="active !== '1'" />
        <p-button (onClick)="active = '2'" [rounded]="true" label="3" styleClass="w-8 h-8 p-0" [outlined]="active !== '2'" />
    </div>

    <p-accordion [(value)]="active">
        <p-accordion-panel value="0">
            <p-accordion-header>Header I</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="1">
            <p-accordion-header>Header II</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="2">
            <p-accordion-header>Header III</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
    </p-accordion>
```

### Template {#template}

Accordion is customized with toggleicon template.

```html
<p-accordion value="0">
    <p-accordion-panel value="0">
        <p-accordion-header>
            <ng-template #toggleicon let-active="active">
                @if (active) {
                    <i class="pi pi-minus"></i>
                } @else {
                    <i class="pi pi-plus"></i>
                }
            </ng-template>
            <span class="flex items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                <p-badge value="3" class="ml-auto mr-2" />
            </span>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>
            <ng-template #toggleicon let-active="active">
                @if (active) {
                    <i class="pi pi-minus"></i>
                } @else {
                    <i class="pi pi-plus"></i>
                }
            </ng-template>
            <span class="flex items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                <p-badge value="4" class="ml-auto mr-2" />
            </span>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>
            <ng-template #toggleicon let-active="active">
                @if (active) {
                    <i class="pi pi-minus"></i>
                } @else {
                    <i class="pi pi-plus"></i>
                }
            </ng-template>
            <span class="flex items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                <p-badge value="2" class="ml-auto mr-2" />
            </span>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>
```

### Accessibility {#accessibility}

Accordion header elements have a button role and use aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read a header element defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby property. Each header has a heading role, for which the level is customized by headerAriaLevel and has a default level of 2 as per W3C specifications.

### Accordion {#accordion}

Accordion groups a collection of contents in tabs.

### AccordionPanel {#accordionpanel}

AccordionPanel is a helper component for Accordion component.

### AccordionHeader {#accordionheader}

AccordionHeader is a helper component for Accordion component.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Accordion API

API defines helper props, events and others for the PrimeNG Accordion module.

#### Accordion {#api-accordion}

Accordion groups a collection of contents in tabs.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<string | number | string[] | number[]> | undefined | Value of the active tab. |
| multiple | InputSignalWithTransform<boolean, any> | false | When enabled, multiple tabs can be activated at the same time. |
| styleClass | string | null | Class of the element. |
| expandIcon | string | null | Icon of a collapsed tab. |
| collapseIcon | string | null | Icon of an expanded tab. |
| selectOnFocus | InputSignalWithTransform<boolean, any> | false | When enabled, the focused tab is activated. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClose | event :  AccordionTabCloseEvent | Callback to invoke when an active tab is collapsed by clicking on the header. |
| onOpen | event :  AccordionTabOpenEvent | Callback to invoke when a tab gets expanded. |

#### AccordionPanel {#api-accordionpanel}

AccordionPanel is a helper component for Accordion component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<string | number | string[] | number[]> | undefined | Value of the active tab. |
| disabled | InputSignalWithTransform<any, boolean> | false | Disables the tab when enabled. |

#### AccordionHeader {#api-accordionheader}

AccordionHeader is a helper component for Accordion component.

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| toggleicon |  | Toggle icon template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Accordion Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-accordion | Class name of the root element |
| p-accordioncontent | Class name of the content wrapper |
| p-accordioncontent-content | Class name of the content |
| p-accordionheader | Class name of the header |
| p-accordionheader-toggle-icon | Class name of the toggle icon |
| p-accordionpanel | Class name of the panel |

#### Accordion Design Tokens {#theming-accordion-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| accordion.root.transitionDuration | accordion.transition.duration | --p-accordion-transition-duration | Transition duration of root |
| accordion.panel.borderWidth | accordion.panel.border.width | --p-accordion-panel-border-width | Border width of panel |
| accordion.panel.borderColor | accordion.panel.border.color | --p-accordion-panel-border-color | Border color of panel |
| accordion.header.color | accordion.header.color | --p-accordion-header-color | Color of header |
| accordion.header.hoverColor | accordion.header.hover.color | --p-accordion-header-hover-color | Hover color of header |
| accordion.header.activeColor | accordion.header.active.color | --p-accordion-header-active-color | Active color of header |
| accordion.header.activeHoverColor | accordion.header.active.hover.color | --p-accordion-header-active-hover-color | Active hover color of header |
| accordion.header.padding | accordion.header.padding | --p-accordion-header-padding | Padding of header |
| accordion.header.fontWeight | accordion.header.font.weight | --p-accordion-header-font-weight | Font weight of header |
| accordion.header.borderRadius | accordion.header.border.radius | --p-accordion-header-border-radius | Border radius of header |
| accordion.header.borderWidth | accordion.header.border.width | --p-accordion-header-border-width | Border width of header |
| accordion.header.borderColor | accordion.header.border.color | --p-accordion-header-border-color | Border color of header |
| accordion.header.background | accordion.header.background | --p-accordion-header-background | Background of header |
| accordion.header.hoverBackground | accordion.header.hover.background | --p-accordion-header-hover-background | Hover background of header |
| accordion.header.activeBackground | accordion.header.active.background | --p-accordion-header-active-background | Active background of header |
| accordion.header.activeHoverBackground | accordion.header.active.hover.background | --p-accordion-header-active-hover-background | Active hover background of header |
| accordion.header.focusRing.width | accordion.header.focus.ring.width | --p-accordion-header-focus-ring-width | Focus ring width of header |
| accordion.header.focusRing.style | accordion.header.focus.ring.style | --p-accordion-header-focus-ring-style | Focus ring style of header |
| accordion.header.focusRing.color | accordion.header.focus.ring.color | --p-accordion-header-focus-ring-color | Focus ring color of header |
| accordion.header.focusRing.offset | accordion.header.focus.ring.offset | --p-accordion-header-focus-ring-offset | Focus ring offset of header |
| accordion.header.focusRing.shadow | accordion.header.focus.ring.shadow | --p-accordion-header-focus-ring-shadow | Focus ring shadow of header |
| accordion.header.toggleIcon.color | accordion.header.toggle.icon.color | --p-accordion-header-toggle-icon-color | Toggle icon color of header |
| accordion.header.toggleIcon.hoverColor | accordion.header.toggle.icon.hover.color | --p-accordion-header-toggle-icon-hover-color | Toggle icon hover color of header |
| accordion.header.toggleIcon.activeColor | accordion.header.toggle.icon.active.color | --p-accordion-header-toggle-icon-active-color | Toggle icon active color of header |
| accordion.header.toggleIcon.activeHoverColor | accordion.header.toggle.icon.active.hover.color | --p-accordion-header-toggle-icon-active-hover-color | Toggle icon active hover color of header |
| accordion.header.first.topBorderRadius | accordion.header.first.top.border.radius | --p-accordion-header-first-top-border-radius | First top border radius of header |
| accordion.header.first.borderWidth | accordion.header.first.border.width | --p-accordion-header-first-border-width | First border width of header |
| accordion.header.last.bottomBorderRadius | accordion.header.last.bottom.border.radius | --p-accordion-header-last-bottom-border-radius | Last bottom border radius of header |
| accordion.header.last.activeBottomBorderRadius | accordion.header.last.active.bottom.border.radius | --p-accordion-header-last-active-bottom-border-radius | Last active bottom border radius of header |
| accordion.content.borderWidth | accordion.content.border.width | --p-accordion-content-border-width | Border width of content |
| accordion.content.borderColor | accordion.content.border.color | --p-accordion-content-border-color | Border color of content |
| accordion.content.background | accordion.content.background | --p-accordion-content-background | Background of content |
| accordion.content.color | accordion.content.color | --p-accordion-content-color | Color of content |
| accordion.content.padding | accordion.content.padding | --p-accordion-content-padding | Padding of content |

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

[View Official Documentation](https://primeng.org/accordion)
