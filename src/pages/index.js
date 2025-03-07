import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


export default function Home() {
  const pageContent = (
    // <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex flex-col justify-center items-center focus-in">
      <title>CHIYU</title>
      <Header />
      <Navigation />
      <iframe width="375" height="300" src="https://www.youtube.com/embed/XKd-qdNNko4?si=tN9oWrcq0iItz1Zl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Footer />
    </div>
  );
  return pageContent
}