require('isomorphic-fetch')

const BN = require('bn.js')
const fs = require('fs')
const util = require('util')
const {Zilliqa} = require('zilliqa-js')

const zilliqa = new Zilliqa({
  nodeUrl: 'http://localhost:4200',
})

console.log('Zilliqa Testing Script')

const privateKey =
  'cb95319f3d1f05a872ec85c1142f4831ad538713737853abdd2b3283108613a0'
const address = zilliqa.util.getAddressFromPrivateKey(privateKey)
const node = zilliqa.getNode()
const code = s.readFileSync('./contract.scilla')

console.log(`Privkey:  ${privateKey}`)
console.log(`Pubkey:  ${zilliqa.util.getPubKeyFromPrivateKey(privateKey)}`)
console.log(`Address: ${address}`)

function wrap(fn, ...args) {
  return util
    .promisify(fn)(...args)
    .then(resp => {
      if (resp.error) throw new Error(JSON.stringify(resp))
      if (resp.result.Error) throw new Error(JSON.stringify(resp))
      return resp.result
    })
    .catch(console.error)
}

function transaction(
  {code = '', to = '0000000000000000000000000000000000000000', amount = 0},
  ...initialParams
) {
  return wrap(node.getBalance, {address}).then(resp => {
    return wrap(
      node.createTransaction,
      zilliqa.util.createTransactionJson(privateKey, {
        version: 0,
        nonce: resp.nonce + 1,
        to,
        amount: new BN(amount),
        gasPrice: 1,
        gasLimit: 2000,
        code,
        data: JSON.stringify(initialParams).replace(/\\"/g, '"'),
      }),
    )
  })
}

transaction(
  {code},
  {
    vname: '_creation_block',
    type: 'BNum',
    value: '50',
  },
)
  .then(txHash => wrap(node.getTransaction, {txHash}))
  .then(() => wrap(node.getSmartContracts, {address}))
  .then(smartContracts =>
    console.log(
      'SmartContract:',
      JSON.stringify(smartContracts[smartContracts.length - 1], null, 2),
    ),
  )
  .catch(console.error)
