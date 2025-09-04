# Terminal

Terminal is a text based user interface. Enter "date" to display the current date.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { TerminalModule } from 'primeng/terminal';
```

### Basic {#basic}

Commands are processed using observables via the TerminalService. Import this service into your component and subscribe to commandHandler to process commands by sending replies with sendResponse function.

```html
<p>Enter "<strong>date</strong>" to display the current date,
"<strong>greet &#123;0&#125;</strong>" for a message and "<strong>random</strong>"
to get a random number.</p>
<p-terminal welcomeMessage="Welcome to PrimeNG" prompt="primeng $" />
```

### Accessibility {#accessibility}

Terminal component has an input element that can be described with aria-label or aria-labelledby props. The element that lists the previous commands has aria-live so that changes are received by the screen reader.

### Terminal {#terminal}

Terminal is a text based user interface.

[↑ Back to Top](#table-of-contents)

## API {#api}

### Terminal API

API defines helper props, events and others for the PrimeNG Terminal module.

#### Terminal {#api-terminal}

Terminal is a text based user interface.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| welcomeMessage | string | null | Initial text to display on terminal. |
| prompt | string | null | Prompt text for each command. |
| styleClass | string | null | Style class of the component. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### Terminal Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-terminal | Class name of the root element |
| p-terminal-welcome-message | Class name of the welcome message element |
| p-terminal-command-list | Class name of the command list element |
| p-terminal-command | Class name of the command element |
| p-terminal-command-value | Class name of the command value element |
| p-terminal-command-response | Class name of the command response element |
| p-terminal-prompt | Class name of the prompt element |
| p-terminal-prompt-label | Class name of the prompt label element |
| p-terminal-prompt-value | Class name of the prompt value element |

#### Terminal Design Tokens {#theming-terminal-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| terminal.root.background | terminal.background | --p-terminal-background | Background of root |
| terminal.root.borderColor | terminal.border.color | --p-terminal-border-color | Border color of root |
| terminal.root.color | terminal.color | --p-terminal-color | Color of root |
| terminal.root.height | terminal.height | --p-terminal-height | Height of root |
| terminal.root.padding | terminal.padding | --p-terminal-padding | Padding of root |
| terminal.root.borderRadius | terminal.border.radius | --p-terminal-border-radius | Border radius of root |
| terminal.prompt.gap | terminal.prompt.gap | --p-terminal-prompt-gap | Gap of prompt |
| terminal.commandResponse.margin | terminal.command.response.margin | --p-terminal-command-response-margin | Margin of command response |

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

[View Official Documentation](https://primeng.org/terminal)
