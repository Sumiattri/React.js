// whatever we render in app it goes to main.jsx and then to index.html and then it renders in a div having id "root" cause that div
// is selected in main.jsx by document.getElementById
// what if we make a another div in index.html and then we want to render a specific component in tha that div,
// in that case we use react-portals
// 1 . import createPortal from react-dom
// 2. inpsite of directly returning anything inside our component, return it by passing it as a argument to the createPortal funtion
// 3. createPoratal fnction takes two argument, first one is anything that we want to render and second thing is the selection of id
//    of the div in which we want to render our componet, means documeht.getElementById("name_of_id_of_the_div")

import { createPortal } from "react-dom";

function MyComponent() {
  return createPortal(
    <div>
      <h2>MyComponent</h2>
    </div>,
    document.getElementById("new-root")
  );
}

export default MyComponent;
