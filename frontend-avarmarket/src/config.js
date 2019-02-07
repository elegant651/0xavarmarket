const MyNFT = require('./contracts/MyNFT')
const Auctions = require('./contracts/Auctions')

export default {
	MYNFT_CA: '0x607d17f74069af1f3c48edea4e6c7b12d22cf734',
	AUCTIONS_CA: '0x1c5e9f784a52dc9999a85b30042772544e748176',

	MYNFT_ABI: MyNFT.abi,
	AUCTIONS_ABI: Auctions.abi,

	GAS_AMOUNT: 500000
}
