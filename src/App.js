import "./App.css";
import React, { useState } from "react";
import Kariyer from "./Kariyer";

function App() {
  const [kariyer, setKariyer] = useState(null);

  function changeKariyer(kariyer) {
    setKariyer(kariyer);
  }

  return kariyer == null ? (
    <div>
      <div class="title">Kariyer Rehberi</div>
      <div class="row myrow">
        <div class="col-md-1"></div>

        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("backend")}>
            Backend
          </div>
        </div>
        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("frontend")}>
            Frontend
          </div>
        </div>
        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("mobil")}>
            Mobil
          </div>
        </div>
        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("devops")}>
            DevOps
          </div>
        </div>
        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("ai")}>
            Yapay Zeka
          </div>
        </div>

        <div class="col-md-1"></div>
      </div>

      <div class="row myrow">
        <div class="col-md-3"></div>

        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("robotik")}>
            Robotik
          </div>
        </div>
        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("gömülü")}>
            Gömülü sistem
          </div>
        </div>
        <div class="col-md-2">
          <div class="mycard" onClick={() => changeKariyer("siber")}>
            Siber Güvenlik
          </div>
        </div>

        <div class="col-md-3"></div>
      </div>
    </div>
  ) : (
    <>
      <div class="mycard" onClick={() => changeKariyer(null)}>
      <svg width="20" height="20" fill="currentColor" >
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.096 8.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"/>
      </svg>
        {kariyer}
      </div>
      <Kariyer kariyer={kariyer} />
    </>
  );
}

export default App;
