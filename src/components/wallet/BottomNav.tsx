import { Button } from "@/components/ui/button";
import { Wallet, ArrowLeftRight, Compass } from "lucide-react";

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-background/95 backdrop-blur-lg border-t border-border/40 py-2 px-4 z-50">
      <div className="flex justify-around max-w-md mx-auto">
        <Button variant="ghost" className="flex flex-col items-center gap-1 text-primary">
          <Wallet className="h-6 w-6" />
          <span className="text-xs font-medium">Portfolio</span>
        </Button>

        <Button variant="ghost" className="flex flex-col items-center gap-1 text-muted-foreground">
          <ArrowLeftRight className="h-6 w-6" />
          <span className="text-xs">Swap</span>
        </Button>

        <Button variant="ghost" className="flex flex-col items-center gap-1 text-muted-foreground">
          <Compass className="h-6 w-6" />
          <span className="text-xs">Explore</span>
        </Button>
      </div>
    </footer>
  );
}