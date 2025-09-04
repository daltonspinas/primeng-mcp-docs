# OrganizationChart

OrganizationChart visualizes hierarchical organization data.

## Table of Contents

- [Features](#features)
- [API](#api)

## Features {#features}

### Import {#import}

```typescript
import { OrganizationChartModule } from 'primeng/organizationchart';
```

### Basic {#basic}

OrganizationChart requires a collection of TreeNode instances as a value.

```html
<p-organization-chart [value]="data" />
```

### Template {#template}

Custom content instead of a node label is defined using the pTemplate property.

```html
<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="default">
        <div class="flex flex-col items-center">
            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
            <div class="mt-4 font-medium text-lg">{{ node.label }}</div>
        </div>
    </ng-template>
</p-organization-chart>
```

### Selection {#selection}

Nodes can be selected by defining selectionMode along with a value binding with selection properties. By default only one node can be selected, set selectionMode as multiple to select more than one.

```html
<p-organization-chart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <div class="font-bold mb-2">{{ node.data.name }}</div>
                <div>{{ node.data.title }}</div>
            </div>
        </div>
    </ng-template>
</p-organization-chart>
```

### Colored {#colored}

Styling a specific node is configured with class and style options of a TreeNode.

```html
<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <span class="font-bold mb-2">{{ node.data.name }}</span>
                <span>{{ node.data.title }}</span>
            </div>
        </div>
    </ng-template>
</p-organization-chart>
```

### Accessibility {#accessibility}

Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions.

### OrganizationChart {#organizationchart}

OrganizationChart visualizes hierarchical organization data.

[↑ Back to Top](#table-of-contents)

## API {#api}

### OrganizationChart API

API defines helper props, events and others for the PrimeNG OrganizationChart module.

#### OrganizationChart {#api-organizationchart}

OrganizationChart visualizes hierarchical organization data.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | TreeNode<any>[] | null | An array of nested TreeNodes. |
| styleClass | string | null | Style class of the component. |
| selectionMode | "single" | "multiple" | null | Defines the selection mode. |
| collapsible | boolean | false | Whether the nodes can be expanded or toggled. |
| preserveSpace | boolean | true | Whether the space allocated by a node is preserved when hidden. |
| selection | any | null | A single treenode instance or an array to refer to the selections. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| selectionChange | value :  any | Callback to invoke on selection change. |
| onNodeSelect | event :  OrganizationChartNodeSelectEvent | Callback to invoke when a node is selected. |
| onNodeUnselect | event :  OrganizationChartNodeUnSelectEvent | Callback to invoke when a node is unselected. |
| onNodeExpand | event :  OrganizationChartNodeExpandEvent | Callback to invoke when a node is expanded. |
| onNodeCollapse | event :  OrganizationChartNodeCollapseEvent | Callback to invoke when a node is collapsed. |

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)

[View Official Documentation](https://primeng.org/organizationchart)
