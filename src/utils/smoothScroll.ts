import type { MouseEvent } from "react";

const HEADER_OFFSET = 110;

export function scrollToHash(hash: string, offset = HEADER_OFFSET) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfterClick?: () => void,
) {
  if (!href.startsWith("#")) {
    return;
  }

  event.preventDefault();
  onAfterClick?.();

  window.setTimeout(() => scrollToHash(href), 200);
}
