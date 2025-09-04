# TreeSelect

TreeSelect is a form component to choose from hierarchical data.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TreeSelectModule } from 'primeng/treeselect';
```

### Basic {#basic}

TreeSelect is used as a controlled component with ng-model directive along with an options collection. Internally Tree component is used so the options model is based on TreeNode API.

```html
<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />
```

### Multiple {#multiple}

More than one node is selectable by setting selectionMode to multiple. By default in multiple selection mode, metaKey press (e.g. ⌘) is necessary to add to existing selections however this can be configured with disabling the metaKeySelection property. Note that in touch enabled devices, TreeSelect always ignores metaKey.

```text
{
    '0-0': true,
    '0-1-0': true
}
```

```html
<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" [metaKeySelection]="false" selectionMode="multiple" placeholder="Select Item" />
```

### Checkbox {#checkbox}

Selection of multiple nodes via checkboxes is enabled by configuring selectionMode as checkbox.

```html
<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" />
```

### Virtual Scroll {#virtual-scroll}

VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="46" [virtualScrollOptions]="{scrollHeight: '200px'}" />
```

### Lazy {#lazy}

Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using loading property and onNodeExpand method.

```html
<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [loading]="loading" (onNodeExpand)="onNodeExpand($event)" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [loading]="loading"/>
```

### Filter {#filter}

Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.

```html
<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" [filter]="true" [filterInputAutoFocus]="true" />
```

### Template {#template}

TreeSelect offers multiple templates for customization through templating.

```html
<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item">
    <ng-template #dropdownicon>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Files</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 pt-1 pb-2 flex justify-between">
            <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-treeselect>
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel class="w-full md:w-80">
    <p-treeselect [(ngModel)]="value1" inputId="over_label" [options]="nodes" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="in">
    <p-treeselect [(ngModel)]="value2" inputId="in_label" [options]="nodes" class="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="on">
    <p-treeselect [(ngModel)]="value3" inputId="on_label" [options]="nodes" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel class="w-full md:w-80">
    <p-treeselect [(ngModel)]="selectedValue" inputId="t_file" [options]="nodes" class="w-full" />
    <label for="t_file">File</label>
</p-iftalabel>
```

### Sizes {#sizes}

TreeSelect provides small and large sizes as alternatives to the base.

```html
<p-treeselect [(ngModel)]="value1" [options]="nodes" size="small" placeholder="Small" class="md:w-80 w-full" />
<p-treeselect [(ngModel)]="value2" [options]="nodes" placeholder="Normal" class="md:w-80 w-full" />
<p-treeselect [(ngModel)]="value3" [options]="nodes" size="large" placeholder="Large" class="md:w-80 w-full" />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" variant="filled" [options]="nodes" placeholder="Select Item" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" [disabled]="true" placeholder="TreeSelect" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-treeselect [invalid]="selectedValue1 === undefined" [(ngModel)]="selectedValue1" [options]="nodes" placeholder="TreeSelect" class="md:w-80 w-full" />
<p-treeselect [invalid]="selectedValue2 === undefined" [(ngModel)]="selectedValue2" [options]="nodes" placeholder="TreeSelect" class="md:w-80 w-full" />
```

### Forms {#forms}

TreeSelect can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <p-treeselect #node="ngModel" [(ngModel)]="selectedNodes" [invalid]="node.invalid && exampleForm.submitted" name="node" class="md:w-80 w-full" [options]="nodes" placeholder="Select Item" required />
        @if (node.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <p-treeselect class="md:w-80 w-full" formControlName="selectedNodes" [options]="nodes" placeholder="Select Item" [invalid]="isInvalid('selectedNodes')" />

        @if (isInvalid('selectedNodes')) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can either be provided with ariaLabelledby or ariaLabel props. The treeselect element has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls that refers to the id of the popup.

```html
<span id="dd1">Options</span>
<p-treeselect ariaLabelledBy="dd1" />

<p-treeselect ariaLabel="Options" />
```

### TreeSelect {#treeselect}

TreeSelect is a form component to choose from hierarchical data.

### TreeNode {#treenode}

[↑ Back to Top](#table-of-contents)

## API {#api}

### TreeSelect API

API defines helper props, events and others for the PrimeNG TreeSelect module.

#### TreeSelect {#api-treeselect}

TreeSelect is a form component to choose from hierarchical data.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| inputId | string | null | Identifier of the underlying input element. |
| scrollHeight | string | 400px | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| metaKeySelection | boolean | false | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| display | "chip" | "comma" | comma | Defines how the selected items are displayed. |
| selectionMode | "checkbox" | "single" | "multiple" | single | Defines the selection mode. |
| tabindex | string | 0 | Index of the element in tabbing order. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| placeholder | string | null | Label to display when there are no selections. |
| panelClass | string | string[] | Set<string> | { [klass: string]: any } | null | Style class of the overlay panel. |
| panelStyle | { [klass: string]: any } | null | Inline style of the panel element. |
| panelStyleClass | string | null | Style class of the panel element. |
| containerStyle | { [klass: string]: any } | null | Inline style of the container element. |
| containerStyleClass | string | null | Style class of the container element. |
| labelStyle | { [klass: string]: any } | null | Inline style of the label element. |
| labelStyleClass | string | null | Style class of the label element. |
| overlayOptions | OverlayOptions | null | Specifies the options for the overlay. |
| emptyMessage | string | null | Text to display when there are no options available. Defaults to value from PrimeNG locale configuration. |
| filter | boolean | false | When specified, displays an input field to filter the items. |
| filterBy | string | label | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. |
| filterMode | string | lenient | Mode for filtering valid values are "lenient" and "strict". Default is lenient. |
| filterPlaceholder | string | null | Placeholder text to show when filter input is empty. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| filterInputAutoFocus | boolean | true | Determines whether the filter input should be automatically focused when the component is rendered. |
| propagateSelectionDown | boolean | true | Whether checkbox selections propagate to descendant nodes. |
| propagateSelectionUp | boolean | true | Whether checkbox selections propagate to ancestor nodes. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| resetFilterOnHide | boolean | true | Clears the filter value when hiding the dropdown. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| virtualScrollItemSize | number | null | Height of an item in the list for VirtualScrolling. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| options | TreeNode<any>[] | null | An array of treenodes. |
| loading | boolean | false | Displays a loader to indicate data load is in progress. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onNodeExpand | event :  TreeSelectNodeExpandEvent | Callback to invoke when a node is expanded. |
| onNodeCollapse | event :  TreeSelectNodeCollapseEvent | Callback to invoke when a node is collapsed. |
| onShow | value :  any | Callback to invoke when the overlay is shown. |
| onHide | event :  Event | Callback to invoke when the overlay is hidden. |
| onClear | value :  any | Callback to invoke when input field is cleared. |
| onFilter | event :  TreeFilterEvent | Callback to invoke when data is filtered. |
| onFocus | event :  Event | Callback to invoke when treeselect gets focus. |
| onBlur | event :  Event | Callback to invoke when treeselect loses focus. |
| onNodeUnselect | event :  TreeNodeUnSelectEvent | Callback to invoke when a node is unselected. |
| onNodeSelect | event :  TreeNodeSelectEvent | Callback to invoke when a node is selected. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| value |  | Custom value template. |
| header |  | Custom header template. |
| empty |  | Custom empty message template. |
| footer |  | Custom footer template. |
| clearicon |  | Custom clear icon template. |
| triggericon |  | Custom trigger icon template. |
| dropdownicon |  | Custom dropdown icon template. |
| filtericon |  | Custom filter icon template. |
| closeicon |  | Custom close icon template. |
| itemtogglericon |  | Custom item toggler icon template. |
| itemcheckboxicon |  | Custom item checkbox icon template. |
| itemloadingicon |  | Custom item loading icon template. |

#### TreeNode {#api-treenode}

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### TreeSelect Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-treeselect | Class name of the root element |
| p-treeselect-label-container | Class name of the label container element |
| p-treeselect-label | Class name of the label element |
| p-treeselect-chip-item | Class name of the chip item element |
| p-treeselect-chip | Class name of the chip element |
| p-treeselect-dropdown | Class name of the dropdown element |
| p-treeselect-dropdown-icon | Class name of the dropdown icon element |
| p-treeselect-overlay | Class name of the panel element |
| p-treeselect-tree-container | Class name of the tree container element |
| p-treeselect-empty-message | Class name of the empty message element |

#### TreeSelect Design Tokens {#theming-treeselect-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| treeselect.root.background | treeselect.background | --p-treeselect-background | Background of root |
| treeselect.root.disabledBackground | treeselect.disabled.background | --p-treeselect-disabled-background | Disabled background of root |
| treeselect.root.filledBackground | treeselect.filled.background | --p-treeselect-filled-background | Filled background of root |
| treeselect.root.filledHoverBackground | treeselect.filled.hover.background | --p-treeselect-filled-hover-background | Filled hover background of root |
| treeselect.root.filledFocusBackground | treeselect.filled.focus.background | --p-treeselect-filled-focus-background | Filled focus background of root |
| treeselect.root.borderColor | treeselect.border.color | --p-treeselect-border-color | Border color of root |
| treeselect.root.hoverBorderColor | treeselect.hover.border.color | --p-treeselect-hover-border-color | Hover border color of root |
| treeselect.root.focusBorderColor | treeselect.focus.border.color | --p-treeselect-focus-border-color | Focus border color of root |
| treeselect.root.invalidBorderColor | treeselect.invalid.border.color | --p-treeselect-invalid-border-color | Invalid border color of root |
| treeselect.root.color | treeselect.color | --p-treeselect-color | Color of root |
| treeselect.root.disabledColor | treeselect.disabled.color | --p-treeselect-disabled-color | Disabled color of root |
| treeselect.root.placeholderColor | treeselect.placeholder.color | --p-treeselect-placeholder-color | Placeholder color of root |
| treeselect.root.invalidPlaceholderColor | treeselect.invalid.placeholder.color | --p-treeselect-invalid-placeholder-color | Invalid placeholder color of root |
| treeselect.root.shadow | treeselect.shadow | --p-treeselect-shadow | Shadow of root |
| treeselect.root.paddingX | treeselect.padding.x | --p-treeselect-padding-x | Padding x of root |
| treeselect.root.paddingY | treeselect.padding.y | --p-treeselect-padding-y | Padding y of root |
| treeselect.root.borderRadius | treeselect.border.radius | --p-treeselect-border-radius | Border radius of root |
| treeselect.root.focusRing.width | treeselect.focus.ring.width | --p-treeselect-focus-ring-width | Focus ring width of root |
| treeselect.root.focusRing.style | treeselect.focus.ring.style | --p-treeselect-focus-ring-style | Focus ring style of root |
| treeselect.root.focusRing.color | treeselect.focus.ring.color | --p-treeselect-focus-ring-color | Focus ring color of root |
| treeselect.root.focusRing.offset | treeselect.focus.ring.offset | --p-treeselect-focus-ring-offset | Focus ring offset of root |
| treeselect.root.focusRing.shadow | treeselect.focus.ring.shadow | --p-treeselect-focus-ring-shadow | Focus ring shadow of root |
| treeselect.root.transitionDuration | treeselect.transition.duration | --p-treeselect-transition-duration | Transition duration of root |
| treeselect.root.sm.fontSize | treeselect.sm.font.size | --p-treeselect-sm-font-size | Sm font size of root |
| treeselect.root.sm.paddingX | treeselect.sm.padding.x | --p-treeselect-sm-padding-x | Sm padding x of root |
| treeselect.root.sm.paddingY | treeselect.sm.padding.y | --p-treeselect-sm-padding-y | Sm padding y of root |
| treeselect.root.lg.fontSize | treeselect.lg.font.size | --p-treeselect-lg-font-size | Lg font size of root |
| treeselect.root.lg.paddingX | treeselect.lg.padding.x | --p-treeselect-lg-padding-x | Lg padding x of root |
| treeselect.root.lg.paddingY | treeselect.lg.padding.y | --p-treeselect-lg-padding-y | Lg padding y of root |
| treeselect.dropdown.width | treeselect.dropdown.width | --p-treeselect-dropdown-width | Width of dropdown |
| treeselect.dropdown.color | treeselect.dropdown.color | --p-treeselect-dropdown-color | Color of dropdown |
| treeselect.overlay.background | treeselect.overlay.background | --p-treeselect-overlay-background | Background of overlay |
| treeselect.overlay.borderColor | treeselect.overlay.border.color | --p-treeselect-overlay-border-color | Border color of overlay |
| treeselect.overlay.borderRadius | treeselect.overlay.border.radius | --p-treeselect-overlay-border-radius | Border radius of overlay |
| treeselect.overlay.color | treeselect.overlay.color | --p-treeselect-overlay-color | Color of overlay |
| treeselect.overlay.shadow | treeselect.overlay.shadow | --p-treeselect-overlay-shadow | Shadow of overlay |
| treeselect.tree.padding | treeselect.tree.padding | --p-treeselect-tree-padding | Padding of tree |
| treeselect.clearIcon.color | treeselect.clear.icon.color | --p-treeselect-clear-icon-color | Color of clear icon |
| treeselect.emptyMessage.padding | treeselect.empty.message.padding | --p-treeselect-empty-message-padding | Padding of empty message |
| treeselect.chip.borderRadius | treeselect.chip.border.radius | --p-treeselect-chip-border-radius | Border radius of chip |

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

[View Official Documentation](https://primeng.org/treeselect)
