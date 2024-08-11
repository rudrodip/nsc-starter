import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <header className="sticky top-0 px-0 md:p-2 w-full flex justify-center items-center z-50">
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen w-full max-w-5xl mx-auto">{children}</main>
      <footer id="footer" className="w-full border-t">
        <Footer />
      </footer>
    </>
  );
}
