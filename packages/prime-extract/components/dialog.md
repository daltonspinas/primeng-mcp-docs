# Dialog

Dialog is a container to display content in an overlay window.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { DialogModule } from 'primeng/dialog';
```

### Basic {#basic}

Dialog is used as a container and visibility is controlled with visible property.

```html
<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>
```

### Template {#template}

Dialog can be customized using header and footer templates.

```html
<p-button (click)="showDialog()" label="Show" />
<p-dialog [(visible)]="visible" [modal]="true" [style]="{ width: '25rem' }">
    <ng-template #header>
        <div class="inline-flex items-center justify-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </div>
    </ng-template>
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-2">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <ng-template #footer>
        <p-button label="Cancel" [text]="true" severity="secondary" (click)="visible = false" />
        <p-button label="Save" [outlined]="true" severity="secondary" (click)="visible = false" />
    </ng-template>
</p-dialog>
```

### Position {#position}

The position property is used to display a Dialog at all edges and corners of the screen.

```html
<div class="flex flex-wrap justify-center gap-2 mb-2">
    <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-2">
    <p-button (click)="showDialog('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="showDialog('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>
<p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [position]="position" [style]="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>
```

### Maximizable {#maximizable}

Setting maximizable property to true enables the full screen mode.

```html
<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-dialog>
```

### Long Content {#long-content}

Dialog automatically displays a scroller when content exceeds viewport.

```html
<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
    <p class="mb-8">
        Lorem ipsum dolor sit amet...
    </p>
    <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="mb-8">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-dialog>
```

### Without Modal {#without-modal}

Mask layer behind the Dialog is configured with the modal property. By default, no modal layer is added.

```html
<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Edit Profile" [(visible)]="visible" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>
```

### Responsive {#responsive}

Dialog width can be adjusted per screen size with the breakpoints option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in style property is used.

```html
<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [(visible)]="visible" [modal]="true" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-dialog>
```

### Headless {#headless}

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
<p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
    <ng-template #headless>
        <div
            class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
            style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"
        >
            <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="block mx-auto"
            >
                <path
                    d="..."
                    fill="var(--p-primary-color)"
                />
            </svg>
            <div class="inline-flex flex-col gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
            </div>
            <div class="inline-flex flex-col gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input
                    pInputText
                    id="password"
                    class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
                    type="password"
                />
            </div>
            <div class="flex items-center gap-4">
                <p-button
                    label="Cancel"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
                <p-button
                    label="Sign-In"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
            </div>
        </div>
    </ng-template>
</p-dialog>
```

### Accessibility {#accessibility}

Dialog component uses dialog role along with aria-labelledby referring to the header element however any attribute is passed to the root element so you may use aria-labelledby to override this default behavior. In addition aria-modal is added since focus is kept within the popup.

```html
<p-button icon="pi pi-external-link" (click)="visible = true" aria-controls="{{visible ? 'dialog' : null}}" aria-expanded="{{visible ? true : false}}" />

<p-dialog id="dialog" header="Header" [(visible)]="visible" [style]="{ width: '50vw' }" (onHide)="visible = false">
    <p>Content</p>
</p-dialog>
```

### Dialog {#dialog}

Dialog is a container to display content in an overlay window.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Dialog API

API defines helper props, events and others for the PrimeNG Dialog module.

#### Dialog {#api-dialog}

Dialog is a container to display content in an overlay window.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| header | string | null | Title text of the dialog. |
| draggable | boolean | true | Enables dragging to change the position using header. |
| resizable | boolean | true | Enables resizing of the content. |
| contentStyle | any | null | Style of the content section. |
| contentStyleClass | string | null | Style class of the content. |
| modal | boolean | false | Defines if background should be blocked when dialog is displayed. |
| closeOnEscape | boolean | true | Specifies if pressing escape key should hide the dialog. |
| dismissableMask | boolean | false | Specifies if clicking the modal background should hide the dialog. |
| rtl | boolean | false | When enabled dialog is displayed in RTL direction. |
| closable | boolean | true | Adds a close icon to the header to hide the dialog. |
| breakpoints | any | null | Object literal to define widths per screen size. |
| styleClass | string | null | Style class of the component. |
| maskStyleClass | string | null | Style class of the mask. |
| maskStyle | { [klass: string]: any } | null | Style of the mask. |
| showHeader | boolean | true | Whether to show the header or not. |
| blockScroll | boolean | false | Whether background scroll should be blocked when dialog is visible. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| minX | number | 0 | Minimum value for the left coordinate of dialog in dragging. |
| minY | number | 0 | Minimum value for the top coordinate of dialog in dragging. |
| focusOnShow | boolean | true | When enabled, first focusable element receives focus on show. |
| maximizable | boolean | false | Whether the dialog can be displayed full screen. |
| keepInViewport | boolean | true | Keeps dialog in the viewport. |
| focusTrap | boolean | true | When enabled, can only focus on elements inside the dialog. |
| transitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the animation. |
| closeIcon | string | null | Name of the close icon. |
| closeAriaLabel | string | null | Defines a string that labels the close button for accessibility. |
| closeTabindex | string | 0 | Index of the close button in tabbing order. |
| minimizeIcon | string | null | Name of the minimize icon. |
| maximizeIcon | string | null | Name of the maximize icon. |
| closeButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |
| maximizeButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |
| visible | boolean | null | Specifies the visibility of the dialog. |
| style | any | null | Inline style of the component. |
| position | "right" | "left" | "top" | "bottom" | "center" | "topleft" | "bottomleft" | "topright" | "bottomright" | null | Position of the dialog. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| headerTemplate | TemplateRef<any> | null | Header template. |
| contentTemplate | TemplateRef<any> | null | Content template. |
| footerTemplate | TemplateRef<any> | null | Footer template. |
| closeIconTemplate | TemplateRef<any> | null | Close icon template. |
| maximizeIconTemplate | TemplateRef<any> | null | Maximize icon template. |
| minimizeIconTemplate | TemplateRef<any> | null | Minimize icon template. |
| headlessTemplate | TemplateRef<any> | null | Headless template. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| role | value : | Role attribute of html element. |
| onShow | value :  any | Callback to invoke when dialog is shown. |
| onHide | value :  any | Callback to invoke when dialog is hidden. |
| visibleChange | value :  boolean | This EventEmitter is used to notify changes in the visibility state of a component. |
| onResizeInit | event :  MouseEvent | Callback to invoke when dialog resizing is initiated. |
| onResizeEnd | event :  MouseEvent | Callback to invoke when dialog resizing is completed. |
| onDragEnd | event :  DragEvent | Callback to invoke when dialog dragging is completed. |
| onMaximize | value :  any | Callback to invoke when dialog maximized or unmaximized. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Dialog Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-dialog-mask | Class name of the mask element |
| p-dialog | Class name of the root element |
| p-dialog-header | Class name of the header element |
| p-dialog-title | Class name of the title element |
| p-dialog-header-actions | Class name of the header actions element |
| p-dialog-maximize-button | Class name of the maximize button element |
| p-dialog-close-button | Class name of the close button element |
| p-dialog-content | Class name of the content element |
| p-dialog-footer | Class name of the footer element |

#### Dialog Design Tokens {#theming-dialog-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| dialog.root.background | dialog.background | --p-dialog-background | Background of root |
| dialog.root.borderColor | dialog.border.color | --p-dialog-border-color | Border color of root |
| dialog.root.color | dialog.color | --p-dialog-color | Color of root |
| dialog.root.borderRadius | dialog.border.radius | --p-dialog-border-radius | Border radius of root |
| dialog.root.shadow | dialog.shadow | --p-dialog-shadow | Shadow of root |
| dialog.header.padding | dialog.header.padding | --p-dialog-header-padding | Padding of header |
| dialog.header.gap | dialog.header.gap | --p-dialog-header-gap | Gap of header |
| dialog.title.fontSize | dialog.title.font.size | --p-dialog-title-font-size | Font size of title |
| dialog.title.fontWeight | dialog.title.font.weight | --p-dialog-title-font-weight | Font weight of title |
| dialog.content.padding | dialog.content.padding | --p-dialog-content-padding | Padding of content |
| dialog.footer.padding | dialog.footer.padding | --p-dialog-footer-padding | Padding of footer |
| dialog.footer.gap | dialog.footer.gap | --p-dialog-footer-gap | Gap of footer |

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

[View Official Documentation](https://primeng.org/dialog)
