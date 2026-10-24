// All the text and links on the site live in this one file.
// Edit the words between the quote marks, save, and the site updates.
// Tip: keep the quote marks and commas exactly as they are.

export const links = {
  email: "mailto:visz6831@gmail.com?subject=Hello%20from%20your%20website",
  linkedin: "https://www.linkedin.com/in/vish686/",
  instagram: "https://www.instagram.com/vishal.boring/",
  sparrwo: "https://sparrwo.com",
  scanner: "https://scanrr.sparrwo.com",
  boringMonkee: "https://boringmonkee.com",
};

export const nav = [
  { label: "My story", href: "/my-story" },
  { label: "Free stuff", href: "/free-stuff" },
  { label: "How I work", href: "/how-i-work" },
  { label: "Writing", href: "/writing" },
];

export const site = {
  name: "Vishal Thakur",
  logoLetter: "B",
  footer: "© 2026 Vishal Thakur · Bengaluru, India",
  backHome: "← Back home",
};

export const contact = {
  heading: "Need help or want to chat?",
  // Shown only in the big contact block on the home page
  sub: "Just drop me an email or a message on LinkedIn.",
  email: "Email me",
  linkedin: "LinkedIn",
  instagram: "Instagram",
};

/* ---------------------------------- HOME ---------------------------------- */

export const home = {
  description:
    "Vishal Thakur from Bengaluru. Fired 3–4 times, two startups closed, still building Sparrwo and Boring Monkee. The good and the bad, all here.",
  badge: "CURRENTLY BUILDING SPARRWO & BORING MONKEE",
  title: "Hi, I'm Vishal.",
  intro: [
    `I've been fired 3–4 times. Two of my startups died. I lost 3 big clients in one year. And I'm still building, because I'd rather try and fail than say "kaash maine ye kar liya hota" at 60.`,
    "Here's all of it, the good and the bad. If you're on a similar road, maybe it saves you a few mistakes.",
  ],
  photoAlt: "Vishal Thakur",
  buildingHeading: "RIGHT NOW I'M BUILDING",
  building: [
    {
      name: "Sparrwo",
      text: "Helps B2B and professional service businesses show up on ChatGPT, Gemini, Claude and Perplexity.",
      cta: "sparrwo.com →",
      href: links.sparrwo,
    },
    {
      name: "Boring Monkee",
      text: "A content marketing and distribution agency for B2B brands.",
      cta: "boringmonkee.com →",
      href: links.boringMonkee,
    },
  ],
  doors: [
    {
      label: "01 / MY STORY",
      title: "My story, year by year.",
      text: "What I built, what broke, what I learned.",
      href: "/my-story",
    },
    {
      label: "02 / FREE STUFF",
      title: "Free stuff you can use today.",
      text: "Free guides, a free AI scanner, and the tools I pay for.",
      href: "/free-stuff",
    },
    {
      label: "03 / HOW I WORK",
      title: "How I work.",
      text: "My rules, what I want, and what I don't.",
      href: "/how-i-work",
    },
    {
      label: "04 / WRITING",
      title: "Things I write.",
      text: "Blogs and quick thoughts.",
      href: "/writing",
    },
  ],
  doorCta: "Open →",
};

/* -------------------------------- MY STORY -------------------------------- */

export type Chapter = {
  year: string;
  years: string;
  title: string;
  built: string;
  broke: string;
  learned: string;
  // Optional: replaces the heading "WHAT I BUILT" on the first card
  builtLabel?: string;
  // The latest chapter shows two cards ("building" and "next") instead of three
  current?: boolean;
};

export const story = {
  eyebrow: "01 / MY STORY",
  title: "My story, year by year.",
  intro: "Tap a year to see what I built, what broke, and what I learned.",
  railLabel: "Pick a version",
  panelLabel: "Selected version",
  chapterWord: "CHAPTER",
  of: "OF",
  older: "← Older",
  newer: "Newer →",
  labels: {
    normal: {
      one: "WHAT I BUILT",
      two: "WHAT BROKE",
      three: "WHAT I LEARNED",
    },
    current: {
      one: "WHAT I'M BUILDING",
      two: "WHAT'S NEXT",
    },
  },
  chapters: [
    {
      year: "School",
      years: "BEFORE 2017",
      title: "The kid who asked too many questions",
      builtLabel: "WHAT I LOVED",
      built:
        "A love for science, maths and English poems. Vicky sir made physics feel like magic.",
      broke:
        "It felt wrong from the start. By 11th class I knew it: all cramming, marks and govt jobs, no thinking. When I started my own companies, I fully understood how broken the education system is.",
      learned:
        "Ask questions, even if you look dumb. Understanding beats memorising.",
    },
    {
      year: "2017",
      years: "2017–2022",
      title: "7–8 marketing jobs",
      built:
        "Content, copy and product marketing. I brought in the leads and did most of the work to close deals with Reliance and Mirage Cinemas (self-service kiosks). The founder was meant to do the last step, and neither deal closed.",
      broke:
        "Got fired 3–4 times. Didn't get into Punjab Police and the income tax department. Lucky escape.",
      learned:
        "Getting fired is not the end. I still kept getting good jobs.",
    },
    {
      year: "2019",
      years: "2019–2021",
      title: "Healthshala and nutrition",
      built:
        "A fitness blog that grew to 17k visitors a month. I got certified in nutrition, then joined TakeCharge and helped people lose or gain weight with diet and workouts.",
      broke:
        "The pressure got to me. I lost hope, stopped writing, and walked away from everything.",
      learned:
        "You don't need a degree. A certificate and real experience were enough to help people.",
    },
    {
      year: "2021",
      years: "2021–2022",
      title: "Solo travel, and starting over",
      built:
        "Travelled solo, volunteered with an NGO, freelanced, and worked 2 remote jobs at the same time.",
      broke:
        "Went vegan for 2 years without doing it right. My health paid for it.",
      learned:
        "Travel taught me more than 12 years of school, 4 years of college and every job did.",
    },
    {
      year: "2023",
      years: "2023",
      title: "Jivit and Scrap AI, Goa",
      built:
        "Jivit, a floor cleaner made from fruit waste. Then Scrap AI, a kabadiwala business. Both got some early traction.",
      broke:
        "A co-founder fight ended Jivit. With Scrap AI, we ran out of money and had to go home.",
      learned:
        "Pick your co-founder very carefully. Operations is really hard. And my time in Goa with build3 is what led me to start Boring Monkee.",
    },
    {
      year: "2024",
      years: "2024–NOW",
      title: "Boring Monkee",
      built:
        "A content agency. Solo to a 9-person remote team. Clients in India, the US and Canada. Close to ₹1 Cr a year.",
      broke:
        "Chased fame in India. Lost 3 big clients, one cheated us. Revenue fell from ₹5–7L to ₹2–3L a month.",
      learned:
        "I built a good business but not a sales machine. Don't rely only on referrals.",
    },
    {
      year: "2026",
      years: "2026–NOW",
      title: "Sparrwo",
      current: true,
      built:
        "An AI visibility platform for B2B and professional service businesses. It helps them show up on ChatGPT, Gemini, Claude and Perplexity. 2 clients, and partners in Dubai, Canada and India.",
      broke:
        "Putting most of my time here now. Help more businesses get found on AI, and grow it into a ₹5–10 Cr a year company in the next 2–3 years.",
      learned: "",
    },
  ] satisfies Chapter[],
};

/* -------------------------------- FREE STUFF ------------------------------- */

export type ToolPart = string | { t: string; href: string };
export type Tool = { parts: ToolPart[]; d: string };

export const freeStuff = {
  eyebrow: "02 / FREE STUFF",
  title: "Free stuff. Take it.",
  intro:
    "Everything I learned from 5 companies, 7–8 jobs, solo trips and volunteering. Free.",
  scanner: {
    label: "Free AI scanner",
    badge: "FREE TOOL",
    title: "Does ChatGPT know your business?",
    text: "Check for free with the Sparrwo AI scanner. See how you show up on ChatGPT, Gemini, Claude and Perplexity.",
    cta: "Scan my site free →",
    href: links.scanner,
  },
  guidesHeading: "Free guides",
  guidesLabel: "Free guides",
  // The guides are not written yet, so cards show this label and are not clickable.
  // When a guide is ready: add  href: "https://link-to-the-guide"  to it, and
  // set the site to show "Get it free →" (ask Claude to flip that switch).
  comingSoon: "Coming soon",
  guides: [
    {
      kind: "FREE PDF",
      title: "Take the road less travelled",
      text: "How to start a different path in life, without regrets at 60.",
    },
    {
      kind: "FREE PDF",
      title: "Leave your job and start on your own",
      text: "From someone who left jobs and got fired 3–4 times, and was fine.",
    },
    {
      kind: "FREE PDF",
      title: "Start your own startup",
      text: "I’ve failed and succeeded as a founder. If I can do it, you can too.",
    },
    {
      kind: "FREE GUIDE",
      title: "How to travel solo",
      text: "Plan, go, and come back a different person.",
    },
    {
      kind: "FREE GUIDE",
      title: "Learn more in 1 year than 12 years of school",
      text: "Money, travel, thinking for yourself. The stuff school skipped.",
    },
    {
      kind: "FREE GUIDE",
      title: "Build confidence by volunteering",
      text: "Work for free, learn fast, and get braver.",
    },
  ],
  toolsHeading: "Tools I pay for",
  toolsSub: "What I actually use to run 2 businesses.",
  toolsFilterLabel: "Filter tools",
  tools: {
    Build: [
      {
        parts: [{ t: "Claude Pro", href: "https://claude.ai" }],
        d: "Claude Code. I build, design and research with it.",
      },
      {
        parts: [{ t: "ChatGPT", href: "https://chatgpt.com" }],
        d: "Testing new ideas, building quick SaaS and sites, research.",
      },
      {
        parts: [{ t: "Gemini", href: "https://gemini.google.com" }],
        d: "AI videos.",
      },
      {
        parts: [{ t: "AI APIs", href: "https://claude.com/platform/api" }],
        d: "Claude, Gemini, ChatGPT and Perplexity APIs inside my products.",
      },
      {
        parts: [{ t: "Vercel", href: "https://vercel.com" }],
        d: "Hosting my apps and sites.",
      },
      {
        parts: [{ t: "Supabase", href: "https://supabase.com" }],
        d: "Database for my apps.",
      },
      {
        parts: [{ t: "Railway", href: "https://railway.com" }],
        d: "Hosting backends.",
      },
      {
        parts: [{ t: "Serper API", href: "https://serper.dev" }],
        d: "Google search data for my tools.",
      },
      {
        parts: [
          { t: "Webflow", href: "https://webflow.com" },
          " + ",
          { t: "WordPress", href: "https://wordpress.org" },
        ],
        d: "Client and company websites.",
      },
      {
        parts: [
          { t: "Hostinger", href: "https://www.hostinger.com" },
          " + ",
          { t: "Namecheap", href: "https://www.namecheap.com" },
        ],
        d: "Hosting and domains.",
      },
    ],
    Work: [
      {
        parts: [{ t: "Google Workspace", href: "https://workspace.google.com" }],
        d: "Email, docs and sheets.",
      },
      {
        parts: [{ t: "Notion", href: "https://www.notion.com" }],
        d: "Notes and planning.",
      },
      {
        parts: [{ t: "Zoho", href: "https://www.zoho.com" }],
        d: "Company accounts.",
      },
      {
        parts: [{ t: "Canva", href: "https://www.canva.com" }],
        d: "Quick designs.",
      },
      {
        parts: [{ t: "Wispr Flow", href: "https://wisprflow.ai" }],
        d: "Talk instead of type.",
      },
      {
        parts: [{ t: "GoFullPage", href: "https://gofullpage.com" }],
        d: "Full-page screenshots.",
      },
    ],
    Sales: [
      {
        parts: [{ t: "Sparrwo", href: links.sparrwo }],
        d: "My own AI visibility tool.",
      },
      {
        parts: [{ t: "Apollo.io", href: "https://www.apollo.io" }],
        d: "Finding leads.",
      },
      {
        parts: [{ t: "SignalHire", href: "https://www.signalhire.com" }],
        d: "Finding contact details.",
      },
      {
        parts: [{ t: "Instantly", href: "https://instantly.ai" }],
        d: "Cold email.",
      },
    ],
    Gear: [
      {
        parts: [{ t: "MacBook", href: "https://www.apple.com/mac/" }],
        d: "Best if you work online.",
      },
      {
        parts: [
          { t: "iPhone", href: "https://www.apple.com/iphone/" },
          " + ",
          { t: "Samsung", href: "https://www.samsung.com/in/" },
        ],
        d: "Phones for shooting and work.",
      },
      {
        parts: [{ t: "Kreo", href: "https://kreoworld.in" }],
        d: "Lights and gear for videos.",
      },
      {
        parts: [
          { t: "DJI", href: "https://www.dji.com" },
          ", ",
          { t: "Boya", href: "https://www.boyamic.com" },
          ", ",
          { t: "Kreo", href: "https://kreoworld.in" },
          " mics",
        ],
        d: "Clean audio for videos.",
      },
    ],
    Money: [
      {
        parts: [{ t: "Zerodha", href: "https://zerodha.com" }],
        d: "Investing.",
      },
      {
        parts: [{ t: "Smallcase", href: "https://www.smallcase.com" }],
        d: "Ready-made stock baskets.",
      },
      {
        parts: [{ t: "INDmoney", href: "https://www.indmoney.com" }],
        d: "Tracking money in one place.",
      },
      {
        parts: [{ t: "CRED", href: "https://cred.club" }],
        d: "Paying credit card bills.",
      },
    ],
  } satisfies Record<string, Tool[]>,
};

/* -------------------------------- HOW I WORK ------------------------------- */

export const howIWork = {
  eyebrow: "03 / HOW I WORK",
  title: "How I work.",
  intro:
    "Written for me first. They change as I change. Tap a card to see why I follow it.",
  quote: "“I took the one less traveled by, and that has made all the difference.”",
  quoteBy: "Robert Frost, The Road Not Taken",
  quoteLabel: "Favourite lines",
  rulesLabel: "My rules",
  hintClosed: "Tap to see why →",
  hintOpen: "Tap to flip back",
  rules: [
    {
      cat: "LIFE",
      rule: "Ask questions. Always.",
      why: "Even if I look dumb. That is how I finally understood maths and physics, and I still remember them.",
    },
    {
      cat: "LIFE",
      rule: "Live by my rules, not theirs.",
      why: "Not my parents, not society, not anyone. It is my life, so I make the calls.",
    },
    {
      cat: "WORK",
      rule: "Take the risk.",
      why: "We get one life. I don’t want to say “kaash maine ye kar liya hota” at 60.",
    },
    {
      cat: "WORK",
      rule: "Success is a byproduct.",
      why: "I do what makes me happy. Success will come. If not, no problem.",
    },
    {
      cat: "LIFE",
      rule: "Don’t try to impress people.",
      why: "Sometimes I still do. I wish I didn’t. I’m working on it.",
    },
    {
      cat: "BELIEFS",
      rule: "Question everything.",
      why: "I’m an atheist. I don’t follow rituals, superstitions or traditions just because everyone does.",
    },
    {
      cat: "BELIEFS",
      rule: "Equality. 100%.",
      why: "Men and women, no exceptions. I believe in democracy and the Constitution of India.",
    },
    {
      cat: "MONEY",
      rule: "Things don’t make me happy.",
      why: "No debt for show-off stuff. Business debt to grow something real is fine.",
    },
  ],
  sideLabel: "What I want and don't want",
  sideSub: "This changes as I change. This is me at 32.",
  switchLabel: "Switch list",
  wantTab: "What I want",
  dontTab: "What I don't want",
  wantTitle: "What I want",
  dontTitle: "What I don’t want",
  want: [
    "To be happy",
    "Enough money to be free (₹10–15 Cr)",
    "To keep travelling",
    "To keep building things",
  ],
  dont: [
    "A fake lifestyle to show off",
    "To buy a house",
    "To live in Delhi NCR, my hometown or a concrete jungle",
    "To send my kids (if I have any) to regular school. I’d homeschool them.",
  ],
  happyLabel: "Things that make me happy",
  happyHeading: "THINGS THAT MAKE ME HAPPY",
  happy: [
    "Travelling",
    "Building things",
    "Taking risks",
    "Long walks",
    "Books (I want to read more)",
    "Good food",
    "Time with my wife",
  ],
};

/* ---------------------------------- WRITING -------------------------------- */

export const writing = {
  eyebrow: "04 / WRITING",
  title: "Things I write.",
  intro: "Blogs and quick thoughts. Pick a topic.",
  thoughtLabel: "This week's thought",
  thoughtHeading: "THIS WEEK'S THOUGHT",
  thought: "“Do what your second voice says. Take calculated risks. You'll be happy.”",
  thoughtDate: "OCTOBER 2026",
  filterLabel: "Filter by topic",
  topics: ["All", "Business", "Building with AI", "Life"],
  postsLabel: "Posts",
  empty: "First post coming soon.",
  emptyTopic: "No posts in this topic yet.",
  backToWriting: "← All writing",
  minRead: "min read",
};
