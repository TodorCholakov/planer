import '@/styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";
import { Analytics } from '@vercel/analytics/react';
import NavbarMenuA from './components/Navbar';
import Footer from './components/Footer';


export default function App({ Component, pageProps }) {

  return (
  
  <NextUIProvider>
  
    <NavbarMenuA />
  
   <Component {...pageProps} />
    <Analytics />
   <Footer />
</NextUIProvider>
 )
}
