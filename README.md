# Simplelog
A simple logging middleware for Oak v16.0.0.

# Usage
```ts
import { Application } from "oak";
import { simplelog } from "mod.ts"

const app = new Application();
app.use(simplelog);
```
