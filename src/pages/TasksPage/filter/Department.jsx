import { api } from "../../../App";
import { useEffect, useState } from "react";

export default function FilterModal({ isOpen, onClose, endPointType }) {
  const [data, setData] = useState(null);

  const apiHandle = () => {
    return `${api}/${endPointType}`;
  };
  useEffect(() => {
    if (!isOpen || !endPointType) return;

    const fetchData = async () => {
      try {
        const url = `${api}/${endPointType}`;
        console.log("Fetching data from:", url);

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const jsonRes = await res.json();
        console.log("Fetched JSON:", jsonRes); // Debugging

        setData(jsonRes); // Set state after fetching
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isOpen, endPointType]);

  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
      }}
    >
      <p>{endPointType}</p>
      <button onClick={onClose}>Close</button>
      <button onClick={() => console.log(`${api}/${endPointType}`)}>Api</button>
    </div>
  );
}
