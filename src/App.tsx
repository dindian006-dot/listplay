import React from 'react';
import { motion } from 'motion/react';
import { 
  Download, Shield, Play, Music, BrainCircuit, Github, Smartphone, FastForward, Repeat, 
  Library, Palette, UserX, Ghost, Database, ArrowLeftRight, Trash2, Lock,
  Search, User, MoreVertical, SkipBack, SkipForward, Shuffle, History, ListVideo, Heart
} from 'lucide-react';

const PhoneMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[280px] h-[580px] border-[8px] border-[#111] rounded-[40px] bg-[#000] relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden shrink-0">
    <div className="absolute top-0 inset-x-0 h-6 bg-[#111] w-36 mx-auto rounded-b-2xl z-20" />
    <div className="w-full h-full relative z-10 flex flex-col">
       {children}
    </div>
  </div>
);

const YoutubeHome = () => (
  <div className="flex flex-col h-full bg-[#0a0a0a] text-white p-4 pt-10">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-1.5 font-bold tracking-tight"><Play size={16} fill="white"/> Listplay</div>
      <div className="flex gap-4 opacity-80"><Search size={18} /><User size={18} /></div>
    </div>
    <div className="flex gap-2 mb-6 overflow-hidden">
      <div className="px-3 py-1 bg-white text-black rounded-lg text-xs font-semibold whitespace-nowrap">All</div>
      <div className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium whitespace-nowrap">Music</div>
      <div className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium whitespace-nowrap">Mixes</div>
      <div className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium whitespace-nowrap">Live</div>
    </div>
    <div className="flex flex-col gap-6">
      <div>
        <div className="w-full aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-xl mb-3 relative overflow-hidden group">
           <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Video thumbnail" />
           <div className="absolute bottom-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 text-[9px] font-mono rounded">45:20</div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-elegant-accent/20 shrink-0 border border-elegant-accent/30" />
          <div>
            <div className="text-sm font-semibold leading-tight line-clamp-2 mb-1">Lofi Chill Beats - Music to stress over code with</div>
            <div className="text-[11px] text-white/50">SyntaxFM • 1.2M views • 1 day ago</div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full aspect-video bg-white/5 rounded-xl mb-3 relative overflow-hidden">
           <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5956093?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Video thumbnail" />
           <div className="absolute bottom-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 text-[9px] font-mono rounded">12:15</div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 shrink-0 border border-indigo-500/30" />
          <div>
            <div className="text-sm font-semibold leading-tight line-clamp-2 mb-1">Minimal Desk Setup Tour 2026</div>
            <div className="text-[11px] text-white/50">TechLife • 45K views • 2 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MusicHome = () => (
   <div className="flex flex-col h-full bg-[#050505] text-white p-5 pt-10">
      <div className="flex justify-between items-center mb-8">
         <div className="text-[10px] font-bold tracking-widest text-elegant-accent uppercase">Now Playing</div>
         <MoreVertical size={16} className="opacity-50" />
      </div>
      <div className="w-full aspect-square bg-gradient-to-br from-elegant-accent to-pink-600 rounded-[32px] mb-8 shadow-2xl relative shadow-elegant-accent/20 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-black/20" />
         <Music size={64} className="text-white/60 relative z-10 drop-shadow-lg" />
      </div>
      <div className="text-center mb-8">
         <div className="text-xl font-bold mb-1">Midnight City</div>
         <div className="text-xs text-white/50">M83 • Hurry Up, We're Dreaming</div>
      </div>
      <div className="h-1 bg-white/10 rounded-full mb-8 relative cursor-pointer">
         <div className="absolute left-0 top-0 h-full bg-elegant-accent w-[65%] rounded-full shadow-[0_0_10px_rgba(242,125,38,0.5)]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
         </div>
         <div className="absolute top-2 left-0 text-[9px] text-white/40">2:45</div>
         <div className="absolute top-2 right-0 text-[9px] text-white/40">4:03</div>
      </div>
      <div className="flex justify-between items-center px-2 mt-4">
         <Shuffle size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer"/>
         <SkipBack size={24} className="hover:text-elegant-accent transition-colors cursor-pointer" />
         <div className="w-16 h-16 bg-white hover:scale-105 transition-transform cursor-pointer rounded-full flex items-center justify-center text-black shadow-lg shadow-white/10">
            <Play size={24} fill="black" className="ml-1"/>
         </div>
         <SkipForward size={24} className="hover:text-elegant-accent transition-colors cursor-pointer" />
         <Repeat size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer"/>
      </div>
   </div>
);

const LibraryHome = () => (
   <div className="flex flex-col h-full bg-[#070707] text-white p-5 pt-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><User size={16}/></div>
        <div>
          <div className="text-xs text-white/50 font-medium">Your Space</div>
          <div className="text-sm font-bold">Library</div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {[
          { icon: History, label: "History", sub: "Recent watch activity" },
          { icon: ListVideo, label: "Playlists", sub: "12 custom lists" },
          { icon: Download, label: "Downloads", sub: "2.4 GB used for offline" },
          { icon: Heart, label: "Favorites", sub: "128 videos saved" }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-center group cursor-pointer">
             <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/70 group-hover:text-elegant-accent group-hover:bg-elegant-accent/10 transition-all">
                <item.icon size={20} />
             </div>
             <div>
                <div className="text-sm font-semibold mb-0.5">{item.label}</div>
                <div className="text-xs text-white/40">{item.sub}</div>
             </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-white/10">
         <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Recent Collections</div>
         <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-2xl flex flex-col justify-end p-3 relative overflow-hidden">
               <div className="absolute right-[-10%] top-[-10%] p-3 bg-indigo-500/20 rounded-full mix-blend-screen"><ListVideo size={40} className="text-indigo-400 opacity-20"/></div>
               <span className="text-xs font-bold z-10 w-full truncate">Synthwave Mix</span>
               <span className="text-[10px] text-white/50 z-10 mt-1">24 videos</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-elegant-accent/10 to-elegant-accent/5 border border-elegant-accent/20 rounded-2xl flex flex-col justify-end p-3 relative overflow-hidden">
               <div className="absolute right-[-10%] top-[-10%] p-3 bg-elegant-accent/20 rounded-full mix-blend-screen"><Heart size={40} className="text-elegant-accent opacity-20"/></div>
               <span className="text-xs font-bold z-10 w-full truncate">Liked Songs</span>
               <span className="text-[10px] text-white/50 z-10 mt-1">1,024 tracks</span>
            </div>
         </div>
      </div>
   </div>
);

export default function App() {
  return (
    <div className="min-h-screen relative font-sans text-gray-200">
      {/* Atmosphere Background */}
      <div className="atmosphere" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card !rounded-none !border-t-0 !border-l-0 !border-r-0 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Play size={16} fill="black" stroke="black" className="ml-0.5" />
          </div>
          Listplay
        </div>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-white/50">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#neuro" className="hover:text-white transition">FlowNeuro Engine</a>
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
        </div>
        <a 
          href="#download"
          className="btn-primary flex items-center gap-2"
        >
          <Download size={16} />
          <span>Get APK</span>
        </a>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto flex flex-col justify-center items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs uppercase font-bold text-elegant-accent mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-elegant-accent animate-pulse" />
          Powered by FlowNeuro Local Engine
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Your Music & Video.<br />
          <span className="text-elegant-accent nebula-text">Zero Tracking.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-white/60 font-light max-w-2xl mb-12 leading-relaxed"
        >
          A privacy-respecting YouTube client for Android. Features a local recommendation engine, background playback, SponsorBlock, and seamless music integration.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <button className="btn-primary px-8 py-4 text-base flex items-center gap-2 hover:shadow-[0_0_30px_rgba(242,125,38,0.4)] transition-all">
            <Download size={20} />
            Download APK
          </button>
          <button className="glass-card px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-white/10 transition-all">
            <Github size={20} />
            Source Code
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
             <div className="absolute left-[50%] -translate-x-[150%] z-0 transform-gpu rotate-y-[15deg] rotate-z-[-2deg] translate-z-[-50px] scale-[0.85] opacity-60 hover:opacity-100 hover:scale-90 hover:rotate-y-[5deg] transition-all duration-700 ease-out">
                <PhoneMockup><YoutubeHome /></PhoneMockup>
             </div>
             
             {/* Center: Music Player */}
             <div className="absolute left-[50%] -translate-x-[50%] z-20 scale-100 transform-gpu translate-y-[-20px] transition-all duration-500 hover:scale-[1.02]">
                <PhoneMockup><MusicHome /></PhoneMockup>
             </div>

             {/* Right: Library */}
             <div className="absolute left-[50%] translate-x-[50%] z-0 transform-gpu -rotate-y-[15deg] rotate-z-[2deg] translate-z-[-50px] scale-[0.85] opacity-60 hover:opacity-100 hover:scale-90 hover:-rotate-y-[5deg] transition-all duration-700 ease-out">
                <PhoneMockup><LibraryHome /></PhoneMockup>
             </div>
          </div>

          {/* Mobile/Tablet Swipeable List */}
          <div className="flex lg:hidden overflow-x-auto gap-6 px-10 pb-16 snap-x snap-mandatory hide-scrollbars max-w-[100vw]">
             <div className="snap-center shrink-0">
               <PhoneMockup><YoutubeHome /></PhoneMockup>
             </div>
             <div className="snap-center shrink-0 drop-shadow-2xl">
               <PhoneMockup><MusicHome /></PhoneMockup>
             </div>
             <div className="snap-center shrink-0">
               <PhoneMockup><LibraryHome /></PhoneMockup>
             </div>
          </div>
        </motion.div>
      </main>

      {/* Engine Section */}
      <section id="neuro" className="py-32 relative">

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-elegant-accent nebula-text">FlowNeuro</span>.
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Most open-source clients give you playback but no way to discover new content. We give you both. The recommendation engine learns what you like by analyzing your watch behavior—100% locally.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "No Server Needed", desc: "Never leaves your device. No telemetry.", icon: Shield },
                  { title: "Smart Patterns", desc: "Distinguishes weekday vs weekend, morning vs night.", icon: BrainCircuit },
                  { title: "Full Transparency", desc: "See what the algorithm knows and adjust it anytime.", icon: Smartphone }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center shrink-0 text-elegant-accent">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-8 relative overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-elegant-accent opacity-20 blur-3xl rounded-full" />
               <div className="text-xs font-semibold text-elegant-accent mb-4 uppercase tracking-widest">Local Data Profile</div>
               <div className="space-y-4">
                 {[
                   { label: "Favorite Genres", val: "Synthwave, Tech talks" },
                   { label: "Skip Rate", val: "High (React Tutorials)" },
                   { label: "Optimal Time", val: "Evening / Weekend" },
                   { label: "Boredom Detection", val: "Active (Mixing new topics)" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-black/40 rounded-xl p-4 border border-white/5 flex justify-between items-center">
                     <span className="text-sm font-medium text-gray-400">{stat.label}</span>
                     <span className="text-sm text-white font-mono">{stat.val}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-sm text-gray-400">
                  <span>Data stored: 12MB</span>
                  <button className="text-elegant-accent hover:underline">Export Profile</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need.</h2>
          <p className="text-gray-400 text-xl">Powerful playback. Beautiful customization.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Video Playback */}
          <div className="glass-card p-8 md:col-span-2 group hover:border-white/20 transition-colors">
            <FastForward size={32} className="text-elegant-accent mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Superior Playback</h3>
            <p className="text-gray-400 text-lg max-w-md">
              High-quality ExoPlayer integration. Includes SponsorBlock built-in, DeArrow for better thumbnails, and Background PiP play.
            </p>
          </div>

          {/* Music */}
          <div className="glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
            <Music size={32} className="text-elegant-accent mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Music Mode</h3>
            <p className="text-gray-400 relative z-10">
              Dedicated music player with synchronized lyrics and audio visualizations.
            </p>
            <div className="absolute -right-4 -bottom-8 text-[120px] nebula-text opacity-[0.03] font-bold leading-none select-none">
              M
            </div>
          </div>

          {/* Privacy */}
          <div className="glass-card p-8 group hover:border-white/20 transition-colors">
            <Shield size={32} className="text-elegant-accent mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Absolute Privacy</h3>
            <p className="text-gray-400">
              No Google account required. No ads, no analytics. Sync with NewPipe locally.
            </p>
          </div>

          {/* Appearance */}
          <div className="glass-card p-8 md:col-span-2 relative overflow-hidden group hover:border-white/20 transition-colors">
             <div className="absolute inset-0 bg-gradient-to-r from-elegant-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <Palette size={32} className="text-elegant-accent mb-6 relative z-10" />
             <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Make it yours</h3>
             <p className="text-gray-400 text-lg relative z-10 max-w-md">
               Built with Jetpack Compose & Material 3. Choose from 11 distinct themes including OLED Black, Purple Nebula, and Arctic Ice.
             </p>
          </div>
        </div>
      </section>

      {/* Privacy Detailed Section */}
      <section id="privacy" className="py-24 relative overflow-hidden bg-white/5 border-y border-white/10 mt-24">
        <div className="absolute top-0 right-[20%] w-[50vw] h-[50vw] bg-elegant-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-elegant-accent/20 bg-elegant-accent/10 text-xs uppercase font-bold text-elegant-accent mb-6">
              <Lock size={14} />
              Absolute Control
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Data. <span className="text-elegant-accent nebula-text">Your Rules.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We believe that your media consumption is your own business. Enjoy a full-featured experience without compromising your privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: UserX, title: "No Google Account", desc: "Enjoy a complete experience without logging into any external accounts. No sign-ups required." },
              { icon: Ghost, title: "Zero Tracking", desc: "No ads, no analytics, no telemetry. We don't track what you watch, listen to, or search for." },
              { icon: Database, title: "Local Storage", desc: "All your data—history, favorites, and recommendations—is stored securely and completely locally on your device." },
              { icon: ArrowLeftRight, title: "Seamless Import", desc: "Easily import your existing subscriptions and watch history from NewPipe to pick up right where you left off." },
              { icon: Trash2, title: "Total Ownership", desc: "Export your data for backup, or delete absolutely everything with a single tap at any time." },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-elegant-accent/30 group-hover:text-elegant-accent transition-colors">
                  <feature.icon size={24} className="opacity-80" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-elegant-accent to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <Play size={12} fill="black" stroke="black" className="ml-0.5" />
            </div>
            Listplay
          </div>
          <div className="text-sm text-gray-500">
            Powered by the flow open source project. Not affiliated with Google or YouTube.
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass-card hover:bg-white/10 transition rounded-full"><Github size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
