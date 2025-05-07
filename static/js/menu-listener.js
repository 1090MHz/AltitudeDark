document.addEventListener("click", (event) => {
  const target = event.target.closest(".menu-item");
  if (target && target.dataset.action) {
    const action = target.dataset.action;

    if (Module && Module.ccall) {
      Module.ccall(action.replace(/^_/, ""), null, [], []); // Removes leading underscore
    } else {
      console.warn("Wasm module or ccall not available");
    }

    event.preventDefault();
  }
});
