/**
 * Game Designer Portfolio - Projects Data Store
 * Designer: Deep Tanush
 */

const PORTFOLIO_CONFIG = {
  designerName: "DEEP TANUSH",
  designerTitle: "GAME DESIGNER",
  selectedWorksSubtitle: "Selected Works",
  statusBadge: "AVAILABLE FOR ROLES // 2026",
  location: "REMOTE / ON-SITE",
  specialization: "3D Puzzle Systems • Level Architecture • Gameplay Mechanics",
  aboutShort: "I am a Game Designer specializing in 3D puzzle systems, environmental storytelling, and player-centric mechanic design. From spatial drone exploration to multi-stage logic contraptions, I bridge narrative tension with tactile gameplay loops.",
  contacts: {
    email: "deeptanush55@gmail.com",
    phone: "+91 9848325520",
    itchio: "https://itiskiruhere.itch.io/ui",
    designerItchio: "https://deeptanush.itch.io",
    resumeUrl: "DeepTanush_Resume.pdf",
    resumePrintUrl: "resume.html"
  },
  resume: {
    name: "DEEP TANUSH",
    role: "GAME DESIGNER / LEVEL DESIGNER",
    email: "deeptanush55@gmail.com",
    phone: "+91 9848325520",
    location: "Hyderabad, India (Available for Remote / Relocation)",
    itchGame: "https://itiskiruhere.itch.io/ui",
    itchProfile: "https://deeptanush.itch.io",
    summary: "Creative and systems-driven Game Designer pursuing a B.A. in Game Design at Backstage Pass Institute of Gaming. Experienced in architecting 3D spatial puzzles, mechanic prototyping in Unity (C#), and environmental storytelling. Co-designer of 'UI (Unwanted Internship)', a released multi-timeline mystery on itch.io. Dedicated to player-centric feedback loops, intuitive spatial affordances, and bespoke craftsmanship.",
    skills: {
      gameDesign: [
        "Core Mechanic Prototyping",
        "3D Puzzle Progression & Logic",
        "Player Affordance & Visual Signifiers",
        "Cognitive Pacing & Difficulty Balancing",
        "Playtest Feedback Analysis & Telemetry"
      ],
      levelDesign: [
        "3D Spatial Layout & Architectural Flow",
        "Graybox Whiteboxing & Metric Blocking",
        "Sightline Staging & Player Funneling",
        "Environmental Narrative & Visual Landmarks",
        "Hub-and-Spoke Chamber Architectures"
      ],
      technical: [
        "Unity Engine (C# Scripting, Physics, Cinemachine)",
        "Unreal Engine 5 (Basics, Spatial Blocking)",
        "Blender (Level Blocking, Greybox Props)",
        "Version Control (Git)"
      ],
      collaboration: [
        "Cross-Disciplinary Team Collaboration",
        "Game Design Documents (GDD) & One-Pagers",
        "Logic Flowcharts & Puzzle Dependency Graphs",
        "Agile / Rapid Jam Prototyping"
      ]
    },
    education: [
      {
        institution: "Backstage Pass Institute of Gaming and Technology",
        degree: "Bachelor of Arts in Game Design",
        period: "2023 – 2027",
        details: "Specializing in game systems, mechanics architecture, 3D level design, Unity prototyping, and player psychology."
      },
      {
        institution: "Sri Chaitanya Junior College",
        degree: "Higher Secondary Education (Intermediate)",
        period: "2020 – 2023",
        details: "Mathematics, Physics, and Chemistry foundation."
      },
      {
        institution: "Faust High School",
        degree: "Secondary School Certificate (SSC)",
        period: "2007 – 2020",
        details: "Foundational education and creative problem-solving."
      }
    ],
    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Telugu", level: "Native / Bilingual" },
      { name: "Hindi", level: "Professional Working Proficiency" }
    ],
    projects: [
      {
        title: "UI (Unwanted Internship)",
        role: "Game Designer & Level Designer",
        engine: "Unity 3D",
        status: "Released on itch.io",
        link: "https://itiskiruhere.itch.io/ui",
        points: [
          "Designed multi-timeline puzzle progression across 3 distinct eras (Retro Bunker, Chemistry Academy, Cybernetic Core) linked via a central tension-building elevator nexus.",
          "Conceptualized and tuned the autonomous aerial AI Drone mechanic (ALP-07) for vertical reconnaissance and puzzle clue discovery.",
          "Architected environmental deduction puzzles, including a clever meta puzzle where players reference visual UI components to deduce in-world solutions.",
          "Greyboxed and staged level sightlines across all 3 chambers, directing player attention to interactables while preserving mystery.",
          "Collaborated in a 5-member multidisciplinary team adhering to a strict 90% bespoke asset pipeline with zero generative AI."
        ]
      }
    ]
  }
};

const PROJECTS_DATA = [
  {
    id: "ui-unwanted-internship",
    title: "UI ( Unwanted Internship )",
    subtitle: "Game Design • 3D Puzzle Mystery",
    category: "3D Puzzle Mystery & Drone Exploration",
    year: "2026",
    stageTag: "FLAGSHIP PROJECT",
    engineBadge: "UNITY // 3D",
    statusBadge: "PLAYABLE ON ITCH.IO",
    thumbnail: "assets/images/ui-cover.png",
    coverImage: "assets/images/ui-cover.png",
    heroImage: "assets/images/ui-cover.png",
    heroCaption: "UI (Unwanted Internship) — Autonomous AI Drone 'ALP-07' & Official Key Visual.",
    trailerEmbedUrl: "https://www.youtube.com/embed/KvcdGrKK1Cc",
    itchUrl: "https://itiskiruhere.itch.io/ui",
    meta: {
      role: "Game Designer",
      team: "5 Members (Deep Tanush, ITISKIRUHERE, Ananth, Saibharath2006, alphaemperor)",
      engine: "Unity",
      genre: "3D Sci-Fi Puzzle Mystery / Drone Exploration",
      timeline: "Game Jam to Polished Itch.io Release"
    },
    overview: "You thought you were taking a simple, well-deserved holiday wandering through an old, mysterious museum. Everything changes the moment you step into the elevator: the doors slam shut, the lights flicker, and 'The Collector' emerges from the shadows. His ultimatum: retrieve three lost relics scattered across three distinct timelines, or remain trapped forever. Armed with an autonomous AI Drone assistant, your wits, and a knack for decoding environmental puzzles, you must explore hidden chambers, decipher enigmatic documents, synthesize chemical solutions, and unlock the secrets of the timelines.",
    myDesign: "Designed the overarching puzzle progression architecture across all three timelines. Conceptualized the AI Drone assistant exploration loop, allowing players to reach high-altitude conduits and scout distant environmental clues. Authored the multi-stage deduction puzzles—including a meta puzzle where players reference visual UI components to deduce solutions. Tuned the difficulty balance between cognitive tension and eureka moments to ensure zero frustration bottlenecks.",
    gameplay: {
      summary: "First-person spatial investigation combining drone navigation, chemical reagent mixing, and mechanical decryptors.",
      highlights: [
        "AI Drone Reconnaissance: Deploy and direct an aerial drone to access inaccessible ducts, retrieve keys, and survey puzzle chambers.",
        "Cross-Timeline Deductions: Gather cipher stones, cassette tapes, and archival notes from one era to unlock mechanisms in another.",
        "Chemical Synthesis Station: Interactive laboratory puzzles requiring exact fluid ratios and reagent mixing.",
        "Meta UI Reference Puzzles: Innovative mechanics where user interface elements subtly inform in-world puzzle logic."
      ],
      media: [
        {
          src: "assets/images/ui-screenshot-7.png",
          caption: "Timeline III: The Futuristic Executive Chamber — Holographic terminals and security core."
        },
        {
          src: "assets/images/ui-screenshot-3.png",
          caption: "Timeline II: The Chemical Laboratory — Interactive beakers, microscopes, and reagent mixing puzzle bench."
        },
        {
          src: "assets/images/ui-screenshot-2.png",
          caption: "Timeline I: The Retro Investigation Bunker — Reel-to-reel tape decks, microfilm lightboxes, and conspiracy corkboard."
        },
        {
          src: "assets/images/ui-screenshot-5.png",
          caption: "The Museum Art Wing — Classical sculpture alignments, easel portraits, and pedestal riddle box."
        },
        {
          src: "assets/images/ui-screenshot-6.png",
          caption: "Mainframe Server Core — High-voltage server racks and holographic workstation terminal."
        },
        {
          src: "assets/images/ui-screenshot-1.png",
          caption: "Underground Armory & Vault — Secured crate storage and historical cipher mechanisms."
        }
      ]
    },
    levelDesign: {
      summary: "Three distinct chronological chambers connected by the central elevator nexus, each with unique visual language and spatial pacing.",
      highlights: [
        "Central Elevator Hub: Serves as the high-tension briefing anchor where The Collector issues demands before each timeline descent.",
        "Timeline 1 (Retro Bunker): Claustrophobic concrete geometry with tight sightlines emphasizing close-quarters document inspection.",
        "Timeline 2 (Science Academy & Art Wing): Expansive tiled chambers with multi-level vantage points and radial puzzle stations.",
        "Timeline 3 (Futuristic Server Core): High-contrast neon mainframe layout with clean path readability and elevated server platforms."
      ],
      media: [
        {
          src: "assets/images/ui-screenshot-2.png",
          caption: "Level Flow & Sightline Staging: The Retro Investigation Chamber arranged so player sightlines immediately identify key interactable desks upon entry."
        },
        {
          src: "assets/images/ui-screenshot-5.png",
          caption: "Spatial Layout: The Gallery Chamber utilizing open floor space and clear line-of-sight to the central pedestal puzzle."
        }
      ]
    },
    process: {
      summary: "Bespoke 3D asset pipeline with zero generative AI, rapid whiteboxing, and iterative player telemetry.",
      highlights: [
        "Zero AI Asset Policy: 90% of all 3D props, furniture, and environmental models were custom built and textured by the team.",
        "Puzzle Flow Heatmapping: Playtested with blind participants to calibrate clue visibility, eliminating confusing dead ends.",
        "Drone Flight Tuning: Damped drone acceleration and inertia to make aerial inspections feel precise and responsive.",
        "Audio Atmosphere Pass: Integrated atmospheric hums, tape-deck mechanical clicks, and elevator chime cues."
      ],
      media: []
    },
    finalResult: {
      summary: "Released as a standalone 993 MB Windows title on itch.io, featuring immersive 3D puzzle systems, environmental mystery, and atmospheric cohesion.",
      metrics: [
        { label: "Release Format", value: "PC (Windows)" },
        { label: "Custom 3D Assets", value: "90% Bespoke" },
        { label: "Timelines Explored", value: "3 Eras" }
      ],
      links: [
        { label: "Play Game on Itch.io", url: "https://itiskiruhere.itch.io/ui" },
        { label: "Watch YouTube Gameplay Trailer", url: "https://www.youtube.com/watch?v=KvcdGrKK1Cc" }
      ]
    }
  }
];

// Timeline sub-chambers for the rich homepage showcase
const TIMELINE_CHAMBERS = [
  {
    number: "TIMELINE I",
    title: "The Retro Bunker & Archive",
    roleNote: "Audio deduction & archival cryptography",
    image: "assets/images/ui-screenshot-2.png",
    description: "Reel-to-reel magnetic tape playback, corkboard conspiracy deduction, and classified documents hidden behind reinforced blast doors."
  },
  {
    number: "TIMELINE II",
    title: "The Academy & Chemistry Lab",
    roleNote: "Fluid mechanics & statue observation",
    image: "assets/images/ui-screenshot-3.png",
    description: "Precision chemical synthesis bench, microscope inspection, and classical art wing pedestal alignments."
  },
  {
    number: "TIMELINE III",
    title: "The Collector's Cybernetic Core",
    roleNote: "Holographic consoles & drone navigation",
    image: "assets/images/ui-screenshot-7.png",
    description: "High-voltage mainframe servers, glowing cybernetic executive consoles, and high-tech timeline extraction nodes."
  }
];
