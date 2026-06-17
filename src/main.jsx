/* Art Avenue — application entry.
 *
 * Import order is load-bearing: the design system must register its globals
 * before the page bundle runs, since the page modules read those globals at
 * evaluation time.
 */
import "./tokens.css";
import "./app.css";

import React from "react";
import { createRoot } from "react-dom/client";

import "./ds.jsx";     // window.React + window.ArtAvenueDesignSystem_70ed11
import "./bundle.jsx"; // parts (header/footer/helpers) + all page components

function App() {
  const [route, setRoute] = React.useState({ name: "home", arg: null });
  const navigate = (name, arg) => { setRoute({ name, arg }); window.scrollTo({ top: 0, behavior: "auto" }); };
  window.AAnavigate = navigate;
  let page;
  if (route.name === "collection") page = <window.AACollectionPage onNavigate={navigate} title={route.arg} />;
  else if (route.name === "product") page = /rug/i.test(route.arg || "") ? <window.AARugProductPage onNavigate={navigate} name={route.arg} /> : /cushion/i.test(route.arg || "") ? <window.AACushionProductPage onNavigate={navigate} name={route.arg} /> : <window.AAProductPage onNavigate={navigate} name={route.arg} />;
  else if (route.name === "trade") page = <window.AATradePage onNavigate={navigate} />;
  else if (route.name === "custom") page = <window.AACustomBespokePage onNavigate={navigate} />;
  else if (route.name === "library") page = <window.AAMaterialLibrary onNavigate={navigate} name={route.arg} />;
  else page = <window.AAHomePage onNavigate={navigate} />;
  return (
    <React.Fragment>
      <window.AAAnnounceBar />
      <window.AAHeader onNavigate={navigate} transparent={route.name === "home"} />
      <div className="aa-route" key={route.name + (route.arg || "")}>{page}</div>
      <window.AAFooter onNavigate={navigate} />
    </React.Fragment>
  );
}
createRoot(document.getElementById("root")).render(<App />);
