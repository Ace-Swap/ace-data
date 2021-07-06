module.exports = {
    graphAPIEndpoints: {
        masterchef: 'https://api.thegraph.com/subgraphs/name/aceswap/master-chef',
        bar: 'https://api.thegraph.com/subgraphs/name/aceswap/ace-bar',
        timelock: 'https://api.thegraph.com/subgraphs/name/aceswap/ace-timelock',
        maker: 'https://api.thegraph.com/subgraphs/name/aceswap/ace-maker',
        exchange: 'https://api.thegraph.com/subgraphs/name/aceswap/exchange',
        exchange_v1: 'https://api.thegraph.com/subgraphs/name/jiro-ono/aceswap-v1-exchange',
        blocklytics: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
        lockup: 'https://api.thegraph.com/subgraphs/name/matthewlilley/lockup',
    },

    graphWSEndpoints: {
        bar: 'wss://api.thegraph.com/subgraphs/name/aceswap/ace-bar',
        exchange: 'wss://api.thegraph.com/subgraphs/name/aceswap/exchange',
        blocklytics: 'wss://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
    },

    barAddress: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
    makerAddress: "0xe11fc0b43ab98eb91e9836129d1ee7c3bc95df50",
    chefAddress: "0xed9a65ed27b69667cde22f1ac834ae0db9632c16",
    aceAddress: "0x550d07A5c1591331598E4e3A38a8C32d41EFc7B7",
    factoryAddress: "0x47Ee213D373f60a0D6A8C58911400ce354406b57",

    TWENTY_FOUR_HOURS: 86400,
}
