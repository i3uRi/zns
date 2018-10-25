// class Registrar {
//   auction_buffer_length = 1
//   auction_initial_length = 10
//   auction_period_ending_block = 100
//   auction_min_cost = 12
//   auction_buy_now_cost = 5

//   auction_map = {
//     name_string: {
//       current_bid: 0,
//       current_address: '0x1234',
//       block_expiry: 97,
//     },
//   }

//   registry = '0x1234'

//   get({name}) {
//     return this.auction_map[name]
//   }

//   open({name, _sender, _amount}) {
//     if (
//       this.auction_period_ending_block <= BLOCKNUMBER ||
//       this.auction_map[name] ||
//       _amount < this.auction_min_cost
//     ) {
//       throw new Error()
//     }

//     this.auction_map[name] = {
//       current_bid: _amount,
//       current_address: _sender,
//       block_expiry: BLOCKNUMBER + this.auction_initial_length,
//     }
//   }

//   bid({name, _sender, _amount}) {
//     if (
//       !this.auction_map[name] ||
//       this.auction_map[name].current_bid >= _amount
//     ) {
//       throw new Error()
//     }

//     this.auction_map[name] = {
//       current_bid: _amount,
//       current_address: _sender,
//       block_expiry:
//         this.auction_map[name].block_expiry - this.auction_buffer_length >
//         BLOCKNUMBER
//           ? BLOCKNUMBER + this.auction_buffer_length
//           : this.auction_map[name].block_expiry,
//     }
//   }

//   close({name, _sender}) {
//     if (this.auction_map[name].block_expiry < BLOCKNUMBER) {
//       throw new Error()
//     }

//     delete this.auction_map[name]

//     this.registry.set({
//       name,
//       owner_address: this.auction_map[name].current_address,
//     })
//   }

//   buy({name, _amount, _sender}) {
//     if (
//       this.auction_period_ending_block > BLOCKNUMBER ||
//       this.auction_buy_now_cost !== _amount
//     ) {
//       throw new Error()
//     }

//     this.registry.set({
//       name,
//       owner_address: _sender,
//     })
//   }
// }

// class Registry {
//   registrar_address = '0x1234'
//   name_map = {
//     name_string: {
//       data_address: '0x1234',
//       owner_address: '0x1234',
//       // previous_owner_address: '0x1234',
//     },
//   }

//   set({name, _sender, data_address, owner_address}) {
//     if (
//       this.name_map[name].owner_address === _sender ||
//       this.registrar_address === _sender
//     ) {
//       this.name_map[name].data_address = data_address

//       // const previous_owner_address = this.name_map[name].owner_address
//       this.name_map[name].owner_address = owner_address
//       // this.name_map[name].previous_owner_address = previous_owner_address
//     }
//   }

//   get({name}) {
//     return this.name_map[name]
//   }
// }

// class Data {}

//
//
//
//
//
//
//
//

class Registrar {}
class Registry {}
class Data {}
class Renter {}
