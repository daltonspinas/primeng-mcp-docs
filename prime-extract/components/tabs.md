# Tabs

Tabs is a container component to group content with tabs.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TabsModule } from 'primeng/tabs';
```

### Basic {#basic}

Tabs is defined using TabList, Tab, TabPanels and TabPanel components. Tab and TabPanel components are associated with their value properties

```html
<p-tabs value="0">
    <p-tablist>
        <p-tab value="0">Header I</p-tab>
        <p-tab value="1">Header II</p-tab>
        <p-tab value="2">Header III</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

### Dynamic {#dynamic}

Tabs can be generated dynamically using the standard @for block.

```html
<p-tabs value="0">
    <p-tablist>
        @for (tab of tabs; track tab.value) {
            <p-tab [value]="tab.value">{{ tab.title }}</p-tab>
        }
    </p-tablist>
    <p-tabpanels>
        @for (tab of tabs; track tab.value) {
            <p-tabpanel [value]="tab.value">
                <p class="m-0">{{ tab.content }}</p>
            </p-tabpanel>
        }
    </p-tabpanels>
</p-tabs>
```

### Controlled {#controlled}

Tabs can be controlled programmatically using value property as a model.

```html
<div class="flex mb-2 gap-2 justify-end">
    <p-button (onClick)="value = 0" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 0" label="1" />
    <p-button (onClick)="value = 1" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 1" label="2" />
    <p-button (onClick)="value = 2" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 2" label="3" />
</div>
<p-tabs [value]="value">
    <p-tablist>
        <p-tab [value]="0">Header I</p-tab>
        <p-tab [value]="1">Header II</p-tab>
        <p-tab [value]="2">Header III</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel [value]="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel [value]="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-tabpanel>
        <p-tabpanel [value]="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

### Scrollable {#scrollable}

Adding scrollable property displays navigational buttons at each side to scroll between tabs.

```html
<p-tabs value="0" scrollable>
    <p-tablist>
        @for(tab of scrollableTabs; track tab.value){
            <p-tab [value]="tab.value">
                {{ tab.title }}
            </p-tab>
        }
    </p-tablist>
    <p-tabpanels>
        @for(tab of scrollableTabs; track tab.value){
            <p-tabpanel [value]="tab.value">
                <p class="m-0">{{ tab.content }}</p>
            </p-tabpanel>
        }
    </p-tabpanels>
</p-tabs>
```

### Disabled {#disabled}

Enabling disabled property of a Tab prevents user interaction.

```html
<p-tabs value="0">
    <p-tablist>
        <p-tab value="0">Header I</p-tab>
        <p-tab value="1">Header II</p-tab>
        <p-tab value="2">Header III</p-tab>
        <p-tab disabled>Header IV</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

### Template {#template}

Custom content for a tab is defined with the default ng-content.

```html
<p-tabs value="0" scrollable>
    <p-tablist>
        <ng-template #previcon>
            <i class="pi pi-minus"></i>
        </ng-template>
        <p-tab value="0" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle"/>
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </p-tab>
        <p-tab value="1" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Onyama Limba</span>
        </p-tab>
        <p-tab value="2" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
            <p-badge value="2" />
        </p-tab>
        <ng-template #nexticon>
            <i class="pi pi-plus"></i>
        </ng-template>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

### Tab Menu {#tab-menu}

A navigation menu is implemented using tabs without the panels where the content of a tab is provided by a route component like router-outlet. For the purpose of this demo, router-outlet is not included.

```html
<p-tabs value="/dashboard">
    <p-tablist>
        @for(tab of tabs; track tab.route){
            <p-tab [value]="tab.route" [routerLink]="tab.route" class="flex items-center !gap-2 text-inherit">
                <i [class]="tab.icon"></i>
                <span>{{ tab.label }}</span>
            </p-tab>
        }
    </p-tablist>
</p-tabs>
<!--<router-outlet></router-outlet>-->
```

### Accessibility {#accessibility}

Tabs container is defined with the tablist role, as any attribute is passed to the container element aria-labelledby can be optionally used to specify an element to describe the Tabs. Each tab header has a tab role along with aria-selected state attribute and aria-controls to refer to the corresponding tab content element. The content element of each tab has tabpanel role, an id to match thearia-controls of the header and aria-labelledby reference to the header as the accessible name.

### Tabs {#tabs}

Tabs facilitates seamless switching between different views.

### TabPanel {#tabpanel}

### Tab {#tab}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Tabs API

API defines helper props, events and others for the PrimeNG Tabs module.

#### Tabs {#api-tabs}

Tabs facilitates seamless switching between different views.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<string | number> | undefined | Value of the active tab. |
| scrollable | InputSignalWithTransform<boolean, unknown> | false | When specified, enables horizontal and/or vertical scrolling. |
| lazy | InputSignalWithTransform<boolean, unknown> | false | When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css. |
| selectOnFocus | InputSignalWithTransform<boolean, unknown> | false | When enabled, the focused tab is activated. |
| showNavigators | InputSignalWithTransform<boolean, unknown> | true | Whether to display navigation buttons in container when scrollable is enabled. |
| tabindex | InputSignalWithTransform<number, unknown> | 0 | Tabindex of the tab buttons. |

#### TabPanel {#api-tabpanel}

#### Tab {#api-tab}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Tabs Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-tabs | Class name of the root element |
| p-tablist | Class name of the wrapper element |
| p-tablist-content | Class name of the content element |
| p-tablist-tab-list | Class name of the tab list element |
| p-tab | Class name of the tab list element |
| p-tablist-active-bar | Class name of the inkbar element |
| p-tablist-nav-button | Class name of the navigation buttons |
| p-tabpanels | Class name of the tab panels wrapper |
| p-tabs-panel | Class name of the tab panel element |

#### Tabs Design Tokens {#theming-tabs-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| tabs.root.transitionDuration | tabs.transition.duration | --p-tabs-transition-duration | Transition duration of root |
| tabs.tablist.borderWidth | tabs.tablist.border.width | --p-tabs-tablist-border-width | Border width of tablist |
| tabs.tablist.background | tabs.tablist.background | --p-tabs-tablist-background | Background of tablist |
| tabs.tablist.borderColor | tabs.tablist.border.color | --p-tabs-tablist-border-color | Border color of tablist |
| tabs.tab.background | tabs.tab.background | --p-tabs-tab-background | Background of tab |
| tabs.tab.hoverBackground | tabs.tab.hover.background | --p-tabs-tab-hover-background | Hover background of tab |
| tabs.tab.activeBackground | tabs.tab.active.background | --p-tabs-tab-active-background | Active background of tab |
| tabs.tab.borderWidth | tabs.tab.border.width | --p-tabs-tab-border-width | Border width of tab |
| tabs.tab.borderColor | tabs.tab.border.color | --p-tabs-tab-border-color | Border color of tab |
| tabs.tab.hoverBorderColor | tabs.tab.hover.border.color | --p-tabs-tab-hover-border-color | Hover border color of tab |
| tabs.tab.activeBorderColor | tabs.tab.active.border.color | --p-tabs-tab-active-border-color | Active border color of tab |
| tabs.tab.color | tabs.tab.color | --p-tabs-tab-color | Color of tab |
| tabs.tab.hoverColor | tabs.tab.hover.color | --p-tabs-tab-hover-color | Hover color of tab |
| tabs.tab.activeColor | tabs.tab.active.color | --p-tabs-tab-active-color | Active color of tab |
| tabs.tab.padding | tabs.tab.padding | --p-tabs-tab-padding | Padding of tab |
| tabs.tab.fontWeight | tabs.tab.font.weight | --p-tabs-tab-font-weight | Font weight of tab |
| tabs.tab.margin | tabs.tab.margin | --p-tabs-tab-margin | Margin of tab |
| tabs.tab.gap | tabs.tab.gap | --p-tabs-tab-gap | Gap of tab |
| tabs.tab.focusRing.width | tabs.tab.focus.ring.width | --p-tabs-tab-focus-ring-width | Focus ring width of tab |
| tabs.tab.focusRing.style | tabs.tab.focus.ring.style | --p-tabs-tab-focus-ring-style | Focus ring style of tab |
| tabs.tab.focusRing.color | tabs.tab.focus.ring.color | --p-tabs-tab-focus-ring-color | Focus ring color of tab |
| tabs.tab.focusRing.offset | tabs.tab.focus.ring.offset | --p-tabs-tab-focus-ring-offset | Focus ring offset of tab |
| tabs.tab.focusRing.shadow | tabs.tab.focus.ring.shadow | --p-tabs-tab-focus-ring-shadow | Focus ring shadow of tab |
| tabs.tabpanel.background | tabs.tabpanel.background | --p-tabs-tabpanel-background | Background of tabpanel |
| tabs.tabpanel.color | tabs.tabpanel.color | --p-tabs-tabpanel-color | Color of tabpanel |
| tabs.tabpanel.padding | tabs.tabpanel.padding | --p-tabs-tabpanel-padding | Padding of tabpanel |
| tabs.tabpanel.focusRing.width | tabs.tabpanel.focus.ring.width | --p-tabs-tabpanel-focus-ring-width | Focus ring width of tabpanel |
| tabs.tabpanel.focusRing.style | tabs.tabpanel.focus.ring.style | --p-tabs-tabpanel-focus-ring-style | Focus ring style of tabpanel |
| tabs.tabpanel.focusRing.color | tabs.tabpanel.focus.ring.color | --p-tabs-tabpanel-focus-ring-color | Focus ring color of tabpanel |
| tabs.tabpanel.focusRing.offset | tabs.tabpanel.focus.ring.offset | --p-tabs-tabpanel-focus-ring-offset | Focus ring offset of tabpanel |
| tabs.tabpanel.focusRing.shadow | tabs.tabpanel.focus.ring.shadow | --p-tabs-tabpanel-focus-ring-shadow | Focus ring shadow of tabpanel |
| tabs.navButton.background | tabs.nav.button.background | --p-tabs-nav-button-background | Background of nav button |
| tabs.navButton.color | tabs.nav.button.color | --p-tabs-nav-button-color | Color of nav button |
| tabs.navButton.hoverColor | tabs.nav.button.hover.color | --p-tabs-nav-button-hover-color | Hover color of nav button |
| tabs.navButton.width | tabs.nav.button.width | --p-tabs-nav-button-width | Width of nav button |
| tabs.navButton.focusRing.width | tabs.nav.button.focus.ring.width | --p-tabs-nav-button-focus-ring-width | Focus ring width of nav button |
| tabs.navButton.focusRing.style | tabs.nav.button.focus.ring.style | --p-tabs-nav-button-focus-ring-style | Focus ring style of nav button |
| tabs.navButton.focusRing.color | tabs.nav.button.focus.ring.color | --p-tabs-nav-button-focus-ring-color | Focus ring color of nav button |
| tabs.navButton.focusRing.offset | tabs.nav.button.focus.ring.offset | --p-tabs-nav-button-focus-ring-offset | Focus ring offset of nav button |
| tabs.navButton.focusRing.shadow | tabs.nav.button.focus.ring.shadow | --p-tabs-nav-button-focus-ring-shadow | Focus ring shadow of nav button |
| tabs.navButton.shadow | tabs.nav.button.shadow | --p-tabs-nav-button-shadow | Shadow of nav button |
| tabs.activeBar.height | tabs.active.bar.height | --p-tabs-active-bar-height | Height of active bar |
| tabs.activeBar.bottom | tabs.active.bar.bottom | --p-tabs-active-bar-bottom | Bottom of active bar |
| tabs.activeBar.background | tabs.active.bar.background | --p-tabs-active-bar-background | Background of active bar |

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

[View Official Documentation](https://primeng.org/tabs)
