const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary-glow/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/2 left-1/6 w-5 h-5 bg-primary-glow/15 rounded-full animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-primary/25 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/6 right-1/3 w-2 h-2 bg-primary-glow/40 rounded-full animate-bounce-slow"
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
};

export default FloatingShapes;
