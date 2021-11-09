# @sushidesu/trun

npm run with template string.

## Installation

```sh
yarn add -D @sushidesu/trun
# OR
npm install --save-dev @sushidesu/trun
```

## Usage

`trun [command] [arg1] [arg2]...`

| prop | description |
| --- | --- |
| `[command]` | command to run. If you include `{}`, it will be replaced by `args`. |
| `[args]` | string to replace `{}` with. |

TRUN replaces `{}` with `args` and executes command.

### Example

```sh
❯ yarn trun "echo {} and {}" hello world!
yarn run v1.22.15
$ /home/.../node_modules/.bin/trun 'echo {} and {}' hello world!
[trun] echo hello and world!
hello and world!
Done in 0.12s.
```

## Recommended Usage

You can add this to `scripts` in package.json.

### Example


```json
{
  "scripts": {
    "testit": "trun \"jest \"--testPathPattern={}\"",
  }
}
```

Then, you can flexibly execute npm scripts with a small number of types.

```sh
$ yarn testit $someFile
# then execute ->
$ yarn jest --testPathPattern=$someFile
```
