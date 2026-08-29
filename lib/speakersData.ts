export interface SpeakerProps {
  name: string;
  slug: string;
  roles: string;
  bio: string;
  imageSrc: string;
  speakingOn?: string;
  background?: string[];
  expertise?: string[];
}

export const speakers: SpeakerProps[] = [
  {
    name: "Dr. Simone Sleep",
    slug: "dr-simone-sleep",
    roles: "Biomedical Scientist | Oral Infection Researcher | One Health Advocate",
    bio: "Dr Simone Sleep is a biomedical scientist specialising in oral infectious disease and its relationship with systemic health. With a foundation in naturopathy and extensive research in dentistry, her work bridges clinical science with whole-body health understanding.",
    imageSrc: "/team/1.png",
    speakingOn: "Oral infections, pathology, and systemic health connections",
    background: [
      "PhD in Dentistry and Oral Health – Griffith University",
      "Queensland Representative – One Health Oral Health Special Interest Group (PHAA)",
      "Early clinical work alongside biological dentists",
      "Focus on integrating oral health into broader medical frameworks"
    ],
    expertise: [
      "Oral infections and systemic disease connections",
      "Inflammation and chronic illness patterns",
      "Pathology interpretation in oral-systemic health",
      "Translating research into clinical application"
    ]
  },
  {
    name: "Dr Eric Davis",
    slug: "dr-eric-davis",
    roles: "Biological Dentist | Oral Medicine & Clinical Nutrition",
    bio: "Dr Eric Davis is a biological dentist with a strong focus on oral medicine and clinical nutrition. His work integrates dental health with broader physiological systems, supporting a more complete understanding of chronic health conditions.",
    imageSrc: "/team/6.png",
    speakingOn: "Oral infections, toxicity, and the role of dentistry in systemic health",
    background: [
      "Extensive experience in oral medicine and integrative dentistry",
      "Background in clinical nutrition and systemic health",
      "Focus on identifying underlying contributors to chronic disease",
      "Experience working across multidisciplinary health frameworks"
    ],
    expertise: [
      "Oral-systemic health connections",
      "Nutritional influences on dental and systemic health",
      "Chronic disease patterns linked to oral conditions",
      "Functional and integrative dental approaches"
    ]
  },
  {
    name: "Susan Rusalen",
    slug: "susan-rusalen",
    roles: "Dental Hygienist | Oral Microbiome Educator | Clinical Consultant",
    bio: "Susan Rusalen is an internationally recognised dental hygienist, educator, and consultant who has spent nearly four decades transforming dentistry through prevention, microbiome science, and hygiene-led patient care.",
    imageSrc: "/team/4.png",
    speakingOn: "The oral microbiome and its role in inflammation and systemic health",
    background: [
      "Experienced dental hygienist and clinical consultant",
      "Focus on oral microbiome and preventative strategies",
      "Works with patients to improve long-term oral health outcomes",
      "Educates practitioners on microbial balance and clinical application"
    ],
    expertise: [
      "Oral microbiome and bacterial balance",
      "Preventative dental care",
      "Gum health and inflammation",
      "Patient education and clinical support strategies"
    ]
  },
  {
    name: "Blanche D Grube",
    slug: "blanche-d-grube",
    roles: "Former Biological Dentist | Integrative Medicine Practitioner | Educator",
    bio: "Blanche D Grube is an internationally recognised former biological dentist with over 40 years of clinical experience. Mentored by the late Dr Hal Huggins, she co-developed the Huggins–Grube Protocol.",
    imageSrc: "/team/2.png",
    speakingOn: "The Oral-Systemic Connection"
  },
  {
    name: "Anita Vazquez Tibau",
    slug: "anita-vazquez-tibau",
    roles: "Advocate | Author | Researcher",
    bio: "Anita Vazquez Tibau is an internationally recognised advocate, author, and researcher dedicated to eliminating toxic mercury, with a strong focus on achieving a global ban on dental amalgam.",
    imageSrc: "/team/3.png",
    speakingOn: "The Oral-Systemic Connection"
  },
  {
    name: "Deborah Harrison",
    slug: "deborah-harrison",
    roles: "Dental Hygienist and Therapist",
    bio: "Deborah Harrison is a highly experienced dental hygienist and therapist with over three decades in periodontal care. Known for her willingness to challenge conventional thinking, she explores the evolving science behind gum disease, including complex microbial and parasitic interactions and emerging therapies. Her current work focuses on bridging clinical practice with new research in light therapy, tissue healing, and integrative oral health. Deborah is also writing another book that brings together these perspectives, offering a fresh and thought-provoking view of periodontal disease.",
    imageSrc: "/team/7.png"
  },
  {
    name: "Lisa Matriste",
    slug: "lisa-matriste",
    roles: "Former Dentist | Mercury Detox Specialist",
    bio: "Lisa Matriste is a former dentist with over 30 years of clinical experience, now focused on advancing awareness of mercury toxicity and the role of oral health in chronic disease. After experiencing mercury toxicity firsthand, she shifted from conventional dentistry to a root cause approach. She is the founder of Laser + Holistic Dental Clinic in Melbourne and Say No to Mercury, contributing to the United Nations Minamata Convention. Her work focuses on mercury exposure, sleep breathing disorders, and the role the mouth plays in overall health.",
    imageSrc: "/team/8.png",
    speakingOn: "Her personal journey with mercury and how it reshaped her approach to health and dentistry",
    background: [
      "Former dentist with over 30 years of clinical experience",
      "Founder of Laser + Holistic Dental Clinic in Melbourne",
      "Founder of Say No to Mercury",
      "Contributor to the United Nations Minamata Convention"
    ],
    expertise: [
      "Mercury exposure",
      "Sleep breathing disorders",
      "The role the mouth plays in overall health"
    ]
  },
  {
    name: "Dr Patsy Zendejas",
    slug: "dr-patsy-zendejas",
    roles: "Parasitology Researcher | McKenzie Fellow | One Health & Genomic Epidemiology",
    bio: "Dr Patsy Zendejas is a parasitology researcher originally from Mexico who has been based in Australia for the past 13 years. She completed her PhD at the University of Melbourne, where she developed and applied molecular and genomic tools to study parasitic helminths, filarial parasites, and malaria in humans and animals across the Asia-Pacific and the Americas. Patsy is a McKenzie Fellow at the University of Melbourne, where her current research focuses on the transmission of zoonotic strongyloidiasis in remote Aboriginal communities using a One Health and genomic epidemiology approach. Her broader research interests include understanding pathogen transmission between humans and animals to support improved diagnostics, public health interventions, and sustainable control strategies for neglected tropical diseases and malaria.",
    imageSrc: "/team/9.jpg",
    speakingOn: "Zoonotic disease transmission, genomic epidemiology, and One Health approaches for neglected tropical diseases",
    background: [
      "PhD in Parasitology – University of Melbourne",
      "McKenzie Fellow – University of Melbourne",
      "Research across the Asia-Pacific and the Americas",
      "Focus on molecular and genomic tools for parasitic disease study"
    ],
    expertise: [
      "Parasitic helminths and filarial parasites",
      "Zoonotic strongyloidiasis and One Health approaches",
      "Genomic epidemiology and pathogen transmission",
      "Neglected tropical diseases and malaria control"
    ]
  }
];

export function getSpeakerBySlug(slug: string): SpeakerProps | undefined {
  return speakers.find((s) => s.slug === slug);
}
