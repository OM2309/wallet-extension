interface TokenItemProps {
  symbol: string;
  icon: React.ReactNode;
  amount: string;
  value: string;
  change?: string;
}

export default function TokenList({ symbol, icon, amount, value }: TokenItemProps) {
  return (
    <div className="flex items-center justify-between bg-card/40 border border-border/40 rounded-xl p-4">
      <div className="flex items-center gap-3.5">
        {icon}
        <div>
          <div className="font-medium">{symbol}</div>
          <div className="text-sm text-muted-foreground">{amount}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium">{value}</div>
        <div className="text-xs text-muted-foreground">{value}</div>
      </div>
    </div>
  );
}