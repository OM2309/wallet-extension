import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import popularNetworks from "@/constants/popular-networks";
import { useNavigate } from "react-router-dom";

export default function NetworkSelectionPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleNetwork = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id],
    );
  };

  const isSelected = (id: string) => selected.includes(id);

  const handleNavigate = () => {
    navigate("/setup-password");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 text-foreground">
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Select one or more networks
        </h1>
        <p className="text-base text-muted-foreground max-w-md">
          You can always change this later.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-10">
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
            {popularNetworks.map((net) => (
              <label
                key={net.id}
                htmlFor={net.id}
                className={`
                  flex flex-col items-center justify-center gap-2 p-2 rounded-2xl border 
                  cursor-pointer transition-all select-none
                  ${
                    isSelected(net.id)
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-border hover:border-primary/50 bg-card/50"
                  }
                `}
              >
                <div className="relative">
                  <Checkbox
                    id={net.id}
                    checked={isSelected(net.id)}
                    onCheckedChange={() => toggleNetwork(net.id)}
                    className="absolute  hidden -top-1 -right-4 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />

                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xl">
                    {net.icon}
                  </div>
                </div>
                <span className="text-sm font-medium">{net.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action area */}
      <div className="w-full max-w-sm mt-12 space-y-4">
        <Button
          disabled={selected.length === 0}
          onClick={handleNavigate}
          className="cursor-pointer w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all disabled:opacity-60 disabled:shadow-none"
        >
          {selected.length > 0 ? "Set up wallet" : "Select networks"}
        </Button>
      </div>
    </div>
  );
}
