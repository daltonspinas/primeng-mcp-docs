# KeyFilter

KeyFilter is a directive to restrict individual key strokes. In order to restrict the whole input, use InputNumber or InputMask instead.

## Table of Contents

- [Features](#features)
- [API](#api)

## Features {#features}

### Import {#import}

```typescript
import { KeyFilterModule } from 'primeng/keyfilter';
```

### Presets {#presets}

KeyFilter provides various presets configured with the pKeyFilter property.

```html
<input pInputText pKeyFilter="int" />
<input pInputText pKeyFilter="num" />
<input pInputText pKeyFilter="money" />
<input pInputText pKeyFilter="hex" />
<input pInputText pKeyFilter="alpha" />
<input pInputText pKeyFilter="alphanum" />
```

### Regex {#regex}

In addition to the presets, a regular expression can be configured for customization.

```html
<input pInputText [pKeyFilter]="blockSpace" />
<input pInputText [pKeyFilter]="blockChars" />
```

### Accessibility {#accessibility}

Refer to InputText for accessibility as KeyFilter is a built-in add-on of the InputText.

### KeyFilter {#keyfilter}

KeyFilter Directive is a built-in feature of InputText to restrict user input based on a regular expression.

[↑ Back to Top](#table-of-contents)

## API {#api}

### KeyFilter API

API defines helper props, events and others for the PrimeNG KeyFilter module.

#### KeyFilter {#api-keyfilter}

KeyFilter Directive is a built-in feature of InputText to restrict user input based on a regular expression.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| pValidateOnly | boolean | false | When enabled, instead of blocking keys, input is validated internally to test against the regular expression. |
| pattern | RegExp | KeyFilterPattern | null | Sets the pattern for key filtering. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| ngModelChange | value :  string | number | Emits a value whenever the ngModel of the component changes. |

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)

[View Official Documentation](https://primeng.org/keyfilter)
