# @sushidesu/trun

npm run with template string.

## Installation

```sh
yarn add -D @sushidesu/trun
# OR
npm install --dev @sushidesu/trun
```

## Usage

`trun "command to run with {}" arg1 arg2...`

pass the command to run with `{}`. and 置き換えたい文字

trun 実行する command replace `{}` with `args`

### Example

```sh
❯ yarn start "echo {}" hello!
yarn run v1.22.15
$ node dist/main.js 'echo {}' hello!
[trun] echo hello!
hello!
✨  Done in 0.42s.
```

## Recommended Usage

You can add this to `scripts` in package.json.


```json
  ...
  "scripts": {
    "testit": "trun \"jest \"--testPathPattern={}\"",
  }
```

Then, 少ないタイプ数で柔軟にnpm scriptを実行できます。

```sh
yarn testit $someFile

# run:
# jest --testPathPattern=$someFile
```
