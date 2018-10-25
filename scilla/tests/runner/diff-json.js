#!/usr/bin/env node

try {
  if (
    !require('deep-equal')(
      JSON.parse(process.argv[2]),
      JSON.parse(process.argv[3]),
    )
  ) {
    throw new Error('fail')
  }
} catch (error) {
  process.exit(1)
}
