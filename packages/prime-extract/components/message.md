# Message

Message component is used to display inline messages.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { MessageModule } from 'primeng/message';
```

### Basic {#basic}

Message component requires a content to display.

```html
<p-message>Message Content</p-message>
```

### Severity {#severity}

The severity option specifies the type of the message.

```html
<p-message severity="success">Success Message</p-message>
<p-message severity="info">Info Message</p-message>
<p-message severity="warn">Warn Message</p-message>
<p-message severity="error">Error Message</p-message>
<p-message severity="secondary">Secondary Message</p-message>
<p-message severity="contrast">Contrast Message</p-message>
```

### Icon {#icon}

The severity option specifies the type of the message.

```html
<p-message severity="info" icon="pi pi-send" text="Info Message" styleClass="h-full" />
<p-message severity="success">
    <ng-template #icon>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
    <span class="ml-2">How may I help you?</span>
</p-message>
```

### Outlined {#outlined}

Configure the variant value as outlined for messages with borders and no background.

```html
<p-message severity="success" variant="outlined">Success Message</p-message>
<p-message severity="info" variant="outlined">Info Message</p-message>
<p-message severity="warn" variant="outlined">Warn Message</p-message>
<p-message severity="error" variant="outlined">Error Message</p-message>
<p-message severity="secondary" variant="outlined">Secondary Message</p-message>
<p-message severity="contrast" variant="outlined">Contrast Message</p-message>
```

### Simple {#simple}

Configure the variant value as simple for messages without borders and backgrounds.

```html
<p-message severity="success" variant="simple">Success Message</p-message>
<p-message severity="info" variant="simple">Info Message</p-message>
<p-message severity="warn" variant="simple">Warn Message</p-message>
<p-message severity="error" variant="simple">Error Message</p-message>
<p-message severity="secondary" variant="simple">Secondary Message</p-message>
<p-message severity="contrast" variant="simple">Contrast Message</p-message>
```

### Sizes {#sizes}

Message provides small and large sizes as alternatives to the base.

```html
<p-message size="small" icon="pi pi-send">Small Message</p-message>
<p-message icon="pi pi-user">Normal Message</p-message>
<p-message size="large" icon="pi pi-check">Large Message</p-message>
```

### Forms {#forms}

Validation errors in a form are displayed with the error severity.

```html
<div class="flex flex-col gap-4">
    <p-message severity="error" icon="pi pi-times-circle" styleClass="mb-2">Validation Failed</p-message>
    <div class="flex flex-col gap-1">
        <input pInputText placeholder="Username" [(ngModel)]="username" aria-label="username" [invalid]="!username" />
        @if (!username) {
            <p-message severity="error" variant="simple" size="small">Username is required</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <p-inputmask mask="(999) 999-9999" [(ngModel)]="phone" placeholder="Phone" [invalid]="!phone" />
        @if (!phone) {
            <p-message severity="error" variant="simple" size="small">Phone number is required</p-message>
        }
    </div>
</div>
```

### Dynamic {#dynamic}

Multiple messages can be displayed using the standard for block.

```html
<div class="flex gap-2">
    <p-button label="Show" (onClick)="addMessages()" />
    <p-button label="Clear" severity="secondary" (onClick)="clearMessages()" />
</div>
<div class="flex flex-col">
    @for (message of messages(); track message; let first = $first) {
        <p-message [severity]="message.severity" [text]="message.content" [ngClass]="{ 'mt-4': !first }" />
    }
</div>
```

### Closable {#closable}

Enable closable option to display an icon to remove a message.

```html
<p-message closable>Closable Message</p-message>
```

### Life {#life}

Messages can disappear automatically by defined the life in milliseconds.

```html
<p-message [life]="3000" severity="success">Auto disappear message</p-message>
```

### Accessibility {#accessibility}

Message component uses alert role that implicitly defines aria-live as "assertive" and aria-atomic as "true". Since any attribute is passed to the root element, attributes like aria-labelledby and aria-label can optionally be used as well.

### Message {#message}

Message groups a collection of contents in tabs.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Message API

API defines helper props, events and others for the PrimeNG Message module.

#### Message {#api-message}

Message groups a collection of contents in tabs.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| severity | string | 'info' | Severity level of the message. |
| text | string | null | Text content. |
| escape | boolean | true | Whether displaying messages would be escaped or not. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| closable | boolean | false | Whether the message can be closed manually using the close icon. |
| icon | string | undefined | Icon to display in the message. |
| closeIcon | string | undefined | Icon to display in the message close button. |
| showTransitionOptions | string | '300ms ease-out' | Transition options of the show animation. |
| hideTransitionOptions | string | '200ms cubic-bezier(0.86, 0, 0.07, 1)' | Transition options of the hide animation. |
| size | "small" | "large" | null | Defines the size of the component. |
| variant | "text" | "outlined" | "simple" | null | Specifies the input variant of the component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClose | event :  { originalEvent: Event } | Emits when the message is closed. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| close | event :  Event | Closes the message. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| container |  | Custom template of the message container. |
| icon |  | Custom template of the message icon. |
| closeicon |  | Custom template of the close icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Message Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-message | Class name of the root element |
| p-message-content | Class name of the content element |
| p-message-icon | Class name of the icon element |
| p-message-text | Class name of the text element |
| p-message-close-button | Class name of the close button element |
| p-message-close-icon | Class name of the close icon element |

#### Message Design Tokens {#theming-message-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| message.root.borderRadius | message.border.radius | --p-message-border-radius | Border radius of root |
| message.root.borderWidth | message.border.width | --p-message-border-width | Border width of root |
| message.root.transitionDuration | message.transition.duration | --p-message-transition-duration | Transition duration of root |
| message.content.padding | message.content.padding | --p-message-content-padding | Padding of content |
| message.content.gap | message.content.gap | --p-message-content-gap | Gap of content |
| message.content.sm.padding | message.content.sm.padding | --p-message-content-sm-padding | Sm padding of content |
| message.content.lg.padding | message.content.lg.padding | --p-message-content-lg-padding | Lg padding of content |
| message.text.fontSize | message.text.font.size | --p-message-text-font-size | Font size of text |
| message.text.fontWeight | message.text.font.weight | --p-message-text-font-weight | Font weight of text |
| message.text.sm.fontSize | message.text.sm.font.size | --p-message-text-sm-font-size | Sm font size of text |
| message.text.lg.fontSize | message.text.lg.font.size | --p-message-text-lg-font-size | Lg font size of text |
| message.icon.size | message.icon.size | --p-message-icon-size | Size of icon |
| message.icon.sm.size | message.icon.sm.size | --p-message-icon-sm-size | Sm size of icon |
| message.icon.lg.size | message.icon.lg.size | --p-message-icon-lg-size | Lg size of icon |
| message.closeButton.width | message.close.button.width | --p-message-close-button-width | Width of close button |
| message.closeButton.height | message.close.button.height | --p-message-close-button-height | Height of close button |
| message.closeButton.borderRadius | message.close.button.border.radius | --p-message-close-button-border-radius | Border radius of close button |
| message.closeButton.focusRing.width | message.close.button.focus.ring.width | --p-message-close-button-focus-ring-width | Focus ring width of close button |
| message.closeButton.focusRing.style | message.close.button.focus.ring.style | --p-message-close-button-focus-ring-style | Focus ring style of close button |
| message.closeButton.focusRing.offset | message.close.button.focus.ring.offset | --p-message-close-button-focus-ring-offset | Focus ring offset of close button |
| message.closeIcon.size | message.close.icon.size | --p-message-close-icon-size | Size of close icon |
| message.closeIcon.sm.size | message.close.icon.sm.size | --p-message-close-icon-sm-size | Sm size of close icon |
| message.closeIcon.lg.size | message.close.icon.lg.size | --p-message-close-icon-lg-size | Lg size of close icon |
| message.outlined.root.borderWidth | message.outlined.border.width | --p-message-outlined-border-width | Root border width of outlined |
| message.simple.content.padding | message.simple.content.padding | --p-message-simple-content-padding | Content padding of simple |
| message.info.background | message.info.background | --p-message-info-background | Background of info |
| message.info.borderColor | message.info.border.color | --p-message-info-border-color | Border color of info |
| message.info.color | message.info.color | --p-message-info-color | Color of info |
| message.info.shadow | message.info.shadow | --p-message-info-shadow | Shadow of info |
| message.info.closeButton.hoverBackground | message.info.close.button.hover.background | --p-message-info-close-button-hover-background | Close button hover background of info |
| message.info.closeButton.focusRing.color | message.info.close.button.focus.ring.color | --p-message-info-close-button-focus-ring-color | Close button focus ring color of info |
| message.info.closeButton.focusRing.shadow | message.info.close.button.focus.ring.shadow | --p-message-info-close-button-focus-ring-shadow | Close button focus ring shadow of info |
| message.info.outlined.color | message.info.outlined.color | --p-message-info-outlined-color | Outlined color of info |
| message.info.outlined.borderColor | message.info.outlined.border.color | --p-message-info-outlined-border-color | Outlined border color of info |
| message.info.simple.color | message.info.simple.color | --p-message-info-simple-color | Simple color of info |
| message.success.background | message.success.background | --p-message-success-background | Background of success |
| message.success.borderColor | message.success.border.color | --p-message-success-border-color | Border color of success |
| message.success.color | message.success.color | --p-message-success-color | Color of success |
| message.success.shadow | message.success.shadow | --p-message-success-shadow | Shadow of success |
| message.success.closeButton.hoverBackground | message.success.close.button.hover.background | --p-message-success-close-button-hover-background | Close button hover background of success |
| message.success.closeButton.focusRing.color | message.success.close.button.focus.ring.color | --p-message-success-close-button-focus-ring-color | Close button focus ring color of success |
| message.success.closeButton.focusRing.shadow | message.success.close.button.focus.ring.shadow | --p-message-success-close-button-focus-ring-shadow | Close button focus ring shadow of success |
| message.success.outlined.color | message.success.outlined.color | --p-message-success-outlined-color | Outlined color of success |
| message.success.outlined.borderColor | message.success.outlined.border.color | --p-message-success-outlined-border-color | Outlined border color of success |
| message.success.simple.color | message.success.simple.color | --p-message-success-simple-color | Simple color of success |
| message.warn.background | message.warn.background | --p-message-warn-background | Background of warn |
| message.warn.borderColor | message.warn.border.color | --p-message-warn-border-color | Border color of warn |
| message.warn.color | message.warn.color | --p-message-warn-color | Color of warn |
| message.warn.shadow | message.warn.shadow | --p-message-warn-shadow | Shadow of warn |
| message.warn.closeButton.hoverBackground | message.warn.close.button.hover.background | --p-message-warn-close-button-hover-background | Close button hover background of warn |
| message.warn.closeButton.focusRing.color | message.warn.close.button.focus.ring.color | --p-message-warn-close-button-focus-ring-color | Close button focus ring color of warn |
| message.warn.closeButton.focusRing.shadow | message.warn.close.button.focus.ring.shadow | --p-message-warn-close-button-focus-ring-shadow | Close button focus ring shadow of warn |
| message.warn.outlined.color | message.warn.outlined.color | --p-message-warn-outlined-color | Outlined color of warn |
| message.warn.outlined.borderColor | message.warn.outlined.border.color | --p-message-warn-outlined-border-color | Outlined border color of warn |
| message.warn.simple.color | message.warn.simple.color | --p-message-warn-simple-color | Simple color of warn |
| message.error.background | message.error.background | --p-message-error-background | Background of error |
| message.error.borderColor | message.error.border.color | --p-message-error-border-color | Border color of error |
| message.error.color | message.error.color | --p-message-error-color | Color of error |
| message.error.shadow | message.error.shadow | --p-message-error-shadow | Shadow of error |
| message.error.closeButton.hoverBackground | message.error.close.button.hover.background | --p-message-error-close-button-hover-background | Close button hover background of error |
| message.error.closeButton.focusRing.color | message.error.close.button.focus.ring.color | --p-message-error-close-button-focus-ring-color | Close button focus ring color of error |
| message.error.closeButton.focusRing.shadow | message.error.close.button.focus.ring.shadow | --p-message-error-close-button-focus-ring-shadow | Close button focus ring shadow of error |
| message.error.outlined.color | message.error.outlined.color | --p-message-error-outlined-color | Outlined color of error |
| message.error.outlined.borderColor | message.error.outlined.border.color | --p-message-error-outlined-border-color | Outlined border color of error |
| message.error.simple.color | message.error.simple.color | --p-message-error-simple-color | Simple color of error |
| message.secondary.background | message.secondary.background | --p-message-secondary-background | Background of secondary |
| message.secondary.borderColor | message.secondary.border.color | --p-message-secondary-border-color | Border color of secondary |
| message.secondary.color | message.secondary.color | --p-message-secondary-color | Color of secondary |
| message.secondary.shadow | message.secondary.shadow | --p-message-secondary-shadow | Shadow of secondary |
| message.secondary.closeButton.hoverBackground | message.secondary.close.button.hover.background | --p-message-secondary-close-button-hover-background | Close button hover background of secondary |
| message.secondary.closeButton.focusRing.color | message.secondary.close.button.focus.ring.color | --p-message-secondary-close-button-focus-ring-color | Close button focus ring color of secondary |
| message.secondary.closeButton.focusRing.shadow | message.secondary.close.button.focus.ring.shadow | --p-message-secondary-close-button-focus-ring-shadow | Close button focus ring shadow of secondary |
| message.secondary.outlined.color | message.secondary.outlined.color | --p-message-secondary-outlined-color | Outlined color of secondary |
| message.secondary.outlined.borderColor | message.secondary.outlined.border.color | --p-message-secondary-outlined-border-color | Outlined border color of secondary |
| message.secondary.simple.color | message.secondary.simple.color | --p-message-secondary-simple-color | Simple color of secondary |
| message.contrast.background | message.contrast.background | --p-message-contrast-background | Background of contrast |
| message.contrast.borderColor | message.contrast.border.color | --p-message-contrast-border-color | Border color of contrast |
| message.contrast.color | message.contrast.color | --p-message-contrast-color | Color of contrast |
| message.contrast.shadow | message.contrast.shadow | --p-message-contrast-shadow | Shadow of contrast |
| message.contrast.closeButton.hoverBackground | message.contrast.close.button.hover.background | --p-message-contrast-close-button-hover-background | Close button hover background of contrast |
| message.contrast.closeButton.focusRing.color | message.contrast.close.button.focus.ring.color | --p-message-contrast-close-button-focus-ring-color | Close button focus ring color of contrast |
| message.contrast.closeButton.focusRing.shadow | message.contrast.close.button.focus.ring.shadow | --p-message-contrast-close-button-focus-ring-shadow | Close button focus ring shadow of contrast |
| message.contrast.outlined.color | message.contrast.outlined.color | --p-message-contrast-outlined-color | Outlined color of contrast |
| message.contrast.outlined.borderColor | message.contrast.outlined.border.color | --p-message-contrast-outlined-border-color | Outlined border color of contrast |
| message.contrast.simple.color | message.contrast.simple.color | --p-message-contrast-simple-color | Simple color of contrast |

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

[View Official Documentation](https://primeng.org/message)
