# Toast

Toast is used to display messages in an overlay.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ToastModule } from 'primeng/toast';
```

### Basic {#basic}

Toasts are displayed by calling the add and addAll method provided by the messageService. A single toast is specified by the Message interface that defines various properties such as severity, summary and detail.

```html
<p-toast />
<p-button (onClick)="show()" label="Show" />
```

### Severity {#severity}

The severity option specifies the type of the message. There are four types of messages: success, info, warn and error. The severity of the message is used to display the icon and the color of the toast.

```html
<p-toast />
<p-button type="button" pRipple (click)="showSuccess()" label="Success" severity="success" />
<p-button type="button" pRipple (click)="showInfo()" label="Info" severity="info" />
<p-button type="button" pRipple (click)="showWarn()" label="Warn" severity="warn" />
<p-button type="button" pRipple (click)="showError()" label="Error" severity="danger" />
<p-button type="button" pRipple (click)="showSecondary()" label="Secondary" severity="secondary" />
<p-button type="button" pRipple (click)="showContrast()" label="Contrast" severity="contrast" />
```

### Position {#position}

Location of the toast is customized with the position property. Valid values are top-left, top-center, top-right, bottom-left, bottom-center, bottom-right and center.

```html
<p-toast position="top-left" key="tl" />
<p-toast position="bottom-left" key="bl" />
<p-toast position="bottom-right" key="br" />
<p-button pRipple (click)="showTopLeft()" label="Top Left" />
<p-button pRipple (click)="showBottomLeft()" label="Bottom Left" />
<p-button pRipple (click)="showBottomRight()" label="Bottom Right" />
```

### Multiple {#multiple}

Multiple toasts are displayed by passing an array to the showAll method of the messageService.

```html
<p-toast />
<p-button pRipple (click)="show()" label="Multiple" severity="warn" />
```

### Sticky {#sticky}

A toast disappears after the time defined by the life option, set sticky option true on the message to override this and not hide the toast automatically.

```html
<p-toast />
<div class="flex flex-wrap gap-2">
    <p-button pRipple (click)="show()" label="Sticky" />
    <p-button pRipple (click)="clear()" label="Clear" severity="secondary" />
</div>
```

### Template {#template}

Templating allows customizing the content where the message instance is available as the implicit variable.

```html
<p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
    <ng-template let-message #message>
        <div class="flex flex-col items-start flex-auto">
            <div class="flex items-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-4">{{ message.summary }}</div>
            <p-button severity="success" size="small" label="Reply" (click)="onConfirm()" />
        </div>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="View" />
```

### Headless {#headless}

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
    <ng-template let-message #headless let-closeFn="closeFn">
        <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
            <div class="flex items-center gap-5">
                <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
            </div>
            <div class="flex flex-col gap-2">
                <p-progressbar [value]="progress" [showValue]="false" [style]="{ height: '4px' }" class="!bg-primary/80" />
                <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
            </div>
            <div class="flex gap-4 mb-4 justify-end">
                <p-button label="Another Upload?" (click)="closeFn($event)" size="small" />
                <p-button label="Cancel" (click)="closeFn($event)" size="small" />
            </div>
        </section>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="Confirm" />
```

### Responsive {#responsive}

Toast styling can be adjusted per screen size with the breakpoints option. The value of breakpoints should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px.

```html
<p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
<p-button (click)="show()" label="Show" />
```

### Animation {#animation}

Transition of the animations can be customized using the showTransitionOptions, hideTransitionOptions, showTransformOptions and hideTransformOptions properties.

```html
<p-toast [showTransitionOptions]="'250ms'" [showTransformOptions]="'translateX(100%)'" [hideTransitionOptions]="'150ms'" [hideTransformOptions]="'translateX(100%)'" />
<p-button (click)="show()" label="Show" />
```

### Accessibility {#accessibility}

Toast component use alert role that implicitly defines aria-live as "assertive" and aria-atomic as "true".

### Toast {#toast}

Toast is used to display messages in an overlay.

### ToastMessage {#toastmessage}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Toast API

API defines helper props, events and others for the PrimeNG Toast module.

#### Toast {#api-toast}

Toast is used to display messages in an overlay.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| key | string | null | Key of the message in case message is targeted to a specific toast component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| life | number | 3000 | The default time to display messages for in milliseconds. |
| styleClass | string | null | Inline class of the component. |
| position | ToastPositionType | null | Position of the toast in viewport. |
| preventOpenDuplicates | boolean | false | It does not add the new message if there is already a toast displayed with the same content |
| preventDuplicates | boolean | false | Displays only once a message with the same content. |
| showTransformOptions | string | translateY(100%) | Transform options of the show animation. |
| hideTransformOptions | string | translateY(-100%) | Transform options of the hide animation. |
| showTransitionOptions | string | 300ms ease-out | Transition options of the show animation. |
| hideTransitionOptions | string | 250ms ease-in | Transition options of the hide animation. |
| breakpoints | { [key: string]: any } | null | Object literal to define styles per screen size. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClose | event :  ToastCloseEvent | Callback to invoke when a message is closed. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| template |  | Custom template of message. |
| headless |  | Custom headless template. |

#### ToastMessage {#api-toastmessage}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Toast Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-toast | Class name of the root element |
| p-toast-message | Class name of the message element |
| p-toast-message-content | Class name of the message content element |
| p-toast-message-icon | Class name of the message icon element |
| p-toast-message-text | Class name of the message text element |
| p-toast-summary | Class name of the summary element |
| p-toast-detail | Class name of the detail element |
| p-toast-close-button | Class name of the close button element |
| p-toast-close-icon | Class name of the close icon element |

#### Toast Design Tokens {#theming-toast-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| toast.root.width | toast.width | --p-toast-width | Width of root |
| toast.root.borderRadius | toast.border.radius | --p-toast-border-radius | Border radius of root |
| toast.root.borderWidth | toast.border.width | --p-toast-border-width | Border width of root |
| toast.root.transitionDuration | toast.transition.duration | --p-toast-transition-duration | Transition duration of root |
| toast.root.blur | toast.blur | --p-toast-blur | Used to pass tokens of the blur section |
| toast.icon.size | toast.icon.size | --p-toast-icon-size | Size of icon |
| toast.content.padding | toast.content.padding | --p-toast-content-padding | Padding of content |
| toast.content.gap | toast.content.gap | --p-toast-content-gap | Gap of content |
| toast.text.gap | toast.text.gap | --p-toast-text-gap | Gap of text |
| toast.summary.fontWeight | toast.summary.font.weight | --p-toast-summary-font-weight | Font weight of summary |
| toast.summary.fontSize | toast.summary.font.size | --p-toast-summary-font-size | Font size of summary |
| toast.detail.fontWeight | toast.detail.font.weight | --p-toast-detail-font-weight | Font weight of detail |
| toast.detail.fontSize | toast.detail.font.size | --p-toast-detail-font-size | Font size of detail |
| toast.closeButton.width | toast.close.button.width | --p-toast-close-button-width | Width of close button |
| toast.closeButton.height | toast.close.button.height | --p-toast-close-button-height | Height of close button |
| toast.closeButton.borderRadius | toast.close.button.border.radius | --p-toast-close-button-border-radius | Border radius of close button |
| toast.closeButton.focusRing.width | toast.close.button.focus.ring.width | --p-toast-close-button-focus-ring-width | Focus ring width of close button |
| toast.closeButton.focusRing.style | toast.close.button.focus.ring.style | --p-toast-close-button-focus-ring-style | Focus ring style of close button |
| toast.closeButton.focusRing.offset | toast.close.button.focus.ring.offset | --p-toast-close-button-focus-ring-offset | Focus ring offset of close button |
| toast.closeIcon.size | toast.close.icon.size | --p-toast-close-icon-size | Size of close icon |
| toast.info.background | toast.info.background | --p-toast-info-background | Background of info |
| toast.info.borderColor | toast.info.border.color | --p-toast-info-border-color | Border color of info |
| toast.info.color | toast.info.color | --p-toast-info-color | Color of info |
| toast.info.detailColor | toast.info.detail.color | --p-toast-info-detail-color | Detail color of info |
| toast.info.shadow | toast.info.shadow | --p-toast-info-shadow | Shadow of info |
| toast.info.closeButton.hoverBackground | toast.info.close.button.hover.background | --p-toast-info-close-button-hover-background | Close button hover background of info |
| toast.info.closeButton.focusRing.color | toast.info.close.button.focus.ring.color | --p-toast-info-close-button-focus-ring-color | Close button focus ring color of info |
| toast.info.closeButton.focusRing.shadow | toast.info.close.button.focus.ring.shadow | --p-toast-info-close-button-focus-ring-shadow | Close button focus ring shadow of info |
| toast.success.background | toast.success.background | --p-toast-success-background | Background of success |
| toast.success.borderColor | toast.success.border.color | --p-toast-success-border-color | Border color of success |
| toast.success.color | toast.success.color | --p-toast-success-color | Color of success |
| toast.success.detailColor | toast.success.detail.color | --p-toast-success-detail-color | Detail color of success |
| toast.success.shadow | toast.success.shadow | --p-toast-success-shadow | Shadow of success |
| toast.success.closeButton.hoverBackground | toast.success.close.button.hover.background | --p-toast-success-close-button-hover-background | Close button hover background of success |
| toast.success.closeButton.focusRing.color | toast.success.close.button.focus.ring.color | --p-toast-success-close-button-focus-ring-color | Close button focus ring color of success |
| toast.success.closeButton.focusRing.shadow | toast.success.close.button.focus.ring.shadow | --p-toast-success-close-button-focus-ring-shadow | Close button focus ring shadow of success |
| toast.warn.background | toast.warn.background | --p-toast-warn-background | Background of warn |
| toast.warn.borderColor | toast.warn.border.color | --p-toast-warn-border-color | Border color of warn |
| toast.warn.color | toast.warn.color | --p-toast-warn-color | Color of warn |
| toast.warn.detailColor | toast.warn.detail.color | --p-toast-warn-detail-color | Detail color of warn |
| toast.warn.shadow | toast.warn.shadow | --p-toast-warn-shadow | Shadow of warn |
| toast.warn.closeButton.hoverBackground | toast.warn.close.button.hover.background | --p-toast-warn-close-button-hover-background | Close button hover background of warn |
| toast.warn.closeButton.focusRing.color | toast.warn.close.button.focus.ring.color | --p-toast-warn-close-button-focus-ring-color | Close button focus ring color of warn |
| toast.warn.closeButton.focusRing.shadow | toast.warn.close.button.focus.ring.shadow | --p-toast-warn-close-button-focus-ring-shadow | Close button focus ring shadow of warn |
| toast.error.background | toast.error.background | --p-toast-error-background | Background of error |
| toast.error.borderColor | toast.error.border.color | --p-toast-error-border-color | Border color of error |
| toast.error.color | toast.error.color | --p-toast-error-color | Color of error |
| toast.error.detailColor | toast.error.detail.color | --p-toast-error-detail-color | Detail color of error |
| toast.error.shadow | toast.error.shadow | --p-toast-error-shadow | Shadow of error |
| toast.error.closeButton.hoverBackground | toast.error.close.button.hover.background | --p-toast-error-close-button-hover-background | Close button hover background of error |
| toast.error.closeButton.focusRing.color | toast.error.close.button.focus.ring.color | --p-toast-error-close-button-focus-ring-color | Close button focus ring color of error |
| toast.error.closeButton.focusRing.shadow | toast.error.close.button.focus.ring.shadow | --p-toast-error-close-button-focus-ring-shadow | Close button focus ring shadow of error |
| toast.secondary.background | toast.secondary.background | --p-toast-secondary-background | Background of secondary |
| toast.secondary.borderColor | toast.secondary.border.color | --p-toast-secondary-border-color | Border color of secondary |
| toast.secondary.color | toast.secondary.color | --p-toast-secondary-color | Color of secondary |
| toast.secondary.detailColor | toast.secondary.detail.color | --p-toast-secondary-detail-color | Detail color of secondary |
| toast.secondary.shadow | toast.secondary.shadow | --p-toast-secondary-shadow | Shadow of secondary |
| toast.secondary.closeButton.hoverBackground | toast.secondary.close.button.hover.background | --p-toast-secondary-close-button-hover-background | Close button hover background of secondary |
| toast.secondary.closeButton.focusRing.color | toast.secondary.close.button.focus.ring.color | --p-toast-secondary-close-button-focus-ring-color | Close button focus ring color of secondary |
| toast.secondary.closeButton.focusRing.shadow | toast.secondary.close.button.focus.ring.shadow | --p-toast-secondary-close-button-focus-ring-shadow | Close button focus ring shadow of secondary |
| toast.contrast.background | toast.contrast.background | --p-toast-contrast-background | Background of contrast |
| toast.contrast.borderColor | toast.contrast.border.color | --p-toast-contrast-border-color | Border color of contrast |
| toast.contrast.color | toast.contrast.color | --p-toast-contrast-color | Color of contrast |
| toast.contrast.detailColor | toast.contrast.detail.color | --p-toast-contrast-detail-color | Detail color of contrast |
| toast.contrast.shadow | toast.contrast.shadow | --p-toast-contrast-shadow | Shadow of contrast |
| toast.contrast.closeButton.hoverBackground | toast.contrast.close.button.hover.background | --p-toast-contrast-close-button-hover-background | Close button hover background of contrast |
| toast.contrast.closeButton.focusRing.color | toast.contrast.close.button.focus.ring.color | --p-toast-contrast-close-button-focus-ring-color | Close button focus ring color of contrast |
| toast.contrast.closeButton.focusRing.shadow | toast.contrast.close.button.focus.ring.shadow | --p-toast-contrast-close-button-focus-ring-shadow | Close button focus ring shadow of contrast |

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

[View Official Documentation](https://primeng.org/toast)
