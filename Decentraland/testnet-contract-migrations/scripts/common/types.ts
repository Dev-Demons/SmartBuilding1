export enum ContractName {
  MANAToken,
  LANDRegistry,
  LANDProxy,
  Marketplace,
  MarketplaceProxy,
  EstateRegistry,
  EstateProxy,
  ERC721Bid,
  ExclusiveMasksCollection,
  DCLRegistrar,
  DCLControllerV2,
  RentalsProxyAdmin,
  RentalsProxy,
  RentalsImplementation,
  VestingImpl,
  PeriodicTokenVestingImpl,
  VestingFactory,
  BatchVesting,
  OwnableBatchVestingImpl,
  MinimalProxyFactory,
  NAMEDenylist,
  Catalyst,
  POIAllowlist,
  // Polygon contracts
  MarketplaceV2,
  RoyaltiesManager,
  CollectionImplementation,
  CollectionFactoryV3,
  CollectionManager,
  CollectionStore,
  Forwarder,
  Committee,
  Rarities,
  RaritiesWithOracle,
  ChainlinkOracle,
  DummyDataFeed,
  UpgradeableBeacon,
  MetaTxForwarder,
  POI,
  TPR,
  TPRAdmin,
  TPRProxy,
  Checker
}

export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
  GANACHE = 1337,
  MATIC = 137,
  MUMBAI = 80001,
  AMOY = 80002
}

export const MANAToken: Record<ChainId, string> = {
  [ChainId.MAINNET]: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
  [ChainId.SEPOLIA]: '0xfa04d2e2ba9aec166c93dfeeba7427b2303befa9',
  [ChainId.GOERLI]: '0xe7fDae84ACaba2A5Ba817B6E6D8A2d415DBFEdbe',
  [ChainId.MATIC]: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
  [ChainId.MUMBAI]: '0x882Da5967c435eA5cC6b09150d55E8304B838f45',
  [ChainId.AMOY]: '0x7AD72b9f944eA9793cf4055D88F81138Cc2C63a0',
  [ChainId.GANACHE]: '',
}
