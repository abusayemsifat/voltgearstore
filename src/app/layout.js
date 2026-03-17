import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/components/AuthProvider';
import LenisProvider from '@/components/LenisProvider';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Voltgear - Modern Gadgets Store',
  description: 'Discover the latest tech gadgets at Voltgear',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LenisProvider>
            {children}
            <ScrollToTop />
            <Toaster 
              position="bottom-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </LenisProvider>
        </AuthProvider>
      </body>
    </html>
  );
}