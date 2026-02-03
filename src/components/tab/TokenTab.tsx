
import BalanceSection from "@/components/wallet/BalanceDisplay";
import ActionButtons from "@/components/wallet/ActionButtons";
import TokenList from "@/components/wallet/TokenList";
import ManageTokensLink from "@/components/wallet/ManageTokensLink";
const TokenTab = () => {
    return (
        <main className="flex-1 px-4 pt-4 pb-24">
            <div className="mt-6 space-y-8">
                <BalanceSection />
                <ActionButtons />
                <div className="space-y-3">
                    <TokenList
                        symbol="Solana"
                        icon={<div className="w-10 h-10 rounded-full bg-linear-to-br from-[#00FFA3] to-[#9945FF] flex items-center justify-center text-black font-bold text-xl">S</div>}
                        amount="0 SOL"
                        value="$0.00"
                        change="$0.00"
                    />

                </div>

                <ManageTokensLink />
            </div>
        </main>
    )
}

export default TokenTab