# anywidget_react_demo

Showcase how to incorporate React component in a jupyter notebook.

I have been exploring [AnyWidget](https://github.com/manzt/anywidget) and saw some people asked how to use React Component with it.
I hope this demo could be helpful.

### How to run it

- **Install:**
  
  Install all the necessary node modules by running the `npm install` command.

  Only need to do this step once. 

- **Convert to ESM:**
  
  To convert your react components into ESM files and store them in the `bundle` folder, you can run
  `npm run build` (which actually runs `./node_modules/.bin/esbuild ./src/widget.tsx --format=esm --outdir=./bundle --bundle`) .
  
  Or, `npm run dev` if you want to use the Hot Module Replacement (HMR) in anywidget[dev].

- **Usage**

  ```python
  import pathlib
  import anywidget
  
  class myWidget(anywidget.AnyWidget):
      _esm = pathlib.Path("../bundle/widget.js")
      _css = pathlib.Path("../bundle/widget.css")
  
  m = myWidget()
  ```

<img height="245" alt="image" src="https://github.com/wangqianwen0418/anywidget_react_demo/assets/19774198/6ce3eb61-d818-41a4-a86d-cabe4cc6ea32">

  <img height="245" alt="image" src="https://github.com/wangqianwen0418/anywidget_react_demo/assets/19774198/262b68ad-0683-4308-878c-b41e22635a89">
