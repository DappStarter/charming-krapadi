require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember hour gesture loan flip spring'; 
let testAccounts = [
"0xd0ab8f4c104afd5ac66396277eee6acd37c6cf69e9e309e228632456e5c4fc9b",
"0x89333752653867601d9b4619f665ba5e3b3220f7163653db0338e3221037b409",
"0xe2e6af7241c7320cf20fb0264efc1ed066c7431f8bef096595762c2bfefe5c04",
"0x720961dcf185805e090473280add147d4d04478fe16b6680b5f6e268796aab3f",
"0x7a8fea1abd1e0cc270f689787aa9f8862ec36d4903b0da7402226e98101f8d1f",
"0x769aa2334442ade322b4b7266d4e7908b45e8678748b8c645b83e5f28b2e0356",
"0xfeb0ab6f219a43bf613cbd1e012b09527faf68f24a43c91758dc98a2704884ef",
"0xe9177cbcdd35b8d43660f3077f10413c75f7bab93dad29226f0c50c4509e22ca",
"0x9ace381fcd55581b16f8f95fe0b9d5ea71cebb3d9f21c153bbcc9ed0a68a2637",
"0xf7b419504d27147a9920513beb520a0f66f7b7794bc5dd1e3a276955ccc8b1d1"
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
            version: '^0.5.11'
        }
    }
};
