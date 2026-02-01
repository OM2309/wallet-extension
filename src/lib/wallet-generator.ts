import * as bip39 from 'bip39';
import { Keypair } from '@solana/web3.js';
import { derivePath } from 'ed25519-hd-key';

export interface GeneratedWallet {
  mnemonic: string;
  publicKey: string;     
  secretKey: string;     
}

export default async function generateSolanaWallet(): Promise<GeneratedWallet> {
  // Generate 12-word mnemonic (128 bits entropy)
  const mnemonic = bip39.generateMnemonic(128);

  // Convert mnemonic to seed (with empty passphrase)
  const seed = await bip39.mnemonicToSeed(mnemonic, '');

  // Derive key using standard Solana path m/44'/501'/0'/0'
  const derivedSeed = derivePath("m/44'/501'/0'/0'", seed.toString('hex')).key;

  // Create Solana keypair from derived seed
  const keypair = Keypair.fromSeed(derivedSeed);

  return {
    mnemonic,
    publicKey: keypair.publicKey.toBase58(),
    secretKey: Buffer.from(keypair.secretKey).toString('hex'),
  };
}