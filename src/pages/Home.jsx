import React from "react";
import Welcome from "./Welcome";
import Recomend from "./Recomend";
import Why from "./Why";
import Ex from "./Ex";

function Home() {
  return (
    <div>
      <main className="flex-grow">
        <div className="mb-8">
          <Welcome />
        </div>
        <div>
          <Recomend />
        </div>
        <div>
          <Why />
        </div>
        <div>
          <Ex />
        </div>
      </main>
    </div>
  );
}

export default Home;
