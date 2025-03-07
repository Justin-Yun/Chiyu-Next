import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Particles from '@/components/Particles';

export default function Home() {
  const pageContent = (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles particleCount={300} speed={0.2} />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen">
        <title>CHIYU</title>
        <Header />
        <Navigation />
        <iframe
          width="375"
          height="300"
          src="https://www.youtube.com/embed/XKd-qdNNko4?si=tN9oWrcq0iItz1Zl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <Footer />
      </div>
    </div>
  );
  return pageContent
}



//  OLD
// export default function Home() {
//   const pageContent = (
//     // <div className="flex flex-col justify-center items-center h-screen">
//     <div className="flex flex-col justify-center items-center focus-in">
//       <title>CHIYU</title>
//       <Header />
//       <Navigation />
//       <iframe width="375" height="300" src="https://www.youtube.com/embed/XKd-qdNNko4?si=tN9oWrcq0iItz1Zl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//       <Footer />
//     </div>
//   );
//   return pageContent
// }