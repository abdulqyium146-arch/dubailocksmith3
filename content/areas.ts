import type { Area } from '@/types';

export const areas: Area[] = [
  {
    id: '1',
    name: 'Dubai',
    slug: 'dubai',
    shortDescription:
      'City-wide locksmith coverage across all of Dubai — residential, commercial and automotive services with a 30-minute response guarantee.',
    description:
      'We provide comprehensive locksmith services across the entire emirate of Dubai, from the waterfront communities of Dubai Marina and Palm Jumeirah to the older districts of Deira and Bur Dubai, and the newer master-planned developments of Dubailand and Mohammed Bin Rashid City. Our fleet of mobile locksmith vans is strategically positioned across Dubai to ensure that no call takes more than 30 minutes to reach. Whether you are in a downtown tower, a JVC apartment, a Jumeirah villa, or a warehouse in Al Quoz, a qualified technician is always within reach.',
    landmarks: [
      'Burj Khalifa',
      'Dubai Mall',
      'Palm Jumeirah',
      'Dubai Frame',
      'Burj Al Arab',
      'Dubai Creek',
      'Global Village',
      'Dubai Expo City',
    ],
    neighborhoods: [
      'Downtown Dubai',
      'Dubai Marina',
      'JBR',
      'Business Bay',
      'DIFC',
      'Jumeirah',
      'Al Barsha',
      'Deira',
      'Bur Dubai',
      'Al Quoz',
      'Mirdif',
      'Dubai Hills',
    ],
    responseTime: '30 minutes',
    image: '/images/areas/dubai.jpg',
    metaTitle: 'Locksmith Dubai | 24/7 Emergency Locksmith Service Across All of Dubai',
    metaDescription:
      'Professional locksmith services across all Dubai areas. Emergency lockout, lock change, car locksmith, smart locks. 30-minute response. Call +971 55 768 9003.',
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    id: '2',
    name: 'Al Bada',
    slug: 'al-bada',
    shortDescription:
      'Local locksmith service in Al Bada, Dubai — our home base. Fastest response times in the area for residential and commercial locksmith needs.',
    description:
      'Al Bada is our base of operations and the area we know best. This established residential neighbourhood near Jumeirah lies in one of Dubai\'s most desirable central locations, close to the Al Wasl Road corridor and the Jumeirah Beach Road. We serve the mix of older villas, low-rise apartment buildings and modern townhouses that characterise Al Bada. As this is our home area, response times are exceptionally fast — often under 15 minutes. We know the local building types well and carry the specific lock hardware common in this neighbourhood.',
    landmarks: [
      'Al Bada Park',
      'Jumeirah Beach Road',
      'Al Wasl Road',
      'Safa Park (nearby)',
      'City Walk (nearby)',
    ],
    neighborhoods: [
      'Al Bada',
      'Al Wasl',
      'Jumeirah 1',
      'Satwa',
    ],
    responseTime: '15 minutes',
    image: '/images/areas/al-bada.jpg',
    metaTitle: 'Locksmith Al Bada Dubai | Your Local Locksmith — Fastest Response in the Area',
    metaDescription:
      'Locksmith in Al Bada, Dubai. Emergency lockout, lock change and residential security for Al Bada villas and apartments. Often under 15 minutes. Call +971 55 768 9003.',
    coordinates: { lat: 25.2135, lng: 55.2520 },
  },
  {
    id: '3',
    name: 'Downtown Dubai',
    slug: 'downtown-dubai',
    shortDescription:
      'Premium locksmith service in Downtown Dubai for high-rise apartments, hotels and commercial properties. Fast response in the heart of the city.',
    description:
      'Downtown Dubai is home to some of the emirate\'s most iconic towers and busiest commercial blocks. Residents and businesses in The Address, Burj Vista, Vida Residences, South Ridge, and the countless other towers in the Downtown core all trust us for their locksmith needs. We are familiar with the building security protocols at many Downtown towers, which helps us work efficiently alongside building management and security teams. Whether it is a locked apartment on the 40th floor of a Burj Khalifa-adjacent building or a commercial fit-out in the Boulevard, we respond fast and work professionally.',
    landmarks: [
      'Burj Khalifa',
      'Dubai Mall',
      'Dubai Fountain',
      'Opera District',
      'Boulevard Walk',
      'Souk Al Bahar',
      'The Address Hotels',
    ],
    neighborhoods: [
      'Burj Khalifa District',
      'Opera District',
      'Downtown Boulevard',
      'South Ridge',
      'Emaar Boulevard',
    ],
    responseTime: '20 minutes',
    image: '/images/areas/downtown-dubai.jpg',
    metaTitle: 'Locksmith Downtown Dubai | 24/7 Locksmith for Apartments & Hotels',
    metaDescription:
      'Locksmith in Downtown Dubai. Emergency lockout, smart lock installation and commercial locksmith for Burj Khalifa District, The Boulevard and Opera District. Call +971 55 768 9003.',
    coordinates: { lat: 25.1972, lng: 55.2744 },
  },
  {
    id: '4',
    name: 'Business Bay',
    slug: 'business-bay',
    shortDescription:
      'Commercial and residential locksmith in Business Bay. Fast emergency response for offices, towers and mixed-use developments along the canal.',
    description:
      'Business Bay has grown into one of Dubai\'s most densely occupied urban districts — a mix of corporate towers, luxury residential buildings, and hospitality venues lining the Dubai Water Canal. The area\'s combination of high-traffic commercial spaces and premium residential towers means locksmith calls are frequent and varied. We handle everything from locking out of a Bay Square office to smart lock installation in an Executive Tower apartment. We know Business Bay\'s towers, their access protocols, and the lock hardware most commonly found in this district.',
    landmarks: [
      'Dubai Water Canal',
      'Bay Square',
      'One Central',
      'The Executive Towers',
      'Opus Tower',
      'Conrad Dubai',
    ],
    neighborhoods: [
      'Bay Square',
      'Business Bay Central',
      'Dubai Water Canal Residences',
    ],
    responseTime: '25 minutes',
    image: '/images/areas/business-bay.jpg',
    metaTitle: 'Locksmith Business Bay Dubai | Office & Residential Locksmith — Fast Response',
    metaDescription:
      'Locksmith services in Business Bay, Dubai. Emergency office lockout, lock change and smart lock installation for Business Bay towers and apartments. Call +971 55 768 9003.',
    coordinates: { lat: 25.1879, lng: 55.2649 },
  },
  {
    id: '5',
    name: 'Dubai Marina',
    slug: 'dubai-marina',
    shortDescription:
      'Locksmith in Dubai Marina for high-rise residential towers, JBR properties and marina-front commercial units. Fast 24/7 service.',
    description:
      'Dubai Marina is one of the largest man-made marinas in the world and home to a dense cluster of high-rise residential towers, retail spaces, and hospitality venues. The locksmith challenges here are typical of high-density urban living — lockouts in towers like Cayan, Marina Gate, Princess Tower and Sulafa, as well as commercial calls from the retail promenade and JBR Walk. Our technicians know the Marina district well and navigate its internal road network and building access systems efficiently to reach you fast.',
    landmarks: [
      'Dubai Marina Walk',
      'JBR Beach',
      'Bluewaters Island',
      'Marina Mall',
      'Ain Dubai',
      'Cayan Tower',
      'Princess Tower',
    ],
    neighborhoods: [
      'Dubai Marina',
      'JBR (Jumeirah Beach Residence)',
      'Marina Promenade',
      'Marina Gate',
      'Emaar Six Towers',
    ],
    responseTime: '25 minutes',
    image: '/images/areas/dubai-marina.jpg',
    metaTitle: 'Locksmith Dubai Marina | 24/7 Emergency Locksmith for Marina Towers',
    metaDescription:
      'Professional locksmith in Dubai Marina. Emergency lockout, lock change and smart lock installation for Marina towers and JBR apartments. Call +971 55 768 9003.',
    coordinates: { lat: 25.0812, lng: 55.1393 },
  },
  {
    id: '6',
    name: 'Palm Jumeirah',
    slug: 'palm-jumeirah',
    shortDescription:
      'Premium locksmith service on Palm Jumeirah for frond villas, apartment towers and luxury hotels. Discrete, professional and fast.',
    description:
      'Palm Jumeirah is home to some of Dubai\'s most prestigious residential addresses — from the signature beachfront villas on the fronds to the apartment towers of The Shoreline, Tiara, and DAMAC Heights on the trunk. Locksmith requirements here range from villa gate locks to high-end apartment entry systems, luxury lock upgrades, and smart home integrations. We provide a discreet, premium service appropriate for this exclusive community, and our technicians are cleared to operate within gated Palm developments.',
    landmarks: [
      'Atlantis The Palm',
      'Nakheel Mall',
      'The Pointe',
      'The Crescent',
      'Aquaventure',
      'Palm Monorail',
    ],
    neighborhoods: [
      'Palm Fronds (1–17)',
      'The Shoreline',
      'Tiara Residences',
      'DAMAC Heights',
      'The Crescent',
      'Oceana',
    ],
    responseTime: '30 minutes',
    image: '/images/areas/palm-jumeirah.jpg',
    metaTitle: 'Locksmith Palm Jumeirah | Premium Locksmith for Villas & Apartments',
    metaDescription:
      'Premium locksmith service on Palm Jumeirah. Villa lock upgrades, smart lock installation, emergency lockout for Shoreline, Frond villas and Atlantis. Call +971 55 768 9003.',
    coordinates: { lat: 25.1124, lng: 55.1390 },
  },
  {
    id: '7',
    name: 'Jumeirah Village Circle',
    slug: 'jumeirah-village-circle',
    shortDescription:
      'Locksmith in JVC for apartments, townhouses and villas across this popular Dubai community. Quick response and competitive pricing.',
    description:
      'Jumeirah Village Circle has rapidly become one of Dubai\'s most popular residential communities, with a mix of studio and one-bedroom apartments in mid-rise buildings, townhouses and standalone villas filling the circular road layout. The variety of property types and the community\'s size mean locksmith calls here are high in volume. We understand JVC\'s layout and can navigate to specific buildings and villa blocks efficiently. Common calls include apartment lockouts, lock changes for new tenants, and smart lock upgrades in townhouses.',
    landmarks: [
      'Circle Mall',
      'JVC Community Centre',
      'Nakheel Community Mall',
      'Five Hotel JVC',
    ],
    neighborhoods: [
      'JVC District 10',
      'JVC District 11',
      'JVC District 12',
      'JVC District 13',
      'JVC District 14',
      'JVC District 15',
    ],
    responseTime: '30 minutes',
    image: '/images/areas/jumeirah-village-circle.jpg',
    metaTitle: 'Locksmith JVC Dubai | Locksmith in Jumeirah Village Circle — Flats & Villas',
    metaDescription:
      'Locksmith in Jumeirah Village Circle (JVC), Dubai. Emergency lockout, lock change and smart locks for JVC apartments, townhouses and villas. Call +971 55 768 9003.',
    coordinates: { lat: 25.0592, lng: 55.2032 },
  },
  {
    id: '8',
    name: 'Jumeirah Lake Towers',
    slug: 'jumeirah-lake-towers',
    shortDescription:
      'Locksmith service in JLT for the cluster towers and commercial units surrounding Jumeirah Lakes. Fast response to this busy mixed-use community.',
    description:
      'Jumeirah Lake Towers is a dense free zone community of 80 towers arranged around three artificial lakes. It combines residential apartments with offices, retail outlets, restaurants and hotels in a concentrated walkable environment. Our JLT locksmith service is designed for this high-density setting — we know which access routes lead to each cluster, which towers have strict visitor protocols, and how to get a technician to you fast in a community where multiple concurrent calls are common.',
    landmarks: [
      'JLT Lakes',
      'Cluster M Retail Zone',
      'Bonnington Tower',
      'Dubai Marina border',
      'DMCC Free Zone',
    ],
    neighborhoods: [
      'JLT Cluster A',
      'JLT Cluster B',
      'JLT Cluster C to Q',
      'JLT Cluster T',
      'JLT Cluster U',
      'JLT Cluster V',
    ],
    responseTime: '25 minutes',
    image: '/images/areas/jumeirah-lake-towers.jpg',
    metaTitle: 'Locksmith JLT Dubai | Jumeirah Lake Towers Locksmith — All Clusters',
    metaDescription:
      'Locksmith in JLT (Jumeirah Lake Towers), Dubai. Emergency lockout, office locks and residential security for all JLT clusters. Call +971 55 768 9003.',
    coordinates: { lat: 25.0709, lng: 55.1387 },
  },
  {
    id: '9',
    name: 'Al Barsha',
    slug: 'al-barsha',
    shortDescription:
      'Trusted locksmith in Al Barsha for residential apartments, villas and commercial properties. Covering Al Barsha 1, 2, 3 and Al Barsha South.',
    description:
      'Al Barsha is a large, established community stretching from the Mall of the Emirates in the north to the Expo Road corridor in the south. It encompasses Al Barsha 1 (residential apartments and villas on Hessa Street), Al Barsha 2 (large villa plots), Al Barsha 3, Al Barsha South (newer apartment clusters near Al Barsha Pond Park), and the Barsha Heights hotel and commercial district. The area\'s diversity means we handle everything from budget apartment lockouts to large villa security upgrades and commercial office lock changes.',
    landmarks: [
      'Mall of the Emirates',
      'Dubai Internet City (nearby)',
      'Al Barsha Pond Park',
      'Barsha Heights',
      'Hessa Street',
    ],
    neighborhoods: [
      'Al Barsha 1',
      'Al Barsha 2',
      'Al Barsha 3',
      'Al Barsha South',
      'Barsha Heights (TECOM)',
    ],
    responseTime: '30 minutes',
    image: '/images/areas/al-barsha.jpg',
    metaTitle: 'Locksmith Al Barsha Dubai | Emergency Locksmith for Al Barsha 1, 2 & 3',
    metaDescription:
      'Professional locksmith in Al Barsha, Dubai. Emergency lockout, lock change, villa and apartment security. Al Barsha 1, 2, 3 and South. Call +971 55 768 9003.',
    coordinates: { lat: 25.1165, lng: 55.1975 },
  },
  {
    id: '10',
    name: 'Deira',
    slug: 'deira',
    shortDescription:
      'Locksmith service in Deira covering the older residential and commercial districts near Dubai Creek. All lock types, fast response.',
    description:
      'Deira is one of Dubai\'s oldest and most vibrant districts, stretching along the northern bank of Dubai Creek. It is characterised by dense residential and commercial blocks, traditional souks, and a mix of older building types with a wide variety of lock configurations — from traditional lever locks in older buildings to modern euro cylinders in renovated properties. Our Deira locksmith team is experienced with the area\'s diverse lock landscape and can handle everything from old mortise locks in creek-side buildings to modern car lockouts in the Deira Corniche area.',
    landmarks: [
      'Dubai Creek',
      'Gold Souk',
      'Spice Souk',
      'Deira Corniche',
      'Al Hamriya Port',
      'Al Ghurair Centre',
      'Dubai Airport (Terminal 1 & 3)',
    ],
    neighborhoods: [
      'Al Rigga',
      'Naif',
      'Al Murar',
      'Al Khabaisi',
      'Al Hamriya',
      'Port Saeed',
      'Al Qusais',
    ],
    responseTime: '30 minutes',
    image: '/images/areas/deira.jpg',
    metaTitle: 'Locksmith Deira Dubai | Emergency Locksmith Near Dubai Creek',
    metaDescription:
      'Locksmith in Deira, Dubai. Emergency lockout, lock repair and key cutting for residential and commercial properties near Dubai Creek. Call +971 55 768 9003.',
    coordinates: { lat: 25.2697, lng: 55.3095 },
  },
  {
    id: '11',
    name: 'Bur Dubai',
    slug: 'bur-dubai',
    shortDescription:
      'Locksmith in Bur Dubai for the historic district\'s mix of residential buildings, hotels and commercial properties south of the Creek.',
    description:
      'Bur Dubai, on the southern bank of Dubai Creek, is a historic trading and residential hub with a rich mix of nationalities and property types. From the high-rise hotels around Al Fahidi Metro Station to the low-rise residential blocks of Karama and Mankhool, to the commercial density of Oud Metha and Healthcare City, Bur Dubai presents a wide variety of locksmith challenges. Our team knows the area well and handles old mortise locks in heritage buildings, modern euro cylinders in renovated towers, and car lockouts in the busy retail districts of Karama and Meena Bazaar.',
    landmarks: [
      'Al Fahidi Historical Neighbourhood',
      'Dubai Museum',
      'Bur Juman Mall',
      'Lamcy Plaza',
      'Al Shindagha Tunnel',
      'Wafi Mall',
      'Dubai Healthcare City',
    ],
    neighborhoods: [
      'Al Fahidi',
      'Mankhool',
      'Al Karama',
      'Oud Metha',
      'Al Jafiliya',
      'Al Raffa',
      'Meena Bazaar',
    ],
    responseTime: '30 minutes',
    image: '/images/areas/bur-dubai.jpg',
    metaTitle: 'Locksmith Bur Dubai | Emergency Locksmith for Karama, Mankhool & Oud Metha',
    metaDescription:
      'Locksmith in Bur Dubai. Emergency lockout, lock repair and key cutting for Karama, Mankhool, Oud Metha and surrounding areas. Call +971 55 768 9003.',
    coordinates: { lat: 25.2631, lng: 55.2992 },
  },
  {
    id: '12',
    name: 'Dubai Hills',
    slug: 'dubai-hills',
    shortDescription:
      'Premium locksmith service in Dubai Hills for villas, townhouses and apartments in this master-planned golf community.',
    description:
      'Dubai Hills Estate is one of Dubai\'s most prestigious master-planned communities, set around the Dubai Hills Golf Club and featuring luxury villas, townhouses and mid-rise apartment clusters. The properties here tend to have higher-grade initial lock hardware than older Dubai communities, and residents often seek smart lock upgrades and security system additions. As a gated community, access requires coordination with security — our technicians are experienced in working within gated estate environments efficiently.',
    landmarks: [
      'Dubai Hills Mall',
      'Dubai Hills Golf Club',
      'King\'s College Hospital Dubai',
      'Dubai Hills Park',
      'Meraas Dubai Hills',
    ],
    neighborhoods: [
      'Dubai Hills Villas (Sector 1–6)',
      'Maple (Townhouses)',
      'Park Heights',
      'Park Ridge',
      'Acacia',
      'Sidra Villas',
    ],
    responseTime: '35 minutes',
    image: '/images/areas/dubai-hills.jpg',
    metaTitle: 'Locksmith Dubai Hills | Premium Locksmith for Dubai Hills Estate Villas & Apartments',
    metaDescription:
      'Locksmith in Dubai Hills Estate. Emergency lockout, smart lock installation and security upgrades for Dubai Hills villas, townhouses and apartments. Call +971 55 768 9003.',
    coordinates: { lat: 25.1093, lng: 55.2520 },
  },
  {
    id: '13',
    name: 'Mirdif',
    slug: 'mirdif',
    shortDescription:
      'Locksmith in Mirdif for villas and apartment communities in this established eastern Dubai neighbourhood. Family-friendly, fast and professional.',
    description:
      'Mirdif is a well-established residential community in eastern Dubai, popular with families for its spacious villas, community feel and proximity to Dubai International Airport. The area is predominantly villa-based, with large private compounds and gated sub-communities. Locksmith calls in Mirdif are often villa-related — gate locks, garage door locks, villa entry doors with older hardware, and key duplication for growing families. We know Mirdif\'s layout well and reach most locations in the area within 30 minutes.',
    landmarks: [
      'Mirdif City Centre',
      'Mushrif Park',
      'Uptown Mirdif',
      'City Centre Mirdif',
      'Dubai International Airport (nearby)',
    ],
    neighborhoods: [
      'Mirdif Villas',
      'Rashidiya',
      'Al Mizhar',
      'Al Warqa',
      'Mirdif Hills',
    ],
    responseTime: '35 minutes',
    image: '/images/areas/mirdif.jpg',
    metaTitle: 'Locksmith Mirdif Dubai | Villa & Apartment Locksmith — Fast Response',
    metaDescription:
      'Locksmith in Mirdif, Dubai. Emergency lockout, villa lock change, gate locks and key duplication for Mirdif families. Call +971 55 768 9003.',
    coordinates: { lat: 25.2169, lng: 55.4067 },
  },
  {
    id: '14',
    name: 'Dubai Silicon Oasis',
    slug: 'dubai-silicon-oasis',
    shortDescription:
      'Locksmith in Dubai Silicon Oasis for residential towers, tech company offices and commercial units in this integrated free zone community.',
    description:
      'Dubai Silicon Oasis is a technology park and free zone community that combines residential apartments, corporate offices, retail and hospitality. The area has grown significantly in the past decade and now houses a substantial residential population alongside the office and manufacturing operations of its tech tenants. Locksmith calls here range from apartment lockouts in the residential towers to commercial office lock changes and access control installations for technology companies. Our team reaches DSO quickly via the Emirates Road and Al Ain Road interchanges.',
    landmarks: [
      'DSO Technology Park',
      'Silicon Central Mall',
      'Al Etihad Road (E611)',
      'Arabian Ranches (nearby)',
    ],
    neighborhoods: [
      'Axis Residences',
      'Silicon Gates',
      'Palace Towers',
      'Cedar',
      'Semmer Villas',
    ],
    responseTime: '35 minutes',
    image: '/images/areas/dubai-silicon-oasis.jpg',
    metaTitle: 'Locksmith Dubai Silicon Oasis | DSO Residential & Commercial Locksmith',
    metaDescription:
      'Locksmith in Dubai Silicon Oasis. Emergency lockout, office locks and access control for DSO apartments and tech company offices. Call +971 55 768 9003.',
    coordinates: { lat: 25.1193, lng: 55.3775 },
  },
  {
    id: '15',
    name: 'Arabian Ranches',
    slug: 'arabian-ranches',
    shortDescription:
      'Locksmith service in Arabian Ranches for premium villa communities. Specialist in gated community access and high-end residential lock solutions.',
    description:
      'Arabian Ranches is one of Dubai\'s pioneering gated villa communities, spread across a large desert-edge location with a golf course at its heart. The predominantly villa-based development spans Arabian Ranches 1, 2 and 3, with a variety of cluster designs and villa configurations. Lock hardware in Arabian Ranches properties tends to be high quality from the original fit-out, and residents often request security upgrades, smart lock additions, and master key systems for multiple villa entry points. As a gated community, we coordinate with security on arrival to ensure smooth access.',
    landmarks: [
      'Arabian Ranches Golf Club',
      'Arabian Ranches Retail',
      'GEMS Arabian Ranches School',
      'Dubai Polo & Equestrian Club',
    ],
    neighborhoods: [
      'Mirador',
      'Alvorada',
      'Casa',
      'Saheel',
      'Savannah',
      'Arabian Ranches 2',
      'Arabian Ranches 3',
      'Rasha',
    ],
    responseTime: '40 minutes',
    image: '/images/areas/arabian-ranches.jpg',
    metaTitle: 'Locksmith Arabian Ranches Dubai | Villa Locksmith for Gated Community',
    metaDescription:
      'Locksmith in Arabian Ranches, Dubai. Emergency villa lockout, smart lock installation and security upgrades for AR1, AR2 and AR3. Call +971 55 768 9003.',
    coordinates: { lat: 25.0516, lng: 55.2692 },
  },
  {
    id: '16',
    name: 'Motor City',
    slug: 'motor-city',
    shortDescription:
      'Locksmith in Motor City for apartments, townhouses and retail units in this motorsport-themed Dubai community.',
    description:
      'Motor City is a themed residential community built around the Dubai Autodrome motorsport venue. It features low-rise apartment buildings, townhouses, and a retail strip with a distinctly active, community-focused character. The area is popular with sports enthusiasts, young professionals and families. Locksmith calls here typically involve apartment lockouts, townhouse lock changes when tenants move, and key duplication for families. Motor City\'s straightforward road layout makes navigation easy and response times consistent.',
    landmarks: [
      'Dubai Autodrome',
      'Motor City Retail Centre',
      'Uptown Motor City',
      'Green Community (nearby)',
    ],
    neighborhoods: [
      'Uptown Motor City',
      'Motor City Phase 1 Apartments',
      'Motor City Villas',
      'First Avenue',
      'Ribbon Townhomes',
    ],
    responseTime: '35 minutes',
    image: '/images/areas/motor-city.jpg',
    metaTitle: 'Locksmith Motor City Dubai | Apartment & Townhouse Locksmith Service',
    metaDescription:
      'Locksmith in Motor City, Dubai. Emergency lockout, lock change and key duplication for Motor City apartments and townhouses. Call +971 55 768 9003.',
    coordinates: { lat: 25.0479, lng: 55.2343 },
  },
  {
    id: '17',
    name: 'Sports City',
    slug: 'sports-city',
    shortDescription:
      'Locksmith in Dubai Sports City for residential towers and sports facility commercial units. Fast, professional service for this active community.',
    description:
      'Dubai Sports City is centred on a collection of world-class sports venues including the ICC Academy cricket ground, the Sevens Stadium and the Els Club golf course, surrounded by a growing number of residential towers and low-rise apartment communities. Residents here are typically sports-conscious and active, and the community has a younger demographic on average. Locksmith calls range from apartment lockouts and lock changes to car lockouts in the area\'s substantial parking infrastructure.',
    landmarks: [
      'ICC Academy',
      'The Sevens Stadium',
      'The Els Club Golf Course',
      'Dubai Sports City Boulevard',
    ],
    neighborhoods: [
      'The Sport',
      'Victory Heights',
      'Golf Villas',
      'Canal Residences',
    ],
    responseTime: '35 minutes',
    image: '/images/areas/sports-city.jpg',
    metaTitle: 'Locksmith Sports City Dubai | Emergency Locksmith for Dubai Sports City',
    metaDescription:
      'Locksmith in Dubai Sports City. Emergency lockout, lock change and residential security for Sports City apartments and villas. Call +971 55 768 9003.',
    coordinates: { lat: 25.0384, lng: 55.2238 },
  },
  {
    id: '18',
    name: 'International City',
    slug: 'international-city',
    shortDescription:
      'Affordable, fast locksmith service in International City. We reach all clusters and buildings in Dubai\'s largest low-cost housing community.',
    description:
      'International City is one of Dubai\'s largest affordable residential communities, organised into themed country clusters. The sheer density of the population and the volume of tenants moving in and out creates a high demand for locksmith services — lock changes between tenants, key duplication, and lockouts are all common. Despite being further from the city centre, our team maintains a presence in eastern Dubai and consistently achieves response times of 35–40 minutes across all International City clusters.',
    landmarks: [
      'Dragon Mart 1 & 2',
      'International City Cluster Centres',
      'Warsan Lake',
    ],
    neighborhoods: [
      'France Cluster',
      'Greece Cluster',
      'Italy Cluster',
      'Spain Cluster',
      'England Cluster',
      'Morocco Cluster',
      'Persia Cluster',
      'Russia Cluster',
    ],
    responseTime: '40 minutes',
    image: '/images/areas/international-city.jpg',
    metaTitle: 'Locksmith International City Dubai | Fast Locksmith — All Clusters',
    metaDescription:
      'Locksmith in International City, Dubai. Affordable emergency lockout, lock change and key cutting for all International City clusters. Call +971 55 768 9003.',
    coordinates: { lat: 25.1653, lng: 55.4183 },
  },
  {
    id: '19',
    name: 'Jumeirah',
    slug: 'jumeirah',
    shortDescription:
      'Premium locksmith service in Jumeirah for beachfront villas, apartment buildings and commercial properties along Dubai\'s most famous coastline.',
    description:
      'The Jumeirah corridor — stretching from Jumeirah 1 near the creek all the way to Jumeirah 3 at the Kite Beach end — is home to some of Dubai\'s most sought-after residential villas and beachside apartments. The mix of older established villas, renovated properties and newer developments means lock types vary considerably across the area. Our Jumeirah locksmith service caters to both the residential and commercial side of this corridor, from quick villa lockouts to complete lock system overhauls and smart home integrations.',
    landmarks: [
      'Kite Beach',
      'La Mer',
      'Jumeirah Beach',
      'Burj Al Arab (nearby)',
      'Wild Wadi Waterpark',
      'Mercato Mall',
      'Safa Park',
    ],
    neighborhoods: [
      'Jumeirah 1',
      'Jumeirah 2',
      'Jumeirah 3',
      'Umm Suqeim',
      'Al Safa',
    ],
    responseTime: '25 minutes',
    image: '/images/areas/jumeirah.jpg',
    metaTitle: 'Locksmith Jumeirah Dubai | Villa & Apartment Locksmith Along Jumeirah Beach',
    metaDescription:
      'Locksmith in Jumeirah, Dubai. Emergency villa lockout, smart lock installation and high-security lock upgrades for Jumeirah 1, 2 and 3. Call +971 55 768 9003.',
    coordinates: { lat: 25.2048, lng: 55.2456 },
  },
];
