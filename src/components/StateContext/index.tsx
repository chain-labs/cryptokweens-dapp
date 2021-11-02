/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';
import Web3 from 'web3';
import { createRaribleSdk } from '@rarible/protocol-ethereum-sdk';
import { Web3Ethereum } from '@rarible/web3-ethereum';

export const StateContext = React.createContext({
	provider: null,
	accounts: [],
	setProvider: null,
	setAccounts: null,
	sdk: null,
});

const NETWORK = 'rinkeby';

const StateProvider = ({ children }) => {
	const [provider, setProvider] = React.useState(null);
	const [accounts, setAccounts] = React.useState([]);
	const [sdk, setSdk] = React.useState(null);

	useEffect(() => {
		if (process.browser) {
			// @ts-ignore
			const { ethereum } = window;
			if (ethereum && ethereum.isMetaMask) {
				// @ts-ignore
				const web3 = new Web3(ethereum);
				setProvider(provider);
				provider.eth.getAccounts().then((accounts) => {
					console.log('accounts', accounts);
					setAccounts(accounts);
				});

				const raribleSdk = createRaribleSdk(new Web3Ethereum({ web3 }), NETWORK);
				setSdk(raribleSdk);
				ethereum.on('accountsChanged', (accounts) => {
					setAccounts(accounts);
					console.log('accounts changed', accounts);
				});
			}
		}
	}, []);

	return (
		<StateContext.Provider
			value={{
				provider: provider,
				setProvider: setProvider,
				accounts: accounts,
				setAccounts: setAccounts,
				sdk: sdk,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export default StateProvider;
