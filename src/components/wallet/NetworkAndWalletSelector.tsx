import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NetworkAndWalletSelector() {
  const navigate = useNavigate();
  return (
    <Badge
      variant="outline"
      onClick={() => navigate("/wallets")}
      className="bg-card/60 border-border/60 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2.5 hover:bg-card/80 transition-colors cursor-pointer shadow-sm"
    >
      <div className="w-5 h-5 rounded-full bg-linear-to-br from-[#00FFA3] via-[#9945FF] to-[#14F195] flex items-center justify-center">
        <span className="text-xs font-bold text-black">S</span>
      </div>
      <span>Wallet 3</span>
      <ChevronDown className="h-4 w-4 opacity-70"  />
    </Badge>
  );
}