import { 
  SiSolana, 
  SiEthereum, 
  SiSui, 
  SiBnbchain  
} from 'react-icons/si';


const popularNetworks = [
  { id: 'solana',   name: 'Solana',   icon: <SiSolana className="text-[#00FFA3] text-4xl" /> },   
  { id: 'sui',      name: 'Sui',      icon: <SiSui className="text-[#4DA2FF] text-4xl" /> },      
  { id: 'ethereum', name: 'Ethereum', icon: <SiEthereum className="text-[#627EEA] text-4xl" /> },
  { 
    id: 'bnb', 
    name: 'BNB Chain', 
    icon: <SiBnbchain className="text-[#F0B90B] text-4xl" />   
  },
];

export default popularNetworks;
