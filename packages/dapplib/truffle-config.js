require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind hospital inflict problem outer shuffle'; 
let testAccounts = [
"0x6070093247afb738daa17d4ac39bda85c40a0e257f25619d3d62c42ea153455e",
"0x006fc356eb732255bf5ed7edab6d08247cf3ca8b139a08bdea5355cd42ae4a64",
"0x63537ad7de10cfe778f13146733956d991db4916e259ec7c974431327630f3d2",
"0x2dc4e51d10536e404f5c91a5231c64b3ece0391aaaa60e702ab486f1ad0e5764",
"0xfa64fe30b08e893bf45a53391f236b795c4329c578702a6f0e796cc5b4763c33",
"0x4a1d395bc87889c9fe4aaeb28c5958c1a2843460dc86934b98a6ac4dc04fcfad",
"0x07be641c99b7668b25f8424900f5fe3a10ca064ff31ade8eccaee40edc0e1099",
"0xecd7e67f350ea6b07f4b185b6aff62b22fcf8892f0a48c86ea9fa3dd79af3c18",
"0x481c9ddf242ad4698c1ec4da34c93e02d16407d33d0f5ca8f2c3637101110ca8",
"0x50f211cc30e12e3e806c148e06dde9074decef8d6270a07ea6d5c619a3e73ddc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

