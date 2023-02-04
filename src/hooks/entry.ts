import { Config, ConnectorNames } from '../types'

export const connections: Config[] = [
    {
        id  : 0,
        name: 'Metamask',
        connectorId: ConnectorNames.Injected,
    },
    {
        id  : 1,
        name: 'WalletConnect',
        connectorId: ConnectorNames.WalletConnect,
    },
    // {
    //     id  : 2,
    //     name: 'Coinbase Wallet',
    //     connectorId: ConnectorNames.Injected,
    // },
    // {
    //     id  : 3,
    //     name: 'Fortmatic',
    //     connectorId: ConnectorNames.Injected,
    // },
    // {
    //     id  : 4,
    //     name: 'Portis',
    //     connectorId: ConnectorNames.Injected,
    // }
];

export const connectorLocalStorageKey = "connectorId";