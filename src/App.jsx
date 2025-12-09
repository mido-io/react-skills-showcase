import { useState } from "react";
import {
  FaChevronDown,
  FaPalette,
  FaStar,
  FaImages,
  FaCloudDownloadAlt,
  FaFolderOpen,
  FaQrcode,
  FaAdjust,
  FaArrowsAltV,
  FaColumns,
  FaRegWindowRestore,
  FaGithub,
  FaSearch,
  FaGamepad,
  FaHome,
  FaCode
} from "react-icons/fa";

import Accordion from "./components/Accordion/Accordion";
import RCG from './components/Random-Color-Generator/RCG'
import StarRating from './components/Star-Rating/StarRating'
import ImageSlider from "./components/Image-Slider/ImageSlider";
import LoadMoreBtn from "./components/Load-More-Button/LoadMoreBtn";
import TreeView from "./components/Tree-View/TreeView";
import menus from "./components/Tree-View/data";
import QR from "./components/QR-Code-Generator/QR";
import LightDarkMode from "./components/Light-Dark-Mode/LightDarkMode";
import ScrollIndicator from "./components/Scroll-Indicator/ScrollIndicator";
import Tabs from "./components/Custom-Tabs/tabs";
import CustomModelCallingPage from "./components/Custom-Modal-Popup/CustomModelCallingPage";
import GitHubFinder from "./components/Github-Profile-Finder/GitHubFinder";
import SearchAutocomplete from "./components/Search-Autocomplete/SearchAutocomplete";
import TicTacToe from "./components/Tic-Tac-Toe/TicTacToe";

function App() {
  const [selectedApp, setSelectedApp] = useState(null);

  // Global Theme Initialization
  useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const apps = [
    { id: 1, name: "Accordion", description: "Expandable content sections", icon: <FaChevronDown />, component: <Accordion /> },
    { id: 2, name: "Color Generator", description: "Generate random HEX/RGB colors", icon: <FaPalette />, component: <RCG /> },
    { id: 3, name: "Star Rating", description: "Interactive 5-star rating component", icon: <FaStar />, component: <StarRating /> },
    { id: 4, name: "Image Slider", description: "Carousel with navigation controls", icon: <FaImages />, component: <ImageSlider /> },
    { id: 5, name: "Load More", description: "Pagination and data loading", icon: <FaCloudDownloadAlt />, component: <LoadMoreBtn /> },
    { id: 6, name: "Tree View", description: "Recursive file structure visualization", icon: <FaFolderOpen />, component: <TreeView menus={menus} /> },
    { id: 7, name: "QR Generator", description: "Generate QR codes instantly", icon: <FaQrcode />, component: <QR /> },
    { id: 8, name: "Theme Switcher", description: "Light and Dark mode toggle", icon: <FaAdjust />, component: <LightDarkMode /> },
    { id: 9, name: "Scroll Indicator", description: "Page scroll progress bar", icon: <FaArrowsAltV />, component: <ScrollIndicator /> },
    { id: 10, name: "Custom Tabs", description: "Tabbed content interface", icon: <FaColumns />, component: <Tabs /> },
    { id: 11, name: "Modal Popup", description: "Customizable modal dialog", icon: <FaRegWindowRestore />, component: <CustomModelCallingPage /> },
    { id: 12, name: "GitHub Finder", description: "Search GitHub users and stats", icon: <FaGithub />, component: <GitHubFinder /> },
    { id: 13, name: "Autocomplete", description: "Search with suggestions", icon: <FaSearch />, component: <SearchAutocomplete /> },
    { id: 14, name: "Tic Tac Toe", description: "Classic game with state management", icon: <FaGamepad />, component: <TicTacToe /> }
  ];

  if (selectedApp) {
    const activeApp = apps.find((app) => app.id === selectedApp);
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedApp(null)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all group"
            >
              <FaHome className="group-hover:-translate-x-1 transition-transform" />
              Back to Gallery
            </button>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {activeApp?.name}
            </h2>
          </div>
        </nav>

        <main className="container mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 min-h-[80vh]">
            {activeApp?.component}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 mb-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 ring-1 ring-blue-100 dark:ring-blue-800">
              <FaCode className="mr-2" />
              <span className="text-sm font-semibold tracking-wide uppercase">React Component Collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              Mastering React UI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              A curated showcase of interactive components, hooks, and mini-applications built with modern React patterns and Tailwind CSS.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#gallery" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                Explore Components
              </a>
              <a href="https://github.com/mido-io/react-skills-showcase.git" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 font-semibold transition-all flex items-center gap-2">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main id="gallery" className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app.id)}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-6xl text-blue-500 transform group-hover:rotate-12 transition-transform duration-500">
                  {app.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {app.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {app.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} React Skills Showcase. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
