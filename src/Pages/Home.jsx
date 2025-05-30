const Home = () => {
  return (
    <div className="h-[800px] bg-sky-500  dark:bg-gray-900 flex justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-amber-300 dark:bg-indigo-500 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-amber-400 dark:bg-purple-600 blur-xl"></div>
      </div>

      <div className="text-center text-white px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome! <span className="inline-block animate-bounce">👋</span>
        </h1>

        <div className="bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-white/10 dark:border-gray-600/10 shadow-2xl">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            This project demonstrates the implementation of both{" "}
            <span className="font-semibold text-gray-300 dark:text-indigo-300">
              light
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-300 dark:text-purple-300">
              dark
            </span>{" "}
            themes using{" "}
            <strong className="text-gray-300 dark:text-indigo-200">
              Tailwind CSS
            </strong>{" "}
            and{" "}
            <strong className="text-gray-300 dark:text-indigo-200">
              DaisyUI
            </strong>
            .
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-white text-green-700 dark:bg-indigo-600 dark:text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-white text-white dark:border-indigo-400 dark:text-indigo-100 rounded-lg font-medium hover:scale-105 transition-transform hover:bg-white/10 dark:hover:bg-indigo-500/20">
              Learn More
            </button>
          </div>

          <p className="text-sm mt-8 opacity-80">
            Toggle your system's theme or use the built-in theme switcher to see
            the magic!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
