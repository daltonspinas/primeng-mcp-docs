# Stepper

The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { StepperModule } from 'primeng/stepper';
```

### Horizontal {#horizontal}

Stepper consists of a combination of StepList, Step, StepPanels and StepPanel components. The value property is essential for associating Step and StepPanel with each other.

```html
<p-stepper [value]="1" class="basis-[50rem]">
    <p-step-list>
        <p-step [value]="1">Header I</p-step>
        <p-step [value]="2">Header II</p-step>
        <p-step [value]="3">Header II</p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>
```

### Vertical {#vertical}

Vertical layout requires StepItem as a wrapper of Step and StepPanel components.

```html
<p-stepper [value]="1">
    <p-step-item [value]="1">
        <p-step>Header I</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Next" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="2">
        <p-step>Header II</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex py-6 gap-2">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(1)" />
                    <p-button label="Next" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="3">
        <p-step>Header III</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>
</p-stepper>
```

### Linear {#linear}

When linear property is set to true, current step must be completed in order to move to the next step.

```html
<p-stepper [value]="1" class="basis-[50rem]" [linear]="true">
    <p-step-list>
        <p-step [value]="1">Header I</p-step>
        <p-step [value]="2">Header II</p-step>
        <p-step [value]="3">Header II</p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>
```

### Steps Only {#steps-only}

Use Stepper with a StepList only for custom requirements where a progress indicator is needed.

```html
<p-stepper [value]="1" class="basis-[50rem]">
    <p-step-list>
        <p-step [value]="1">Design</p-step>
        <p-step [value]="2">Development</p-step>
        <p-step [value]="3">QA</p-step>
    </p-step-list>
</p-stepper>
```

### Template {#template}

Stepper provides various templating options to customize the default UI design.

```html
<p-stepper [(value)]="activeStep" class="basis-[40rem]">
    <p-step-list>
        <p-step [value]="1" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-user"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>

        <p-step [value]="2" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-star"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>

        <p-step [value]="3" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-id-card"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>
    </p-step-list>

    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                    <div class="field">
                        <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" fluid />
                    </div>
                    <div class="field">
                        <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" fluid />
                    </div>
                    <div class="field">
                        <p-password [(ngModel)]="password" placeholder="Password" fluid />
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button (onClick)="activateCallback(2)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                    <div class="flex flex-wrap justify-center gap-4">
                        <p-togglebutton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                        <p-togglebutton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                        <p-togglebutton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                        <p-togglebutton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                        <p-togglebutton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                        <p-togglebutton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                        <p-togglebutton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                        <p-togglebutton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                        <p-togglebutton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                        <p-togglebutton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button (onClick)="activateCallback(1)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    <p-button (onClick)="activateCallback(3)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col items-center gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                    <div class="text-center">
                        <img alt="logo" src="https://primefaces.org/cdn/primeng/images/stepper/content.svg" />
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button (onClick)="activateCallback(2)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>
```

### Accessibility {#accessibility}

Stepper container is defined with the tablist role, as any attribute is passed to the container element aria-labelledby can be optionally used to specify an element to describe the Stepper. Each stepper header has a tab role and aria-controls to refer to the corresponding stepper content element. The content element of each stepper has tabpanel role, an id to match the aria-controls of the header and aria-labelledby reference to the header as the accessible name.

### Stepper {#stepper}

Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multistep process.

### Step {#step}

Step is a helper component for Stepper component.

### StepItem {#stepitem}

StepItem is a helper component for Stepper component used in vertical orientation.

### StepPanel {#steppanel}

StepPanel is a helper component for Stepper component.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Stepper API

API defines helper props, events and others for the PrimeNG Stepper module.

#### Stepper {#api-stepper}

Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multistep process.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<number> | undefined | A model that can hold a numeric value or be undefined. |
| linear | InputSignalWithTransform<any, boolean> | false | A boolean variable that captures user input. |
| transitionOptions | InputSignal<string> | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |

#### Step {#api-step}

Step is a helper component for Stepper component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<number> | undefined | Active value of stepper. |
| disabled | InputSignalWithTransform<any, boolean> | false | Whether the step is disabled. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Content template. |

#### StepItem {#api-stepitem}

StepItem is a helper component for Stepper component used in vertical orientation.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<number> | undefined | Value of step. |

#### StepPanel {#api-steppanel}

StepPanel is a helper component for Stepper component.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<number> | undefined | Active value of stepper. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content | context :  StepPanelContentTemplateContext | Content template. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Stepper Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-stepper | Class name of the root element |
| p-stepper-separator | Class name of the separator element |

#### Stepper Design Tokens {#theming-stepper-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| stepper.root.transitionDuration | stepper.transition.duration | --p-stepper-transition-duration | Transition duration of root |
| stepper.separator.background | stepper.separator.background | --p-stepper-separator-background | Background of separator |
| stepper.separator.activeBackground | stepper.separator.active.background | --p-stepper-separator-active-background | Active background of separator |
| stepper.separator.margin | stepper.separator.margin | --p-stepper-separator-margin | Margin of separator |
| stepper.separator.size | stepper.separator.size | --p-stepper-separator-size | Size of separator |
| stepper.step.padding | stepper.step.padding | --p-stepper-step-padding | Padding of step |
| stepper.step.gap | stepper.step.gap | --p-stepper-step-gap | Gap of step |
| stepper.stepHeader.padding | stepper.step.header.padding | --p-stepper-step-header-padding | Padding of step header |
| stepper.stepHeader.borderRadius | stepper.step.header.border.radius | --p-stepper-step-header-border-radius | Border radius of step header |
| stepper.stepHeader.focusRing.width | stepper.step.header.focus.ring.width | --p-stepper-step-header-focus-ring-width | Focus ring width of step header |
| stepper.stepHeader.focusRing.style | stepper.step.header.focus.ring.style | --p-stepper-step-header-focus-ring-style | Focus ring style of step header |
| stepper.stepHeader.focusRing.color | stepper.step.header.focus.ring.color | --p-stepper-step-header-focus-ring-color | Focus ring color of step header |
| stepper.stepHeader.focusRing.offset | stepper.step.header.focus.ring.offset | --p-stepper-step-header-focus-ring-offset | Focus ring offset of step header |
| stepper.stepHeader.focusRing.shadow | stepper.step.header.focus.ring.shadow | --p-stepper-step-header-focus-ring-shadow | Focus ring shadow of step header |
| stepper.stepHeader.gap | stepper.step.header.gap | --p-stepper-step-header-gap | Gap of step header |
| stepper.stepTitle.color | stepper.step.title.color | --p-stepper-step-title-color | Color of step title |
| stepper.stepTitle.activeColor | stepper.step.title.active.color | --p-stepper-step-title-active-color | Active color of step title |
| stepper.stepTitle.fontWeight | stepper.step.title.font.weight | --p-stepper-step-title-font-weight | Font weight of step title |
| stepper.stepNumber.background | stepper.step.number.background | --p-stepper-step-number-background | Background of step number |
| stepper.stepNumber.activeBackground | stepper.step.number.active.background | --p-stepper-step-number-active-background | Active background of step number |
| stepper.stepNumber.borderColor | stepper.step.number.border.color | --p-stepper-step-number-border-color | Border color of step number |
| stepper.stepNumber.activeBorderColor | stepper.step.number.active.border.color | --p-stepper-step-number-active-border-color | Active border color of step number |
| stepper.stepNumber.color | stepper.step.number.color | --p-stepper-step-number-color | Color of step number |
| stepper.stepNumber.activeColor | stepper.step.number.active.color | --p-stepper-step-number-active-color | Active color of step number |
| stepper.stepNumber.size | stepper.step.number.size | --p-stepper-step-number-size | Size of step number |
| stepper.stepNumber.fontSize | stepper.step.number.font.size | --p-stepper-step-number-font-size | Font size of step number |
| stepper.stepNumber.fontWeight | stepper.step.number.font.weight | --p-stepper-step-number-font-weight | Font weight of step number |
| stepper.stepNumber.borderRadius | stepper.step.number.border.radius | --p-stepper-step-number-border-radius | Border radius of step number |
| stepper.stepNumber.shadow | stepper.step.number.shadow | --p-stepper-step-number-shadow | Shadow of step number |
| stepper.steppanels.padding | stepper.steppanels.padding | --p-stepper-steppanels-padding | Padding of steppanels |
| stepper.steppanel.background | stepper.steppanel.background | --p-stepper-steppanel-background | Background of steppanel |
| stepper.steppanel.color | stepper.steppanel.color | --p-stepper-steppanel-color | Color of steppanel |
| stepper.steppanel.padding | stepper.steppanel.padding | --p-stepper-steppanel-padding | Padding of steppanel |
| stepper.steppanel.indent | stepper.steppanel.indent | --p-stepper-steppanel-indent | Indent of steppanel |

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

[View Official Documentation](https://primeng.org/stepper)
