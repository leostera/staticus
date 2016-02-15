import tree from './tree';

let bootstrap = (env) => {
  let root = process.cwd();
  let t = tree(root);
  console.log(t);
}

export default bootstrap;
