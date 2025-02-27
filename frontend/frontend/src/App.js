import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")  // Récupère les articles depuis le backend
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Erreur:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Liste des Articles</h1>
      <ul className="bg-white shadow-lg rounded-lg p-4">
        {items.map((item) => (
          <li key={item.id} className="border-b last:border-none py-2">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
