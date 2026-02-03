import { RefreshCw } from "lucide-react";

export default function BalanceDisplay() {
  return (
    <div className="text-center py-10">
      <div className="text-6xl font-bold tracking-tighter mb-2">
        $0.00
      </div>
      <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm">
        <span>$0.00</span>
        <span className="text-emerald-400 font-medium">0%</span>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}