import { type MouseEvent } from "react";

export function addRipple(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple-circle";
  ripple.style.left = `${e.clientX - rect.left - 10}px`;
  ripple.style.top = `${e.clientY - rect.top - 10}px`;
  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}
