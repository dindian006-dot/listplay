import React from 'react';
import { motion } from 'motion/react';
import { 
  Download, Shield, Play, Music, BrainCircuit, Github, Smartphone, FastForward, Repeat, 
  Library, Palette, UserX, Ghost, Database, ArrowLeftRight, Trash2, Lock,
  Search, User, MoreVertical, SkipBack, SkipForward, Shuffle, History, ListVideo, Heart,
  Coffee, Code, Sun, Moon,
  Bell, Settings, Home, PlaySquare, ArrowLeft, RefreshCw, EyeOff, Timer, X
} from 'lucide-react';
import musicScreen from '../music.png';
import listplayLogo from '../listplay.png';

const PhoneMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[280px] h-[580px] border-[8px] border-[#111] rounded-[40px] bg-[#000] relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden shrink-0">
    <div className="absolute top-0 inset-x-0 h-6 bg-[#111] w-36 mx-auto rounded-b-2xl z-20" />
    <div className="w-full h-full relative z-10 flex flex-col">
       {children}
    </div>
  </div>
);

const YoutubeHome = () => (
  <div className="flex flex-col h-full bg-[#111] text-white">
    {/* Header */}
    <div className="flex justify-between items-center px-4 pt-8 pb-3 bg-[#0f0f0f] shrink-0">
      <div className="font-bold text-lg tracking-tight">LISTPLAY</div>
      <div className="flex items-center gap-4">
        <Search size={20} />
        <Bell size={20} />
        <Settings size={20} />
      </div>
    </div>
    
    {/* Content */}
    <div className="flex-1 overflow-y-auto hide-scrollbars pb-[60px]">
      {/* Video 1 */}
      <div className="mb-4">
        <div className="w-full aspect-[16/9] relative bg-zinc-800">
           <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="thumbnail" />
           <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1 rounded">15:37</div>
           <div className="absolute bottom-2 left-2 text-white/50 font-bold text-lg italic drop-shadow-md">allrecipes</div>
        </div>
        <div className="flex gap-3 px-3 mt-3">
          <div className="w-9 h-9 rounded-full bg-orange-600 shrink-0 flex items-center justify-center font-bold text-white text-xs">ar</div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold leading-tight mb-1 pr-4">5 High-Protein Dinner Recipes You Need to Try | Allrecipes</h3>
            <div className="text-xs text-gray-400">Allrecipes • 982K views • 1 year ago</div>
          </div>
          <MoreVertical size={16} className="text-white shrink-0 mt-0.5" />
        </div>
      </div>

      {/* Video 2 */}
      <div className="mb-4">
        <div className="w-full aspect-[16/9] relative bg-zinc-800">
           <img src="https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="thumbnail" />
           <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1 rounded">52:56</div>
           <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center text-4xl font-black text-white px-2 tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">BAN CHAN</div>
        </div>
        <div className="flex gap-3 px-3 mt-3">
          <div className="w-9 h-9 rounded-full bg-white shrink-0 flex items-center justify-center overflow-hidden">
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="avatar" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold leading-tight mb-1 pr-4 uppercase">100 HEALTHY & EASY KOREAN DISHES</h3>
            <div className="text-xs text-gray-400">Doobydobap • 2M views • 10 months ago</div>
          </div>
          <MoreVertical size={16} className="text-white shrink-0 mt-0.5" />
        </div>
      </div>
      
      {/* Video 3 */}
      <div className="mb-4">
        <div className="w-full aspect-[16/9] relative bg-zinc-800">
           <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="thumbnail" />
        </div>
      </div>
    </div>
    
    {/* Bottom Nav */}
    <div className="absolute bottom-0 inset-x-0 h-[50px] bg-[#111] border-t border-white/10 flex justify-around items-center px-2 shrink-0">
       <div className="flex flex-col items-center gap-0.5 text-[#ff0000]">
         <Home size={20} />
         <span className="text-[9px] font-medium">Beranda</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <PlaySquare size={20} />
         <span className="text-[9px] font-medium">Shorts</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <Music size={20} />
         <span className="text-[9px] font-medium">Musik</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <PlaySquare size={20} />
         <span className="text-[9px] font-medium">Subs</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <Library size={20} />
         <span className="text-[9px] font-medium">Library</span>
       </div>
    </div>
  </div>
);

const MusicHome = () => (
  <div className="flex flex-col h-full bg-[#0a0a0a] text-white relative">
    {/* Header */}
    <div className="flex justify-between items-center px-4 py-4 shrink-0 top-0 sticky z-10 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <ArrowLeft size={24} />
        <h1 className="font-bold text-xl tracking-wide">MUSIC</h1>
      </div>
      <div className="flex items-center gap-5">
        <Search size={24} />
        <Settings size={24} />
      </div>
    </div>
    
    {/* Content */}
    <div className="flex-1 overflow-y-auto hide-scrollbars pb-[60px] px-4 pt-2">
      {/* New releases */}
      <h2 className="text-2xl font-bold mb-4 tracking-tight">New releases</h2>
      <div className="flex gap-3 overflow-x-auto hide-scrollbars mb-8 -mx-4 px-4 pb-2">
        <div className="w-[140px] shrink-0">
          <div className="w-full aspect-square bg-blue-500 rounded overflow-hidden mb-2 relative">
             <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5956093?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Sapphire" />
          </div>
          <div className="text-base font-bold truncate tracking-tight">Sapphire</div>
          <div className="text-sm text-gray-400 truncate">Single • Ed Sheeran</div>
        </div>
        <div className="w-[140px] shrink-0">
          <div className="w-full aspect-square bg-zinc-800 rounded overflow-hidden mb-2">
             <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Infinity" />
          </div>
          <div className="text-base font-bold truncate tracking-tight">Infinity</div>
          <div className="text-sm text-gray-400 truncate">Single • Jaymes Young</div>
        </div>
        <div className="w-[140px] shrink-0">
          <div className="w-full aspect-square bg-zinc-200 rounded overflow-hidden mb-2">
             <img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" alt="Dandelions" />
          </div>
          <div className="text-base font-bold truncate tracking-tight">Dandelions</div>
          <div className="text-sm text-gray-400 truncate">Single • Ruth B.</div>
        </div>
      </div>

      {/* Trending */}
      <h2 className="text-2xl font-bold mb-4 tracking-tight">Trending</h2>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mb-8">
         {/* Column 1 */}
         {[
           {num: "#1", title: "Best Moments of 2025...", artist: "Ed Sheeran", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=150"},
           {num: "#2", title: "Dandelions", artist: "Ruth B.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=150"},
           {num: "#3", title: "Copines", artist: "Aya Nakamura", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?auto=format&fit=crop&q=80&w=150"},
           {num: "#4", title: "Go Down Deh", artist: "Spice", img: "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&q=80&w=150"}
         ].map((item) => (
            <div key={item.num} className="flex items-center gap-3 pr-2">
               <span className="text-red-500 font-bold text-xs shrink-0 w-4">{item.num}</span>
               <div className="w-12 h-12 bg-zinc-800 rounded shrink-0 overflow-hidden">
                 <img src={item.img} className="w-full h-full object-cover" alt="" />
               </div>
               <div className="min-w-0">
                 <div className="text-sm font-bold truncate text-white leading-tight">{item.title}</div>
                 <div className="text-xs text-gray-400 truncate mt-0.5">{item.artist}</div>
               </div>
            </div>
         ))}
         {/* Column 2 - simplified to fix layout */}
      </div>

      {/* Popular artists */}
      <h2 className="text-2xl font-bold mb-4 tracking-tight">Popular artists</h2>
      <div className="flex gap-4 overflow-x-auto hide-scrollbars mb-6 -mx-4 px-4">
         <div className="flex flex-col items-center gap-2 shrink-0">
           <div className="w-[120px] h-[120px] rounded-full bg-zinc-800 overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Ed Sheeran" />
           </div>
           <span className="text-sm font-bold truncate text-white">Ed Sheeran</span>
         </div>
         <div className="flex flex-col items-center gap-2 shrink-0">
           <div className="w-[120px] h-[120px] rounded-full bg-zinc-200 overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Ruth B." />
           </div>
           <span className="text-sm font-bold truncate text-white">Ruth B.</span>
         </div>
         <div className="flex flex-col items-center gap-2 shrink-0">
           <div className="w-[120px] h-[120px] rounded-full bg-blue-900 overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Aya Nakamura" />
           </div>
           <span className="text-sm font-bold truncate text-white">Aya Nakamura</span>
         </div>
      </div>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 inset-x-0 h-[50px] bg-[#0a0a0a] border-t border-white/10 flex justify-around items-center px-2 shrink-0 z-20">
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <Home size={20} />
         <span className="text-[9px] font-medium">Beranda</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <PlaySquare size={20} />
         <span className="text-[9px] font-medium">Shorts</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-[#ff0000]">
         <Music size={20} />
         <span className="text-[9px] font-medium">Musik</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <PlaySquare size={20} />
         <span className="text-[9px] font-medium">Subs</span>
       </div>
       <div className="flex flex-col items-center gap-0.5 text-gray-400">
         <Library size={20} />
         <span className="text-[9px] font-medium">Library</span>
       </div>
    </div>
  </div>
);

const LibraryHome = () => (
  <div className="flex flex-col h-full bg-[#111] text-white">
     {/* Header */}
     <div className="flex justify-between items-center px-4 pt-8 pb-4 shrink-0 top-0 sticky z-20 bg-[#111]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
           <ArrowLeft size={24} />
           <h1 className="font-bold text-xl tracking-wide">Pengaturan</h1>
        </div>
        <div className="flex items-center">
           <Search size={24} />
        </div>
     </div>
     
     {/* Content */}
     <div className="flex-1 overflow-y-auto hide-scrollbars px-4 pt-2 pb-[60px]">
       {/* Active Learning Card */}
       <div className="w-full rounded-2xl p-5 mb-6 relative overflow-hidden bg-gradient-to-br from-red-600 to-purple-800">
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
             <RefreshCw size={16} className="text-white" />
          </div>
          <div className="inline-block bg-black/20 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-3">ACTIVE LEARNING</div>
          <h2 className="text-3xl font-bold mb-2">The Specialist</h2>
          <p className="text-sm text-white/90 mb-4 max-w-[80%] leading-snug font-light">Laser-focused on a few niches. You know what you like.</p>
          <div className="flex items-center gap-2 text-sm font-bold">
             View Analytics <ArrowLeft className="rotate-180 w-4 h-4" />
          </div>
       </div>

       {/* First group */}
       <div className="bg-[#222] rounded-2xl mb-8 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/5">
             <div className="flex gap-4 items-center pr-2">
                <EyeOff size={24} className="text-gray-400 shrink-0" />
                <div>
                   <div className="text-base font-medium text-white/90">Deep Listplay Mode</div>
                   <div className="text-xs text-gray-400 mt-0.5 leading-snug pr-4">Pause learning — browse without influencing your profile</div>
                </div>
             </div>
             {/* Toggle switch */}
             <div className="w-12 h-6 bg-zinc-600 rounded-full border border-white/10 relative shrink-0">
               <div className="w-5 h-5 bg-zinc-400 rounded-full absolute left-0.5 top-0.5" />
             </div>
          </div>
          <div className="flex items-center justify-between p-4">
             <div className="flex gap-4 items-center pr-2">
                <Timer size={24} className="text-gray-400 shrink-0" />
                <div>
                   <div className="text-base font-medium text-white/90">Auto-disable after</div>
                   <div className="text-xs text-gray-400 mt-0.5 leading-snug pr-4">Learning resumes automatically after 4 hours</div>
                </div>
             </div>
             <ArrowLeft size={16} className="rotate-180 text-gray-400 shrink-0" />
          </div>
       </div>

       {/* Second group */}
       <div className="text-red-500 font-bold text-sm tracking-wide mb-3 pl-2">Tampilan</div>
       <div className="bg-[#222] rounded-2xl overflow-hidden mb-8">
          <div className="flex items-center gap-4 p-4 border-b border-white/5">
             <Palette size={24} className="text-gray-400 shrink-0" />
             <div>
               <div className="text-base font-medium text-white/90">Tema</div>
               <div className="text-xs text-gray-400 mt-0.5">System Default</div>
             </div>
          </div>
          <div className="flex items-center gap-4 p-4 border-b border-white/5">
             <Settings size={24} className="text-gray-400 shrink-0" />
             <div>
               <div className="text-base font-medium text-white/90">Player Appearance</div>
               <div className="text-xs text-gray-400 mt-0.5">Customize progress bar style</div>
             </div>
          </div>
          <div className="flex items-center gap-4 p-4">
             <Library size={24} className="text-gray-400 shrink-0" />
             <div>
               <div className="text-base font-medium text-white/90">Content Display</div>
               <div className="text-xs text-gray-400 mt-0.5">Adjust grid and list density</div>
             </div>
          </div>
       </div>
     </div>
  </div>
);

export default function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="min-h-screen relative font-sans text-gray-200">
      {/* Atmosphere Background */}
      <div className="atmosphere" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card !rounded-none !border-t-0 !border-l-0 !border-r-0 border-b border-white/10 px-4 md:px-6 py-4 flex flex-wrap justify-between items-center gap-y-4">
        <div className="text-lg md:text-xl font-bold tracking-tighter uppercase flex items-center gap-2 order-1">
          <img src={listplayLogo} alt="Listplay Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0 rounded-full" />
          <span className="truncate max-w-[100px] sm:max-w-none">Listplay</span>
        </div>
        
        <div className="flex justify-center overflow-x-auto hide-scrollbars flex-nowrap gap-4 md:gap-8 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/50 order-3 lg:order-2 w-full lg:w-auto pt-2 border-t border-white/10 lg:border-t-0 lg:pt-0 pb-1 lg:pb-0">
          <a href="#features" className="hover:text-white transition whitespace-nowrap">Features</a>
          <a href="#neuro" className="hover:text-white transition whitespace-nowrap">FlowNeuro Engine</a>
          <a href="#privacy" className="hover:text-white transition whitespace-nowrap">Privacy</a>
          <a href="#about" className="hover:text-white transition whitespace-nowrap">About</a>
        </div>

        <button 
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2 text-xs md:text-sm px-4 md:px-8 py-2 md:py-3 order-2 lg:order-3 shrink-0"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Get APK</span>
          <span className="inline sm:hidden">Download</span>
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-[1400px] mx-auto flex flex-col justify-center items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass-card text-[10px] md:text-xs uppercase font-bold text-elegant-accent mb-6 md:mb-8 text-left"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-elegant-accent animate-pulse shrink-0" />
          <span className="truncate">Powered by FlowNeuro Local Engine</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6"
        >
          Your Music & Video.<br />
          <span className="text-elegant-accent nebula-text">Zero Tracking.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl text-white/60 font-light max-w-2xl mb-8 md:mb-12 leading-relaxed px-2"
        >
          A privacy-respecting YouTube client for Android. Features a local recommendation engine, background playback, SponsorBlock, and seamless music integration.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-16 md:mb-20 w-full sm:w-auto px-4"
        >
          <button 
            onClick={() => setShowModal(true)}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-sm md:text-base flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(242,125,38,0.4)] transition-all"
          >
            <Download size={20} />
            Download APK
          </button>
        </motion.div>

        {/* 3 Screens Mockup */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="w-full flex justify-center perspective-[1200px]"
        >
          {/* Desktop Row of 3 mockups */}
          <div className="hidden lg:flex w-full justify-center items-center relative h-[650px]">
             {/* Left: YouTube Home */}
             <div className="absolute left-[50%] -translate-x-[150%] xl:-translate-x-[160%] z-0 transform-gpu rotate-y-[15deg] rotate-z-[-2deg] translate-z-[-50px] scale-[0.85] opacity-60 hover:opacity-100 hover:scale-95 hover:rotate-y-[5deg] transition-all duration-700 ease-out">
                <PhoneMockup><YoutubeHome /></PhoneMockup>
             </div>
             
             {/* Center: Music Player */}
             <div className="absolute left-[50%] -translate-x-[50%] z-20 scale-[1.05] xl:scale-[1.1] transform-gpu translate-y-[-20px] transition-all duration-500 hover:scale-[1.15]">
                <PhoneMockup><div className="w-full h-full bg-[#0a0a0a] pt-8 flex flex-col"><img src={musicScreen} className="w-full flex-1 object-cover" alt="Music" /></div></PhoneMockup>
             </div>

             {/* Right: Library */}
             <div className="absolute left-[50%] translate-x-[50%] xl:translate-x-[60%] z-0 transform-gpu -rotate-y-[15deg] rotate-z-[2deg] translate-z-[-50px] scale-[0.85] opacity-60 hover:opacity-100 hover:scale-95 hover:-rotate-y-[5deg] transition-all duration-700 ease-out">
                <PhoneMockup><LibraryHome /></PhoneMockup>
             </div>
          </div>

          {/* Mobile/Tablet Swipeable List */}
          <div className="flex lg:hidden overflow-x-auto gap-4 md:gap-6 px-4 pb-12 snap-x snap-mandatory hide-scrollbars max-w-[100vw]">
             <div className="snap-center shrink-0 w-[260px] sm:w-[280px]">
               <PhoneMockup><YoutubeHome /></PhoneMockup>
             </div>
             <div className="snap-center shrink-0 w-[260px] sm:w-[280px] drop-shadow-2xl">
               <PhoneMockup><div className="w-full h-full bg-[#0a0a0a] pt-8 flex flex-col"><img src={musicScreen} className="w-full flex-1 object-cover" alt="Music" /></div></PhoneMockup>
             </div>
             <div className="snap-center shrink-0 w-[260px] sm:w-[280px]">
               <PhoneMockup><LibraryHome /></PhoneMockup>
             </div>
          </div>
        </motion.div>
      </main>

      {/* Engine Section */}
      <section id="neuro" className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Meet <span className="text-elegant-accent nebula-text">Listplay</span>.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light">
                Most open-source clients give you playback but no way to discover new content. We give you both. The recommendation engine learns what you like by analyzing your watch behavior—100% locally.
              </p>
              
              <ul className="space-y-4 md:space-y-6">
                {[
                  { title: "No Server Needed", desc: "Never leaves your device. No telemetry.", icon: Shield },
                  { title: "Smart Patterns", desc: "Distinguishes weekday vs weekend, morning vs night.", icon: BrainCircuit },
                  { title: "Full Transparency", desc: "See what the algorithm knows and adjust it anytime.", icon: Smartphone }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center shrink-0 text-elegant-accent">
                      <item.icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 font-light">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 md:p-8 relative overflow-hidden">
               <div className="absolute -right-10 -top-10 md:-right-20 md:-top-20 w-48 h-48 md:w-64 md:h-64 bg-elegant-accent opacity-20 blur-3xl rounded-full" />
               <div className="text-[10px] md:text-xs font-semibold text-elegant-accent mb-4 uppercase tracking-widest">Local Data Profile</div>
               <div className="space-y-3 md:space-y-4">
                 {[
                   { label: "Favorite Genres", val: "Synthwave, Tech talks" },
                   { label: "Skip Rate", val: "High (React Tutorials)" },
                   { label: "Optimal Time", val: "Evening / Weekend" },
                   { label: "Boredom Detection", val: "Active (Mixing new topics)" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-black/40 rounded-xl p-3 md:p-4 border border-white/5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                     <span className="text-xs md:text-sm font-medium text-gray-400">{stat.label}</span>
                     <span className="text-xs md:text-sm text-white font-mono">{stat.val}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 text-xs md:text-sm text-gray-400">
                  <span>Data stored: 12MB</span>
                  <button className="text-elegant-accent hover:underline">Export Profile</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Everything you need.</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">Powerful playback. Beautiful customization.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[280px]">
          {/* Video Playback */}
          <div className="glass-card p-6 md:p-8 md:col-span-2 group hover:border-white/20 transition-colors flex flex-col justify-center min-h-[220px]">
            <FastForward size={28} className="text-elegant-accent mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Superior Playback</h3>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-md font-light">
              High-quality ExoPlayer integration. Includes SponsorBlock built-in, DeArrow for better thumbnails, and Background PiP play.
            </p>
          </div>

          {/* Music */}
          <div className="glass-card p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-colors min-h-[220px]">
            <Music size={28} className="text-elegant-accent mb-4 md:mb-6 relative z-10" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 relative z-10">Music Mode</h3>
            <p className="text-gray-400 text-sm md:text-base font-light relative z-10">
              Dedicated music player with synchronized lyrics and audio visualizations.
            </p>
            <div className="absolute -right-4 -bottom-8 text-[100px] md:text-[120px] nebula-text opacity-[0.03] font-bold leading-none select-none">
              M
            </div>
          </div>

          {/* Privacy */}
          <div className="glass-card p-6 md:p-8 group hover:border-white/20 transition-colors min-h-[220px]">
            <Shield size={28} className="text-elegant-accent mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Absolute Privacy</h3>
            <p className="text-gray-400 text-sm md:text-base font-light">
              No Google account required. No ads, no analytics. Sync with NewPipe locally.
            </p>
          </div>

          {/* Appearance */}
          <div className="glass-card p-6 md:p-8 md:col-span-1 lg:col-span-2 relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col justify-center min-h-[220px]">
             <div className="absolute inset-0 bg-gradient-to-r from-elegant-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <Palette size={28} className="text-elegant-accent mb-4 md:mb-6 relative z-10" />
             <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 relative z-10">Make it yours</h3>
             <p className="text-gray-400 text-sm md:text-base lg:text-lg relative z-10 max-w-md font-light">
               Built with Jetpack Compose & Material 3. Choose from 11 distinct themes including OLED Black, Purple Nebula, and Arctic Ice.
             </p>
          </div>
        </div>
      </section>

      {/* Privacy Detailed Section */}
      <section id="privacy" className="py-20 md:py-24 relative overflow-hidden bg-white/5 border-y border-white/10 mt-12 md:mt-24">
        <div className="absolute top-0 right-[-10%] md:right-[20%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-elegant-accent/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-elegant-accent/20 bg-elegant-accent/10 text-[10px] md:text-xs uppercase font-bold text-elegant-accent mb-4 md:mb-6">
              <Lock size={14} />
              Absolute Control
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Your Data. <br className="sm:hidden" /><span className="text-elegant-accent nebula-text">Your Rules.</span>
            </h2>
            <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed px-2">
              We believe that your media consumption is your own business. Enjoy a full-featured experience without compromising your privacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: UserX, title: "No Google Account", desc: "Enjoy a complete experience without logging into any external accounts. No sign-ups required." },
              { icon: Ghost, title: "Zero Tracking", desc: "No ads, no analytics, no telemetry. We don't track what you watch, listen to, or search for." },
              { icon: Database, title: "Local Storage", desc: "All your data—history, favorites, and recommendations—is stored securely and completely locally on your device." },
              { icon: ArrowLeftRight, title: "Seamless Import", desc: "Easily import your existing subscriptions and watch history from NewPipe to pick up right where you left off." },
              { icon: Trash2, title: "Total Ownership", desc: "Export your data for backup, or delete absolutely everything with a single tap at any time." },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 group hover:bg-white/5 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:border-elegant-accent/30 group-hover:text-elegant-accent transition-colors">
                  <feature.icon size={24} className="opacity-80 md:w-6 md:h-6 w-5 h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-elegant-accent/10 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />
            <div className="glass-card p-6 md:p-10 relative z-10 border-l-4 border-l-elegant-accent">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 nebula-text tracking-tight">&quot;We just wanted to listen to music without being the product.&quot;</h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
                Listplay didn't start in a corporate boardroom. It was born out of late-night coding sessions, fueled by a genuine frustration with existing media clients that track your every move. What began as a mere weekend hobby project—tinkering with Android architecture and local algorithms—has grown into a full-fledged privacy engine.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#111] to-[#333] border border-white/20 flex items-center justify-center font-bold text-lg shrink-0">
                  <Code size={20} className="text-black/70 dark:text-white/70" />
                </div>
                <div>
                  <div className="font-bold text-white tracking-wide text-sm md:text-base">dindian <span className="text-elegant-accent mx-1">X</span> A-EDev</div>
                  <div className="text-[10px] md:text-xs text-elegant-accent uppercase tracking-widest font-semibold mt-0.5">Lead Developers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs uppercase font-bold text-white/60 mb-4 md:mb-6">
              <Coffee size={14} />
              The Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Built out of <br className="sm:hidden" /><span className="text-elegant-accent nebula-text">pure hobby.</span>
            </h2>
            <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed font-light">
              As independent developers, we focus on craftsmanship over monetization. Every pixel, feature, and neural network model has been carefully built by hand. The entire project is shaped strictly by our passion for creating something beautiful, functional, and deeply respectful of the user.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card p-4 md:p-6 flex flex-col items-center text-center justify-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">100%</div>
                <div className="text-[10px] md:text-sm font-semibold tracking-widest uppercase text-elegant-accent">Independent</div>
              </div>
              <div className="glass-card p-4 md:p-6 flex flex-col items-center text-center justify-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">0</div>
                <div className="text-[10px] md:text-sm font-semibold tracking-widest uppercase text-gray-500">Telemetry Trackers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 md:mt-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-elegant-accent to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-lg md:text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <img src={listplayLogo} alt="Listplay Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0 rounded-full" />
            Listplay
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Powered by the flow open source project. Not affiliated with Google or YouTube.
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass-card hover:bg-white/10 transition rounded-full"><Github size={18} /></a>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card w-full max-w-sm p-6 relative flex flex-col items-center text-center shadow-2xl border border-white/20"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 rounded-full bg-elegant-accent/10 flex items-center justify-center mb-4 text-elegant-accent">
              <Download size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Download Listplay</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Required Android version 4.0 ke atas. <br/>
              Aman dan tanpa pelacakan.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                window.location.href = "https://github.com/dindian006-dot/Listplay/releases/download/v1.0.0/listplay.apk";
              }}
              className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(242,125,38,0.4)] transition-all"
            >
              <Download size={18} />
              Unduh Sekarang
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
