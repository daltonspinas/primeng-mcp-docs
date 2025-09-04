# ConfirmPopup

ConfirmPopup displays a confirmation overlay displayed relatively to its target.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ConfirmPopupModule } from 'primeng/confirmpopup';
```

### Basic {#basic}

ConfirmPopup is defined using p-confirmPopup tag and an instance of ConfirmationService is required to display it bycalling confirm method.

```html
<p-toast />
<p-confirmpopup />
<p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (onClick)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
```

### Template {#template}

Content section can be customized using content template.

```html
<p-toast />
<p-confirmpopup>
    <ng-template #content let-message>
        <div
            class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
        >
            <i [class]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (click)="confirm($event)" label="Save" />
```

### Headless {#headless}

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-toast />
<p-confirmpopup #cp>
    <ng-template #headless let-message>
        <div class="rounded p-4">
            <span>{{ message.message }}</span>
            <div class="flex items-center gap-2 mt-4">
                <p-button (onClick)="cp.onAccept()" label="Save" size="small" />
                <p-button (onClick)="cp.onReject()" label="Cancel" [text]="true" size="small" severity="secondary" />
            </div>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (onClick)="confirm($event)" label="Save" />
```

### Accessibility {#accessibility}

ConfirmPopup component uses alertdialog role and since any attribute is passed to the root element you may define attributes like aria-label or aria-labelledby to describe the popup contents. In addition aria-modal is added since focus is kept within the popup.

### ConfirmPopup {#confirmpopup}

ConfirmPopup displays a confirmation overlay displayed relatively to its target.

### Confirmation {#confirmation}

### ConfirmationService {#confirmationservice}

[↑ Back to Top](#table-of-contents)

## API {#api}

### ConfirmPopup API

API defines helper props, events and others for the PrimeNG ConfirmPopup module.

#### ConfirmPopup {#api-confirmpopup}

ConfirmPopup displays a confirmation overlay displayed relatively to its target.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| key | string | null | Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs. |
| defaultFocus | string | accept | Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none". |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| visible | any | null | Defines if the component is visible. |

#### Confirmation {#api-confirmation}

#### ConfirmationService {#api-confirmationservice}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### ConfirmPopup Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-confirmpopup | Class name of the root element |
| p-confirmpopup-content | Class name of the content element |
| p-confirmpopup-icon | Class name of the icon element |
| p-confirmpopup-message | Class name of the message element |
| p-confirmpopup-footer | Class name of the footer element |
| p-confirmpopup-reject-button | Class name of the reject button element |
| p-confirmpopup-accept-button | Class name of the accept button element |

#### ConfirmPopup Design Tokens {#theming-confirmpopup-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| confirmpopup.root.background | confirmpopup.background | --p-confirmpopup-background | Background of root |
| confirmpopup.root.borderColor | confirmpopup.border.color | --p-confirmpopup-border-color | Border color of root |
| confirmpopup.root.color | confirmpopup.color | --p-confirmpopup-color | Color of root |
| confirmpopup.root.borderRadius | confirmpopup.border.radius | --p-confirmpopup-border-radius | Border radius of root |
| confirmpopup.root.shadow | confirmpopup.shadow | --p-confirmpopup-shadow | Shadow of root |
| confirmpopup.root.gutter | confirmpopup.gutter | --p-confirmpopup-gutter | Gutter of root |
| confirmpopup.root.arrowOffset | confirmpopup.arrow.offset | --p-confirmpopup-arrow-offset | Arrow offset of root |
| confirmpopup.content.padding | confirmpopup.content.padding | --p-confirmpopup-content-padding | Padding of content |
| confirmpopup.content.gap | confirmpopup.content.gap | --p-confirmpopup-content-gap | Gap of content |
| confirmpopup.icon.size | confirmpopup.icon.size | --p-confirmpopup-icon-size | Size of icon |
| confirmpopup.icon.color | confirmpopup.icon.color | --p-confirmpopup-icon-color | Color of icon |
| confirmpopup.footer.gap | confirmpopup.footer.gap | --p-confirmpopup-footer-gap | Gap of footer |
| confirmpopup.footer.padding | confirmpopup.footer.padding | --p-confirmpopup-footer-padding | Padding of footer |

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

[View Official Documentation](https://primeng.org/confirmpopup)
