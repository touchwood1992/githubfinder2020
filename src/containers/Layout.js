import React from "react";
// import Header from "../components/common/Header/Header";
// import Footer from "../components/common/Footer/Footer";
const Layout = (props) => {
  return (
    <div id="app-container">
      {/* <Header></Header> */}
      <main id="app-content" className="pt-2">
        {props.children}
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
};
export default Layout;
