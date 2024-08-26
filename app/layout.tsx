import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Providers from "@/components/Providers";
// import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={recursive.className}>
                <Navbar />

                <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
                    <div className="flex h-full flex-1 flex-col">
                        {/* <Providers>{children}</Providers> */}
                        {children}
                    </div>
                    <Footer />
                </main>

                {/* <Toaster /> */}
            </body>
        </html>
    );
}
