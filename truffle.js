module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0x9DA5647408e839327C7A26e1406d1fd8158508ba", // default address to use for any transaction Truffle makes during migrations
        network_id: 4,
        gas: 4612388 // Gas limit used for deploys
    }
  }
};
