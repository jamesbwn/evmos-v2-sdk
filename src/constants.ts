import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x81BC50a2df9cE424843e3c17110E1ab1FedCD4b8' // Diffu Factory on TestNet of EVMOS
// export const FACTORY_ADDRESS = '0x6aBdDa34Fb225be4610a2d153845e09429523Cd2' // Diffu Factory on Mainnet

export const INIT_CODE_HASH = '0xa192c894487128ec7b68781ed7bd7e3141d1718df9e4e051e0124b7671d9a6ef'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
