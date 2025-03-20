
import { Home } from '../pages/home';
import { ProductProvider } from './providers/product/product';
import { ReactQueryClient } from './providers/react-query';
import { RedeemProvider } from './providers/redeem/redeem';

import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App() {
  return (
    <ReactQueryClient>
      <RedeemProvider>
        <ProductProvider>
          <Home />
          <SpeedInsights />
        </ProductProvider>
      </RedeemProvider>
    </ReactQueryClient>
  );
}


