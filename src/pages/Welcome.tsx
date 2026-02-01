import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  const [agreed, setAgreed] = useState(false);

  const handleNavigate = () => {
    navigate("/network-selection");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-foreground">
      <div className="mb-12">
        <img src="/images/A1.png" alt="A1 Wallet" className="h-24 w-24" />
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to A1 Wallet
        </h1>
        <p className="text-base text-muted-foreground max-w-sm">
          You'll use this wallet to send and receive crypto and NFTs
        </p>
      </div>

      <div className="w-full max-w-sm flex items-start space-x-3 mb-8">
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked: boolean) => setAgreed(!!checked)}
          className="cursor-pointer border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-1 focus:ring-primary/50"
        />
        <Label
          htmlFor="terms"
          className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
        >
          I agree to the{" "}
          <a
            href="#"
            className="text-primary hover:underline hover:text-primary/90 transition-colors"
          >
            Terms of Service
          </a>{" "}
        </Label>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <Button
          disabled={!agreed}
          onClick={handleNavigate}
          className="cursor-pointer w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all disabled:opacity-60 disabled:shadow-none"
        >
          Create a new wallet
        </Button>

        <Button
          variant="outline"
          className="cursor-pointer w-full h-14 text-lg font-semibold rounded-2xl border-border text-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          I already have a wallet
        </Button>
      </div>

      <p className="mt-10 text-xs text-muted-foreground/80 text-center max-w-xs">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
}
