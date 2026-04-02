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
import BlurFadeIn from "@/components/blurFadeIn";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans min-h-screen pt-20">
      <main className="flex flex-col w-full overflow-hidden gap-[30px] md:gap-[100px] pb-[100px]">
        
        <BlurFadeIn id="home">
          <HeroSec />
        </BlurFadeIn>
        
        <BlurFadeIn className="flex justify-center">
          <IconList />
        </BlurFadeIn>
        
        <BlurFadeIn id="about" className="flex justify-center">
          <AboutSec />
        </BlurFadeIn>
        
        <BlurFadeIn id="speakers" className="flex justify-center">
          <SpeakerSec />
        </BlurFadeIn>
        
        <BlurFadeIn className="flex justify-center">
          <WhyTMSec />
        </BlurFadeIn>
        
        <BlurFadeIn className="flex justify-center">
          <TextSec />
        </BlurFadeIn>
        
        <BlurFadeIn id="program" className="flex justify-center">
          <ProgrammeOverviewSec />
        </BlurFadeIn>
        
        <BlurFadeIn>
          <section className="w-full flex flex-col items-center gap-2">
            <div className="max-w-3xl flex flex-col items-center text-center mb-8 px-6">
              <h2 className="text-4xl md:text-5xl font-light text-primary mb-4 tracking-tight">Conference Focus</h2>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                Two Days. Two Perspectives. One Complete Picture of Your Health. This is where symptoms stop being random, and start making sense.
              </p>
            </div>

            <Conference 
              stepNumber="01" 
              title="Oral Health and the Body" 
              description="Understanding how what happens in the mouth may influence other areas of health, including inflammation and ongoing symptoms." 
              imageSrc="https://images.unsplash.com/photo-1664530838616-1ebf7a9779f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Conference 
              stepNumber="02" 
              title="Infection and Imbalance" 
              description="Exploring how infections and microbial imbalance in the mouth may contribute to broader health challenges." 
              imageSrc="https://images.unsplash.com/photo-1660732205502-2c4dcd3af74d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcmFzaXRlcyUyMGRlbnRhbCUyMG1lcmN1cnklMjBhbmQlMjBwYXRob2xvZ3klMjB3aXRoJTIwc29tZSUyMG9yYWwlMjBoZWFsdGglMjBwaWN0dXJlfGVufDB8fDB8fHwy"
            />
            <Conference 
              stepNumber="03" 
              title="Looking Beyond the Surface" 
              description="Recognising patterns that may not always be visible in standard care, and asking better questions around long-term health." 
              imageSrc="https://images.unsplash.com/photo-1653508310729-7d6d2e2fd6c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBhcmFzaXRlcyUyMGRlbnRhbCUyMG1lcmN1cnklMjBhbmQlMjBwYXRob2xvZ3klMjB3aXRoJTIwc29tZSUyMG9yYWwlMjBoZWFsdGglMjBwaWN0dXJlfGVufDB8fDB8fHwy"
            />
            <Conference 
              stepNumber="04" 
              title="Clinical Insight and Experience" 
              description="Learning from practitioners and researchers who are observing these patterns in real-world settings." 
              imageSrc="https://images.unsplash.com/photo-1774008932487-4eb60bd4ddfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBhcmFzaXRlcyUyMGRlbnRhbCUyMG1lcmN1cnklMjBhbmQlMjBwYXRob2xvZ3klMjB3aXRoJTIwc29tZSUyMG9yYWwlMjBoZWFsdGglMjBwaWN0dXJlfGVufDB8fDB8fHwy"
            />
            <Conference 
              stepNumber="05" 
              title="Bringing Disciplines Together" 
              description="Connecting dentistry, healthcare, and holistic approaches to create a more complete understanding of health." 
              imageSrc="https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxwYXJhc2l0ZXMlMjBkZW50YWwlMjBtZXJjdXJ5JTIwYW5kJTIwcGF0aG9sb2d5JTIwd2l0aCUyMHNvbWUlMjBvcmFsJTIwaGVhbHRoJTIwcGljdHVyZXxlbnwwfHwwfHx8Mg%3D%3D"
            />
          </section>
        </BlurFadeIn>

        <BlurFadeIn id="tickets" className="flex justify-center">
          <PackageSec />
        </BlurFadeIn>

        {/* Sponsorship / Contact Form Wrapper */}
        <BlurFadeIn>
          <div className="w-full flex flex-col items-center px-6 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">Sponsorship Opportunities</h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mb-12">
                Interested in becoming a sponsor? Please submit your expression of interest via the form below.
              </p>
              <div className="w-full flex justify-center">
                <ContactForm />
              </div>
          </div>
        </BlurFadeIn>

        <BlurFadeIn className="flex justify-center">
          <Cta />
        </BlurFadeIn>

      </main>
    </div>
  );
}
