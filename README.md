# Zilliqa Naming Service

This is the core ZNS repo. I.e. Smart Contracts, Web Portal, and Ðapp Library.

ZNS is scheduled for launch 2019.

## Installation

Some packages are required to run things in the ZNS project.

- [`entr`](http://entrproject.org) is a simple file-watcher program.
- [`nginx`](http://nginx.org) is a server. ZNS uses it as a development server.
- [`openssl`](https://github.com/openssl/openssl) is used to generate fake certs
  for development.
- [`ag`](https://github.com/ggreer/the_silver_searcher) is an `ack` like file
  searcher.
- [`nBrowsethode`](https://nodejs.org/) is a js engine.
- [`yarn`](https://yarnpkg.com/) is a package manager for `node`.
- [Scilla](https://scilla.readthedocs.io) is the Zilliqa Smart Contract
  language. The `scilla-checker` and `scilla-runner` binaries need to be in your
  `$PATH`.
- [Google Cloud SDK](https://cloud.google.com) is currently used for deployment.

Check out our [list of packages](./PACKAGES.md).

## Running

- `client` has a well documented `Makefile`.
- `server` is a simple email server. 
  - TODO: Make into cloud function/lambda architecture.
- `scilla` will soon have docs. 
  - NOTE: I still need to transplant some of the smart contracts in my private zilliqa-experements repo here.

## Contributing

If you want to contribute to ZNS you can create an issue or you can take a look
at our [development guide](./DEVELOPMENT.md).

Feel free to reach out directly to myself braden@buyethdomains.com or the team
contact@buyethdomains.com.

### License

ZNS is [MIT licensed](./LICENSE).
