import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Vault, Market, PoolDetail } from './pages'
import Layout from './Layout'
import { ScrollToTop } from './utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { wagmiConfig } from './wagmi'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme  } from '@rainbow-me/rainbowkit'
import { Toaster } from 'react-hot-toast'

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

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "rgba(17, 24, 39, 0.9)", // glassy gray-900
                  color: "#fff",
                  borderRadius: "1rem", // rounded-2xl
                  padding: "20px 24px", // bigger spacing
                  boxShadow: "0 12px 32px rgba(0,0,0,0.45)", // deeper shadow
                  fontFamily: "Saira, sans-serif",
                  fontSize: "1rem", // larger base font
                  maxWidth: "420px", // wider
                  minHeight: "80px", // taller
                  lineHeight: "1.5",
                },
                success: {
                  iconTheme: {
                    primary: "#10b981", // emerald-500
                    secondary: "#111827",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#ef4444", // red-500
                    secondary: "#111827",
                  },
                },
                loading: {
                  iconTheme: {
                    primary: "#3b82f6", // blue-500
                    secondary: "#111827",
                  },
                },
              }}
            />

          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
