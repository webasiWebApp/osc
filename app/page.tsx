import HeroSec from "@/components/heroSec";
import IconList from "@/components/iconList";
import AboutSec from "@/components/aboutSec";
import SpeakerSec from "@/components/speakerSec";
import WhyTMSec from "@/components/whyTMSec";
import TextSec from "@/components/textSec";
import ProgrammeOverviewSec from "@/components/programmeOverviewSec";
import Conference from "@/components/conference";
import PackageSec from "@/components/packageSec";
import ContactForm from "@/components/contactForm";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans min-h-screen pt-20">
      <main className="flex flex-col w-full overflow-hidden">
        
        <div id="home">
          <HeroSec />
        </div>
        
        <div className="w-full flex justify-center mt-12 md:mt-24">
          <IconList />
        </div>
        
        <div id="about" className="w-full flex justify-center bg-white pt-10 pb-20">
          <AboutSec />
        </div>
        
        <div id="speakers" className="w-full flex justify-center bg-zinc-50 py-24">
          <SpeakerSec />
        </div>
        
        <div className="w-full flex justify-center bg-white pt-24 pb-10">
          <WhyTMSec />
        </div>
        
        <div className="w-full flex justify-center bg-white py-12">
          <TextSec />
        </div>
        
        <div id="program" className="w-full flex justify-center bg-white py-24">
          <ProgrammeOverviewSec />
        </div>
        
        <section className="w-full flex flex-col items-center py-16 bg-white gap-8 mb-16">
          <Conference 
            stepNumber="01" 
            title="Learn More" 
            description="Understand how oral health influences the entire body - from inflammation to chronic disease." 
          />
          <Conference 
            stepNumber="02" 
            title="Expert Speakers" 
            description="Learn from leading experts in biological dentistry, microbiology, and integrative health." 
          />
          <Conference 
            stepNumber="03" 
            title="Real-world Value" 
            description="Practical approaches and actionable protocols you can implement immediately." 
          />
          <Conference 
            stepNumber="04" 
            title="One Health" 
            description="Bridging the gap between specialized dentistry and systemic wellness." 
          />
        </section>

        <div id="tickets" className="w-full flex justify-center bg-zinc-50 py-24">
          <PackageSec />
        </div>

        {/* Sponsorship / Contact Form Wrapper */}
        <div className="w-full flex flex-col items-center bg-white py-24 px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">Sponsorship Opportunities</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mb-12">
              Interested in becoming a sponsor? Please submit your expression of interest via the form below.
            </p>
            <div className="w-full flex justify-center">
              <ContactForm />
            </div>
        </div>

        <div className="w-full flex justify-center bg-zinc-50 py-24 mt-10">
          <Cta />
        </div>

      </main>
    </div>
  );
}
