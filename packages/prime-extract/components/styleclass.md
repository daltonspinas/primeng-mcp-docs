# StyleClass

StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.

## Table of Contents

- [Features](#features)
- [API](#api)

## Features {#features}

### Import {#import}

```typescript
import { StyleClassModule } from 'primeng/styleclass';
```

### Toggle Class {#toggle-class}

StyleClass has two modes, toggleClass to simply add-remove a class and enter/leave animations. The target element to change the styling is defined with the selector property that accepts any valid CSS selector or keywords including @next, prev, parent, grandparent

```html
<p-button label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled" />
<input type="text" pInputText class="block mt-4" />
```

### Animation {#animation}

Classes to apply during enter and leave animations are specified using the enterFromClass, enterActiveClass, enterToClass, leaveFromClass, leaveActiveClass,leaveToClassproperties. In addition in case the target is an overlay, hideOnOutsideClick would be handy to hide the target if outside of the popup is clicked, or enable hideOnEscape to close the popup by listening escape key.

```html
<div class="flex flex-col items-center">
    <div>
        <p-button pStyleClass=".box1" enterFromClass="my-hidden" enterActiveClass="my-fadein" label="FadeIn" class="mr-2" />
        <p-button
            pStyleClass=".box1"
            leaveActiveClass="my-fadeout"
            leaveToClass="my-hidden"
            label="FadeOut"
            severity="secondary"
        />
    </div>
    <div class="h-32">
        <div class="my-hidden animate-duration-500 box1">
            <div
                class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
            >
                Custom
            </div>
        </div>
    </div>
</div>
<div class="flex flex-col items-center">
    <div>
        <p-button
            pStyleClass=".box2"
            enterFromClass="hidden"
            enterActiveClass="animate-slidedown"
            label="SlideDown"
            class="mr-2"
        />
        <p-button
            pStyleClass=".box2"
            leaveActiveClass="animate-slideup"
            leaveToClass="hidden"
            label="SlideUp"
            severity="secondary"
        />
    </div>
    <div class="h-32">
        <div class="hidden animate-duration-500 box2 overflow-hidden">
            <div
                class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
            >
                Content
            </div>
        </div>
    </div>
</div>
```

### StyleClass {#styleclass}

[↑ Back to Top](#table-of-contents)

## API {#api}

### StyleClass API

API defines helper props, events and others for the PrimeNG StyleClass module.

#### StyleClass {#api-styleclass}

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)

[View Official Documentation](https://primeng.org/styleclass)
