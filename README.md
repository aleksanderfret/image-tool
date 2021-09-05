# image tool

![image-tool](./docs/images/image-tool.png)

## Version

1.0.0

## Documentation

### Installation

#### 1. Install node.js 14.16.0

#### 2. Install npm 7.8

#### 3. Clone the repository

```bash
git clone https://github.com/aleksanderfret/image-tool.git
```

#### 4. Go to the directory

```bash
cd image-tool
```

#### 5. Install dependencies

```bash
npm run ci
```

#### 6. Start development

```bash
npm start
```

### Available scripts

```bash
 "build:mac": build macos version,
 "build:win": build windows version,
 "check": runs lint, format and stylelint, test and compile scripts together,
 "clean": removes node_modules from al packages
 "compile": runs TypeScript for all packages
 "format": formats all the files using Prettier,
 "format:fix": formats and fix all the files using Prettier,
 "lint": lint all the files using eslint,
 "lint:fix": lint and fix all files using eslint,
 "make": build all distributables,
 "package": "package application",
 "prepare": install git hooks,
 "prepare-commit-msg": runs prepare-commit-msg hook,
 "pre-commit": runs pre-commit hook,
 "pre-push": runs pre-push hook,
 "start": runs project for development,
 "stylelint": lint all style files,
 "stylelint:fix": lint and fix all style files,
 "test": run tests in src directory,
 "test:watch": run tests in watch mode
```
