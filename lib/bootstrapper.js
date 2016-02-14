import tree from './tree';

let bootstrap = (env) => {
  let t = tree(root);
  Object.keys(t).each(parse);
}

export default bootstrap;
