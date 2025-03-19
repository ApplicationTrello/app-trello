"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();

    return (
        <div className="p-5">
            <header className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-bold">Gestion de Projet</h1>
                {session ? (
                    <div>
                        <span className="mr-4">Bonjour, {session.user?.name}</span>
                        <button onClick={() => signOut()} className="bg-red-500 text-white px-3 py-1 rounded">
                            Déconnexion
                        </button>
                    </div>
                ) : (
                    <button onClick={() => signIn("google")} className="bg-blue-500 text-white px-3 py-1 rounded">
                        Connexion avec Google
                    </button>
                )}
            </header>
            {children}
        </div>
    );
}
