import { Inter, Lusitana} from 'next/font/google';
import localFont from 'next/font/local'; 

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});


// Fonte local Bitcount
export const bitcount = localFont({
  src: [
    {
      path: '../../public/fonts/Bitcount/BitcountGridSingle-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Bitcount/BitcountGridSingle-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bitcount', // opcional, útil se quiser usar via Tailwind
});