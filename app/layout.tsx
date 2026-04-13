import type {Metadata} from 'next';
import './globals.css';
import { Outfit, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
});

export const metadata: Metadata = {
  title: 'Harshada Samant | Business Intuitive & Energy Alchemist',
  description: 'Identify and shift the deeper patterns shaping your life. Align with your soul blueprint.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans antialiased", outfit.variable, cormorant.variable, greatVibes.variable)}>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
