
# @dogewallet/core
------------------------------------------------

随机生成狗狗币钱包的助记词和对应的私钥、地址，生成过程可断网离线操作。

也可以从已有的助记词解析出对应的私钥和地址。


``` js

import { generate, fromMnemonic, } from './index.mjs';

//-----------------
//生成新的助记词和钱包地址。
let data = generate();

console.log(data);

// //打印出类似这样结构：
// {
//   address: 'DRt7NQEgN4ZMDb3BbLiaAPeSPKvqvjsVsC',
//   privateKey: 'QVp8tp7BZRphU6MJP151Dubqp8CCBroXH1q3aGQr4kCHBNMtjSoc',
//   publicKey: '0210b3e8fd2f8429ab3d23a27bc894cbd5c1c9b5815f10700bb34b9bdddf29cb0f',
//   mnemonic: 'pluck country surface bargain shadow dial lumber vacant arch grace level scissors'
// }

//-----------------
//从已有的助记词进行解析。
data = fromMnemonic('pluck country surface bargain shadow dial lumber vacant arch grace level scissors');

console.log(data);

// //打印出类似这样结构：
// {
//   address: 'DRt7NQEgN4ZMDb3BbLiaAPeSPKvqvjsVsC',
//   privateKey: 'QVp8tp7BZRphU6MJP151Dubqp8CCBroXH1q3aGQr4kCHBNMtjSoc',
//   publicKey: '0210b3e8fd2f8429ab3d23a27bc894cbd5c1c9b5815f10700bb34b9bdddf29cb0f',
// }


```