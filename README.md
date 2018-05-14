# babel-ignore bug demo

_Reality:_ repository consists of `js` and `json` files. Test files are collocated by `*.test.js` convention.  
_Requirement:_ repo should have `*.js` and `*.json` files, but shouldnt have `*.test.js`.  
_Problem:_  
  a) with `--copy-files` flag `*.test.js` are transpiled and copied even though babel config has `ignore: [ '**/*.test.js' ]`.  
  b) without `--copy-files` flag `*.json` files are left out and package breaks.  


```
☯ npm run build -s
🎉  Successfully compiled 1 file with Babel.
🎉  Successfully compiled 1 file with Babel.
dist
├── copy
│   ├── index.js
│   ├── index.test.js
│   └── l10n.json
└── notcopy
    └── index.js
dist-expected
├── index.js
└── l10n.json
```
