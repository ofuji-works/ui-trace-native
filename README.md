# ui-trace-native

# typescript環境構築
```
$ yarn add --dev typescript
$ yarn add --dev react-native-typescript-transformer
$ yarn add --dev @types/react @types/react-native

# tsconfig作成
$ yarn tsc --init --pretty --jsx react
```

**tsconfigコメントアウト外す**
{
    ...
    "allowSyntheticDefaultImports": true, 
    ...
}

**tsconfigに下記追加**
},
"exclude": [
"node_modules"
]

**react-nativeコンフィグファイルの追加**
```
$ touch rn-cli.config.js
```
module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};

**tslint, prettier設定**
```
$ yarn add --dev tslint tslint-react prettier
$ yarn add --dev tslint-config-prettier  tslint-plugin-prettier
```
.prettierrc
module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
};

tslint.js
{
    "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
    "rules": {
      "jsx-no-lambda": false,
      "member-access": false,
      "interface-name": true,
      "prefer-for-of": false,
      "ordered-imports": false,
      "object-literal-sort-keys": false,
      "no-console": false
    },
    "linterOptions": {
      "exclude": [
        "node_modules/**/*.ts"
      ]
    }
}

**画像のimport許可**
```
$ touch images.d.ts
```
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

tsconfig.json
"typeRoots": ["./src/images", "node_modules/@types"],