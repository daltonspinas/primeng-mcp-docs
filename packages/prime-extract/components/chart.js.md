# Charts

Chart components are based on Charts.js 3.3.2+, an open source HTML5 based charting library.

## Table of Contents

- [Features](#features)
- [API](#api)

## Features {#features}

### Import {#import}

```typescript
import { ChartModule } from 'primeng/chart';
```

### Chart.js {#chart-js}

To begin with, first you must install the charts.js package using npm and then include it in your project. An example with CLI would be;

```text
npm install chart.js --save
```

### Basic {#basic}

A chart is configured with 3 properties; type, data and options. Chart type is defined using the type property that accepts pie, doughtnut, line, bar, radar and polarArea as a value. The data defines datasets represented with the chart and the options provide numerous customization options to customize the presentation.

```html
<p-chart type="bar" [data]="basicData" [options]="basicOptions" />
```

### Pie {#pie}

A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.

```html
<p-chart type="pie" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
```

### Doughnut {#doughnut}

A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.

```html
<p-chart type="doughnut" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
```

### Vertical Bar {#vertical-bar}

A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.

```html
<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
```

### Horizontal Bar {#horizontal-bar}

A bar chart is rendered horizontally when indexAxis option is set as y.

```html
<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
```

### Stacked Bar {#stacked-bar}

Bars can be stacked on top of each other when stacked option of a scale is enabled.

```html
<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
```

### Line {#line}

A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.

```html
<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
```

### MultiAxis {#multiaxis}

Multiple axes can be added using the scales option.

```html
<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
```

### Line Styles {#line-styles}

Various styles of a line series can be customized to display customizations like an area chart.

```html
<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
```

### Polar Area {#polar-area}

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

```html
<p-chart type="polarArea" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
```

### Radar {#radar}

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.

```html
<p-chart type="radar" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
```

### Combo {#combo}

Different chart types can be combined in the same graph using the type option of a dataset.

```html
<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
```

### Accessibility {#accessibility}

Chart components internally use canvas element, refer to the Chart.js accessibility guide for more information.

```html
<p-chart type="line" [data]="data" ariaLabel="Data" />
```

### Chart {#chart}

[↑ Back to Top](#table-of-contents)

## API {#api}

### Charts API

API defines helper props, events and others for the PrimeNG Charts module.

#### Chart {#api-chart}

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)

[View Official Documentation](https://primeng.org/chart)
