import "./App.css";
import { StarBackground } from "./components/StarBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

function App() {
  return ( 
      <>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <StarBackground />
        <Navbar/>
        <main className="p-4">
          <HeroSection />
        </main>
      </div>
    </>
  );
}

export default App;
