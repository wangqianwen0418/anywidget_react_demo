import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from './App'

// the render function is for the anywidget
export function render(view) {
    const root = ReactDOM.createRoot(view.el);
    root.render(<App />);
    return () => root.unmount();
  }