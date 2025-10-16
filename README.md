# @uhpenry/icons

`@uhpenry/icons` is an open-source package providing developers with a library of beautifully crafted, fully colored, and customizable tech-related icons.  
The library includes icons for popular frameworks, libraries, programming languages, and tools — each designed with authentic brand colors and modern aesthetics.

Perfect for dashboards, landing pages, documentation, or any developer-focused UI.

---

## Features

- **Extensive Library** – Icons for React, TailwindCSS, Docker, Python, and many more.
- **Customizable Size** – Easily resize icons to fit your design.
- **Fully Colored** – Brand-accurate and vibrant color palettes.
- **Tree-Shakeable** – Import only what you need.
- **Simple Integration** – Lightweight, React-friendly components.
- **Dynamic Aliases** – Many icons can be referenced by multiple names (e.g., `JavaScript` can be used as `JS` or `java-script`, `TypeScript` as `TS`, `Python` as `PY`).

---

## Installation

Install via npm:

```bash
npm install @uhpenry/icons
```

or with yarn:

```bash
yarn add @uhpenry/icons
```

---

## Usage

### Basic Example

```jsx
import React from 'react';
import { ReactJsIcon, TailwindCSSIcon } from '@uhpenry/icons';

const App = () => (
  <div>
    <ReactJsIcon size={40} />
    <TailwindCSSIcon size={50} />
  </div>
);

export default App;
```

---

### Customizing Icons

Icons can be styled using `size`, `color`, and `className` props:

```jsx
<ReactJsIcon size={60} className='text-blue-500' />
```

---

## API

### Icon Components

Each icon is available as an individual React component:

```js
import { DockerIcon, VueJsIcon } from '@uhpenry/icons';
```

### `getIcon`

Dynamically retrieve an icon by name or alias:

```js
import { getIcon } from '@uhpenry/icons';

const Icon = getIcon('JS'); // finds the JavaScript icon
```

> Many icons have multiple aliases, making it easy to reference them dynamically in your app. Examples:
>
> - `JavaScript` → `JS`, `java-script`
> - `TypeScript` → `TS`
> - `Python` → `PY`

---

## Available Icons

Includes categories such as:

- **Frameworks**: React, Next.js, Vue, Angular, Svelte
- **Languages**: JavaScript, Python, Java, PHP, Go, Rust
- **Tools**: Docker, Webpack, Vite, Rollup, Git
- **CSS Frameworks**: TailwindCSS, Material UI, Ant Design

---

## Contributing

We welcome contributions!
All icons are sourced from this platform, so if you want to **add or remove icons**, please do so through our platform.

For contributing directly to this repository, see the [Contributing Guide](CONTRIBUTING.md).

Steps:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Feedback

We’d love to hear from you!
Share ideas, feedback, or requests via [GitHub Issues](https://github.com/uhpenry/uhpenry-icons/issues).

---

> Built and maintained by the Uhpenry team, empowering developers to build faster and look better.
