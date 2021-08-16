import React from "react";
import ReactDOM from "react-dom";
import CreateToast, { Props } from "./create-toast";

function makeId() {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const toastList: { [key: string]: any } = {};
function createToast(options: Props) {
  const container = document.createElement("div");
  document.body.append(container);
  ReactDOM.render(<CreateToast {...options}></CreateToast>, container);
  const toastId = makeId();
  toastList[toastId] = container;
  return toastId;
}

function toastTopPosition() {
  return (
    Object.keys(toastList).length * 40 +
    (Object.keys(toastList).length + 1) * 16
  );
}
function removeToast(toastId: string, delay: number = 3) {
  setTimeout(() => {
    if (!toastList[toastId]) return;
    const container = toastList[toastId];
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    delete toastList[toastId];
  }, delay * 1000);
}

export function information(options: Props) {
  const { style, ...rest } = options;
  const top = toastTopPosition();
  const toastId = createToast({
    type: "information",
    style: { top: top, ...style },
    ...rest,
  });
  removeToast(toastId, options.delay);
}

export function success(options: Props) {
  const { style, ...rest } = options;
  const top = toastTopPosition();
  const toastId = createToast({
    type: "success",
    style: { top: top, ...style },
    ...rest,
  });
  removeToast(toastId, options.delay);
}

export function warning(options: Props) {
  const { style, ...rest } = options;
  const top = toastTopPosition();
  const toastId = createToast({
    type: "warning",
    style: { top: top, ...style },
    ...rest,
  });
  removeToast(toastId, options.delay);
}

export function error(options: Props) {
  const { style, ...rest } = options;
  const top = toastTopPosition();
  const toastId = createToast({
    type: "error",
    style: { top: top, ...style },
    ...rest,
  });
  removeToast(toastId, options.delay);
}
