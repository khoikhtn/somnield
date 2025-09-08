import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Vault, Market, PoolDetail } from './pages'
import Layout from './Layout'
import { ScrollToTop } from './utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { wagmiConfig } from './wagmi'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme  } from '@rainbow-me/rainbowkit'

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          modalSize="compact" 
          theme={darkTheme({
            borderRadius: 'medium',
          })}
        >
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/guide" element={<></>} />
                <Route path="/vault" element={<Vault />} />
                <Route path="/market" element={<Market />} />
                <Route path="pools/:pair/:address" element={<PoolDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
