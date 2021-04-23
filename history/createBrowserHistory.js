function createBrowserHistory() {
  const originHistory = window.history;
  let state;
  let action;
  const listeners = [];

  function notify() {
    listeners.forEach((listener) => listener(history.location));
  }

  function go(n) {
    originHistory.go(n);
  }
  function goForward() {
    originHistory.forward();
  }
  function goBack() {
    originHistory.back();
  }
  function push(pathname, newState) {
    action = "PUSH";
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = newState;
    }
    const location = { pathname: pathname, state };
    originHistory.pushState(state, null, pathname);
    Object.assign(history, { action, location });
    notify();
  }
  function listen(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }
  window.addEventListener("popstate", () => {
    action = "POP";
    const location = {
      pathname: window.location.pathname,
      state: originHistory.state,
    };
    Object.assign(history, { location, action });
    notify();
  });

  const history = {
    action: "PUSH",
    location: { pathname: window.location.pathname, state: originHistory.state },
    go,
    goForward,
    goBack,
    push,
    listen,
  };

  return history;
}

export default createBrowserHistory;
