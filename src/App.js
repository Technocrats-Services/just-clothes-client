import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainRoute from "./routes/mainRoute";
import ItemRoute from "./routes/itemRoute";
import ItemMenRoute from "./routes/itemMenRoute";
import ItemWomenRoute from "./routes/itemWomenRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />} />
        <Route path="item" element={<ItemRoute />} />
        <Route path="item/men" element={<ItemMenRoute />} />
        <Route path="item/women" element={<ItemWomenRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
