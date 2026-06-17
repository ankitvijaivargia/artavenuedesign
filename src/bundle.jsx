/* Art Avenue — page bundle.
 *
 * Load order is load-bearing: parts.jsx registers the shared window globals
 * (AAFigure, AAHeader, AAFooter, commerce + lead helpers) that every page
 * module reads at evaluation time, so it must run before the pages.
 */
import "./parts.jsx";

import "./pages/HomePage.jsx";
import "./pages/CollectionPage.jsx";
import "./pages/ProductPage.jsx";
import "./pages/RugProductPage.jsx";
import "./pages/CushionProductPage.jsx";
import "./pages/MaterialLibrary.jsx";
import "./pages/TradePage.jsx";
import "./pages/CustomBespokePage.jsx";
