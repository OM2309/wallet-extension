"use client";

import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WalletSetupLoading() {
  const logoSrc = "/images/A1.png";

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/setup-complete");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className=" bg-black flex flex-col items-center justify-center px-5 h-screen">
      <div className="flex flex-col items-center gap-10">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute z-10 w-20 h-20 rounded-full overflow-hidden bg-black/80 border border-zinc-700/60 shadow-2xl flex items-center justify-center">
            <img
              src={logoSrc}
              alt="A1 Wallet"
              className="w-14 h-14 object-contain"
            />
          </div>
          <TailSpin
            visible={true}
            height="128"
            width="128"
            color="#a855f7"
            ariaLabel="tail-spin-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>


        <div className="text-center space-y-3">
          <h1 className="text-2xl font-medium text-white tracking-tight">
            Setting up your wallet...
          </h1>
          <p className="text-zinc-400 text-base">
            This usually takes just a few seconds
          </p>
        </div>
      </div>
    </div>
  );
}
