# Card

Card is a flexible container component.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { CardModule } from 'primeng/card';
```

### Basic {#basic}

A simple Card is created with a header property along with the content as children.

```html
<p-card header="Simple Card">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-card>
```

### Advanced {#advanced}

Card content can be customized further with subHeader, header and footer properties.

```html
<p-card [style]="{ width: '25rem', overflow: 'hidden' }">
    <ng-template #header>
        <img alt="Card" class="w-full" src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" />
    </ng-template>
    <ng-template #title> Advanced Card </ng-template>
    <ng-template #subtitle> Card subtitle </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
    <ng-template #footer>
        <div class="flex gap-4 mt-1">
            <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
            <p-button label="Save" class="w-full" styleClass="w-full" />
        </div>
    </ng-template>
</p-card>
```

### Accessibility {#accessibility}

A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the landmark roles like region, you may use the role property.

```html
<p-card role="region">
    Content
</p-card>
```

### Card {#card}

Card is a flexible container component.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Card API

API defines helper props, events and others for the PrimeNG Card module.

#### Card {#api-card}

Card is a flexible container component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| header | string | null | Header of the card. |
| subheader | string | null | Subheader of the card. |
| style | - | null | Inline style of the element. |
| styleClass | string | null | Class of the element. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Card Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-card | Class name of the root element |
| p-card-header | Class name of the header element |
| p-card-body | Class name of the body element |
| p-card-caption | Class name of the caption element |
| p-card-title | Class name of the title element |
| p-card-subtitle | Class name of the subtitle element |
| p-card-content | Class name of the content element |
| p-card-footer | Class name of the footer element |

#### Card Design Tokens {#theming-card-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| card.root.background | card.background | --p-card-background | Background of root |
| card.root.borderRadius | card.border.radius | --p-card-border-radius | Border radius of root |
| card.root.color | card.color | --p-card-color | Color of root |
| card.root.shadow | card.shadow | --p-card-shadow | Shadow of root |
| card.body.padding | card.body.padding | --p-card-body-padding | Padding of body |
| card.body.gap | card.body.gap | --p-card-body-gap | Gap of body |
| card.caption.gap | card.caption.gap | --p-card-caption-gap | Gap of caption |
| card.title.fontSize | card.title.font.size | --p-card-title-font-size | Font size of title |
| card.title.fontWeight | card.title.font.weight | --p-card-title-font-weight | Font weight of title |
| card.subtitle.color | card.subtitle.color | --p-card-subtitle-color | Color of subtitle |

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

[View Official Documentation](https://primeng.org/card)
