import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'FinFlow',
  description: 'Modern fintech platform for global payments and financial services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <script src="https://www.vibe-vaults.com/widget.js" data-key="a8c073daa41a0d169ed2878a75e65cc8" async></script>
      </body>
    </html>
  )
}
