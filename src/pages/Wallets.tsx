"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Copy, MoreHorizontal, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import popularNetworks from "@/constants/popular-networks";
import { useState } from "react";

export default function Wallets() {
  const selectedNetwork = "Solana";
  const [wallets, setWallets] = useState([
    {
      id: "wallet2",
      name: "Wallet 2",
      address: "AHor...W4LA",
      balance: "$0.00",
    },
    {
      id: "wallet3",
      name: "Wallet 3",
      address: "3gbb...pVcT",
      balance: "$0.00",
    },
  ]);

  const solanaIcon = popularNetworks.find((net) => net.id === "solana")?.icon;

  const handleAddWallet = () => {
    const newWallet = {
      id: `wallet${wallets.length + 1}`,
      name: `Wallet ${wallets.length + 1}`,
      address: `${wallets.length + 1}gbb...pVcT`,
      balance: "$0.00",
    };
    setWallets([...wallets, newWallet]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">

      {/* Network selector */}
      <div className="mb-6 w-full mx-auto flex items-center justify-center">
        <Badge
          variant="secondary"
          className="px-4 py-2 text-base font-medium gap-2 bg-muted/70 hover:bg-muted/90 transition-colors cursor-pointer rounded-full"
        >
          <div className="w-3 h-3 rounded-full bg-linear-to-br  flex items-center justify-center text-white text-xs font-bold">
            {solanaIcon}
          </div>
          {selectedNetwork}
          <span className="text-muted-foreground ml-1"> <ChevronDown className="mx-auto" /> </span>
        </Badge>
      </div>

      {/* Wallet list */}
      <div className="space-y-3">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* Solana icon */}
              <div className="w-4 h-4 rounded-full bg-linear-to-br  flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {solanaIcon}
              </div>

              <div>
                <div className="font-medium">{wallet.name}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>ab {wallet.address}</span>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-medium text-muted-foreground">{wallet.balance}</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mx-auto w-full flex items-center justify-center text-primary hover:text-primary/90 py-5 px-4 rounded-xl mt-6 text-sm cursor-pointer "
        onClick={handleAddWallet}
      >
        <Plus className="h-5 w-5 mr-2" />
        Add new Solana wallet
      </div>
    </div>
  );
}