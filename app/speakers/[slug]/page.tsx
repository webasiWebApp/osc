import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, GraduationCap, Mic2, ArrowLeft } from 'lucide-react';
import { getSpeakerBySlug, speakers } from '@/lib/speakersData';

// Generate static params for all speakers
export async function generateStaticParams() {
  return speakers.map((s) => ({ slug: s.slug }));
}

// Generate metadata per speaker
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) return {};
  return {
    title: `${speaker.name} | OSC Speaker`,
    description: speaker.bio,
  };
}

export default async function SpeakerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);

  if (!speaker) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#e8f0fe] pt-32">

      {/* Back navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/#speakers"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#03045E] opacity-70 hover:opacity-100 transition-opacity group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Back to Speakers
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={speaker.imageSrc}
              alt={speaker.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
            {/* Subtle gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/30 via-transparent to-transparent" />
          </div>
          {/* Decorative blob */}
          <div className="absolute -z-10 top-8 left-8 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03045E]/8 blur-3xl" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0077B6] mb-3">
              OSC Speaker
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#03045E] leading-tight mb-4">
              {speaker.name}
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-[#03045E] to-[#0077B6] rounded-full mb-5" />
            <p className="text-sm md:text-base font-medium text-gray-500 leading-relaxed">
              {speaker.roles}
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed italic border-l-4 border-[#03045E]/20 pl-5">
            &ldquo;{speaker.bio}&rdquo;
          </p>

          {/* Speaking On badge */}
          <div className="inline-flex items-start gap-3 bg-[#03045E]/5 border border-[#03045E]/10 rounded-2xl px-5 py-4">
            <Mic2 size={20} className="text-[#03045E] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#03045E] mb-1">Speaking On</p>
              <p className="text-sm text-[#03045E] font-medium leading-snug">
                {speaker.speakingOn ?? 'The Oral-Systemic Connection'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Cards */}
      {(speaker.background || speaker.expertise) && (
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">

          {/* Clinical Background */}
          {speaker.background && (
            <div className="bg-white rounded-[2rem] shadow-md border border-blue-50 p-8">
              <div className="flex items-center gap-3 mb-6 text-[#03045E]">
                <div className="w-10 h-10 rounded-full bg-[#03045E]/10 flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <h2 className="font-bold text-lg uppercase tracking-wide">Clinical Background</h2>
              </div>
              <ul className="space-y-4">
                {speaker.background.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-[#03045E]/30 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Areas of Expertise */}
          {speaker.expertise && (
            <div className="bg-white rounded-[2rem] shadow-md border border-blue-50 p-8">
              <div className="flex items-center gap-3 mb-6 text-[#03045E]">
                <div className="w-10 h-10 rounded-full bg-[#03045E]/10 flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="font-bold text-lg uppercase tracking-wide">Areas of Expertise</h2>
              </div>
              <ul className="space-y-4">
                {speaker.expertise.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6]/40 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#03045E] py-16 px-6 text-center">
        <p className="text-white/60 text-sm uppercase tracking-widest mb-3 font-medium">
          Oral-Systemic Conference
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          See All Speakers
        </h2>
        <Link
          href="/#speakers"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#03045E] text-sm font-semibold hover:bg-blue-50 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Speaker Lineup
        </Link>
      </section>

    </main>
  );
}
