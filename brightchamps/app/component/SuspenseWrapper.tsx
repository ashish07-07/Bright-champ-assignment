// import React, { Suspense } from "react";

// import TakeQuiz from "../Testquiz/page";
// export default function SuspenseWrapper() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex justify-center items-center h-screen">
//           Loading...
//         </div>
//       }
//     >
//       <TakeQuiz />
//     </Suspense>
//   );
// }

import React, { Suspense } from "react";
// Adjust the import path if necessary
import TakeQuiz from "../Testquiz/page";

export default function SuspenseWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <TakeQuiz />
    </Suspense>
  );
}
