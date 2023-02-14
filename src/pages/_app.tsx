import { Plus_Jakarta_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--plus-jakarta-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={plusJakartaSans.variable}>
      <Component {...pageProps} />
    </div>
  );
}
