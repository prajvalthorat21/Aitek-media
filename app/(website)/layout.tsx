import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
      <Footer />
    </>
  );
}