# Skeleton

Skeleton is a placeholder to display instead of the actual content.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { SkeletonModule } from 'primeng/skeleton';
```

### Shapes {#shapes}

Various shapes and sizes can be created using styling properties like shape, width, height, borderRadius and class.

```html
<h5>Rectangle</h5>
<p-skeleton class="mb-2" />
<p-skeleton width="10rem" class="mb-2" />
<p-skeleton width="5rem" class="mb-2" />
<p-skeleton height="2rem" class="mb-2" />
<p-skeleton width="10rem" height="4rem" />

<h5>Rounded</h5>
<p-skeleton class="mb-2" borderRadius="16px" />
<p-skeleton width="10rem" class="mb-2" borderRadius="16px" />
<p-skeleton width="5rem" class="mb-2" borderRadius="16px" />
<p-skeleton height="2rem" class="mb-2" borderRadius="16px" />
<p-skeleton width="10rem" height="4rem" borderRadius="16px" />

<h5 class="mt-4">Square</h5>
<p-skeleton size="2rem" class="mr-2" />
<p-skeleton size="3rem" class="mr-2" />
<p-skeleton size="4rem" class="mr-2" />
<p-skeleton size="5rem" />

<h5 class="mt-4">Circle</h5>
<p-skeleton shape="circle" size="2rem" class="mr-2" />
<p-skeleton shape="circle" size="3rem" class="mr-2" />
<p-skeleton shape="circle" size="4rem" class="mr-2" />
<p-skeleton shape="circle" size="5rem" />
```

### Card {#card}

Sample Card implementation using different Skeleton components and Tailwind CSS utilities.

```html
<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <div class="flex mb-4">
        <p-skeleton shape="circle" size="4rem" class="mr-2" />
        <div>
            <p-skeleton width="10rem" class="mb-2" />
            <p-skeleton width="5rem" class="mb-2" />
            <p-skeleton height=".5rem" />
        </div>
    </div>
    <p-skeleton width="100%" height="150px" />
    <div class="flex justify-between mt-4">
        <p-skeleton width="4rem" height="2rem" />
        <p-skeleton width="4rem" height="2rem" />
    </div>
</div>
```

### List {#list}

Sample List implementation using different Skeleton components and Tailwind CSS utilities.

```html
<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <ul class="m-0 p-0 list-none">
        <li class="mb-4">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" class="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" class="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" class="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" class="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" class="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" class="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
        <li>
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" class="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" class="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
    </ul>
</div>
```

### DataTable {#datatable}

Sample DataTable implementation using different Skeleton components and Tailwind CSS utilities.

```html
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td><p-skeleton /></td>
            <td><p-skeleton /></td>
            <td><p-skeleton /></td>
            <td><p-skeleton /></td>
        </tr>
    </ng-template>
</p-table>
```

### Accessibility {#accessibility}

Skeleton uses aria-hidden as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a container, you may use aria-busy on the container element as well to indicate the loading process.

### Skeleton {#skeleton}

Skeleton is a placeholder to display instead of the actual content.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Skeleton API

API defines helper props, events and others for the PrimeNG Skeleton module.

#### Skeleton {#api-skeleton}

Skeleton is a placeholder to display instead of the actual content.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Class of the element. |
| shape | string | rectangle | Shape of the element. |
| borderRadius | string | null | Border radius of the element, defaults to value from theme. |
| size | string | null | Size of the skeleton. |
| width | string | 100% | Width of the element. |
| height | string | 1rem | Height of the element. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Skeleton Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-skeleton | Class name of the root element |

#### Skeleton Design Tokens {#theming-skeleton-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| skeleton.root.borderRadius | skeleton.border.radius | --p-skeleton-border-radius | Border radius of root |
| skeleton.root.background | skeleton.background | --p-skeleton-background | Background of root |
| skeleton.root.animationBackground | skeleton.animation.background | --p-skeleton-animation-background | Animation background of root |

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

[View Official Documentation](https://primeng.org/skeleton)
