import notFoundImage from "@/assets/images/not-found.png";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[var(--color-myGreen-200)] via-[var(--color-myRed-100)] to-[var(--color-myGreen-300)] px-2 py-2">
      <div className="container mx-auto px-2">
        <div className="max-w-xl mx-auto">
          <div className="p-4 md:p-6 text-center">
            {/* Error Code */}
            <div className="mb-4">
              <h1 className="font-bold mb-1 text-center text-myRed-600">
                <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                  404
                </span>
              </h1>
              <div className="w-16 h-1 rounded-full mx-auto mt-2 bg-myRed-400"></div>
            </div>

            {/* Illustration */}
            <div className="mb-4">
              <img
                src={notFoundImage}
                alt="404 - Page not found illustration"
                className="w-32 sm:w-40 mx-auto rounded-xl shadow"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                Oops! This page is not on the Map !
              </h2>
              <p className=" md:text-lg text-slate-700 max-w-lg mx-auto leading-relaxed">
                <br />
                Don't worry though, let's get you back on track.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-myGreen-400 hover:bg-myGreen-700-600 text-white transition-all duration-300 hover:scale-105 min-w-[120px]"
              >
                <Link to="/">Return Home</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-myRed-400 hover:border-myRed-600 hover:bg-myRed-50 transition-all duration-300 min-w-[120px]"
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-700">
                Error Code: 404 • Requested:{" "}
                <code className="font-mono text-xs bg-black px-2 py-1 rounded text-white/80">
                  {location.pathname}
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
