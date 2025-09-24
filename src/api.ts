const BASE_URL = "https://b13o.github.io/tech-quotes-api";

// async function fetchRandomQuote() {
const fetchRandomQuote = async () => {
  // 1~100 までのランダムな番号を生成
  const id = Math.floor(Math.random() * 100) + 1;
  const response = await fetch(
    // "https://programming-quotesapi.vercel.app/api/random"
    `${BASE_URL}/api/quotes/${id}`
    // "https://programming-quotesapi.vercel.app/api/random"
  );
  const data = await response.json();
  console.log(data);
  return data;
};
export { fetchRandomQuote };
