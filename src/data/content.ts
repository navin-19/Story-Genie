export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export interface FeatureItem {
  id: string;
  title: string;
  subtitle?: string;
  iconName: "Sparkles" | "BookOpen" | "Palette" | "Heart" | "Film" | "Wand2" | "Clock" | "Star";
  accentColor: string;
}

export const heroFeatureStrip: FeatureItem[] = [
  {
    id: "ai-videos",
    title: "AI-Powered Videos",
    iconName: "Film",
    accentColor: "from-violet-500 to-purple-600",
  },
  {
    id: "story-books",
    title: "Personalized Story Books",
    iconName: "BookOpen",
    accentColor: "from-pink-500 to-rose-600",
  },
  {
    id: "unique-creative",
    title: "Unique & Creative",
    iconName: "Palette",
    accentColor: "from-amber-400 to-orange-500",
  },
  {
    id: "every-occasion",
    title: "Made for Every Occasion",
    iconName: "Heart",
    accentColor: "from-cyan-400 to-blue-500",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Birthday AI Videos" | "Custom Story Books" | "Family Videos" | "Custom Characters" | "Special Occasions";
  type: "video" | "book" | "character";
  description: string;
  image: string;
  accentColor: string;
  accentBg: string;
  durationOrPages: string;
  tag: string;
  sampleBadge?: string;
}

export const okGalleryData: GalleryItem[] = [
  {
    id: "leo-5th-birthday",
    title: "Leo's 5th Space Odyssey",
    category: "Birthday AI Videos",
    type: "video",
    description: "An epic 3-minute cinematic video where 5-year-old Leo pilots a rocket to save the Cosmic Cupcake Planet.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    accentColor: "#F97316",
    accentBg: "bg-orange-500",
    durationOrPages: "2m 45s • 4K Film",
    tag: "Birthday Special",
    sampleBadge: "Watch Film ▷",
  },
  {
    id: "maya-whispering-forest",
    title: "Maya & The Whispering Forest",
    category: "Custom Story Books",
    type: "book",
    description: "A 28-page custom illustrated hardbound book featuring Maya befriending magical talking woodland animals.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    accentColor: "#8B5CF6",
    accentBg: "bg-violet-600",
    durationOrPages: "28 Pages • Hardcover",
    tag: "Bedtime Story",
    sampleBadge: "Read Book 📖",
  },
  {
    id: "sharma-50th-anniversary",
    title: "50 Years of Togetherness",
    category: "Family Videos",
    type: "video",
    description: "Golden jubilee tribute transforming 50 years of black-and-white photos and voice messages into a nostalgic film.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80",
    accentColor: "#EC4899",
    accentBg: "bg-pink-500",
    durationOrPages: "5m 20s • HD Video",
    tag: "Anniversary",
    sampleBadge: "Watch Film ▷",
  },
  {
    id: "super-sam-character",
    title: "Captain Sam: The Bedtime Hero",
    category: "Custom Characters",
    type: "character",
    description: "Custom stylized 3D avatar design of little Sam with his dog Rusty, created for story animations.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=900&q=80",
    accentColor: "#0EA5E9",
    accentBg: "bg-sky-500",
    durationOrPages: "3D Character Suite",
    tag: "Avatar Design",
    sampleBadge: "View 3D 🎨",
  },
  {
    id: "aarav-graduation-journey",
    title: "From Kindergarten to Graduation",
    category: "Special Occasions",
    type: "video",
    description: "An emotional surprise graduation film showing Aarav's growth milestones set to customized orchestral music.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    accentColor: "#14B8A6",
    accentBg: "bg-teal-500",
    durationOrPages: "4m 10s • 4K Film",
    tag: "Graduation",
    sampleBadge: "Watch Film ▷",
  },
  {
    id: "tara-dinosaur-quest",
    title: "Tara & The Dinosaur Island",
    category: "Custom Story Books",
    type: "book",
    description: "Personalized adventure story where 7-year-old Tara teaches baby T-Rex how to share crayons.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    accentColor: "#F59E0B",
    accentBg: "bg-amber-500",
    durationOrPages: "32 Pages • Glossy Print",
    tag: "Adventure Book",
    sampleBadge: "Read Book 📖",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  categoryTag: string;
  description: string;
  features: string[];
  image: string;
  accentColor: string;
  accentHex: string;
  accentBorder: string;
  accentBadgeBg: string;
  accentButtonClass: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "birthday-ai-videos",
    title: "Birthday AI Videos",
    categoryTag: "Most Popular",
    description: "Transform birthday photos, candid phone clips, and family voice notes into an extraordinary cinematic tribute video.",
    features: ["Personalized AI Voiceover", "Dynamic 4K Cinematic Visuals", "Custom Song / Background Score", "Ready in 48-72 Hours"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    accentColor: "text-orange-500",
    accentHex: "#F97316",
    accentBorder: "border-orange-200 hover:border-orange-400",
    accentBadgeBg: "bg-orange-500/10 text-orange-600 border border-orange-200",
    accentButtonClass: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25",
  },
  {
    id: "custom-story-books",
    title: "Custom Story Books",
    categoryTag: "Keepsake Favorite",
    description: "Hardcover & digital books starring your loved ones as heroes of their very own magical fairytale with custom illustrations.",
    features: ["Bespoke Illustrated Artwork", "Personalized Moral / Storyline", "Luxury Glossy Hardcover Print", "Includes Digital E-Book (PDF)"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    accentColor: "text-violet-600",
    accentHex: "#8B5CF6",
    accentBorder: "border-purple-200 hover:border-purple-400",
    accentBadgeBg: "bg-purple-500/10 text-purple-600 border border-purple-200",
    accentButtonClass: "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/25",
  },
  {
    id: "family-videos",
    title: "Family & Occasion Videos",
    categoryTag: "Emotional Milestone",
    description: "Heartwarming legacy videos for anniversaries, family reunions, baby arrivals, graduations, and golden jubilees.",
    features: ["Photo Restoration & Colorization", "Chronological Storyline Flow", "Multi-family Voice Integrations", "Subtitled in Any Language"],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    accentColor: "text-pink-500",
    accentHex: "#EC4899",
    accentBorder: "border-pink-200 hover:border-pink-400",
    accentBadgeBg: "bg-pink-500/10 text-pink-600 border border-pink-200",
    accentButtonClass: "bg-pink-500 hover:bg-pink-600 text-white shadow-pink-500/25",
  },
  {
    id: "custom-characters",
    title: "Custom Characters",
    categoryTag: "Creative Art",
    description: "Turn your child, pet, or family member into an illustrated 3D or storybook cartoon character for personalized media.",
    features: ["Multiple Art Style Choices", "3D Avatar & 2D Vector Formats", "High-Resolution Render Files", "Print & Animation-Ready"],
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
    accentColor: "text-sky-500",
    accentHex: "#0EA5E9",
    accentBorder: "border-sky-200 hover:border-sky-400",
    accentBadgeBg: "bg-sky-500/10 text-sky-600 border border-sky-200",
    accentButtonClass: "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25",
  },
  {
    id: "themed-story-books",
    title: "Themed Story Books",
    categoryTag: "Educational & Fun",
    description: "Bedtime stories themed around space exploration, dinosaur adventures, jungle safaris, superhero quests, and more.",
    features: ["Age-Appropriate Vocabulary", "Interactive Puzzle Endings", "Parent Dedication Page", "Custom Photo Inserts"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    accentColor: "text-teal-500",
    accentHex: "#14B8A6",
    accentBorder: "border-teal-200 hover:border-teal-400",
    accentBadgeBg: "bg-teal-500/10 text-teal-600 border border-teal-200",
    accentButtonClass: "bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/25",
  },
  {
    id: "brand-business-videos",
    title: "Brand & Business Videos",
    categoryTag: "For Businesses",
    description: "Emotional storytelling videos for founder journeys, team milestones, client appreciation, product origins, and annual events.",
    features: ["Brand Voice & Logo Infusion", "Social-Media Optimized Formats", "Commercial License Included", "Express Turnaround Available"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    accentColor: "text-amber-500",
    accentHex: "#F59E0B",
    accentBorder: "border-amber-200 hover:border-amber-400",
    accentBadgeBg: "bg-amber-500/10 text-amber-600 border border-amber-200",
    accentButtonClass: "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  occasion: string;
  rating: number;
  avatar: string;
  quote: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Priya & Rajesh Sundaram",
    role: "Parents of 5-year-old Ananya",
    occasion: "5th Birthday AI Video",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote: "When Ananya saw herself flying with dragons in her birthday video, her jaw dropped! The entire family was teary-eyed. StoryGenie turned simple home photos into a Hollywood-grade masterpiece.",
  },
  {
    id: "test-2",
    name: "David & Sarah Miller",
    role: "Gifted to Grandparents",
    occasion: "50th Anniversary Legacy Film",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The personalized storybook and video brought 50 years of memories back to life. My parents said it was the most thoughtful gift they've ever received in their golden years.",
  },
  {
    id: "test-3",
    name: "Meera Krishnan",
    role: "Mother of twin boys",
    occasion: "Personalized Hardcover Book",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "The print quality of the hardcover book is outstanding! My twins insist on reading 'their' adventure every single night. The artwork captured their exact personalities so accurately.",
  },
];

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  iconName: "Sparkles" | "Heart" | "Users" | "Compass";
  colorClass: string;
}

export const journeyTimeline: TimelineMilestone[] = [
  {
    year: "2023",
    title: "The Idea Born",
    description: "A spark of inspiration to blend generative AI storytelling with tender family memories and bedtime tales.",
    iconName: "Sparkles",
    colorClass: "bg-purple-500 text-white shadow-purple-500/30",
  },
  {
    year: "2024",
    title: "First 500+ Creations",
    description: "Launched our studio and delighted over 500 families with bespoke birthday videos and personalized illustrated books.",
    iconName: "Heart",
    colorClass: "bg-pink-500 text-white shadow-pink-500/30",
  },
  {
    year: "2024",
    title: "Growing Community",
    description: "Expanded our creative roster with custom character design suites, multilingual narration, and luxury prints.",
    iconName: "Users",
    colorClass: "bg-blue-500 text-white shadow-blue-500/30",
  },
  {
    year: "2025",
    title: "More Stories Ahead",
    description: "Pioneering interactive family archive experiences, animated bedtime apps, and heirloom story editions.",
    iconName: "Compass",
    colorClass: "bg-amber-500 text-white shadow-amber-500/30",
  },
];

export interface ContactInfo {
  label: string;
  value: string;
  subtext: string;
  icon: "Mail" | "Phone" | "MapPin" | "Clock";
  actionHref?: string;
}

// NOTE FOR CLIENT: Replace with actual company contact details
export const placeholderContactDetails: ContactInfo[] = [
  {
    label: "Email Us",
    value: "hello@storygenie.in",
    subtext: "We reply within 24 hours",
    icon: "Mail",
    actionHref: "mailto:hello@storygenie.in",
  },
  {
    label: "Call Us",
    value: "+91 98765 43210",
    subtext: "Mon-Sat, 9 AM - 6 PM IST",
    icon: "Phone",
    actionHref: "tel:+919876543210",
  },
  {
    label: "Our Location",
    value: "Chennai, Tamil Nadu, India",
    subtext: "Global Digital Delivery",
    icon: "MapPin",
    actionHref: "https://maps.google.com/?q=Chennai",
  },
  {
    label: "Working Hours",
    value: "Monday – Saturday",
    subtext: "9:00 AM – 6:00 PM IST",
    icon: "Clock",
  },
];
