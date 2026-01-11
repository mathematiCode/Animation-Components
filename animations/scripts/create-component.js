#!/usr/bin/env node

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get component name from command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('Error: Component name is required');
  console.log('Usage: npm run create-component <ComponentName>');
  process.exit(1);
}

// Validate component name (should start with capital letter)
if (!/^[A-Z]/.test(componentName)) {
  console.error('Error: Component name must start with a capital letter');
  process.exit(1);
}

const storiesDir = join(__dirname, '../src/stories');
const componentDir = join(storiesDir, componentName);

// Component JSX template
const componentTemplate = `function ${componentName}({}) {
  return <h1>Hi</h1>;
}

export default ${componentName};
`;

// Stories template
const storiesTemplate = `import ${componentName} from './${componentName}';

export default {
  title: 'Example/${componentName}',
  component: ${componentName},
};

export const Default = {
  args: {},
};
`;

// CSS template (empty)
const cssTemplate = ``;

async function createComponent() {
  try {
    // Create component directory
    await mkdir(componentDir, { recursive: true });

    // Create ComponentName.jsx
    const jsxPath = join(componentDir, `${componentName}.jsx`);
    await writeFile(jsxPath, componentTemplate);

    // Create ComponentName.stories.js
    const storiesPath = join(componentDir, `${componentName}.stories.js`);
    await writeFile(storiesPath, storiesTemplate);

    // Create ComponentName.css
    const cssPath = join(componentDir, `${componentName}.css`);
    await writeFile(cssPath, cssTemplate);

    console.log(`✅ Created component: ${componentName}`);
    console.log(`   📁 ${componentDir}`);
    console.log(`   📄 ${componentName}.jsx`);
    console.log(`   📄 ${componentName}.stories.js`);
    console.log(`   📄 ${componentName}.css`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.error(`Error: Component "${componentName}" already exists`);
    } else {
      console.error('Error creating component:', error.message);
    }
    process.exit(1);
  }
}

createComponent();
