# repo steps

Prepare typescript and typescript-go

```bat
npm install
```

Build `src` folder with tsc works without errors:

```bat
.\node_modules\.bin\tsc.cmd --build .\src
```

Build `src` folder with tsgo raises errors:

```bat
.\node_modules\.bin\tsgo.cmd --build .\src
```

> src/main.ts:1:12 - error TS2503: Cannot find namespace 'myNamespace'.
