import { useEffect, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { fetchRandomQuote } from "./api";

const App = () => {
  // 取得した名言のデータを変数で管理
  const [quote, setQuote] = useState(null);

  // コンポーネント描画時に動作する副作用
  useEffect(() => {
    let active = true;

    // APIから名言を取得して変数にセット
    fetchRandomQuote().then((data) => {
      if (active) {
        setQuote(data);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-16 pb-8 space-y-8">
      {/* Hero Section */}
      <Hero />
      {/* Quote Card */}
      <Card quote={quote} />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
