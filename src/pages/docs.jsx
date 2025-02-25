import React from 'react';

const Docs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-600">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Pixora-UI Documentation</h1>
        <p className="text-lg">
          Welcome to <strong>Pixora-UI</strong> – your one-stop library for a vast collection of customizable icons and UI components.
        </p>
      </header>

      <nav className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="#introduction" className="hover:underline">Introduction</a>
          </li>
          <li>
            <a href="#installation" className="hover:underline">Installation</a>
          </li>
          <li>
            <a href="#usage" className="hover:underline">Usage</a>
          </li>
          <li>
            <a href="#icons" className="hover:underline">Icons</a>
          </li>
          <li>
            <a href="#components" className="hover:underline">Components</a>
          </li>
          <li>
            <a href="#customization-theming" className="hover:underline">Customization & Theming</a>
          </li>
          <li>
            <a href="#contribution" className="hover:underline">Contribution Guidelines</a>
          </li>
          <li>
            <a href="#license" className="hover:underline">License</a>
          </li>
        </ul>
      </nav>

      <section id="introduction" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Introduction</h2>
        <p className="text-lg">
          Pixora-UI is built with performance and simplicity in mind. Hosted on Vercel at{' '}
          <a href="https://pixora-ui.vercel.app" className="hover:underline">
            pixora-ui.vercel.app
          </a>
          , our library offers a modern approach to building user interfaces. Each component is designed to be intuitive, flexible, and easy to integrate into your projects.
        </p>
      </section>

      <section id="installation" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Installation</h2>
        <p className="text-lg mb-4">
          Install Pixora-UI via npm or yarn:
        </p>
        <pre className="p-4 rounded-md mb-4">
          <code>{`npm install pixora-ui
# or
yarn add pixora-ui`}</code>
        </pre>
      </section>

      <section id="usage" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Usage</h2>
        <p className="text-lg mb-4">
          Once installed, import and use our components in your project. For example:
        </p>
        <pre className="p-4 rounded-md mb-4">
          <code>{`import React from 'react';
import { Button, Icon } from 'pixora-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Icon name="home" size={24} color="#333" />
    </div>
  );
}

export default App;`}</code>
        </pre>
      </section>

      <section id="icons" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Icons</h2>
        <p className="text-lg mb-4">
          Our icon collection is scalable and highly customizable. Use them as standalone elements or integrated within other components.
        </p>
        <pre className="p-4 rounded-md">
          <code>{`<Icon name="search" size={20} color="#555" />`}</code>
        </pre>
      </section>

      <section id="components" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Components</h2>
        <p className="text-lg mb-4">
          Pixora-UI provides a diverse set of components such as buttons, forms, modals, and more. Here’s a quick example:
        </p>
        <pre className="p-4 rounded-md">
          <code>{`<Button variant="success">Submit</Button>`}</code>
        </pre>
      </section>

      <section id="customization-theming" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Customization & Theming</h2>
        <p className="text-lg">
          Every Pixora-UI component is designed with customization in mind. You can adjust themes globally or override styles on a per-component basis.
        </p>
      </section>

      <section id="contribution" className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Contribution Guidelines</h2>
        <p className="text-lg">
          We welcome contributions from the community! Fork the repository, create a branch for your changes, and submit a pull request. For detailed guidelines, refer to our contribution guide.
        </p>
      </section>

      <section id="license">
        <h2 className="text-3xl font-bold mb-2">License</h2>
        <p className="text-lg">
          Pixora-UI is open-sourced under the MIT License. Feel free to use, modify, and distribute the components as per the license terms.
        </p>
      </section>
    </div>
  );
};

export default Docs;
