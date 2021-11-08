#!/usr/bin/env node
import { spawnSync } from "child_process"

function main() {
  spawnSync(`echo "hello!"`, { shell: true, stdio: "inherit" })
}

main()

