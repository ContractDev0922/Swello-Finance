require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

const projectId = "d0fb6991f2531e92d0b3bf75";

const privateKey = "0d4ebf0fb65ef1f73db776d4a4b86538dff2d2609c3b46a59d4732ad3f4c5564";
const privateKey2 = "db03b3c7610094df2ad8d5a95148569b47d18699c8b0d4dc9a11017d5f542555";
const privateKey3 = "44459b0abffcd7688e8964b2f42b3e0b9b2ec0cf7b7319bd4e02de045c00745c";
const apiKeyForEtherscan = "5BBU575ZHSTE1MI38XTSEDA91QW9DEHSPG";
// const apiKeyForEtherscan = "PJ2V5H4XH4P3PYXJE5JUM6VQRPRHQ56HDV";
const optimizerEnabled = true;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  abiExporter: {
    path: './abis',
    clear: true,
    flat: true,
  },
  etherscan: {
    apiKey: apiKeyForEtherscan,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
  },
  mocha: {
    timeout: 30000,
  },
  namedAccounts: {
    AutoLiquidityReceiver: {
      56: '0xF52c9341dC4ee92c321Fa11e01E3a6303f9bBe00',
      97: '0xF52c9341dC4ee92c321Fa11e01E3a6303f9bBe00',
      1337: '0xF52c9341dC4ee92c321Fa11e01E3a6303f9bBe00'
    },
    TreasuryReceiver: {
      56: '0x6560eD767D6003D779F60BCCD2d7B168Cd4a1583',
      97: '0x6560eD767D6003D779F60BCCD2d7B168Cd4a1583',
      1337: '0x6560eD767D6003D779F60BCCD2d7B168Cd4a1583'
    },
    SafetyFundReceiver: {
      56: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1',
      97: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1',
      1337: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1'
    },
    CharityReceiver: {
      56: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1',
      97: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1',
      1337: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1'
    },    
    LiquidityReceiver: {
      56: '0xF52c9341dC4ee92c321Fa11e01E3a6303f9bBe00',
      97: '0xF52c9341dC4ee92c321Fa11e01E3a6303f9bBe00',
      1337: '0xF52c9341dC4ee92c321Fa11e01E3a6303f9bBe00'
    },
    Router: {
      56: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
      97: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
      1337: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3'
    },
    BUSD: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '0x5B544B2FF7d05A86d3a3a2774AD985C793855E5b'
    },
    SWELLO: {
      56: '0x115b36A1AE31cC5dd091bD9567D31e7a8BD301C5',
      97: '0x115b36A1AE31cC5dd091bD9567D31e7a8BD301C5'
    }
  },
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
     chainId: 97, //bsctestnet
     allowUnlimitedContractSize: true
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    polygonmainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mainnet`,
      accounts: [privateKey, privateKey2, privateKey3]
    },
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mumbai`,
      accounts: [privateKey, privateKey2, privateKey3]
    },
    ethermainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/eth/mainnet`,
      accounts: [privateKey, privateKey2, privateKey3]
    },
    kovan: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/eth/kovan`,
      accounts: [privateKey, privateKey2, privateKey3]
    },
    rinkeby: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/eth/rinkeby`,
      accounts: [privateKey, privateKey2, privateKey3]
    },
    bscmainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/bsc/mainnet`,
      accounts: [privateKey, privateKey2, privateKey3]
    },
    fantom: {
      url: "https://rpc.ftm.tools/",
      accounts: [privateKey, privateKey2, privateKey3]
    },
    fantomtestnet: {
      url: "https://rpc.testnet.fantom.network",
      accounts: [privateKey, privateKey2, privateKey3]
    },
    bsctestnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/bsc/testnet`,
      accounts: [privateKey, privateKey2, privateKey3]
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.8.2',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: optimizerEnabled,
            runs: 1,
          },
          evmVersion: 'berlin',
        }
      }
    ],
  },
}

