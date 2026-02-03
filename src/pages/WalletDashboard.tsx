"use client";

import WalletHeader from "@/components/wallet/WalletHeader";

import BottomNavigation from "@/components/wallet/BottomNav";
import TabNavigation from "@/components/wallet/TabNavigation";

export default function WalletDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <WalletHeader />
      <TabNavigation defaultValue="tokens" />
      <BottomNavigation />
    </div>
  );
}