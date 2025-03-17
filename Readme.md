# repo steps

Prepare typescript

```bat
npm --install
```

Build jsModule folder:

```bat
.\node_modules\.bin\tsc.cmd --build  .\jsModule\ --verbose
```

Results in emit of correct `jsModule/jsModule.js` and `.d.ts` file.

Build src folder:

```bat
.\node_modules\.bin\tsc.cmd --build  .\src\ --verbose
```

fails to compile because it uses not the correct tsconfig:

```txt
.\node_modules\.bin\tsc.cmd --build  .\src\ --verbose  --explainFiles
[16:15:17] Projects in this build: 
    * src/tsconfig.json

[16:15:17] Project 'src/tsconfig.json' is out of date because buildinfo file 'src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[16:15:17] Building project '/ts-issues/src/tsconfig.json'...

jsModule/jsModule.ts:3:13 - error TS2550: Property 'allSettled' does not exist on type 'PromiseConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2020' or later.

3     Promise.allSettled([])
              ~~~~~~~~~~

node_modules/typescript/lib/lib.es5.d.ts
  Library referenced via 'es5' from file 'node_modules/typescript/lib/lib.es2015.d.ts'
node_modules/typescript/lib/lib.es2015.d.ts
  [...]
node_modules/typescript/lib/lib.decorators.d.ts
  Library referenced via 'decorators' from file 'node_modules/typescript/lib/lib.es5.d.ts'
node_modules/typescript/lib/lib.decorators.legacy.d.ts
  Library referenced via 'decorators.legacy' from file 'node_modules/typescript/lib/lib.es5.d.ts'
jsModule/jsModule.ts
  Imported via "../jsModule/jsModule.js" from file 'src/main.ts'
src/main.ts
  Part of 'files' list in tsconfig.json

Found 1 error.
```
