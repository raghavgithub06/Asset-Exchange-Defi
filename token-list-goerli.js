import { ethIcon, usdcIcon, daiIcon, linkIcon, btcIcon } from "./assets";

// For localhost
import {
  ETHAddress,
  DAITokenAddress,
  USDCTokenAddress,
  LINKTokenAddress,
  BTCTokenAddress,
} from "./addresses";

export const token = [
  {
    image: ethIcon,
    name: "ETH",
    address: ETHAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },

  {
    image: daiIcon,
    name: "DAI",
    address: DAITokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: usdcIcon,
    name: "USDC",
    address: USDCTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: linkIcon,
    name: "LINK",
    address: LINKTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: btcIcon,
    name: "BTC",
    address: BTCTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
];
