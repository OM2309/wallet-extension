"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Copy, MoreHorizontal, Plus } from "lucide-react";
import popularNetworks from "@/constants/popular-networks";
import generateSolanaWallet from "@/lib/wallet-generator";
import { PublicKey } from "@solana/web3.js";
import type { Wallet } from "@/types";

export default function Wallets() {
  const [wallets, setWallets] = useState<Wallet[]>([]);

  const selectedNetwork = "Solana";
  const solanaIcon = popularNetworks.find((net) => net.id === "solana")?.icon;

  const handleAddWallet = async () => {
    try {
      const result = await generateSolanaWallet();

      const newWallet: Wallet = {
        id: `wallet-${wallets.length + 1}`,
        name: `Wallet ${wallets.length + 1}`,
        address: result.publicKey,
        balance: "$0.00",
        mnemonic: result.mnemonic,     
        privateKey: result.secretKey,  
        publicKeyObj: new PublicKey(result.publicKey),
      };

      setWallets((prev) => [...prev, newWallet]);
    } catch (err) {
      console.error("Failed to generate wallet:", err);
    }
  };



  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col">
      {/* Header – if needed */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Wallets</h2>
        {/* <Button variant="ghost" size="icon"><X className="h-5 w-5" /></Button> */}
      </div>

      {/* Network selector – centered */}
      <div className="mb-8 flex justify-center">
        <Badge
          variant="secondary"
          className="px-5 py-2.5 text-base font-medium gap-2.5 bg-muted/70 hover:bg-muted/90 transition-colors cursor-pointer rounded-full shadow-sm"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
            {solanaIcon || (
              <div className="w-full h-full bg-linear-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
            )}
          </div>
          <span>{selectedNetwork}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Badge>
      </div>

      {/* Wallet list */}
      <div className="space-y-4 flex-1">
        {wallets.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            No wallets yet. Add your first wallet.
          </div>
        ) : (
          wallets.map((wallet) => (
            <div
              key={wallet.id}
              className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all border border-transparent hover:border-blue-500/40"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  {solanaIcon || (
                    <div className="w-full h-full bg-linear-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                      S
                    </div>
                  )}
                </div>

                <div>
                  <div className="font-medium">{wallet.name}</div>
                  <div className="flex items-center gap-2 text-xs  mt-0.5">
                    <span>{wallet.publicKeyObj?.toBase58().slice(0, 8) + '...' + wallet.publicKeyObj?.toBase58().slice(-8) || wallet.address.slice(0, 8) + '...' + wallet.address.slice(-8)}</span>
                    <Button variant="ghost" size="icon" className="h-5 w-5 cursor-pointer bg-transparent p-4">
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                  </div>

                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-medium text-muted-foreground">{wallet.balance}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add new wallet button */}
      <div className="mt-6">
        <Button
          variant="outline"
          className="w-full h-14 text-base font-medium rounded-2xl border-dashed border-primary/50 hover:border-primary/70 text-primary hover:text-primary/90 transition-all"
          onClick={handleAddWallet}
        >
          <Plus className="h-5 w-5 mr-2" />
          Add new Solana wallet
        </Button>
      </div>
    </div>
  );
}