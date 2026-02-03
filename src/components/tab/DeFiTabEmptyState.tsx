export default function DeFiTabEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-3">
        No Positions
      </h3>

      <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
        This wallet has no DeFi positions yet.
      </p>

      <p className="text-muted-foreground/70 text-xs mt-4">
        Explore protocols on Solana to start earning yield or providing liquidity.
      </p>
    </div>
  );
}