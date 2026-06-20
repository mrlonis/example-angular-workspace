# ExampleAngularWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.3.

## Shared AI Instructions

All AI instruction files in this repo are generated from one source file:

- `agent-instructions/source.md`

To sync updates to all targets, run:

```bash
npm run sync:agent-instructions
```

To verify everything is in sync without writing files, run:

```bash
npm run sync:agent-instructions:check
```

By default, the Cursor file (`.cursor/rules/cursor.mdc`) keeps its existing line endings and always gets its required frontmatter header.

If you want to force Cursor line endings during sync:

```bash
CURSOR_EOL=lf npm run sync:agent-instructions
CURSOR_EOL=crlf npm run sync:agent-instructions
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build:all
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm run test:ci
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
