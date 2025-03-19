import AuthProvider from "@/components/SessionProvider";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Gestion de Projet",
    description: "Application de gestion de projet avec Gantt et Trello",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        <AuthProvider>
            <div className="p-5">
                <Header />
                {children}
            </div>
        </AuthProvider>
        </body>
        </html>
    );
}
