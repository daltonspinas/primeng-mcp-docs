# Timeline

Timeline visualizes a series of chained events.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TimelineModule } from 'primeng/timeline';
```

### Basic {#basic}

Timeline receives the events with the value property as a collection of arbitrary objects. In addition, content template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation.

```html
<p-timeline [value]="events">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>
```

### Alignment {#alignment}

Content location relative the line is defined with the align property.

```html
<p-timeline [value]="events" class="w-full md:w-80">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="right">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="alternate">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>
```

### Opposite {#opposite}

Additional content at the other side of the line can be provided with the opposite property.

```html
<p-timeline [value]="events">
    <ng-template #opposite let-event>
        <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
    </ng-template>
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>
```

### Template {#template}

Sample implementation with custom content and styled markers.

```html
<p-timeline [value]="events" align="alternate" class="customized-timeline">
    <ng-template #marker let-event>
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
            <i [class]="event.icon"></i>
        </span>
    </ng-template>
    <ng-template #content let-event>
        <p-card [header]="event.status" [subheader]="event.date">
            <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!
            </p>
            <p-button label="Read more" [text]="true" />
        </p-card>
    </ng-template>
</p-timeline>
```

### Horizontal {#horizontal}

TimeLine orientation is controlled with the layout property, default is vertical having horizontal as the alternative.

```html
<p-timeline [value]="events" layout="horizontal" align="top">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="bottom">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="alternate">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
    <ng-template #opposite let-event>
        <span>&nbsp;</span>
    </ng-template>
</p-timeline>
```

### Accessibility {#accessibility}

Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element.

### Timeline {#timeline}

Timeline visualizes a series of chained events.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Timeline API

API defines helper props, events and others for the PrimeNG Timeline module.

#### Timeline {#api-timeline}

Timeline visualizes a series of chained events.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | any[] | null | An array of events to display. |
| styleClass | string | null | Style class of the component. |
| align | string | left | Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout. |
| layout | "vertical" | "horizontal" | vertical | Orientation of the timeline. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Custom content template. |
| opposite |  | Custom opposite item template. |
| marker |  | Custom marker template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Timeline Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-timeline | Class name of the root element |
| p-timeline-event | Class name of the event element |
| p-timeline-event-opposite | Class name of the event opposite element |
| p-timeline-event-separator | Class name of the event separator element |
| p-timeline-event-marker | Class name of the event marker element |
| p-timeline-event-connector | Class name of the event connector element |
| p-timeline-event-content | Class name of the event content element |

#### Timeline Design Tokens {#theming-timeline-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| timeline.event.minHeight | timeline.event.min.height | --p-timeline-event-min-height | Min height of event |
| timeline.horizontal.eventContent.padding | timeline.horizontal.event.content.padding | --p-timeline-horizontal-event-content-padding | Event content padding of horizontal |
| timeline.vertical.eventContent.padding | timeline.vertical.event.content.padding | --p-timeline-vertical-event-content-padding | Event content padding of vertical |
| timeline.eventMarker.size | timeline.event.marker.size | --p-timeline-event-marker-size | Size of event marker |
| timeline.eventMarker.borderRadius | timeline.event.marker.border.radius | --p-timeline-event-marker-border-radius | Border radius of event marker |
| timeline.eventMarker.borderWidth | timeline.event.marker.border.width | --p-timeline-event-marker-border-width | Border width of event marker |
| timeline.eventMarker.background | timeline.event.marker.background | --p-timeline-event-marker-background | Background of event marker |
| timeline.eventMarker.borderColor | timeline.event.marker.border.color | --p-timeline-event-marker-border-color | Border color of event marker |
| timeline.eventMarker.content.borderRadius | timeline.event.marker.content.border.radius | --p-timeline-event-marker-content-border-radius | Content border radius of event marker |
| timeline.eventMarker.content.size | timeline.event.marker.content.size | --p-timeline-event-marker-content-size | Content size of event marker |
| timeline.eventMarker.content.background | timeline.event.marker.content.background | --p-timeline-event-marker-content-background | Content background of event marker |
| timeline.eventMarker.content.insetShadow | timeline.event.marker.content.inset.shadow | --p-timeline-event-marker-content-inset-shadow | Content inset shadow of event marker |
| timeline.eventConnector.color | timeline.event.connector.color | --p-timeline-event-connector-color | Color of event connector |
| timeline.eventConnector.size | timeline.event.connector.size | --p-timeline-event-connector-size | Size of event connector |

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

[View Official Documentation](https://primeng.org/timeline)
