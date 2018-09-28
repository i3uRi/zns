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
  'dcf83f524d4ec4e67784803fda3c007e299f4476be50c76a6dc32d0e3023810c'
const address = zilliqa.util.getAddressFromPrivateKey(privateKey)
const node = zilliqa.getNode()
const code = fs.readFileSync('./contract.scilla')
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
    vname: 'owner',
    type: 'ByStr20',
    value: '0x7bb3b0e8a59f3f61d9bff038f4aeb42cae2ecce8',
  },
  {
    vname: '_creation_block',
    type: 'BNum',
    value: '100',
  },
)
  .then(txHash => wrap(node.getTransaction, {txHash}))
  .then(() => wrap(node.getSmartContracts, {address}))
  .then(smartContracts => console.log(JSON.stringify(smartContracts)))
  .catch(console.error)
