import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';


export default function About() {



    const pageContent = (
      <div className="flex flex-col justify-center items-center slide-in-fwd-center">
            <title>About</title>
            <Header />
            <Navigation />
            <h1>About</h1>
            <p>Hello. This is Hannah</p>
            <iframe width="150" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/86910948&color=%23cdcdcb&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <Footer />
        </div>
    );

    // Return the variable containing the JSX
    return pageContent;
}
