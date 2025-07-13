
import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import Info from '../Introduction/Info.jsx';
import Features from '../features/feauture.jsx';
import Machines from '../Machines/Machines.jsx';
import { useRef } from 'react';
export default function Home() {
  return (
    <div>
      <Navbar />
      <section id ="info">
        <Info />
      </section>
      
      <Features />
      <section id ="machine">
      <Machines />
      </section>
      <section id ="contact">
        <Footer />
      </section>
     
    </div>
    
  );
}