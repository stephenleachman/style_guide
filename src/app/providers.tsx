// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { useEffect, useState } from 'react';

export function Providers({children}: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
    // Ensure the component is only rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a fallback while waiting for hydration to complete
    return null;
  }

  
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}