export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'emergency' | 'residential' | 'commercial' | 'automotive' | 'pricing';
}

export const faqs: FAQItem[] = [
  // GENERAL
  {
    id: 'g1',
    category: 'general',
    question: 'Is Locksmith In Dubai licensed and insured?',
    answer:
      'Yes. All of our technicians hold relevant trade certifications and our business operates fully in compliance with Dubai Municipality regulations. We carry public liability insurance that covers all work carried out on residential and commercial properties across Dubai. We are happy to provide proof of insurance on request.',
  },
  {
    id: 'g2',
    category: 'general',
    question: 'What areas of Dubai do you cover?',
    answer:
      'We cover the entire emirate of Dubai, from Downtown and Dubai Marina in the west to Mirdif, International City and Dubai Silicon Oasis in the east, and from Deira in the north to Arabian Ranches, Motor City and Sports City in the south. For central areas like Jumeirah, Business Bay and DIFC, response times are typically under 25 minutes. More outlying communities may take 35–45 minutes.',
  },
  {
    id: 'g3',
    category: 'general',
    question: 'Do you work on weekends and public holidays?',
    answer:
      'Yes. We operate 24 hours a day, 7 days a week including all UAE public holidays. Our phone lines are staffed at all times and emergency locksmith dispatch is available without interruption throughout the year.',
  },
  {
    id: 'g4',
    category: 'general',
    question: 'How do I verify a locksmith is legitimate before opening my door?',
    answer:
      'When our technician arrives, they will carry a company ID card with their name and photograph, and will arrive in a vehicle that displays our company information. Before any work begins, they will provide a written or clearly communicated quote. If you ever feel uncertain, call our office number to confirm the technician\'s identity. Never allow anyone who is vague about pricing or company affiliation to work on your locks.',
  },
  {
    id: 'g5',
    category: 'general',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, all major credit and debit cards, bank transfer and popular digital payment methods including Apple Pay and Samsung Pay. Payment is taken after the work is completed and you are satisfied. We always provide a receipt.',
  },
  {
    id: 'g6',
    category: 'general',
    question: 'Do you offer a warranty on your work?',
    answer:
      'Yes. We provide a one-year warranty on all parts supplied and fitted by our team. If a lock we installed develops a fault within 12 months of fitting under normal use, we will repair or replace it at no charge. Key cutting is guaranteed — if a key we cut does not work, we recut it immediately at no charge.',
  },

  // EMERGENCY
  {
    id: 'e1',
    category: 'emergency',
    question: 'How fast can you reach me in an emergency?',
    answer:
      'Our average response time across Dubai is 30 minutes from the moment you call. In central areas like Downtown Dubai, DIFC, Business Bay and Jumeirah, we often arrive faster — typically 15–20 minutes. For communities on the outskirts such as Arabian Ranches, International City or DSO, plan for 35–45 minutes. We give a specific ETA on every call and update you if conditions change.',
  },
  {
    id: 'e2',
    category: 'emergency',
    question: 'Do you charge extra for emergency call-outs at night?',
    answer:
      'No. We do not apply any surcharge for late-night, weekend, or public holiday attendance. The only factor that determines your cost is the type of work required, which is confirmed with you before we start. Our pricing is flat and transparent — what you are quoted is what you pay.',
  },
  {
    id: 'e3',
    category: 'emergency',
    question: 'What should I do if I think there has been a break-in?',
    answer:
      'If you believe an intruder may still be on the premises, do not enter. Move to a safe location and call Dubai Police on 999 first. Once the property has been cleared by police and it is safe to enter, call us to attend and secure the property. We can often coordinate our arrival with police attendance. Do not touch the lock or door before police document the scene if a crime has occurred.',
  },
  {
    id: 'e4',
    category: 'emergency',
    question: 'Can you secure my property the same night after a break-in?',
    answer:
      'Yes. Securing a property after a break-in is one of our most important emergency services. We will replace damaged locks, reinforce the door frame if needed as a temporary measure, and ensure the property is fully secured before we leave. We do this 24 hours a day, 7 days a week.',
  },
  {
    id: 'e5',
    category: 'emergency',
    question: 'Someone is locked inside my apartment and cannot open the door — what do I do?',
    answer:
      'Call us immediately. If a child is locked in or someone is in distress, tell us when you call and we will treat it as a priority emergency. In parallel, if the person inside is in danger, call Dubai Police or Civil Defence (997) who can also force entry. Our technicians can disengage certain lock types from outside and will respond as rapidly as possible to these situations.',
  },

  // RESIDENTIAL
  {
    id: 'r1',
    category: 'residential',
    question: 'Should I change the locks when moving into a new apartment in Dubai?',
    answer:
      'We strongly recommend it. When you move into a property — whether newly rented or purchased — you cannot know with certainty how many copies of the key were made by previous occupants. Rekeying or changing the locks costs relatively little and gives you complete control over who has access to your home. Many Dubai residents do this as a matter of routine when moving in.',
  },
  {
    id: 'r2',
    category: 'residential',
    question: 'Can I change the locks in my rented apartment in Dubai?',
    answer:
      'Technically, you need your landlord\'s permission to change the locks in a rented property. In practice, most landlords are agreeable, particularly if you rekey rather than change the hardware and provide them with a spare key. We can advise on how to approach this with your landlord and what options are available that do not require permanent modification of the door.',
  },
  {
    id: 'r3',
    category: 'residential',
    question: 'What is the most secure lock type for a Dubai apartment front door?',
    answer:
      'For most Dubai apartments with a euro profile lock, we recommend upgrading to a Grade 3 (or equivalent) anti-snap, anti-pick, anti-drill cylinder from a reputable brand such as Mul-T-Lock, ASSA ABLOY or Medeco. These cylinders offer significantly better resistance to the most common attack methods compared to the basic cylinders installed during construction. Combined with a solid door and well-fitted frame, this provides excellent residential security.',
  },
  {
    id: 'r4',
    category: 'residential',
    question: 'Can you rekey multiple locks to work with one key?',
    answer:
      'Yes. This is called keyed-alike configuration and is one of the most popular services for villa owners who want all entry doors — front door, back door, garage, gate — to work with a single key. We rekey all selected locks to the same pin configuration so one key opens everything.',
  },
  {
    id: 'r5',
    category: 'residential',
    question: 'What smart lock brands do you install and recommend?',
    answer:
      'We install locks from several leading brands including Samsung, Yale, Philips, Nuki, August, Schlage Encode, and Allegion. The best brand for your situation depends on your door type, your connectivity preference (Wi-Fi vs Bluetooth), and your smart home platform. We are brand-neutral and recommend based on your specific requirements rather than commission preferences.',
  },

  // COMMERCIAL
  {
    id: 'c1',
    category: 'commercial',
    question: 'Can you service locks in all Dubai free zones?',
    answer:
      'Yes. We work in all Dubai free zones including DIFC, DMCC (JLT), Dubai Internet City, Dubai Media City, Dubai Silicon Oasis, Jebel Ali Free Zone, and Dubai Airport Free Zone. Some free zones have specific contractor access requirements; we are familiar with most and can advise on any pre-authorization needed.',
  },
  {
    id: 'c2',
    category: 'commercial',
    question: 'We have staff turnover regularly — what is the best lock solution?',
    answer:
      'For businesses with frequent staff changes, we recommend one of two solutions: a master key system with restricted keys (where only authorised locksmiths can cut additional copies), or an electronic access control system that allows you to instantly activate or deactivate individual credentials without touching the physical lock. The right choice depends on your premises, budget and how much ongoing management you want to handle digitally.',
  },
  {
    id: 'c3',
    category: 'commercial',
    question: 'Can you install panic bars on our fire exit doors?',
    answer:
      'Yes. Panic bar (also called push bar or crash bar) installation on fire exit doors is part of our commercial locksmith service. We supply and fit panic hardware that complies with UAE fire and safety regulations, ensuring your exit doors allow free egress while preventing unauthorised entry from outside.',
  },
  {
    id: 'c4',
    category: 'commercial',
    question: 'Do you offer ongoing maintenance contracts for businesses?',
    answer:
      'Yes. We offer scheduled maintenance contracts for commercial clients that include periodic inspections of all lock hardware, lubrication, adjustment, and priority response to any emergency calls. This is particularly popular with property management companies, hotels and large office occupiers who want predictable costs and assured response times.',
  },
  {
    id: 'c5',
    category: 'commercial',
    question: 'Can you help with access control for a warehouse or industrial premises?',
    answer:
      'Yes. We install access control systems for warehouses, logistics centres, manufacturing facilities and industrial units throughout Dubai. We are experienced with the specific challenges of industrial environments — dust, high traffic, large roller doors, multiple shifts — and specify hardware accordingly.',
  },

  // AUTOMOTIVE
  {
    id: 'a1',
    category: 'automotive',
    question: 'Can you make a replacement key for my car if I have lost all keys?',
    answer:
      'In most cases, yes. We can cut and program a new key from scratch without an original for the majority of vehicles sold in the UAE market. We verify your ownership through the vehicle registration card (Mulkiya) and Emirates ID before beginning. The process involves cutting a key blank to your car\'s lock profile and programming the transponder chip to your vehicle\'s ECU.',
  },
  {
    id: 'a2',
    category: 'automotive',
    question: 'Is a mobile car locksmith better than going to the dealer for a replacement key?',
    answer:
      'For most people, yes. Mobile car locksmiths typically cost 30–60% less than dealer pricing, come to your location (saving towing costs), and offer faster turnaround with no dealer appointment needed. The quality of the key produced is equivalent, using the same programming protocols. The main exception is for very new vehicles with brand-specific security systems where the dealer may be the only authorised programmer.',
  },
  {
    id: 'a3',
    category: 'automotive',
    question: 'My car remote does not work but the key still turns the ignition — can you fix it?',
    answer:
      'Remote fob issues are usually one of three causes: a dead internal battery, a signal that has lost synchronisation with the car, or a failed transponder chip inside the fob. We diagnose on site — battery replacement and resyncing are typically quick fixes. If the transponder has failed, we programme a replacement fob. In many cases this is significantly cheaper than a complete key replacement.',
  },
  {
    id: 'a4',
    category: 'automotive',
    question: 'What vehicles do you cover for car locksmith services?',
    answer:
      'We cover the vast majority of vehicles sold in the UAE market, including Toyota (Land Cruiser, Camry, Corolla, Yaris), Nissan (Patrol, Altima, X-Trail), Honda, Hyundai, Kia, Mitsubishi, Lexus, BMW, Mercedes-Benz, Audi, Volkswagen, Ford, Chevrolet, Range Rover, and many others. We will confirm on the phone whether we can handle your specific model before attending.',
  },
  {
    id: 'a5',
    category: 'automotive',
    question: 'Can you open my car without the key present at all?',
    answer:
      'Yes. Using automotive entry tools, we can open vehicle doors without a key or existing programmed fob. This is done non-destructively — no broken windows, no damaged seals. Once the vehicle is open, we can then produce a new key and program it if required, all in one visit.',
  },

  // PRICING
  {
    id: 'p1',
    category: 'pricing',
    question: 'How much does an emergency locksmith call-out cost in Dubai?',
    answer:
      'Emergency lockout pricing starts from AED 150 for a standard residential lockout. The final cost depends on the lock type, how the entry is achieved, and whether any additional work such as a lock change is requested. We confirm the price before starting any work, so there are never any surprise charges.',
  },
  {
    id: 'p2',
    category: 'pricing',
    question: 'Is there a call-out fee?',
    answer:
      'No. We do not charge a call-out fee or a travel fee. The price we quote covers the complete job. There are no hidden extras.',
  },
  {
    id: 'p3',
    category: 'pricing',
    question: 'Do you charge more for weekend or late-night visits?',
    answer:
      'No. Our pricing is the same 24 hours a day, 7 days a week, 365 days a year. We believe in fair, consistent pricing and do not penalise customers for calling at inconvenient hours.',
  },
  {
    id: 'p4',
    category: 'pricing',
    question: 'How much does a lock change cost in Dubai?',
    answer:
      'A standard lock change including a quality replacement euro cylinder starts from AED 200. High-security lock upgrades, smart locks and digital locks are priced according to the specific product selected. We provide itemised quotes so you know exactly what you are paying for.',
  },
  {
    id: 'p5',
    category: 'pricing',
    question: 'Can I get a fixed price quote before the technician arrives?',
    answer:
      'For clearly defined jobs (such as a lock change to a specific product or a standard cylinder replacement), we can give a firm price over the phone. For jobs where the complexity is unknown — such as a lockout where the lock type needs assessment — we will give a price range and confirm the exact price on arrival before starting work.',
  },
  {
    id: 'p6',
    category: 'pricing',
    question: 'Is key cutting included in a lock change?',
    answer:
      'Yes. When we change a lock, key cutting for the standard number of keys (usually two) is included in the price. Additional key copies can be cut at a small additional charge per key, and we recommend getting extra copies made while the technician is on site.',
  },
];

export const faqsByCategory = {
  general: faqs.filter((f) => f.category === 'general'),
  emergency: faqs.filter((f) => f.category === 'emergency'),
  residential: faqs.filter((f) => f.category === 'residential'),
  commercial: faqs.filter((f) => f.category === 'commercial'),
  automotive: faqs.filter((f) => f.category === 'automotive'),
  pricing: faqs.filter((f) => f.category === 'pricing'),
};
