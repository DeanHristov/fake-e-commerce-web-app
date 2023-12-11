const NotFound = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-8xl text-dark py-3 border-b-2 border-dashed border-b-dark">
          <span className="fade-in animation-delay-200">4</span>
          <span className="fade-in animation-delay-300">0</span>
          <span className="fade-in animation-delay-400">4</span>
        </h1>
        <p className="text-center text-dark text-3xl uppercase py-3">
          Page not found!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
