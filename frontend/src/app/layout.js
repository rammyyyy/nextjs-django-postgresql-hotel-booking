import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Bottom from '@/components/common/Bottom';
import "./globals.css";
import { Raleway } from 'next/font/google'

export const metadata = {
  title: "Hotel Managemnet System by RAMMY",
  description: "Hotel Managemnet System by RAMMY",
};

const raleway400 = Raleway({ subsets: ['latin'], weight: '400'})
const raleway200 = Raleway({ subsets: ['latin'], weight: '200'})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway200.className}`}>
        <Header className={`${raleway400.className}`}/>
        {children}
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}
