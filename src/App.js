import React from "react";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Routes>
<Route path="/">
  <Route index element={<Home/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="users">
    <Route index element={<List/>}/>
    <Route path=":userId" element={<Single/>}/>
    <Route path="new" element={<New/>}/>
  </Route> 
  <Route path="products">
    <Route index element={<List/>}/>
    <Route path=":productId" element={<Single/>}/>
    <Route path="new" element={<New/>}/>
  </Route> 
  </Route>

</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="blogs" element={<Blogs />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
  </Route>
</Routes>
</BrowserRouter> */}
