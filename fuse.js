const { FuseBox, WebIndexPlugin, HTMLPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  tsConfig: "./tsconfig.json",
  plugins: [
    WebIndexPlugin({ template: './src/index.html' }),
    HTMLPlugin()
  ]
});

fuse.dev({})

fuse.bundle("app")
  .instructions(">main.ts")
  .watch()
  .hmr()

fuse.run();