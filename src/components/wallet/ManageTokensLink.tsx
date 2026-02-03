import { Settings2 } from "lucide-react";

export default function ManageTokensLink() {
  return (
    <button className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-3 text-sm">
      <Settings2 className="h-4 w-4" />
      Manage token display
    </button>
  );
}