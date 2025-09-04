# ConfirmDialog

ConfirmDialog is backed by a service utilizing Observables to display confirmation windows easily that can be shared by multiple actions on the same component.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ConfirmDialogModule } from 'primeng/confirmdialog';
```

### Basic {#basic}

ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it bycalling confirm method.

```html
<p-toast />
<p-confirmdialog />
<p-button (click)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (click)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
```

### Position {#position}

The position property of the confirm options is used to display a Dialog at all edges and corners of the screen.

```html
<p-toast />
<p-confirmdialog key="positionDialog" [position]="position" />
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('topleft')" icon="pi pi-arrow-down" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('topright')" icon="pi pi-arrow-down" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="confirmPosition('bottomleft')" icon="pi pi-arrow-up" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottomright')" icon="pi pi-arrow-up" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>
```

### Template {#template}

Properties of the dialog are defined in two ways, message, icon, header properties can either be defined using confirm method or declaratively on p-confirmDialog ng-template by header, message, icon and footer templates. If these values are unlikely to change then declarative approach would be useful, still properties defined in a ng-template can be overridden with confirm method call.

```html
<p-toast />
<p-confirmdialog>
    <ng-template #message let-message>
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i [ngClass]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save" />
```

### Headless {#headless}

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-toast />
<p-confirmdialog #cd>
    <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
        <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
            <div
                class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
            >
                <i class="pi pi-question !text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
                <p-button label="Save" (onClick)="onAccept()" styleClass="w-32"></p-button>
                <p-button label="Cancel" [outlined]="true" (onClick)="onReject()" styleClass="w-32"></p-button>
            </div>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save"/>
```

### Accessibility {#accessibility}

ConfirmDialog component uses alertdialog role along with aria-labelledby referring to the header element however any attribute is passed to the root element so you may use aria-labelledby to override this default behavior. In addition aria-modal is added since focus is kept within the popup.

```html
confirm1() {
this.confirmationService.confirm({
    message: 'Are you sure that you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => acceptFunc(),
    reject: () => rejectFunc()
});

<p-button (click)="confirm1()" icon="pi pi-check" label="Confirm" />

<p-confirmdialog />
```

```html
<p-confirmdialog id="dialog" [visible]="visible" (onHide)="visible = false" message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />

<p-button (click)="visible = true" icon="pi pi-check" label="Confirm" aria-controls="{{visible ? 'dialog' : null}} aria-expanded="{{visible ? true : false}}" />
```

### ConfirmDialog {#confirmdialog}

ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.

### ConfirmationService {#confirmationservice}

### Confirmation {#confirmation}

[↑ Back to Top](#table-of-contents)

## API {#api}

### ConfirmDialog API

API defines helper props, events and others for the PrimeNG ConfirmDialog module.

#### ConfirmDialog {#api-confirmdialog}

ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| header | string | null | Title text of the dialog. |
| icon | string | null | Icon to display next to message. |
| message | string | null | Message of the confirmation. |
| style | { [klass: string]: any } | null | Inline style of the element. |
| styleClass | string | null | Class of the element. |
| maskStyleClass | string | null | Specify the CSS class(es) for styling the mask element |
| acceptIcon | string | null | Icon of the accept button. |
| acceptLabel | string | null | Label of the accept button. |
| closeAriaLabel | string | null | Defines a string that labels the close button for accessibility. |
| acceptAriaLabel | string | null | Defines a string that labels the accept button for accessibility. |
| acceptVisible | boolean | true | Visibility of the accept button. |
| rejectIcon | string | null | Icon of the reject button. |
| rejectLabel | string | null | Label of the reject button. |
| rejectAriaLabel | string | null | Defines a string that labels the reject button for accessibility. |
| rejectVisible | boolean | true | Visibility of the reject button. |
| acceptButtonStyleClass | string | null | Style class of the accept button. |
| rejectButtonStyleClass | string | null | Style class of the reject button. |
| closeOnEscape | boolean | true | Specifies if pressing escape key should hide the dialog. |
| dismissableMask | boolean | false | Specifies if clicking the modal background should hide the dialog. |
| blockScroll | boolean | true | Determines whether scrolling behavior should be blocked within the component. |
| rtl | boolean | false | When enabled dialog is displayed in RTL direction. |
| closable | boolean | true | Adds a close icon to the header to hide the dialog. |
| appendTo | any | body | Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| key | string | null | Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| transitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the animation. |
| focusTrap | boolean | true | When enabled, can only focus on elements inside the confirm dialog. |
| defaultFocus | "accept" | "reject" | "none" | "close" | accept | Element to receive the focus when the dialog gets visible. |
| breakpoints | any | null | Object literal to define widths per screen size. |
| visible | any | null | Current visible state as a boolean. |
| position | "right" | "left" | "top" | "bottom" | "center" | "topleft" | "bottomleft" | "topright" | "bottomright" | null | Allows getting the position of the component. |
| draggable | boolean | true | Enables dragging to change the position using header. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onHide | event :  ConfirmEventType | Callback to invoke when dialog is hidden. |

#### ConfirmationService {#api-confirmationservice}

#### Confirmation {#api-confirmation}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ConfirmDialog Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-confirmdialog | Class name of the root element |
| p-confirmdialog-icon | Class name of the icon element |
| p-confirmdialog-message | Class name of the message element |
| p-confirmdialog-reject-button | Class name of the reject button element |
| p-confirmdialog-accept-button | Class name of the accept button element |

#### ConfirmDialog Design Tokens {#theming-confirmdialog-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| confirmdialog.icon.size | confirmdialog.icon.size | --p-confirmdialog-icon-size | Size of icon |
| confirmdialog.icon.color | confirmdialog.icon.color | --p-confirmdialog-icon-color | Color of icon |
| confirmdialog.content.gap | confirmdialog.content.gap | --p-confirmdialog-content-gap | Gap of content |

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

[View Official Documentation](https://primeng.org/confirmdialog)
