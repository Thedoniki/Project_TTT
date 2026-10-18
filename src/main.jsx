// createRoot är Reacts startpunkt: den kopplar React till ett HTML-element på sidan.
import { createRoot } from "react-dom/client";

// Globala CSS-regler läses in här så att de gäller över hela appen.
import "./index.css";

import { BrowserRouter } from 'react-router-dom'


// App är den översta React-komponenten; dess barn bygger upp resten av sidan.
import App from "./App.jsx";

// Hitta <div id="root"> i index.html och rendera React-komponenten App inuti den.
// JSX-uttrycket <App /> betyder att komponenten används som ett element.
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,  
)