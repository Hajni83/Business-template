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
        <script src="https://www.vibe-vaults.com/widget.js" data-key="5c8c45d68ce0d3956ab01cea4eaae9d5" async></script>
      </body>
    </html>
  )
}
