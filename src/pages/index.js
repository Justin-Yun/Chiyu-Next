import Link from 'next/link';
import Button from '../../components/Button';
import Navigation from '../../components/Navigation';

export default function Home() {
  const pageContent = (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Add Chiyu Image HERE</h1>
      <h1 className="text-4xl font-semibold mb-8 text-white">Chiyu</h1>
      <Navigation />
    </div>
  );
  return pageContent
}