const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-br from-blue-800 to-slate-700 shadow-md space-y-12 rounded-xl w-[720px] min-h-96 p-8">
        <div className="bg-blue-100 text-3xl h-16 w-16 rounded-full flex justify-center items-center">
          💬
        </div>

        <p className="text-center text-xl text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
          libero ut earum, totam ipsum, velit eos nostrum repudiandae labore a?
          Odit saepe sit nulla rerum expedita iste. Laborum, eius!
        </p>

        <p className="text-gray-300 text-center">by Lorem ipsum</p>
      </div>
    </div>
  );
};
export default Card;
