export const metadata = { title: "Emerald Notaries", description: "Mobile Notary & Loan Signing" };
import "../styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
