import { Button } from "@/components/ui/button";
import { Wallet, ArrowDownToLine, ArrowUpFromLine, ArrowLeftRight } from "lucide-react";

export default function ActionButton() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {[
        { icon: Wallet, label: "Cash", color: "text-blue-400" },
        { icon: ArrowDownToLine, label: "Receive", color: "text-emerald-400" },
        { icon: ArrowUpFromLine, label: "Send", color: "text-rose-400" },
        { icon: ArrowLeftRight, label: "Swap", color: "text-violet-400" },
      ].map((item, i) => (
        <Button
          key={i}
          variant="outline"
          className="h-20 flex flex-col items-center justify-center gap-1.5 bg-card/40 border-border/40 hover:bg-card/70 transition-colors rounded-xl"
        >
          <item.icon className={`h-6 w-6 ${item.color}`} />
          <span className="text-xs font-medium">{item.label}</span>
        </Button>
      ))}
    </div>
  );
}