// import Zilliqa from 'zilliqa-js'

// export { wrap, transaction }

// const zilliqa = new Zilliqa({
//   nodeUrl: 'https://api-scilla.zilliqa.com',
// })

// function wrap(fn, ...args) {
//   return util
//     .promisify(fn)(...args)
//     .then(resp => {
//       if (resp.error) throw new Error(JSON.stringify(resp))
//       if (resp.result.Error) throw new Error(JSON.stringify(resp))
//       return resp.result
//     })
//     .catch(console.error)
// }

// function transaction(
//   {
//     code = '',
//     to = '0000000000000000000000000000000000000000',
//     amount = 0,
//     gasPrice = 1,
//     gasLimit = 2000,
//   },
//   ...initialParams
// ) {
//   return wrap(node.getBalance, { address }).then(resp => {
//     return wrap(
//       node.createTransaction,
//       zilliqa.util.createTransactionJson(privateKey, {
//         version: 0,
//         nonce: resp.nonce + 1,
//         to,
//         amount: new BN(amount),
//         gasPrice,
//         gasLimit,
//         code,
//         data: JSON.stringify(initialParams).replace(/\\"/g, '"'),
//       }),
//     )
//   })
// }
