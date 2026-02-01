import { Route, Routes } from "react-router-dom";
import Welcome from "@/pages/Welcome";
import NetworkSelection from "@/pages/NetworkSelection";
import SetupPassword from "@/pages/SetupPassword";
import WalletSetupLoading from "@/pages/WalletSetupLoading";
import SetupComplete from "@/pages/SetupComplete";

function App() {
  return (
    <div className="h-full w-full bg-background text-foreground antialiased dark">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/network-selection"
          element={<NetworkSelection />}
        />
        <Route
          path="/setup-password"
          element={<SetupPassword />}
        />
        <Route
          path="/wallet-setup-loading"
          element={<WalletSetupLoading />}
        />
        <Route
          path="/setup-complete"
          element={<SetupComplete />}
        />
      </Routes>
    </div>
  );
}

export default App;
