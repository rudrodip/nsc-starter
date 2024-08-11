import { ThemeProvider } from "@/components/theme/provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

type RootProvider = {
  children: React.ReactNode;
};

export const RootProvider: React.FC<RootProvider> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster position="top-right" richColors />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};
