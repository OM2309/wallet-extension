import { PublicKey } from "@solana/web3.js";

export interface Wallet {
  id: string;
  name: string;
  address: string;           
  balance: string;
  mnemonic?: string;         
  privateKey?: string;       
  publicKeyObj?: PublicKey;  
}