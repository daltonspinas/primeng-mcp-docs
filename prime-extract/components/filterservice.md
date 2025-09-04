# FilterService

FilterService is a helper utility to filter collections against constraints.

## Features {#features}

### Import {#import}

```typescript
import { FilterService } from 'primeng/api';
```

### Usage {#usage}

FilterService needs to be injected into your component. Filters are accessed with FilterService.filters.

```text
export class FilterServiceDemo implements OnInit {

    constructor(private filterService: FilterService) {}

    ngOnInit() {
        const value = 'PrimeNG';

        this.filterService.filters.equals(value, 'NG');                            //false
        this.filterService.filters.equals(value, 8);                               //false
        this.filterService.filters.equals(value, new Date());                      //false
        this.filterService.filters.contains(value, 'NG');                          //true
        this.filterService.filters.startsWith(value, 'NG');                        //false
        this.filterService.filters.endsWith(value, 'NG');                          //true
        this.filterService.filters.lt(10, 20);                                     //true
        this.filterService.filters.gt(50, 20);                                     //true
        this.filterService.filters.in(value, ['PrimeFaces', 'PrimeNG']);           //true
    }
}
```

### Built-in Constraints {#built-in-constraints}

### Custom Constraints {#custom-constraints}

FilterService can be extended by adding new constraints using the register function.

```text
this.filterService.register('isPrimeNumber', (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return value.toString() === filter.toString();
});

this.filterService.filters['isPrimeNumber'](3);                      //true
this.filterService.filters['isPrimeNumber'](5);                      //true
this.filterService.filters['isPrimeNumber'](568985673);              //false
```

### Table Integration {#table-integration}

A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter.

```html
<p-table #dt [columns]="cols" [value]="cars" [paginator]="true" [rows]="10" [tableStyle]="{ 'min-width': '75rem' }">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [style.width]="'25%'">{{ col.header }}</th>
        </tr>
        <tr>
            <th *ngFor="let col of columns">
                <p-columnFilter type="text" [field]="col.field" [matchModeOptions]="matchModeOptions" [matchMode]="'custom-equals'" />
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr [pSelectableRow]="rowData">
            <td *ngFor="let col of columns">{{ rowData[col.field] }}</td>
        </tr>
    </ng-template>
</p-table>
```

### FilterService API {#filterservice-api}

Following is the list of structural style classes, for theming classes visit theming page.

---

[View Official Documentation](https://primeng.org/filterservice)
