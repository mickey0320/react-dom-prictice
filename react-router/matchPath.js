const { pathToRegexp } = require("path-to-regexp");

function compilePath(path, options) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  return {
    keys,
    regexp,
  };
}
function matchPath(pathname, options) {
  const { path, exact = false, strict = false, sensitive = false } = options;
  const { regexp, keys } = compilePath(path, { end: exact, strict, sensitive });
  const match = regexp.exec(pathname);
  if (!match) return null;

  const [url, ...values] = match;
  const isExact = url === pathname;
  if (exact && !isExact) return null;

  const params = keys.reduce((memo, key, index) => {
    memo[key.name] = values[index];
    return memo;
  }, {});

  return {
    // route的路径
    path,
    // 浏览器的url
    url,
    params,
    isExact,
  };
}

export default matchPath;
