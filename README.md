# ExampleAngularWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.3.

## App Creation

```shell
ng new example-angular-workspace --create-application=false
✔ Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai None, Agents.md      [ https://agents.md/                                               ], Claude         [ https://docs.anthropic.com/en/docs/claude-code/memory            ], Cursor
      [ https://docs.cursor.com/en/context/rules                         ], Gemini         [ https://ai.google.dev/gemini-api/docs                            ], GitHub Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ], JetBrains AI   [ https://www.jetbrains.com/help/j
unie/customize-guidelines.html   ], Windsurf       [ https://docs.windsurf.com/windsurf/cascade/memories#rules        ]
CREATE example-angular-workspace/.prettierrc (161 bytes)
CREATE example-angular-workspace/README.md (1476 bytes)
CREATE example-angular-workspace/.editorconfig (314 bytes)
CREATE example-angular-workspace/.gitignore (622 bytes)
CREATE example-angular-workspace/angular.json (183 bytes)
CREATE example-angular-workspace/package.json (721 bytes)
CREATE example-angular-workspace/tsconfig.json (787 bytes)
CREATE example-angular-workspace/AGENTS.md (2637 bytes)
CREATE example-angular-workspace/.vscode/extensions.json (130 bytes)
CREATE example-angular-workspace/.vscode/launch.json (470 bytes)
CREATE example-angular-workspace/.vscode/tasks.json (978 bytes)
CREATE example-angular-workspace/.claude/CLAUDE.md (2637 bytes)
CREATE example-angular-workspace/.cursor/rules/cursor.mdc (2689 bytes)
CREATE example-angular-workspace/.gemini/GEMINI.md (2637 bytes)
CREATE example-angular-workspace/.github/copilot-instructions.md (2637 bytes)
CREATE example-angular-workspace/.junie/guidelines.md (2637 bytes)
CREATE example-angular-workspace/.windsurf/rules/guidelines.md (2637 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

### Adding ESLint

```shell
npm run ng -- add angular-eslint@22

> example-angular-workspace@0.0.0 ng
> ng add angular-eslint@22


Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

   Yes

Thank you for sharing pseudonymous usage data. Should you change your mind, the following
command will disable this feature entirely:

    ng analytics disable

Global setting: enabled
Local setting: enabled
Effective status: enabled
✔ Determining Package Manager
  › Using package manager: npm
✔ Loading package information
✔ Confirming installation
✔ Installing package

    All angular-eslint dependencies have been successfully installed 🎉

    Please see https://github.com/angular-eslint/angular-eslint for how to add ESLint configuration to your project.

CREATE eslint.config.js (646 bytes)
UPDATE package.json (864 bytes)
UPDATE angular.json (297 bytes)
✔ Packages installed successfully.
```

### Adding Angular Material

```shell
npm run ng -- add @angular/material@22

> example-angular-workspace@0.0.0 ng
> ng add @angular/material@22

✔ Determining Package Manager
  › Using package manager: npm
✔ Loading package information
✔ Confirming installation
✔ Installing package
✔ Select a pair of starter prebuilt color palettes for your Angular Material theme Cyan/Orange        [Preview: https://material.
angular.dev?theme=cyan-orange]
UPDATE package.json (1510 bytes)
✔ Packages installed successfully.
Project name is required.
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
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Generations

### Generating the Application

```shell
npm run ng -- g app

> example-angular-workspace@0.0.0 ng
> ng g app

✔ What name would you like to use for the application? app
✔ Which stylesheet system would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss
 ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
CREATE projects/app/src/app/app.scss (0 bytes)
CREATE projects/app/src/app/app.spec.ts (670 bytes)
CREATE projects/app/src/app/app.ts (286 bytes)
CREATE projects/app/src/app/app.html (20144 bytes)
CREATE projects/app/src/main.ts (222 bytes)
CREATE projects/app/src/app/app.config.ts (313 bytes)
CREATE projects/app/src/app/app.routes.ts (77 bytes)
CREATE projects/app/tsconfig.app.json (437 bytes)
CREATE projects/app/tsconfig.spec.json (449 bytes)
CREATE projects/app/public/favicon.ico (15086 bytes)
CREATE projects/app/src/index.html (289 bytes)
CREATE projects/app/src/styles.scss (80 bytes)
CREATE projects/app/eslint.config.js (627 bytes)
UPDATE angular.json (2521 bytes)
UPDATE tsconfig.json (934 bytes)
UPDATE package.json (1591 bytes)
✔ Packages installed successfully.
```

#### Adding @angular/material to the App Application

```shell
npm run ng -- add @angular/material@22 --project=app

> example-angular-workspace@0.0.0 ng
> ng add @angular/material@22 --project=app

Skipping installation: Package already installed
✔ Select a pair of starter prebuilt color palettes for your Angular Material theme Cyan/Orange        [Preview: https://material.
angular.dev?theme=cyan-orange]
UPDATE package.json (1591 bytes)
✔ Packages installed successfully.
UPDATE projects/app/src/styles.scss (1260 bytes)
UPDATE projects/app/src/index.html (658 bytes)
```

### Generating the Library

```shell
npm run ng -- g lib

> example-angular-workspace@0.0.0 ng
> ng g lib

✔ What name would you like to use for the library? lib
CREATE projects/lib/README.md (1433 bytes)
CREATE projects/lib/ng-package.json (152 bytes)
CREATE projects/lib/package.json (207 bytes)
CREATE projects/lib/tsconfig.lib.json (486 bytes)
CREATE projects/lib/tsconfig.lib.prod.json (401 bytes)
CREATE projects/lib/tsconfig.spec.json (449 bytes)
CREATE projects/lib/src/public-api.ts (64 bytes)
CREATE projects/lib/src/lib/lib.spec.ts (510 bytes)
CREATE projects/lib/src/lib/lib.ts (187 bytes)
CREATE projects/lib/eslint.config.js (627 bytes)
UPDATE angular.json (3547 bytes)
UPDATE package.json (1697 bytes)
UPDATE tsconfig.json (1125 bytes)
✔ Packages installed successfully.
```
