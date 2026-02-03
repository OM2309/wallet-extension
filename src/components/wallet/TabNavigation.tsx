import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenTab from "@/components/tab/TokenTab";
import DeFiTabEmptyState from "@/components/tab/DeFiTabEmptyState";
import ActivityTabEmptyState from "@/components/tab/ActivityTabEmptyState";
import NFTsTabEmptyState from "@/components/tab/NFTsTabEmptyState";

interface TabNavigationProps {
  defaultValue?: string;
}

export default function TabNavigation({ defaultValue = "tokens" }: TabNavigationProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-card/40 border border-border/40 rounded-xl p-1">
        <TabsTrigger value="tokens" className="text-sm">Tokens</TabsTrigger>
        <TabsTrigger value="defi" className="text-sm">DeFi</TabsTrigger>
        <TabsTrigger value="nfts" className="text-sm">NFTs</TabsTrigger>
        <TabsTrigger value="activity" className="text-sm">Activity</TabsTrigger>
      </TabsList>

      <TabsContent value="tokens">
        <TokenTab />
      </TabsContent>

      <TabsContent value="defi">
        <DeFiTabEmptyState />
      </TabsContent>

      <TabsContent value="nfts">
        <NFTsTabEmptyState />
      </TabsContent>

      <TabsContent value="activity">
        <ActivityTabEmptyState />
      </TabsContent>
    </Tabs>
  );
}