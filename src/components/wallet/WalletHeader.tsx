import { Button } from "@/components/ui/button";
import NetworkAndWalletSelector from "./NetworkAndWalletSelector";

export default function WalletHeader() {
  return (
    <header className="px-4 pt-5 pb-3 flex items-center justify-between border-b border-border/40">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-semibold text-lg shadow-sm">
          A1
        </div>
      </div>

      {/* Center selector */}
      <NetworkAndWalletSelector />

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </Button>
      </div>
    </header>
  );
}