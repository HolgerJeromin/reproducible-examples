# repo steps

Prepare typescript and typescript-go

```bat
npm install
```

Build `nonmodule` folder with tsc works without errors:

```bat
.\node_modules\.bin\tsc.cmd --build .\nonmodule
```

Build `nonmodule` folder with tsgo raises errors:

```bat
.\node_modules\.bin\tsgo.cmd --build .\nonmodule
```

```log
nonmodule/nonmodule.ts:4:3 - error TS1323: Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node16', 'node18', 'node20', or 'nodenext'.

4   import('../src/main.js').then(module => {
    ~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in nonmodule/nonmodule.ts:4
```