import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/about";
import CaseStudyScroller from "./components/Our-works";
import Campaign from "./components/Campaign";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <Hero header="A Digital Production Studio that will Work" subheader="For startup, Enterprise leaders, Media & Publishers and Social good." links={true}/>

      {/* About Section */}
      <About/>

      {/* Services Section */}
      <Services/>

      {/* Case Studies */}
      <CaseStudyScroller/>

      {/* Campaign Banner */}
      <Campaign/>

    </main>

  );
}
