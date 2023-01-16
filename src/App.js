import React from "react";
import Control from "./component/Control";
import ListStudent from "./component/ListStudent";
import From from "./component/Form";
function App() {
  return (
    <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
        <Control/>
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
        <ListStudent/>
        {/* END LIST STUDENT */}
      </div>
      
    </div>
    {/* START FORM SINH VIEN */}
    <From/>
    {/* END FORM SINH VIÊN */}
  </div>
  
  );
}

export default App;
