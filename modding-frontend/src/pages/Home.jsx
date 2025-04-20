import { useEffect, useState } from "react";
import { getMods } from "../api";
import ModCard from "../components/ModCard";

export default function Home() {
  const [mods, setMods] = useState([]);

  useEffect(() => {
    // Fetch mods data from backend API
    getMods()
      .then((res) => {
        setMods(res.data); // Save data to state
      })
      .catch((err) => {
        console.error("Error fetching mods:", err); // Error handling
      });
  }, []); // Empty dependency array means this runs only once after the component mounts

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {/* Loop through the mods array and render a ModCard for each */}
      {mods.length > 0 ? (
        mods.map((mod) => <ModCard key={mod._id} mod={mod} />)
      ) : (
        <p>No mods available</p> // Message if no mods are fetched
      )}
    </div>
  );
}
