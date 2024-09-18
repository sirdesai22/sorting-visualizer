import { useState, useEffect } from 'react';
import SortingVisualiser from "./components/SortingVisualiser";

const App = () => {
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Assuming 1024px as the minimum width for laptops
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div>
      {isLaptop ? (
        <SortingVisualiser />
      ) : (
        <div className="h-screen flex flex-col justify-center items-center text-center p-4 bg-slate-200">
          <h1 className="text-2xl font-bold mb-2">Please view on a laptop</h1>
          <p className="text-gray-600">This application is best experienced on a larger screen.</p>
        </div>
      )}
    </div>
  );
};

export default App;