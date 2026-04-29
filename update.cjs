const fs = require('fs');

function run() {
    let content = fs.readFileSync('src/App.tsx', 'utf8');

    // Add imports
    if (!content.includes('Sun,')) {
      content = content.replace('Coffee, Code', 'Coffee, Code, Sun, Moon');
    }

    // Add state 
    if (!content.includes('const [theme, setTheme]')) {
      const parts = content.split('export default function App() {\\n  return (');
      if (parts.length === 2) {
          content = parts[0] + 
          "export default function App() {\\n" +
          "  const [theme, setTheme] = React.useState('dark');\\n" +
          "\\n" +
          "  React.useEffect(() => {\\n" +
          "    if (theme === 'dark') {\\n" +
          "      document.documentElement.classList.add('dark');\\n" +
          "    } else {\\n" +
          "      document.documentElement.classList.remove('dark');\\n" +
          "    }\\n" +
          "  }, [theme]);\\n" +
          "\\n" +
          "  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');\\n\\n" + 
          "  return (" + parts[1];
      }
    }

    // Add button
    if (!content.includes('toggleTheme')) {
      const parts = content.split('<a \\n          href="#download"');
      if (parts.length === 2) {
          content = parts[0] + 
          '<div className="flex items-center gap-2 md:gap-4">\\n' +
          '          <button onClick={toggleTheme} className="p-2 md:mr-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition z-50">\\n' +
          '            {theme === "dark" ? <Sun size={16} className="text-white" /> : <Moon size={16} className="text-black" />}\\n' +
          '          </button>\\n' +
          '          <a \\n          href="#download"' + parts[1];
          
          content = content.replace(/<\/a>\n\s*<\/nav>/, '</a>\\n        </div>\\n      </nav>');
      }
    }

    const rep = (target, replacement) => {
       const escaped = target.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
       const rx = new RegExp("(?<=['\\\"\\\\s])" + escaped + "(?=['\\\"\\\\s])", "g");
       content = content.replace(rx, replacement);
    };

    rep('text-white', 'text-black dark:text-white');
    rep('text-gray-200', 'text-gray-800 dark:text-gray-200');
    rep('text-gray-400', 'text-gray-600 dark:text-gray-400');
    rep('text-white/40', 'text-black/40 dark:text-white/40');
    rep('text-white/50', 'text-black/50 dark:text-white/50');
    rep('text-white/60', 'text-black/60 dark:text-white/60');
    rep('text-white/70', 'text-black/70 dark:text-white/70');

    rep('bg-white', 'bg-black dark:bg-white');
    rep('bg-white/5', 'bg-black/5 dark:bg-white/5');
    rep('bg-white/10', 'bg-black/10 dark:bg-white/10');
    rep('bg-white/20', 'bg-black/20 dark:bg-white/20');
    rep('bg-white/80', 'bg-black/80 dark:bg-white/80');
    rep('bg-black/40', 'bg-white/60 dark:bg-black/40');
    rep('bg-black/80', 'bg-white/90 dark:bg-black/80');
    rep('bg-black/20', 'bg-white/20 dark:bg-black/20');
    rep('bg-white/[0.03]', 'bg-black/[0.03] dark:bg-white/[0.03]');

    rep('bg-[#000]', 'bg-white dark:bg-[#000]');
    rep('bg-[#0a0a0a]', 'bg-white dark:bg-[#0a0a0a]');
    rep('bg-[#050505]', 'bg-[#f4f4f5] dark:bg-[#050505]');
    rep('bg-[#070707]', 'bg-[#e4e4e7] dark:bg-[#070707]');
    rep('bg-[#111]', 'bg-[#d4d4d8] dark:bg-[#111]');

    rep('border-white/5', 'border-black/5 dark:border-white/5');
    rep('border-white/10', 'border-black/10 dark:border-white/10');
    rep('border-white/20', 'border-black/20 dark:border-white/20');
    rep('border-white/[0.05]', 'border-black/[0.05] dark:border-white/[0.05]');
    rep('border-[#111]', 'border-[#a1a1aa] dark:border-[#111]');

    content = content.replace(/fill="black" stroke="black"/g, 'className="fill-white stroke-white dark:fill-black dark:stroke-black"');
    content = content.replace(/fill="white"/g, 'className="fill-black dark:fill-white"');
    content = content.replace(/fill="black"(?! | className)/g, 'className="fill-white dark:fill-black"');

    content = content.replace(/<div className="absolute top-0 inset-x-0 h-6 bg-\\[#111\\] w-36 mx-auto rounded-b-2xl z-20" \\\/>/,
      '<div className="absolute top-0 inset-x-0 h-6 bg-[#d4d4d8] dark:bg-[#111] w-36 mx-auto rounded-b-2xl z-20" />');

    content = content.replace(/border-\\[#111\\]/, 'border-[#d4d4d8] dark:border-[#111]');

    fs.writeFileSync('src/App.tsx', content);
    console.log("App.tsx transformed successfully!");
}

run();
