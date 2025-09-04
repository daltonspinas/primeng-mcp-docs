# Paginator

Paginator displays data in paged format and provides navigation between pages.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { PaginatorModule } from 'primeng/paginator';
```

### Basic {#basic}

Paginator is used as a controlled component with first, rows and onPageChange properties to manage the first index and number of records to display per page. Total number of records need to be with totalRecords property. Default template includes a dropdown to change the rows so rowsPerPageOptions is also necessary for the dropdown options.

```html
<p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />
```

### Template {#template}

Templating allows overriding the default content of the UI elements by defining callbacks using the element name.

```html
<div class="flex items-center justify-center">
    <div>
        <p-button icon="pi pi-star" outlined />
    </div>
    <div class="flex-1">
        <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false" />
    </div>
    <div class="justify-end">
        <p-button icon="pi pi-search" />
    </div>
</div>

<div class="flex items-center justify-end">
    <span class="mx-1 text-color">Items per page: </span>
    <p-select [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0" />
    <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false" ></p-paginator>
</div>

<div class="flex items-center justify-start">
    <div class="flex justify-center items-center gap-4">
        <span>Items per page: </span>
        <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30" />
    </div>
    <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords" [showFirstLastIcon]="false"
        [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}" ></p-paginator>
</div>
```

### Current Page Report {#current-page-report}

Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following;

```html
<p-paginator
    (onPageChange)="onPageChange($event)"
    [first]="first"
    [rows]="rows"
    [totalRecords]="120"
    [showCurrentPageReport]="true"
    [showPageLinks]="false"
    [showJumpToPageDropdown]="false"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
```

### Accessibility {#accessibility}

Paginator is placed inside a nav element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below.

### Paginator {#paginator}

Paginator is a generic component to display content in paged format.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Paginator API

API defines helper props, events and others for the PrimeNG Paginator module.

#### Paginator {#api-paginator}

Paginator is a generic component to display content in paged format.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| pageLinkSize | number | 5 | Number of page links to display. |
| styleClass | string | null | Style class of the component. |
| alwaysShow | boolean | true | Whether to show it even there is only one page. |
| dropdownAppendTo | any | null | Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| templateLeft | TemplateRef<PaginatorState> | null | Template instance to inject into the left side of the paginator. |
| templateRight | TemplateRef<PaginatorState> | null | Template instance to inject into the right side of the paginator. |
| dropdownScrollHeight | string | 200px | Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. |
| currentPageReportTemplate | string | {currentPage} of {totalPages} | Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords} |
| showCurrentPageReport | boolean | false | Whether to display current page report. |
| showFirstLastIcon | boolean | true | When enabled, icons are displayed on paginator to go first and last page. |
| totalRecords | number | 0 | Number of total records. |
| rows | number | 0 | Data count to display per page. |
| rowsPerPageOptions | any[] | null | Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}] |
| showJumpToPageDropdown | boolean | false | Whether to display a dropdown to navigate to any page. |
| showJumpToPageInput | boolean | false | Whether to display a input to navigate to any page. |
| jumpToPageItemTemplate | TemplateRef<{ $implicit: any }> | null | Template instance to inject into the jump to page dropdown item inside in the paginator. |
| showPageLinks | boolean | true | Whether to show page links. |
| locale | string | null | Locale to be used in formatting. |
| dropdownItemTemplate | TemplateRef<{ $implicit: any }> | null | Template instance to inject into the rows per page dropdown item inside in the paginator. |
| first | number | null | Zero-relative number of the first row to be displayed. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onPageChange | value :  PaginatorState | Callback to invoke when page changes, the event object contains information about the new state. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| dropdownicon |  | Template for the dropdown icon. |
| firstpagelinkicon |  | Template for the first page link icon. |
| previouspagelinkicon |  | Template for the previous page link icon. |
| lastpagelinkicon |  | Template for the last page link icon. |
| nextpagelinkicon |  | Template for the next page link icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Paginator Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-paginator | Class name of the paginator element |
| p-paginator-content-start | Class name of the content start element |
| p-paginator-content-end | Class name of the content end element |
| p-paginator-first | Class name of the first element |
| p-paginator-first-icon | Class name of the first icon element |
| p-paginator-prev | Class name of the prev element |
| p-paginator-prev-icon | Class name of the prev icon element |
| p-paginator-next | Class name of the next element |
| p-paginator-next-icon | Class name of the next icon element |
| p-paginator-last | Class name of the last element |
| p-paginator-last-icon | Class name of the last icon element |
| p-paginator-pages | Class name of the pages element |
| p-paginator-page | Class name of the page element |
| p-paginator-current | Class name of the current element |
| p-paginator-rpp-dropdown | Class name of the row per page dropdown element |
| p-paginator-jtp-dropdown | Class name of the jump to page dropdown element |
| p-paginator-jtp-input | Class name of the jump to page input element |

#### Paginator Design Tokens {#theming-paginator-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| paginator.root.padding | paginator.padding | --p-paginator-padding | Padding of root |
| paginator.root.gap | paginator.gap | --p-paginator-gap | Gap of root |
| paginator.root.borderRadius | paginator.border.radius | --p-paginator-border-radius | Border radius of root |
| paginator.root.background | paginator.background | --p-paginator-background | Background of root |
| paginator.root.color | paginator.color | --p-paginator-color | Color of root |
| paginator.root.transitionDuration | paginator.transition.duration | --p-paginator-transition-duration | Transition duration of root |
| paginator.navButton.background | paginator.nav.button.background | --p-paginator-nav-button-background | Background of nav button |
| paginator.navButton.hoverBackground | paginator.nav.button.hover.background | --p-paginator-nav-button-hover-background | Hover background of nav button |
| paginator.navButton.selectedBackground | paginator.nav.button.selected.background | --p-paginator-nav-button-selected-background | Selected background of nav button |
| paginator.navButton.color | paginator.nav.button.color | --p-paginator-nav-button-color | Color of nav button |
| paginator.navButton.hoverColor | paginator.nav.button.hover.color | --p-paginator-nav-button-hover-color | Hover color of nav button |
| paginator.navButton.selectedColor | paginator.nav.button.selected.color | --p-paginator-nav-button-selected-color | Selected color of nav button |
| paginator.navButton.width | paginator.nav.button.width | --p-paginator-nav-button-width | Width of nav button |
| paginator.navButton.height | paginator.nav.button.height | --p-paginator-nav-button-height | Height of nav button |
| paginator.navButton.borderRadius | paginator.nav.button.border.radius | --p-paginator-nav-button-border-radius | Border radius of nav button |
| paginator.navButton.focusRing.width | paginator.nav.button.focus.ring.width | --p-paginator-nav-button-focus-ring-width | Focus ring width of nav button |
| paginator.navButton.focusRing.style | paginator.nav.button.focus.ring.style | --p-paginator-nav-button-focus-ring-style | Focus ring style of nav button |
| paginator.navButton.focusRing.color | paginator.nav.button.focus.ring.color | --p-paginator-nav-button-focus-ring-color | Focus ring color of nav button |
| paginator.navButton.focusRing.offset | paginator.nav.button.focus.ring.offset | --p-paginator-nav-button-focus-ring-offset | Focus ring offset of nav button |
| paginator.navButton.focusRing.shadow | paginator.nav.button.focus.ring.shadow | --p-paginator-nav-button-focus-ring-shadow | Focus ring shadow of nav button |
| paginator.currentPageReport.color | paginator.current.page.report.color | --p-paginator-current-page-report-color | Color of current page report |
| paginator.jumpToPageInput.maxWidth | paginator.jump.to.page.input.max.width | --p-paginator-jump-to-page-input-max-width | Max width of jump to page input |

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

[View Official Documentation](https://primeng.org/paginator)
