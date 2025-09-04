# MeterGroup

MeterGroup displays scalar measurements within a known range.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { MeterGroupModule } from 'primeng/metergroup';
```

### Basic {#basic}

MeterGroup requires a value as the data to display where each item in the collection should be a type of MeterItem.

```html
<p-metergroup [value]="value" />
```

### Multiple {#multiple}

Adding more items to the array displays the meters in a group.

```html
<p-metergroup [value]="value" />
```

### Icon {#icon}

Icons can be displayed next to the labels instead of the default marker.

```html
<p-metergroup [value]="value" />
```

### Label {#label}

The position of the labels relative to the meters is defined using the labelPosition property. The default orientation of the labels is horizontal, and the vertical alternative is available through the labelOrientation option.

```html
<p-metergroup [value]="value" labelPosition="start" labelOrientation="vertical" />
```

### Vertical {#vertical}

Layout of the MeterGroup is configured with the orientation property that accepts either horizontal or vertical as available options.

```html
<p-metergroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }" />
```

### Min Max {#min-max}

Boundaries are configured with the min and max values whose defaults are 0 and 100 respectively.

```html
<p-metergroup [value]="value" [max]="200" />
```

### Template {#template}

MeterGroup provides templating support for labels, meter items, and content around the meters.

```html
<p-metergroup [value]="value" labelPosition="start">
    <ng-template #label>
        <div class="flex flex-wrap gap-4">
            <ng-container *ngFor="let meterItem of value; let index = index">
                <p-card class="flex-1" styleClass="border border-surface shadow-none">
                    <div class="flex justify-between gap-8">
                        <div class="flex flex-col gap-1">
                            <span class="text-surface-500 dark:text-surface-400 text-sm">{{ meterItem.label }}</span>
                            <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                        </div>
                        <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                            <i [class]="meterItem.icon"></i>
                        </span>
                    </div>
                </p-card>
            </ng-container>
        </div>
    </ng-template>
    <ng-template #meter let-value let-class="class" let-width="size">
        <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
    </ng-template>
    <ng-template #start let-totalPercent="totalPercent">
        <div class="flex justify-between mt-4 mb-2 relative">
            <span>Storage</span>
            <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
            <span class="font-medium">1TB</span>
        </div>
    </ng-template>
    <ng-template #end>
        <div class="flex justify-between mt-4">
            <p-button label="Manage Storage" [outlined]="true" size="small" />
            <p-button label="Update Plan" size="small" />
        </div>
    </ng-template>
</p-metergroup>
```

### Accessibility {#accessibility}

MeterGroup component uses meter role in addition to the aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby prop.

### MeterGroup {#metergroup}

MeterGroup displays scalar measurements within a known range.

[↑ Back to Top](#table-of-contents)

## API {#api}

### MeterGroup API

API defines helper props, events and others for the PrimeNG MeterGroup module.

#### MeterGroup {#api-metergroup}

MeterGroup displays scalar measurements within a known range.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | MeterItem[] | null | Current value of the metergroup. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| orientation | "vertical" | "horizontal" | horizontal | Specifies the layout of the component, valid values are 'horizontal' and 'vertical'. |
| labelPosition | "end" | "start" | end | Specifies the label position of the component, valid values are 'start' and 'end'. |
| labelOrientation | "vertical" | "horizontal" | horizontal | Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'. |
| styleClass | string | null | Style class of the element. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### MeterGroup Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-metergroup | Class name of the root element |
| p-metergroup-meters | Class name of the meters element |
| p-metergroup-meter | Class name of the meter element |
| p-metergroup-label-list | Class name of the label list element |
| p-metergroup-label | Class name of the label element |
| p-metergroup-label-icon | Class name of the label icon element |
| p-metergroup-label-marker | Class name of the label marker element |
| p-metergroup-label-text | Class name of the label text element |

#### MeterGroup Design Tokens {#theming-metergroup-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| metergroup.root.borderRadius | metergroup.border.radius | --p-metergroup-border-radius | Border radius of root |
| metergroup.root.gap | metergroup.gap | --p-metergroup-gap | Gap of root |
| metergroup.meters.background | metergroup.meters.background | --p-metergroup-meters-background | Background of meters |
| metergroup.meters.size | metergroup.meters.size | --p-metergroup-meters-size | Size of meters |
| metergroup.label.gap | metergroup.label.gap | --p-metergroup-label-gap | Gap of label |
| metergroup.labelMarker.size | metergroup.label.marker.size | --p-metergroup-label-marker-size | Size of label marker |
| metergroup.labelIcon.size | metergroup.label.icon.size | --p-metergroup-label-icon-size | Size of label icon |
| metergroup.labelList.verticalGap | metergroup.label.list.vertical.gap | --p-metergroup-label-list-vertical-gap | Vertical gap of label list |
| metergroup.labelList.horizontalGap | metergroup.label.list.horizontal.gap | --p-metergroup-label-list-horizontal-gap | Horizontal gap of label list |

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

[View Official Documentation](https://primeng.org/metergroup)
