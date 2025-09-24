import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 pb-8 space-y-8">
      {/* Hero Section */}
      <Hero />
      {/* Quote Card */}
      <Card />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
