export default function NFTsTabEmptyState() {
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-3">
        No NFTs Yet
      </h3>

      <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
        Your NFT collection will appear here once you receive or purchase digital collectibles.
      </p>

      <p className="text-muted-foreground/70 text-xs mt-4">
        Explore marketplaces on Solana to start collecting.
      </p>
    </div>
  );
}