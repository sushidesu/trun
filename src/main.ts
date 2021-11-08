#!/usr/bin/env node
import { spawnSync } from "child_process"

function main() {
  let command = process.argv[2]
  if (!command) {
    return
  }
  const args = process.argv.slice(3)
  for (const arg of args) {
    command = command.replace("{}", arg)
  }
  console.log(`\x1b[32m[trun]\x1b[0m ${command}`)
  spawnSync(command, { shell: true, stdio: "inherit" })
}

main()

