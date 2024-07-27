import { useEffect, useState } from "react";

export default function () {
  const [clicked, setclicked] = useState(false);

  useEffect(() => {}, [clicked]);

  return (
    <div>
      <button
        onClick={function () {
          setclicked(!clicked);
        }}
      >
        Add a quiz{" "}
      </button>

      {clicked && <form></form>}
    </div>
  );
}
