# DatePicker

DatePicker is an input component to select a date.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { DatePickerModule } from 'primeng/datepicker';
```

### Basic {#basic}

Two-way value binding is defined using the standard ngModel directive referencing to a Date property.

```html
<p-datepicker [(ngModel)]="date" />
```

### Format {#format}

Default date format is mm/dd/yy which can be customized using the dateFormat property. Following options can be a part of the format.

```html
<p-datepicker [(ngModel)]="date" dateFormat="dd.mm.yy" />
```

### Locale {#locale}

Locale for different languages and formats is defined globally, refer to the PrimeNG Locale configuration for more information.

### Icon {#icon}

An additional icon is displayed next to the input field when showIcon is present.

```html
<p-datepicker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />

<p-datepicker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />

<p-datepicker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
    <ng-template #inputicon let-clickCallBack="clickCallBack">
        <i class="pi pi-clock" (click)="clickCallBack($event)"></i>
    </ng-template>
</p-datepicker>
```

### Min / Max {#min-max}

Boundaries for the permitted dates that can be entered are defined with minDate and maxDate properties.

```html
<p-datepicker [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true" />
```

### Multiple {#multiple}

In order to choose multiple dates, set selectionMode as multiple. In this mode, the value binding should be an array.

```html
<p-datepicker [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true" />
```

### Range {#range}

A range of dates can be selected by defining selectionMode as range, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.

```html
<p-datepicker [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true" />
```

### Button Bar {#button-bar}

When showButtonBar is present, today and clear buttons are displayed at the footer.

```html
<p-datepicker [(ngModel)]="date" [showButtonBar]="true" />
```

### Time {#time}

A time picker is displayed when showTime is enabled where 12/24 hour format is configured with hourFormat property. In case, only time needs to be selected, add timeOnly to hide the date section.

```html
<p-datepicker inputId="calendar-12h" [(ngModel)]="datetime12h" [showTime]="true" [hourFormat]="12" />

<p-datepicker inputId="calendar-24h" [(ngModel)]="datetime24h" [showTime]="true" [hourFormat]="24" />

<p-datepicker inputId="calendar-timeonly" [(ngModel)]="time" [timeOnly]="true" />
```

### Month Picker {#month-picker}

Month only picker is enabled by specifying view as month in addition to a suitable dateFormat.

```html
<p-datepicker [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true" />
```

### Year Picker {#year-picker}

Specifying view as year in addition to a suitable dateFormat enables the year picker.

```html
<p-datepicker [(ngModel)]="date" view="year" dateFormat="yy" />
```

### Multiple Months {#multiple-months}

Number of months to display is configured with the numberOfMonths property.

```html
<p-datepicker [(ngModel)]="date" [numberOfMonths]="2" />
```

### Date Template {#date-template}

Custom content can be placed inside date cells with the ng-template property that takes a Date as a parameter.

```html
<p-datepicker [(ngModel)]="date">
    <ng-template #date let-date>
        <strong *ngIf="date.day > 10 && date.day < 15; else elseBlock" style="text-decoration: line-through">{{ date.day }}</strong>
        <ng-template #elseBlock>{{ date.day }}</ng-template>
    </ng-template>
</p-datepicker>
```

### Inline {#inline}

DatePicker is displayed as a popup by default, add inline property to customize this behavior.

```html
<p-datepicker class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true" />
```

### Float Label {#float-label}

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-datepicker [(ngModel)]="value1" inputId="over_label" showIcon iconDisplay="input" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-datepicker [(ngModel)]="value2" inputId="in_label" showIcon iconDisplay="input" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-datepicker [(ngModel)]="value3" inputId="on_label" showIcon iconDisplay="input" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label {#ifta-label}

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-datepicker [(ngModel)]="value" inputId="date" showIcon iconDisplay="input" />
    <label for="date">Date</label>
</p-iftalabel>
```

### Sizes {#sizes}

DatePicker provides small and large sizes as alternatives to the base.

```html
<p-datepicker [(ngModel)]="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value2" placeholder="Normal" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />
```

### Filled {#filled}

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-datepicker [(ngModel)]="date" variant="filled" />
```

### Disabled {#disabled}

When disabled is present, the element cannot be edited and focused.

```html
<p-datepicker [(ngModel)]="date" [disabled]="true" />
```

### Invalid {#invalid}

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-datepicker [(ngModel)]="date1" [invalid]="!date1" placeholder="Date" />
<p-datepicker [(ngModel)]="date2" [invalid]="!date2" variant="filled" placeholder="Date" />
```

### Forms {#forms}

DatePicker can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-datepicker name="date" [invalid]="dateModel.invalid && (dateModel.touched || exampleForm.submitted)" #dateModel="ngModel" [(ngModel)]="date" required />
        @if (dateModel.invalid && (dateModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-datepicker formControlName="selectedDate" [invalid]="isInvalid('selectedDate')" />
        @if (isInvalid('selectedDate')) {
            <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility {#accessibility}

Value to describe the component can either be provided via label tag combined with inputId prop or using aria-labelledby, aria-label props. The input element has combobox role in addition to aria-autocomplete as "none", aria-haspopup as "dialog" and aria-expanded attributes. The relation between the input and the popup is created with aria-controls attribute that refers to the id of the popup.

```html
<label for="date1">Date</label>
<p-datepicker inputId="date1"/>

<span id="date2">Date</span>
<p-datepicker ariaLabelledBy="date2"/>

<p-datepicker ariaLabel="Date"/>
```

### DatePicker {#datepicker}

DatePicker is a form component to work with dates.

[↑ Back to Top](#table-of-contents)

## API {#api}

### DatePicker API

API defines helper props, events and others for the PrimeNG DatePicker module.

#### DatePicker {#api-datepicker}

DatePicker is a form component to work with dates.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| fluid | InputSignalWithTransform<boolean, unknown> | false | Spans 100% width of the container when enabled. |
| variant | InputSignal<"outlined" | "filled"> | 'outlined' | Specifies the input variant of the component. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| inputSize | InputSignal<number> | undefined | Specifies the visible width of the input element in characters. |
| pattern | InputSignal<string> | undefined | Specifies the value must match the pattern. |
| min | InputSignal<number> | undefined | The value must be greater than or equal to the value. |
| max | InputSignal<number> | undefined | The value must be less than or equal to the value. |
| step | InputSignal<number> | undefined | Unless the step is set to the any literal, the value must be min + an integral multiple of the step. |
| minlength | InputSignal<number> | undefined | The number of characters (code points) must not be less than the value of the attribute, if non-empty. |
| maxlength | InputSignal<number> | undefined | The number of characters (code points) must not exceed the value of the attribute. |
| styleClass | string | null | Style class of the component. |
| inputStyle | { [klass: string]: any } | null | Inline style of the input field. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| inputStyleClass | string | null | Style class of the input field. |
| placeholder | string | null | Placeholder text for the input. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| iconAriaLabel | string | null | Defines a string that labels the icon button for accessibility. |
| dateFormat | string | null | Format of the date which can also be defined at locale settings. |
| multipleSeparator | string | , | Separator for multiple selection mode. |
| rangeSeparator | string | - | Separator for joining start and end dates on range selection mode. |
| inline | boolean | false | When enabled, displays the datepicker as inline. Default is false for popup mode. |
| showOtherMonths | boolean | true | Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option. |
| selectOtherMonths | boolean | false | Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true. |
| showIcon | boolean | false | When enabled, displays a button with icon next to input. |
| icon | string | null | Icon of the datepicker button. |
| readonlyInput | boolean | false | When specified, prevents entering the date manually with keyboard. |
| shortYearCutoff | any | +10 | The cutoff year for determining the century for a date. |
| hourFormat | string | null | Specifies 12 or 24 hour format. |
| timeOnly | boolean | false | Whether to display timepicker only. |
| stepHour | number | 1 | Hours to change per step. |
| stepMinute | number | 1 | Minutes to change per step. |
| stepSecond | number | 1 | Seconds to change per step. |
| showSeconds | boolean | false | Whether to show the seconds in time picker. |
| showOnFocus | boolean | true | When disabled, datepicker will not be visible with input focus. |
| showWeek | boolean | false | When enabled, datepicker will show week numbers. |
| startWeekFromFirstDayOfYear | boolean | false | When enabled, datepicker will start week numbers from first day of the year. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| dataType | string | date | Type of the value to write back to ngModel, default is date and alternative is string. |
| selectionMode | "single" | "multiple" | "range" | single | Defines the quantity of the selection, valid values are "single", "multiple" and "range". |
| maxDateCount | number | null | Maximum number of selectable dates in multiple mode. |
| showButtonBar | boolean | false | Whether to display today and clear buttons at the footer |
| todayButtonStyleClass | string | null | Style class of the today button. |
| clearButtonStyleClass | string | null | Style class of the clear button. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| panelStyleClass | string | null | Style class of the datetimepicker container element. |
| panelStyle | any | null | Inline style of the datetimepicker container element. |
| keepInvalid | boolean | false | Keep invalid value when input blur. |
| hideOnDateTimeSelect | boolean | true | Whether to hide the overlay on date selection. |
| touchUI | boolean | false | When enabled, datepicker overlay is displayed as optimized for touch devices. |
| timeSeparator | string | : | Separator of time selector. |
| focusTrap | boolean | true | When enabled, can only focus on elements inside the datepicker. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| tabindex | number | null | Index of the element in tabbing order. |
| minDate | Date | null | The minimum selectable date. |
| maxDate | Date | null | The maximum selectable date. |
| disabledDates | Date[] | null | Array with dates that should be disabled (not selectable). |
| disabledDays | number[] | null | Array with weekday numbers that should be disabled (not selectable). |
| showTime | boolean | null | Whether to display timepicker. |
| responsiveOptions | DatePickerResponsiveOptions[] | null | An array of options for responsive design. |
| numberOfMonths | number | null | Number of months to display. |
| firstDayOfWeek | number | null | Defines the first of the week for various date calculations. |
| view | DatePickerTypeView | null | Type of view to display, valid values are "date" for datepicker and "month" for month picker. |
| defaultDate | Date | null | Set the date to highlight on first opening if the field is blank. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onFocus | event :  Event | Callback to invoke on focus of input field. |
| onBlur | event :  Event | Callback to invoke on blur of input field. |
| onClose | event :  AnimationEvent | Callback to invoke when date panel closed. |
| onSelect | value :  Date | Callback to invoke on date select. |
| onClear | value :  any | Callback to invoke when input field cleared. |
| onInput | value :  any | Callback to invoke when input field is being typed. |
| onTodayClick | value :  Date | Callback to invoke when today button is clicked. |
| onClearClick | value :  any | Callback to invoke when clear button is clicked. |
| onMonthChange | event :  DatePickerMonthChangeEvent | Callback to invoke when a month is changed using the navigators. |
| onYearChange | event :  DatePickerYearChangeEvent | Callback to invoke when a year is changed using the navigators. |
| onClickOutside | value :  any | Callback to invoke when clicked outside of the date panel. |
| onShow | value :  any | Callback to invoke when datepicker panel is shown. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| date |  | Custom template for date cells. |
| header |  | Custom template for header section. |
| footer |  | Custom template for footer section. |
| disableddate |  | Custom template for disabled date cells. |
| decade |  | Custom template for decade view. |
| previousicon |  | Custom template for previous month icon. |
| nexticon |  | Custom template for next month icon. |
| triggericon |  | Custom template for trigger icon. |
| clearicon |  | Custom template for clear icon. |
| decrementicon |  | Custom template for decrement icon. |
| incrementicon |  | Custom template for increment icon. |
| inputicon |  | Custom template for input icon. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### DatePicker Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-datepicker | Class name of the root element |
| p-datepicker-input | Class name of the input element |
| p-datepicker-dropdown | Class name of the dropdown element |
| p-datepicker-input-icon-container | Class name of the input icon container element |
| p-datepicker-input-icon | Class name of the input icon element |
| p-datepicker-panel | Class name of the panel element |
| p-datepicker-calendar-container | Class name of the calendar container element |
| p-datepicker-calendar | Class name of the calendar element |
| p-datepicker-header | Class name of the header element |
| p-datepicker-prev-button | Class name of the previous button element |
| p-datepicker-title | Class name of the title element |
| p-datepicker-select-month | Class name of the select month element |
| p-datepicker-select-year | Class name of the select year element |
| p-datepicker-decade | Class name of the decade element |
| p-datepicker-next-button | Class name of the next button element |
| p-datepicker-day-view | Class name of the day view element |
| p-datepicker-weekheader | Class name of the week header element |
| p-datepicker-weeknumber | Class name of the week number element |
| p-datepicker-weeklabel-container | Class name of the week label container element |
| p-datepicker-weekday-cell | Class name of the week day cell element |
| p-datepicker-weekday | Class name of the week day element |
| p-datepicker-day-cell | Class name of the day cell element |
| p-datepicker-day | Class name of the day element |
| p-datepicker-month-view | Class name of the month view element |
| p-datepicker-month | Class name of the month element |
| p-datepicker-year-view | Class name of the year view element |
| p-datepicker-year | Class name of the year element |
| p-datepicker-time-picker | Class name of the time picker element |
| p-datepicker-hour-picker | Class name of the hour picker element |
| p-datepicker-increment-button | Class name of the increment button element |
| p-datepicker-decrement-button | Class name of the decrement button element |
| p-datepicker-separator | Class name of the separator element |
| p-datepicker-minute-picker | Class name of the minute picker element |
| p-datepicker-second-picker | Class name of the second picker element |
| p-datepicker-ampm-picker | Class name of the ampm picker element |
| p-datepicker-buttonbar | Class name of the buttonbar element |
| p-datepicker-today-button | Class name of the today button element |
| p-datepicker-clear-button | Class name of the clear button element |
| p-datepicker-clear-icon | Class name of the clear icon |

#### DatePicker Design Tokens {#theming-datepicker-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| datepicker.root.transitionDuration | datepicker.transition.duration | --p-datepicker-transition-duration | Transition duration of root |
| datepicker.panel.background | datepicker.panel.background | --p-datepicker-panel-background | Background of panel |
| datepicker.panel.borderColor | datepicker.panel.border.color | --p-datepicker-panel-border-color | Border color of panel |
| datepicker.panel.color | datepicker.panel.color | --p-datepicker-panel-color | Color of panel |
| datepicker.panel.borderRadius | datepicker.panel.border.radius | --p-datepicker-panel-border-radius | Border radius of panel |
| datepicker.panel.shadow | datepicker.panel.shadow | --p-datepicker-panel-shadow | Shadow of panel |
| datepicker.panel.padding | datepicker.panel.padding | --p-datepicker-panel-padding | Padding of panel |
| datepicker.header.background | datepicker.header.background | --p-datepicker-header-background | Background of header |
| datepicker.header.borderColor | datepicker.header.border.color | --p-datepicker-header-border-color | Border color of header |
| datepicker.header.color | datepicker.header.color | --p-datepicker-header-color | Color of header |
| datepicker.header.padding | datepicker.header.padding | --p-datepicker-header-padding | Padding of header |
| datepicker.title.gap | datepicker.title.gap | --p-datepicker-title-gap | Gap of title |
| datepicker.title.fontWeight | datepicker.title.font.weight | --p-datepicker-title-font-weight | Font weight of title |
| datepicker.dropdown.width | datepicker.dropdown.width | --p-datepicker-dropdown-width | Width of dropdown |
| datepicker.dropdown.sm.width | datepicker.dropdown.sm.width | --p-datepicker-dropdown-sm-width | Sm width of dropdown |
| datepicker.dropdown.lg.width | datepicker.dropdown.lg.width | --p-datepicker-dropdown-lg-width | Lg width of dropdown |
| datepicker.dropdown.borderColor | datepicker.dropdown.border.color | --p-datepicker-dropdown-border-color | Border color of dropdown |
| datepicker.dropdown.hoverBorderColor | datepicker.dropdown.hover.border.color | --p-datepicker-dropdown-hover-border-color | Hover border color of dropdown |
| datepicker.dropdown.activeBorderColor | datepicker.dropdown.active.border.color | --p-datepicker-dropdown-active-border-color | Active border color of dropdown |
| datepicker.dropdown.borderRadius | datepicker.dropdown.border.radius | --p-datepicker-dropdown-border-radius | Border radius of dropdown |
| datepicker.dropdown.focusRing.width | datepicker.dropdown.focus.ring.width | --p-datepicker-dropdown-focus-ring-width | Focus ring width of dropdown |
| datepicker.dropdown.focusRing.style | datepicker.dropdown.focus.ring.style | --p-datepicker-dropdown-focus-ring-style | Focus ring style of dropdown |
| datepicker.dropdown.focusRing.color | datepicker.dropdown.focus.ring.color | --p-datepicker-dropdown-focus-ring-color | Focus ring color of dropdown |
| datepicker.dropdown.focusRing.offset | datepicker.dropdown.focus.ring.offset | --p-datepicker-dropdown-focus-ring-offset | Focus ring offset of dropdown |
| datepicker.dropdown.focusRing.shadow | datepicker.dropdown.focus.ring.shadow | --p-datepicker-dropdown-focus-ring-shadow | Focus ring shadow of dropdown |
| datepicker.dropdown.background | datepicker.dropdown.background | --p-datepicker-dropdown-background | Background of dropdown |
| datepicker.dropdown.hoverBackground | datepicker.dropdown.hover.background | --p-datepicker-dropdown-hover-background | Hover background of dropdown |
| datepicker.dropdown.activeBackground | datepicker.dropdown.active.background | --p-datepicker-dropdown-active-background | Active background of dropdown |
| datepicker.dropdown.color | datepicker.dropdown.color | --p-datepicker-dropdown-color | Color of dropdown |
| datepicker.dropdown.hoverColor | datepicker.dropdown.hover.color | --p-datepicker-dropdown-hover-color | Hover color of dropdown |
| datepicker.dropdown.activeColor | datepicker.dropdown.active.color | --p-datepicker-dropdown-active-color | Active color of dropdown |
| datepicker.inputIcon.color | datepicker.input.icon.color | --p-datepicker-input-icon-color | Color of input icon |
| datepicker.selectMonth.hoverBackground | datepicker.select.month.hover.background | --p-datepicker-select-month-hover-background | Hover background of select month |
| datepicker.selectMonth.color | datepicker.select.month.color | --p-datepicker-select-month-color | Color of select month |
| datepicker.selectMonth.hoverColor | datepicker.select.month.hover.color | --p-datepicker-select-month-hover-color | Hover color of select month |
| datepicker.selectMonth.padding | datepicker.select.month.padding | --p-datepicker-select-month-padding | Padding of select month |
| datepicker.selectMonth.borderRadius | datepicker.select.month.border.radius | --p-datepicker-select-month-border-radius | Border radius of select month |
| datepicker.selectYear.hoverBackground | datepicker.select.year.hover.background | --p-datepicker-select-year-hover-background | Hover background of select year |
| datepicker.selectYear.color | datepicker.select.year.color | --p-datepicker-select-year-color | Color of select year |
| datepicker.selectYear.hoverColor | datepicker.select.year.hover.color | --p-datepicker-select-year-hover-color | Hover color of select year |
| datepicker.selectYear.padding | datepicker.select.year.padding | --p-datepicker-select-year-padding | Padding of select year |
| datepicker.selectYear.borderRadius | datepicker.select.year.border.radius | --p-datepicker-select-year-border-radius | Border radius of select year |
| datepicker.group.borderColor | datepicker.group.border.color | --p-datepicker-group-border-color | Border color of group |
| datepicker.group.gap | datepicker.group.gap | --p-datepicker-group-gap | Gap of group |
| datepicker.dayView.margin | datepicker.day.view.margin | --p-datepicker-day-view-margin | Margin of day view |
| datepicker.weekDay.padding | datepicker.week.day.padding | --p-datepicker-week-day-padding | Padding of week day |
| datepicker.weekDay.fontWeight | datepicker.week.day.font.weight | --p-datepicker-week-day-font-weight | Font weight of week day |
| datepicker.weekDay.color | datepicker.week.day.color | --p-datepicker-week-day-color | Color of week day |
| datepicker.date.hoverBackground | datepicker.date.hover.background | --p-datepicker-date-hover-background | Hover background of date |
| datepicker.date.selectedBackground | datepicker.date.selected.background | --p-datepicker-date-selected-background | Selected background of date |
| datepicker.date.rangeSelectedBackground | datepicker.date.range.selected.background | --p-datepicker-date-range-selected-background | Range selected background of date |
| datepicker.date.color | datepicker.date.color | --p-datepicker-date-color | Color of date |
| datepicker.date.hoverColor | datepicker.date.hover.color | --p-datepicker-date-hover-color | Hover color of date |
| datepicker.date.selectedColor | datepicker.date.selected.color | --p-datepicker-date-selected-color | Selected color of date |
| datepicker.date.rangeSelectedColor | datepicker.date.range.selected.color | --p-datepicker-date-range-selected-color | Range selected color of date |
| datepicker.date.width | datepicker.date.width | --p-datepicker-date-width | Width of date |
| datepicker.date.height | datepicker.date.height | --p-datepicker-date-height | Height of date |
| datepicker.date.borderRadius | datepicker.date.border.radius | --p-datepicker-date-border-radius | Border radius of date |
| datepicker.date.padding | datepicker.date.padding | --p-datepicker-date-padding | Padding of date |
| datepicker.date.focusRing.width | datepicker.date.focus.ring.width | --p-datepicker-date-focus-ring-width | Focus ring width of date |
| datepicker.date.focusRing.style | datepicker.date.focus.ring.style | --p-datepicker-date-focus-ring-style | Focus ring style of date |
| datepicker.date.focusRing.color | datepicker.date.focus.ring.color | --p-datepicker-date-focus-ring-color | Focus ring color of date |
| datepicker.date.focusRing.offset | datepicker.date.focus.ring.offset | --p-datepicker-date-focus-ring-offset | Focus ring offset of date |
| datepicker.date.focusRing.shadow | datepicker.date.focus.ring.shadow | --p-datepicker-date-focus-ring-shadow | Focus ring shadow of date |
| datepicker.monthView.margin | datepicker.month.view.margin | --p-datepicker-month-view-margin | Margin of month view |
| datepicker.month.padding | datepicker.month.padding | --p-datepicker-month-padding | Padding of month |
| datepicker.month.borderRadius | datepicker.month.border.radius | --p-datepicker-month-border-radius | Border radius of month |
| datepicker.yearView.margin | datepicker.year.view.margin | --p-datepicker-year-view-margin | Margin of year view |
| datepicker.year.padding | datepicker.year.padding | --p-datepicker-year-padding | Padding of year |
| datepicker.year.borderRadius | datepicker.year.border.radius | --p-datepicker-year-border-radius | Border radius of year |
| datepicker.buttonbar.padding | datepicker.buttonbar.padding | --p-datepicker-buttonbar-padding | Padding of buttonbar |
| datepicker.buttonbar.borderColor | datepicker.buttonbar.border.color | --p-datepicker-buttonbar-border-color | Border color of buttonbar |
| datepicker.timePicker.padding | datepicker.time.picker.padding | --p-datepicker-time-picker-padding | Padding of time picker |
| datepicker.timePicker.borderColor | datepicker.time.picker.border.color | --p-datepicker-time-picker-border-color | Border color of time picker |
| datepicker.timePicker.gap | datepicker.time.picker.gap | --p-datepicker-time-picker-gap | Gap of time picker |
| datepicker.timePicker.buttonGap | datepicker.time.picker.button.gap | --p-datepicker-time-picker-button-gap | Button gap of time picker |
| datepicker.today.background | datepicker.today.background | --p-datepicker-today-background | Background of today |
| datepicker.today.color | datepicker.today.color | --p-datepicker-today-color | Color of today |

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

[View Official Documentation](https://primeng.org/datepicker)
