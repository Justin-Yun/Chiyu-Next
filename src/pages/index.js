import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';


export default function Home() {
  const pageContent = (
    <div className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
  return pageContent
}