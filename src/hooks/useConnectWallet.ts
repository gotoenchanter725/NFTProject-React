// import Web3 from 'web3'

import { useWeb3React } from '@web3-react/core'
import { ConnectorNames } from '../types';
import { connectorsByName } from '../utils/web3React';

const useConnectWallet = () => {
    const { activate } = useWeb3React()
    const connectMetaMask = (connectorId: ConnectorNames) => {
        console.log(connectorId)
        const connector = connectorsByName[connectorId]
        if (connector) {
          activate(connector, (error: Error) => alert(error.name+' '+error.message))
        } else {
          alert('The connector config is wriong')
        }
    }

    return {connectMetaMask};
}

export default useConnectWallet;