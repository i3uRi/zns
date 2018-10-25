#!/usr/bin/env bash

scilla_root_dir=$(dirname $(dirname $(cd $(dirname "$0"); pwd)))

scilla-checker "$scilla_root_dir"/contract.scilla "$scilla_root_dir"/lib
if [ "$?" -eq '0' ]; then
  echo -e '\033[0;32mSuccessful type check\033[0m'
else
  echo -e '\033[0;31mFailed type check\033[0m'
fi

for i in $( ls -d $(dirname "$0")/*/ ); do
  test_root_dir=$(dirname "$0")/$(basename $i)

  echo -e '\033[0;36mProccessing "'$(basename $i)'"...\033[0m'

  if [ -e "$test_root_dir"/state.json ] && [ -e "$test_root_dir"/message.json ]; then
    scilla-runner \
      -i "$scilla_root_dir"/contract.scilla \
      -init "$test_root_dir"/init.json \
      -iblockchain "$test_root_dir"/blockchain.json \
      -istate "$test_root_dir"/state.json \
      -imessage "$test_root_dir"/message.json \
      -o "$test_root_dir"/output.json \
      -gaslimit 2000 \
      -libdir "$scilla_root_dir"/lib
  else
    scilla-runner \
      -i "$scilla_root_dir"/contract.scilla \
      -init "$test_root_dir"/init.json \
      -iblockchain "$test_root_dir"/blockchain.json \
      -o "$test_root_dir"/output.json \
      -gaslimit 2000 \
      -libdir "$scilla_root_dir"/lib
  fi

  node "$scilla_root_dir"/tests/runner/diff-json.js "$(cat "$test_root_dir"/output.json)" "$(cat "$test_root_dir"/expected.json)"
  if [ "$?" -eq '0' ]; then
    echo -e '\033[0;32mSuccessful "'$(basename $i)'"\033[0m'
  else
    echo -e '\033[0;31mFailed "'$(basename $i)'"\033[0m'
  fi

done