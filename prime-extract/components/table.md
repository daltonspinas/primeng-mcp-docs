# Table

Table displays data in tabular format.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TableModule } from 'primeng/table';
```

### Basic {#basic}

DataTable requires a collection to display along with column components for the representation of the data.

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
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>
```

### Dynamic Columns {#dynamic-columns}

Columns can be defined dynamically using the *ngFor directive.

```html
<p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>
```

### Template {#template}

Custom content at header, body and footer sections are supported via templating.

```html
<p-table [value]="products" [tableStyle]="{ 'min-width': '60rem' }">
    <ng-template #caption>
        <div class="flex items-center justify-between">
            <span class="text-xl font-bold">Products</span>
            <p-button icon="pi pi-refresh" rounded raised />
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Reviews</th>
            <th>Status</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.name }}</td>
            <td>
                <img
                    [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                    [alt]="product.name"
                    class="w-24 rounded"
                />
            </td>
            <td>{{ product.price | currency: 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td><p-rating [(ngModel)]="product.rating" [readonly]="true" [cancel]="false" /></td>
            <td>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
            </td>
        </tr>
    </ng-template>
    <ng-template #footer>
        <tr>
            <td colspan="6">In total there are {{ products ? products.length : 0 }} products.</td>
        </tr>
    </ng-template>
</p-table>
```

### Size {#size}

In addition to a regular table, alternatives with alternative sizes are available.

```html
<div class="flex justify-center mb-4">
    <p-selectbutton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="value" />
</div>
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [size]="selectedSize">
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
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>
```

### Grid Lines {#grid-lines}

Enabling showGridlines displays borders between cells.

```html
<p-table
    [value]="products"
    showGridlines
    [tableStyle]="{ 'min-width': '50rem' }">
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
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
</p-table>
```

### Striped Rows {#striped-rows}

Alternating rows are displayed when stripedRows property is present.

```html
<p-table [value]="products" stripedRows [tableStyle]="{'min-width': '50rem'}">
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
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>
```

### Conditional Style {#conditional-style}

Certain rows or cells can easily be styled based on conditions.

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
        <tr [ngClass]="rowClass(product)" [ngStyle]="rowStyle(product)">
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>
                <p-badge [value]="product.quantity" [severity]="stockSeverity(product)" />
            </td>
        </tr>
    </ng-template>
</p-table>
```

### Pagination {#pagination}

Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page.

```html
<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [tableStyle]="{ 'min-width': '50rem' }"
    [rowsPerPageOptions]="[5, 10, 20]"
>
    <ng-template #header>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
</p-table>
```

```html
<div class="mb-4">
    <p-button type="button" icon="pi pi-chevron-left" (click)="prev()" [disabled]="isFirstPage()" text />
    <p-button type="button" icon="pi pi-refresh" (click)="reset()" text />
    <p-button type="button" icon="pi pi-chevron-right" (click)="next()" [disabled]="isLastPage()" text />
</div>
<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [first]="first"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    (onPage)="pageChange($event)"
    [rowsPerPageOptions]="[10, 25, 50]"
>
    <ng-template #header>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template #paginatorleft>
        <p-button type="button" icon="pi pi-plus" text />
    </ng-template>
    <ng-template #paginatorright>
        <p-button type="button" icon="pi pi-cloud" text />
    </ng-template>
</p-table>
```

[↑ Back to Top](#table-of-contents)

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)
- [Theming](#theming)

[View Official Documentation](https://primeng.org/table)
