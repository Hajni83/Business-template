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
        <script src="https://www.vibe-vaults.com/widget.js" data-key="ab8e954c712c1c1c027f707ec2c90737" async></script>
      </body>
    </html>
  )
}
