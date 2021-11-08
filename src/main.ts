#!/usr/bin/env node
import { spawnSync } from "child_process"

const TRUN_PREFIX = `\x1b[32m[trun]\x1b[0m`

function main() {
  let command = process.argv[2]
  if (!command) {
     console.log(`${TRUN_PREFIX} \x1b[31merror\x1b[0m command not received`)
     return
  }
  const args = process.argv.slice(3)
  for (const arg of args) {
    command = command.replace("{}", arg)
  }
  console.log(`${TRUN_PREFIX} ${command}`)
  spawnSync(command, { shell: true, stdio: "inherit" })
}

main()

