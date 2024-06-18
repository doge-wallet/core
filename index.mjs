
import * as bitcoin from 'bitcoinjs-lib';
import { BIP32Factory, } from 'bip32';
import { generateMnemonic, mnemonicToSeedSync, } from 'bip39';
import eccObj from './utils/ecc.mjs';
import defaults from './defaults.mjs';

bitcoin.initEccLib(eccObj);

const bip32Obj = BIP32Factory(eccObj);


function fromMnemonic(mnemonic) {
    let { path, network, } = defaults;

    let seed = mnemonicToSeedSync(mnemonic);
    let master = bip32Obj.fromSeed(seed, network);
    let keypair = master.derivePath(path);


    let doge_data = bitcoin.payments.p2pkh({
        'pubkey': keypair.publicKey,
        'network': network,
    });

    let address = doge_data.address;
    let privateKey = keypair.toWIF();
    let publicKey = keypair.publicKey.toString('hex');




    return {
        address,
        privateKey,
        publicKey,
    };
}


function generate() {
    let mnemonic = generateMnemonic(); //助记词。
    let { address, privateKey, publicKey, } = fromMnemonic(mnemonic);

    return { address, privateKey, publicKey, mnemonic, };
}



export {
    generate,
    fromMnemonic,
};