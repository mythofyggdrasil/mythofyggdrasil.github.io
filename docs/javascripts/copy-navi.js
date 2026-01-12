(() => {
  const COPY_CLASS = "navi-copy";
  const WRAP_CLASS = "navi-copy-wrap";

  function setButtonCopied(button) {
    const original = button.textContent;
    button.textContent = "Copiado!";
    button.classList.add("is-copied");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-copied");
    }, 1200);
  }

  function fallbackCopy(text, button) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setButtonCopied(button);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function copyText(text, button) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => setButtonCopied(button),
        () => fallbackCopy(text, button)
      );
      return;
    }
    fallbackCopy(text, button);
  }

  function addCopyButtons(root) {
    const codes = root.querySelectorAll("code");
    codes.forEach((code) => {
      if (code.closest("pre")) {
        return;
      }
      if (code.dataset.naviCopyBound === "true") {
        return;
      }
      const text = code.textContent.trim();
      if (!/^\/navi\b/.test(text)) {
        return;
      }

      code.dataset.naviCopyBound = "true";

      const wrap = document.createElement("span");
      wrap.className = WRAP_CLASS;
      code.parentNode.insertBefore(wrap, code);
      wrap.appendChild(code);

      const button = document.createElement("button");
      button.type = "button";
      button.className = COPY_CLASS;
      button.setAttribute("aria-label", "Copiar comando /navi");
      button.textContent = "Copiar";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        copyText(text, button);
      });
      wrap.appendChild(button);
    });
  }

  function init() {
    addCopyButtons(document);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
