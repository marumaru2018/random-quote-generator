type CardProps = {
  quote: {
    id: number;
    quote: string;
    author: string;
    permalink: string;
  } | null;
};

const Card = ({ quote }: CardProps) => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-br from-blue-800 to-slate-700 shadow-md space-y-12 rounded-xl w-[720px] min-h-96 p-8">
        <div className="bg-blue-100 text-3xl h-16 w-16 rounded-full flex justify-center items-center">
          💬
        </div>

        <p className="text-center text-xl text-gray-200">{quote?.quote}</p>

        <p className="text-gray-300 text-center">by {quote?.author}</p>
      </div>
    </div>
  );
};
export default Card;
