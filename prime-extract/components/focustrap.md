# Focus Trap

Focus Trap keeps focus within a certain DOM element while tabbing.

## Table of Contents

- [Features](#features)
- [API](#api)

## Features {#features}

### Import {#import}

```typescript
import { FocusTrapModule } from 'primeng/focustrap';
```

### Basic {#basic}

FocusTrap is applied to a container element with the pFocusTrap directive.

```html
<div pFocusTrap class="w-full sm:w-80 flex flex-col gap-6">
    <p-iconfield>
        <p-inputicon>
            <i class="pi pi-user"></i>
        </p-inputicon>
        <input type="text" pInputText id="input" [(ngModel)]="name" type="text" placeholder="Name" [pAutoFocus]="true" [fluid]="true" />
    </p-iconfield>

    <p-iconfield>
        <p-inputicon>
            <i class="pi pi-envelope"> </i>
        </p-inputicon>
        <input type="text" pInputText id="email" [(ngModel)]="email" type="email" placeholder="Email" [fluid]="true" />
    </p-iconfield>

    <div class="flex items-center gap-2">
        <p-checkbox id="accept" [(ngModel)]="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
    </div>

    <p-button type="submit" label="Submit" class="mt-2" styleClass="w-full" />
</div>
```

### FocusTrap {#focustrap}

Focus Trap keeps focus within a certain DOM element while tabbing.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Focus Trap API

API defines helper props, events and others for the PrimeNG Focus Trap module.

#### FocusTrap {#api-focustrap}

Focus Trap keeps focus within a certain DOM element while tabbing.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| pFocusTrapDisabled | boolean | false | When set as true, focus wouldn't be managed. |

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)

[View Official Documentation](https://primeng.org/focustrap)
