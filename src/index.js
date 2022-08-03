import { createRoot } from "react-dom/client";

import ImageList from "./ImageList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ImageList />);
