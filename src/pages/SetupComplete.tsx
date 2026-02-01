"use client";

import { Button } from "@/components/ui/button";
import { Puzzle, Pin, HelpCircle, Twitter, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SetupCompletePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex flex-col px-6 py-6 text-foreground h-screen"> 
      <div className="mt-6 mb-6 mx-auto max-w-sm w-full">
        <div className="bg-white border border-blue-500/30 rounded-2xl p-5 text-center">
          <h2 className="text-lg font-semibold mb-2 text-black">
            Pin the A1 Extension
          </h2>
          <p className="text-sm text-black">
            Click{" "}
            <Puzzle className="inline-block w-4 h-4 text-black" /> and{" "}
            <Pin className="inline-block w-4 h-4 text-black" />
          </p>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
        <div className="space-y-3">
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight">
            You're all good!
          </h1>

          <p className="text-muted-foreground max-w-xs text-xs mx-auto">
            Open A1 with{" "}
            <kbd className="px-2 py-1 bg-muted rounded text-sm font-medium">
              Shift
            </kbd>{" "}
            +{" "}
            <kbd className="px-2 py-1 bg-muted rounded text-sm font-medium">
              Alt
            </kbd>{" "}
            +{" "}
            <kbd className="px-2 py-1 bg-muted rounded text-sm font-medium">
              B
            </kbd>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-sm">
          <Button
            variant="outline"
            className="h-12 px-4 gap-2 border-border rounded-2xl hover:text-white"
            asChild
          >
            <a
              href="https://backpack.app/support"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <HelpCircle className="w-5 h-5" />
              Support
            </a>
          </Button>

          <Button
            variant="outline"
            className="h-12 px-4 gap-2 border-border rounded-2xl hover:text-white"
            asChild
          >
            <a
              href="https://x.com/Backpack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
              @A1
            </a>
          </Button>

          <Button
            variant="outline"
            className="h-12 px-4 gap-2 border-border rounded-2xl hover:text-white"
            asChild
          >
            <a
              href="https://discord.gg/backpack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5" />
              Discord
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="mt-auto max-w-sm mx-auto w-full pt-4">
        <Button
          type="button"
          onClick={() => navigate("/wallets")}
          className="cursor-pointer w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
        >
          Open A1
        </Button>
      </div>
    </div>
  );
}
