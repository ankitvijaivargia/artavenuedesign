/* Art Avenue — Design System bridge.
 *
 * The handoff prototypes (parts.jsx + page files) were authored against two
 * runtime globals provided by the Claude Design bundler:
 *   - window.ArtAvenueDesignSystem_70ed11  (the DS component library)
 *   - window.React                         (React, referenced as a bare global)
 *
 * Rather than rewrite ~3,000 lines of faithful prototype JSX, we recreate those
 * globals from the real DS component source. This keeps the design pixel-exact
 * while running on a modern Vite + React build.
 */
import React from "react";
import * as ReactDOM from "react-dom";

import { Eyebrow } from "./components/Eyebrow.jsx";
import { Badge } from "./components/Badge.jsx";
import { Button } from "./components/Button.jsx";
import { Input } from "./components/Input.jsx";
import { Select } from "./components/Select.jsx";
import { ProductCard } from "./components/ProductCard.jsx";
import { CollectionTile } from "./components/CollectionTile.jsx";

// Expose React as a bare global so the prototype files (which call React.useState,
// React.Fragment, React.useEffect, etc. without importing it) resolve correctly.
window.React = React;
window.ReactDOM = ReactDOM; // page overlays use ReactDOM.createPortal

// The exact handle the prototypes destructure from.
window.ArtAvenueDesignSystem_70ed11 = {
  Eyebrow,
  Badge,
  Button,
  Input,
  Select,
  ProductCard,
  CollectionTile,
};

export {};
