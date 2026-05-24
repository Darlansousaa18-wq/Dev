```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Compras",
  description: "Aplicativo simples para organizar suas compras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          
          {/* Header */}
          <header className="bg-green-600 text-white shadow-md">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                🛒 Lista de Compras
              </h1>

              <button className="bg-white text-green-600 px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition">
                Nova Lista
              </button>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              
              {/* Welcome */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-2">
                  Organize suas compras
                </h2>

                <p className="text-gray-600">
                  Crie listas, marque itens comprados e acompanhe tudo de forma simples.
                </p>
              </section>

              {/* Example List */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    Minha Lista
                  </h3>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
                    + Adicionar Item
                  </button>
                </div>

                <ul className="space-y-3">
                  {[
                    "Arroz",
                    "Feijão",
                    "Leite",
                    "Pão",
                    "Café",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-5 h-5 accent-green-600"
                        />

                        <span>{item}</span>
                      </div>

                      <button className="text-red-500 hover:text-red-700 transition">
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
              © 2026 Lista de Compras — Desenvolvido por Darlan
            </div>
          </footer>
        </div>

        {children}
      </body>
    </html>
  );
}
```
