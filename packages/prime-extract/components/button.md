# Button

Button is an extension to standard button element with icons and theming.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { ButtonModule } from 'primeng/button';
```

### Basic {#basic}

Text to display on a button is defined with the label property.

```html
<p-button label="Submit" />
```

### Directive {#directive}

Button can also be used as directive using pButton along with pButtonLabel and pButtonIcon helper directives.

```html
<button pButton>
    <i class="pi pi-check" pButtonIcon></i>
    <span pButtonLabel>Save</span>
</button>
```

### Link {#link}

A button can be rendered as a link when link property is present, while the pButton directive can be applied on an anchor element to style the link as a button.

```html
<p-button label="Link" link />
<a href="https://angular.dev/" pButton target="_blank" rel="noopener noreferrer">
    <span pButtonLabel>Angular Website</span>
</a>
<a routerLink="/" pButton>
    <span pButtonLabel>Router Link</span>
</a>
```

### Icons {#icons}

Icon of a button is specified with icon property and position is configured using iconPos attribute.

```html
<p-button icon="pi pi-home" aria-label="Save" />
<p-button label="Profile" icon="pi pi-user" />
<p-button label="Save" icon="pi pi-check" iconPos="right" />
<p-button label="Search" icon="pi pi-search" iconPos="top" />
<p-button label="Update" icon="pi pi-refresh" iconPos="bottom" />
```

### Loading {#loading}

Busy state is controlled with the loading property.

```html
<p-button label="Search" icon="pi pi-check" [loading]="loading" (onClick)="load()" />
```

### Severity {#severity}

Severity defines the type of button.

```html
<p-button label="Primary" />
<p-button label="Secondary" severity="secondary" />
<p-button label="Success" severity="success" />
<p-button label="Info" severity="info" />
<p-button label="Warn" severity="warn" />
<p-button label="Help" severity="help" />
<p-button label="Danger" severity="danger" />
<p-button label="Contrast" severity="contrast" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-button label="Submit" [disabled]="true" />
```

### Raised {#raised}

Raised buttons display a shadow to indicate elevation.

```html
<p-button label="Primary" [raised]="true" />
<p-button label="Secondary" [raised]="true" severity="secondary" />
<p-button label="Success" [raised]="true" severity="success" />
<p-button label="Info" [raised]="true" severity="info" />
<p-button label="Warn" [raised]="true" severity="warn" />
<p-button label="Help" [raised]="true" severity="help" />
<p-button label="Danger" [raised]="true" severity="danger" />
<p-button label="Contrast" [raised]="true" severity="contrast" />
```

### Rounded {#rounded}

Rounded buttons have a circular border radius.

```html
<p-button label="Primary" [rounded]="true" />
<p-button label="Secondary" [rounded]="true" severity="secondary" />
<p-button label="Success" [rounded]="true" severity="success" />
<p-button label="Info" [rounded]="true" severity="info" />
<p-button label="Warn" [rounded]="true" severity="warn" />
<p-button label="Help" [rounded]="true" severity="help" />
<p-button label="Danger" [rounded]="true" severity="danger" />
<p-button label="Contrast" [rounded]="true" severity="contrast" />
```

### Text {#text}

Text buttons are displayed as textual elements.

```html
<p-button label="Primary" variant="text" />
<p-button label="Secondary" variant="text" severity="secondary" />
<p-button label="Success" variant="text" severity="success" />
<p-button label="Info" variant="text" severity="info" />
<p-button label="Warn" variant="text" severity="warn" />
<p-button label="Help" variant="text" severity="help" />
<p-button label="Danger" variant="text" severity="danger" />
<p-button label="Plain" variant="text" />
```

### Raised Text {#raised-text}

Text buttons can be displayed as raised for elevation.

```html
<p-button label="Primary" variant="text" [raised]="true" />
<p-button label="Secondary" variant="text" [raised]="true" severity="secondary" />
<p-button label="Success" variant="text" [raised]="true" severity="success" />
<p-button label="Info" variant="text" [raised]="true" severity="info" />
<p-button label="Warn" variant="text" [raised]="true" severity="warn" />
<p-button label="Help" variant="text" [raised]="true" severity="help" />
<p-button label="Danger" variant="text" [raised]="true" severity="danger" />
<p-button label="Plain" variant="text" [raised]="true" />
```

### Outlined {#outlined}

Outlined buttons display a border without a background initially.

```html
<p-button label="Primary" variant="outlined" />
<p-button label="Secondary" variant="outlined" severity="secondary" />
<p-button label="Success" variant="outlined" severity="success" />
<p-button label="Info" variant="outlined" severity="info" />
<p-button label="Warn" variant="outlined" severity="warn" />
<p-button label="Help" variant="outlined" severity="help" />
<p-button label="Danger" variant="outlined" severity="danger" />
<p-button label="Contrast" variant="outlined" severity="contrast" />
```

### Icon Only {#icon-only}

Buttons can have icons without labels.

```html
<p-button icon="pi pi-check" />
<p-button icon="pi pi-bookmark" severity="secondary" />
<p-button icon="pi pi-search" severity="success" />
<p-button icon="pi pi-user" severity="info" />
<p-button icon="pi pi-bell" severity="warn" />
<p-button icon="pi pi-heart" severity="help" />
<p-button icon="pi pi-times" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" [outlined]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" [outlined]="true" />
<p-button icon="pi pi-search" [rounded]="true" severity="success" [outlined]="true" />
<p-button icon="pi pi-user" [rounded]="true" severity="info" [outlined]="true" />
<p-button icon="pi pi-bell" [rounded]="true" severity="warn" [outlined]="true" />
<p-button icon="pi pi-heart" [rounded]="true" severity="help" [outlined]="true" />
<p-button icon="pi pi-times" [rounded]="true" severity="danger" [outlined]="true" />

<p-button icon="pi pi-check" [rounded]="true" [text]="true" [raised]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" [raised]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" [text]="true" [raised]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" [text]="true" [raised]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" [text]="true" [raised]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" [text]="true" [raised]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" [text]="true" [raised]="true" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" [text]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" [text]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" [text]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" [text]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" />
```

### Badge {#badge}

Buttons have built-in badge support with badge and badgeClass properties.

```html
<p-button label="Emails" badge="2" styleClass="m-0" />
<p-button label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" styleClass="m-0" [outlined]="true" />
```

### Button Group {#button-group}

Multiple buttons are grouped when wrapped inside an element with ButtonGroup component.

```html
<p-buttongroup>
    <p-button label="Save" icon="pi pi-check" />
    <p-button label="Delete" icon="pi pi-trash" />
    <p-button label="Cancel" icon="pi pi-times" />
</p-buttongroup>
```

### Sizes {#sizes}

Button provides small and large sizes as alternatives to the standard.

```html
<p-button label="Small" icon="pi pi-check" size="small" />
<p-button label="Normal" icon="pi pi-check" />
<p-button label="Large" icon="pi pi-check" size="large" />
```

### Template {#template}

Custom content inside a button is defined as children.

```html
<p-button [outlined]="true">
    <svg width="35" height="40" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
        <path d="..." fill="var(--primary-color)" />
    </svg>
</p-button>
```

### Accessibility {#accessibility}

Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the aria-label prop, if not present label prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use aria-label so that screen readers would be able to read the element properly.

```html
<p-button icon="pi pi-check" aria-label="Submit" />
<p-button icon="pi pi-check" label="Submit" />

<p-button class="youtube p-0" aria-label="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-4">Youtube</span>
</p-button>
```

### Button {#button}

Button is an extension to standard button element with icons and theming.

### ButtonDirective {#buttondirective}

Button directive is an extension to button component.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Button API

API defines helper props, events and others for the PrimeNG Button module.

#### Button {#api-button}

Button is an extension to standard button element with icons and theming.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| type | string | button | Type of the button. |
| iconPos | ButtonIconPosition | left | Position of the icon. |
| icon | string | null | Name of the icon. |
| badge | string | null | Value of the badge. |
| label | string | null | Uses to pass attributes to the label's DOM element. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| loading | boolean | false | Whether the button is in loading state. |
| loadingIcon | string | null | Icon to display in loading state. |
| raised | boolean | false | Add a shadow to indicate elevation. |
| rounded | boolean | false | Add a circular border radius to the button. |
| text | boolean | false | Add a textual class to the button without a background initially. |
| plain | boolean | false | Add a plain textual class to the button without a background initially. |
| severity | ButtonSeverity | null | Defines the style of the button. |
| outlined | boolean | false | Add a border class without a background initially. |
| link | boolean | false | Add a link style to the button. |
| tabindex | number | null | Add a tabindex to the button. |
| size | "small" | "large" | null | Defines the size of the button. |
| variant | "text" | "outlined" | null | Specifies the variant of the component. |
| style | { [klass: string]: any } | null | Inline style of the element. |
| styleClass | string | null | Class of the element. |
| badgeClass | string | null | Style class of the badge. |
| badgeSeverity | "info" | "success" | "warn" | "danger" | "secondary" | "contrast" | "help" | "primary" | secondary | Severity type of the badge. |
| ariaLabel | string | null | Used to define a string that autocomplete attribute the current element. |
| buttonProps | any | null | Button props as an object. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClick | event :  MouseEvent | Callback to execute when button is clicked.
This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click). |
| onFocus | event :  FocusEvent | Callback to execute when button is focused.
This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus). |
| onBlur | event :  FocusEvent | Callback to execute when button loses focus.
This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur). |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Template of the content. |
| loadingicon |  | Template of the loading. |
| icon |  | Template of the icon. |

#### ButtonDirective {#api-buttondirective}

Button directive is an extension to button component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| iconPos | ButtonIconPosition | left | Position of the icon. |
| loadingIcon | string | null | Uses to pass attributes to the loading icon's DOM element. |
| label | string | null | Text of the button. |
| icon | string | null | Name of the icon. |
| loading | boolean | null | Whether the button is in loading state. |
| buttonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the Button component. |
| severity | ButtonSeverity | null | Defines the style of the button. |
| raised | boolean | false | Add a shadow to indicate elevation. |
| rounded | boolean | false | Add a circular border radius to the button. |
| text | boolean | false | Add a textual class to the button without a background initially. |
| outlined | boolean | false | Add a border class without a background initially. |
| size | "small" | "large" | null | Defines the size of the button. |
| plain | boolean | false | Add a plain textual class to the button without a background initially. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Button Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-button | Class name of the root element |
| p-button-loading-icon | Class name of the loading icon element |
| p-button-icon | Class name of the icon element |
| p-button-label | Class name of the label element |

#### Button Design Tokens {#theming-button-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| button.root.borderRadius | button.border.radius | --p-button-border-radius | Border radius of root |
| button.root.roundedBorderRadius | button.rounded.border.radius | --p-button-rounded-border-radius | Rounded border radius of root |
| button.root.gap | button.gap | --p-button-gap | Gap of root |
| button.root.paddingX | button.padding.x | --p-button-padding-x | Padding x of root |
| button.root.paddingY | button.padding.y | --p-button-padding-y | Padding y of root |
| button.root.iconOnlyWidth | button.icon.only.width | --p-button-icon-only-width | Icon only width of root |
| button.root.sm.fontSize | button.sm.font.size | --p-button-sm-font-size | Sm font size of root |
| button.root.sm.paddingX | button.sm.padding.x | --p-button-sm-padding-x | Sm padding x of root |
| button.root.sm.paddingY | button.sm.padding.y | --p-button-sm-padding-y | Sm padding y of root |
| button.root.sm.iconOnlyWidth | button.sm.icon.only.width | --p-button-sm-icon-only-width | Sm icon only width of root |
| button.root.lg.fontSize | button.lg.font.size | --p-button-lg-font-size | Lg font size of root |
| button.root.lg.paddingX | button.lg.padding.x | --p-button-lg-padding-x | Lg padding x of root |
| button.root.lg.paddingY | button.lg.padding.y | --p-button-lg-padding-y | Lg padding y of root |
| button.root.lg.iconOnlyWidth | button.lg.icon.only.width | --p-button-lg-icon-only-width | Lg icon only width of root |
| button.root.label.fontWeight | button.label.font.weight | --p-button-label-font-weight | Label font weight of root |
| button.root.raisedShadow | button.raised.shadow | --p-button-raised-shadow | Raised shadow of root |
| button.root.focusRing.width | button.focus.ring.width | --p-button-focus-ring-width | Focus ring width of root |
| button.root.focusRing.style | button.focus.ring.style | --p-button-focus-ring-style | Focus ring style of root |
| button.root.focusRing.offset | button.focus.ring.offset | --p-button-focus-ring-offset | Focus ring offset of root |
| button.root.badgeSize | button.badge.size | --p-button-badge-size | Badge size of root |
| button.root.transitionDuration | button.transition.duration | --p-button-transition-duration | Transition duration of root |
| button.root.primary.background | button.primary.background | --p-button-primary-background | Primary background of root |
| button.root.primary.hoverBackground | button.primary.hover.background | --p-button-primary-hover-background | Primary hover background of root |
| button.root.primary.activeBackground | button.primary.active.background | --p-button-primary-active-background | Primary active background of root |
| button.root.primary.borderColor | button.primary.border.color | --p-button-primary-border-color | Primary border color of root |
| button.root.primary.hoverBorderColor | button.primary.hover.border.color | --p-button-primary-hover-border-color | Primary hover border color of root |
| button.root.primary.activeBorderColor | button.primary.active.border.color | --p-button-primary-active-border-color | Primary active border color of root |
| button.root.primary.color | button.primary.color | --p-button-primary-color | Primary color of root |
| button.root.primary.hoverColor | button.primary.hover.color | --p-button-primary-hover-color | Primary hover color of root |
| button.root.primary.activeColor | button.primary.active.color | --p-button-primary-active-color | Primary active color of root |
| button.root.primary.focusRing.color | button.primary.focus.ring.color | --p-button-primary-focus-ring-color | Primary focus ring color of root |
| button.root.primary.focusRing.shadow | button.primary.focus.ring.shadow | --p-button-primary-focus-ring-shadow | Primary focus ring shadow of root |
| button.root.secondary.background | button.secondary.background | --p-button-secondary-background | Secondary background of root |
| button.root.secondary.hoverBackground | button.secondary.hover.background | --p-button-secondary-hover-background | Secondary hover background of root |
| button.root.secondary.activeBackground | button.secondary.active.background | --p-button-secondary-active-background | Secondary active background of root |
| button.root.secondary.borderColor | button.secondary.border.color | --p-button-secondary-border-color | Secondary border color of root |
| button.root.secondary.hoverBorderColor | button.secondary.hover.border.color | --p-button-secondary-hover-border-color | Secondary hover border color of root |
| button.root.secondary.activeBorderColor | button.secondary.active.border.color | --p-button-secondary-active-border-color | Secondary active border color of root |
| button.root.secondary.color | button.secondary.color | --p-button-secondary-color | Secondary color of root |
| button.root.secondary.hoverColor | button.secondary.hover.color | --p-button-secondary-hover-color | Secondary hover color of root |
| button.root.secondary.activeColor | button.secondary.active.color | --p-button-secondary-active-color | Secondary active color of root |
| button.root.secondary.focusRing.color | button.secondary.focus.ring.color | --p-button-secondary-focus-ring-color | Secondary focus ring color of root |
| button.root.secondary.focusRing.shadow | button.secondary.focus.ring.shadow | --p-button-secondary-focus-ring-shadow | Secondary focus ring shadow of root |
| button.root.info.background | button.info.background | --p-button-info-background | Info background of root |
| button.root.info.hoverBackground | button.info.hover.background | --p-button-info-hover-background | Info hover background of root |
| button.root.info.activeBackground | button.info.active.background | --p-button-info-active-background | Info active background of root |
| button.root.info.borderColor | button.info.border.color | --p-button-info-border-color | Info border color of root |
| button.root.info.hoverBorderColor | button.info.hover.border.color | --p-button-info-hover-border-color | Info hover border color of root |
| button.root.info.activeBorderColor | button.info.active.border.color | --p-button-info-active-border-color | Info active border color of root |
| button.root.info.color | button.info.color | --p-button-info-color | Info color of root |
| button.root.info.hoverColor | button.info.hover.color | --p-button-info-hover-color | Info hover color of root |
| button.root.info.activeColor | button.info.active.color | --p-button-info-active-color | Info active color of root |
| button.root.info.focusRing.color | button.info.focus.ring.color | --p-button-info-focus-ring-color | Info focus ring color of root |
| button.root.info.focusRing.shadow | button.info.focus.ring.shadow | --p-button-info-focus-ring-shadow | Info focus ring shadow of root |
| button.root.success.background | button.success.background | --p-button-success-background | Success background of root |
| button.root.success.hoverBackground | button.success.hover.background | --p-button-success-hover-background | Success hover background of root |
| button.root.success.activeBackground | button.success.active.background | --p-button-success-active-background | Success active background of root |
| button.root.success.borderColor | button.success.border.color | --p-button-success-border-color | Success border color of root |
| button.root.success.hoverBorderColor | button.success.hover.border.color | --p-button-success-hover-border-color | Success hover border color of root |
| button.root.success.activeBorderColor | button.success.active.border.color | --p-button-success-active-border-color | Success active border color of root |
| button.root.success.color | button.success.color | --p-button-success-color | Success color of root |
| button.root.success.hoverColor | button.success.hover.color | --p-button-success-hover-color | Success hover color of root |
| button.root.success.activeColor | button.success.active.color | --p-button-success-active-color | Success active color of root |
| button.root.success.focusRing.color | button.success.focus.ring.color | --p-button-success-focus-ring-color | Success focus ring color of root |
| button.root.success.focusRing.shadow | button.success.focus.ring.shadow | --p-button-success-focus-ring-shadow | Success focus ring shadow of root |
| button.root.warn.background | button.warn.background | --p-button-warn-background | Warn background of root |
| button.root.warn.hoverBackground | button.warn.hover.background | --p-button-warn-hover-background | Warn hover background of root |
| button.root.warn.activeBackground | button.warn.active.background | --p-button-warn-active-background | Warn active background of root |
| button.root.warn.borderColor | button.warn.border.color | --p-button-warn-border-color | Warn border color of root |
| button.root.warn.hoverBorderColor | button.warn.hover.border.color | --p-button-warn-hover-border-color | Warn hover border color of root |
| button.root.warn.activeBorderColor | button.warn.active.border.color | --p-button-warn-active-border-color | Warn active border color of root |
| button.root.warn.color | button.warn.color | --p-button-warn-color | Warn color of root |
| button.root.warn.hoverColor | button.warn.hover.color | --p-button-warn-hover-color | Warn hover color of root |
| button.root.warn.activeColor | button.warn.active.color | --p-button-warn-active-color | Warn active color of root |
| button.root.warn.focusRing.color | button.warn.focus.ring.color | --p-button-warn-focus-ring-color | Warn focus ring color of root |
| button.root.warn.focusRing.shadow | button.warn.focus.ring.shadow | --p-button-warn-focus-ring-shadow | Warn focus ring shadow of root |
| button.root.help.background | button.help.background | --p-button-help-background | Help background of root |
| button.root.help.hoverBackground | button.help.hover.background | --p-button-help-hover-background | Help hover background of root |
| button.root.help.activeBackground | button.help.active.background | --p-button-help-active-background | Help active background of root |
| button.root.help.borderColor | button.help.border.color | --p-button-help-border-color | Help border color of root |
| button.root.help.hoverBorderColor | button.help.hover.border.color | --p-button-help-hover-border-color | Help hover border color of root |
| button.root.help.activeBorderColor | button.help.active.border.color | --p-button-help-active-border-color | Help active border color of root |
| button.root.help.color | button.help.color | --p-button-help-color | Help color of root |
| button.root.help.hoverColor | button.help.hover.color | --p-button-help-hover-color | Help hover color of root |
| button.root.help.activeColor | button.help.active.color | --p-button-help-active-color | Help active color of root |
| button.root.help.focusRing.color | button.help.focus.ring.color | --p-button-help-focus-ring-color | Help focus ring color of root |
| button.root.help.focusRing.shadow | button.help.focus.ring.shadow | --p-button-help-focus-ring-shadow | Help focus ring shadow of root |
| button.root.danger.background | button.danger.background | --p-button-danger-background | Danger background of root |
| button.root.danger.hoverBackground | button.danger.hover.background | --p-button-danger-hover-background | Danger hover background of root |
| button.root.danger.activeBackground | button.danger.active.background | --p-button-danger-active-background | Danger active background of root |
| button.root.danger.borderColor | button.danger.border.color | --p-button-danger-border-color | Danger border color of root |
| button.root.danger.hoverBorderColor | button.danger.hover.border.color | --p-button-danger-hover-border-color | Danger hover border color of root |
| button.root.danger.activeBorderColor | button.danger.active.border.color | --p-button-danger-active-border-color | Danger active border color of root |
| button.root.danger.color | button.danger.color | --p-button-danger-color | Danger color of root |
| button.root.danger.hoverColor | button.danger.hover.color | --p-button-danger-hover-color | Danger hover color of root |
| button.root.danger.activeColor | button.danger.active.color | --p-button-danger-active-color | Danger active color of root |
| button.root.danger.focusRing.color | button.danger.focus.ring.color | --p-button-danger-focus-ring-color | Danger focus ring color of root |
| button.root.danger.focusRing.shadow | button.danger.focus.ring.shadow | --p-button-danger-focus-ring-shadow | Danger focus ring shadow of root |
| button.root.contrast.background | button.contrast.background | --p-button-contrast-background | Contrast background of root |
| button.root.contrast.hoverBackground | button.contrast.hover.background | --p-button-contrast-hover-background | Contrast hover background of root |
| button.root.contrast.activeBackground | button.contrast.active.background | --p-button-contrast-active-background | Contrast active background of root |
| button.root.contrast.borderColor | button.contrast.border.color | --p-button-contrast-border-color | Contrast border color of root |
| button.root.contrast.hoverBorderColor | button.contrast.hover.border.color | --p-button-contrast-hover-border-color | Contrast hover border color of root |
| button.root.contrast.activeBorderColor | button.contrast.active.border.color | --p-button-contrast-active-border-color | Contrast active border color of root |
| button.root.contrast.color | button.contrast.color | --p-button-contrast-color | Contrast color of root |
| button.root.contrast.hoverColor | button.contrast.hover.color | --p-button-contrast-hover-color | Contrast hover color of root |
| button.root.contrast.activeColor | button.contrast.active.color | --p-button-contrast-active-color | Contrast active color of root |
| button.root.contrast.focusRing.color | button.contrast.focus.ring.color | --p-button-contrast-focus-ring-color | Contrast focus ring color of root |
| button.root.contrast.focusRing.shadow | button.contrast.focus.ring.shadow | --p-button-contrast-focus-ring-shadow | Contrast focus ring shadow of root |
| button.outlined.primary.hoverBackground | button.outlined.primary.hover.background | --p-button-outlined-primary-hover-background | Primary hover background of outlined |
| button.outlined.primary.activeBackground | button.outlined.primary.active.background | --p-button-outlined-primary-active-background | Primary active background of outlined |
| button.outlined.primary.borderColor | button.outlined.primary.border.color | --p-button-outlined-primary-border-color | Primary border color of outlined |
| button.outlined.primary.color | button.outlined.primary.color | --p-button-outlined-primary-color | Primary color of outlined |
| button.outlined.secondary.hoverBackground | button.outlined.secondary.hover.background | --p-button-outlined-secondary-hover-background | Secondary hover background of outlined |
| button.outlined.secondary.activeBackground | button.outlined.secondary.active.background | --p-button-outlined-secondary-active-background | Secondary active background of outlined |
| button.outlined.secondary.borderColor | button.outlined.secondary.border.color | --p-button-outlined-secondary-border-color | Secondary border color of outlined |
| button.outlined.secondary.color | button.outlined.secondary.color | --p-button-outlined-secondary-color | Secondary color of outlined |
| button.outlined.success.hoverBackground | button.outlined.success.hover.background | --p-button-outlined-success-hover-background | Success hover background of outlined |
| button.outlined.success.activeBackground | button.outlined.success.active.background | --p-button-outlined-success-active-background | Success active background of outlined |
| button.outlined.success.borderColor | button.outlined.success.border.color | --p-button-outlined-success-border-color | Success border color of outlined |
| button.outlined.success.color | button.outlined.success.color | --p-button-outlined-success-color | Success color of outlined |
| button.outlined.info.hoverBackground | button.outlined.info.hover.background | --p-button-outlined-info-hover-background | Info hover background of outlined |
| button.outlined.info.activeBackground | button.outlined.info.active.background | --p-button-outlined-info-active-background | Info active background of outlined |
| button.outlined.info.borderColor | button.outlined.info.border.color | --p-button-outlined-info-border-color | Info border color of outlined |
| button.outlined.info.color | button.outlined.info.color | --p-button-outlined-info-color | Info color of outlined |
| button.outlined.warn.hoverBackground | button.outlined.warn.hover.background | --p-button-outlined-warn-hover-background | Warn hover background of outlined |
| button.outlined.warn.activeBackground | button.outlined.warn.active.background | --p-button-outlined-warn-active-background | Warn active background of outlined |
| button.outlined.warn.borderColor | button.outlined.warn.border.color | --p-button-outlined-warn-border-color | Warn border color of outlined |
| button.outlined.warn.color | button.outlined.warn.color | --p-button-outlined-warn-color | Warn color of outlined |
| button.outlined.help.hoverBackground | button.outlined.help.hover.background | --p-button-outlined-help-hover-background | Help hover background of outlined |
| button.outlined.help.activeBackground | button.outlined.help.active.background | --p-button-outlined-help-active-background | Help active background of outlined |
| button.outlined.help.borderColor | button.outlined.help.border.color | --p-button-outlined-help-border-color | Help border color of outlined |
| button.outlined.help.color | button.outlined.help.color | --p-button-outlined-help-color | Help color of outlined |
| button.outlined.danger.hoverBackground | button.outlined.danger.hover.background | --p-button-outlined-danger-hover-background | Danger hover background of outlined |
| button.outlined.danger.activeBackground | button.outlined.danger.active.background | --p-button-outlined-danger-active-background | Danger active background of outlined |
| button.outlined.danger.borderColor | button.outlined.danger.border.color | --p-button-outlined-danger-border-color | Danger border color of outlined |
| button.outlined.danger.color | button.outlined.danger.color | --p-button-outlined-danger-color | Danger color of outlined |
| button.outlined.contrast.hoverBackground | button.outlined.contrast.hover.background | --p-button-outlined-contrast-hover-background | Contrast hover background of outlined |
| button.outlined.contrast.activeBackground | button.outlined.contrast.active.background | --p-button-outlined-contrast-active-background | Contrast active background of outlined |
| button.outlined.contrast.borderColor | button.outlined.contrast.border.color | --p-button-outlined-contrast-border-color | Contrast border color of outlined |
| button.outlined.contrast.color | button.outlined.contrast.color | --p-button-outlined-contrast-color | Contrast color of outlined |
| button.outlined.plain.hoverBackground | button.outlined.plain.hover.background | --p-button-outlined-plain-hover-background | Plain hover background of outlined |
| button.outlined.plain.activeBackground | button.outlined.plain.active.background | --p-button-outlined-plain-active-background | Plain active background of outlined |
| button.outlined.plain.borderColor | button.outlined.plain.border.color | --p-button-outlined-plain-border-color | Plain border color of outlined |
| button.outlined.plain.color | button.outlined.plain.color | --p-button-outlined-plain-color | Plain color of outlined |
| button.text.primary.hoverBackground | button.text.primary.hover.background | --p-button-text-primary-hover-background | Primary hover background of text |
| button.text.primary.activeBackground | button.text.primary.active.background | --p-button-text-primary-active-background | Primary active background of text |
| button.text.primary.color | button.text.primary.color | --p-button-text-primary-color | Primary color of text |
| button.text.secondary.hoverBackground | button.text.secondary.hover.background | --p-button-text-secondary-hover-background | Secondary hover background of text |
| button.text.secondary.activeBackground | button.text.secondary.active.background | --p-button-text-secondary-active-background | Secondary active background of text |
| button.text.secondary.color | button.text.secondary.color | --p-button-text-secondary-color | Secondary color of text |
| button.text.success.hoverBackground | button.text.success.hover.background | --p-button-text-success-hover-background | Success hover background of text |
| button.text.success.activeBackground | button.text.success.active.background | --p-button-text-success-active-background | Success active background of text |
| button.text.success.color | button.text.success.color | --p-button-text-success-color | Success color of text |
| button.text.info.hoverBackground | button.text.info.hover.background | --p-button-text-info-hover-background | Info hover background of text |
| button.text.info.activeBackground | button.text.info.active.background | --p-button-text-info-active-background | Info active background of text |
| button.text.info.color | button.text.info.color | --p-button-text-info-color | Info color of text |
| button.text.warn.hoverBackground | button.text.warn.hover.background | --p-button-text-warn-hover-background | Warn hover background of text |
| button.text.warn.activeBackground | button.text.warn.active.background | --p-button-text-warn-active-background | Warn active background of text |
| button.text.warn.color | button.text.warn.color | --p-button-text-warn-color | Warn color of text |
| button.text.help.hoverBackground | button.text.help.hover.background | --p-button-text-help-hover-background | Help hover background of text |
| button.text.help.activeBackground | button.text.help.active.background | --p-button-text-help-active-background | Help active background of text |
| button.text.help.color | button.text.help.color | --p-button-text-help-color | Help color of text |
| button.text.danger.hoverBackground | button.text.danger.hover.background | --p-button-text-danger-hover-background | Danger hover background of text |
| button.text.danger.activeBackground | button.text.danger.active.background | --p-button-text-danger-active-background | Danger active background of text |
| button.text.danger.color | button.text.danger.color | --p-button-text-danger-color | Danger color of text |
| button.text.contrast.hoverBackground | button.text.contrast.hover.background | --p-button-text-contrast-hover-background | Contrast hover background of text |
| button.text.contrast.activeBackground | button.text.contrast.active.background | --p-button-text-contrast-active-background | Contrast active background of text |
| button.text.contrast.color | button.text.contrast.color | --p-button-text-contrast-color | Contrast color of text |
| button.text.plain.hoverBackground | button.text.plain.hover.background | --p-button-text-plain-hover-background | Plain hover background of text |
| button.text.plain.activeBackground | button.text.plain.active.background | --p-button-text-plain-active-background | Plain active background of text |
| button.text.plain.color | button.text.plain.color | --p-button-text-plain-color | Plain color of text |
| button.link.color | button.link.color | --p-button-link-color | Color of link |
| button.link.hoverColor | button.link.hover.color | --p-button-link-hover-color | Hover color of link |
| button.link.activeColor | button.link.active.color | --p-button-link-active-color | Active color of link |

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

[View Official Documentation](https://primeng.org/button)
