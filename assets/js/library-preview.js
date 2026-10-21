
function setupLibraryPreview() {
  const previews = document.querySelectorAll(
    "#post-list .post-preview.library-preview.has-thumbnail"
  );

  previews.forEach((preview) => {
    const thumbnail = preview.querySelector(".library-preview-thumbnail");
    const image = thumbnail?.querySelector("img");
    const meta = preview.querySelector(
      ".library-preview-content .post-meta"
    );

    if (!thumbnail || !image || !meta) return;

    let frameId = 0;
    let lastHiddenState = null;

    function updatePreview() {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const imageHeight = image.getBoundingClientRect().height;
        const thumbnailHeight = thumbnail.clientHeight;
        const style = getComputedStyle(thumbnail);

        const availableHeight =
          thumbnailHeight -
          (parseFloat(style.paddingTop) || 0) -
          (parseFloat(style.paddingBottom) || 0);

        if (imageHeight <= 0 || availableHeight <= 0) return;

        const shouldHide = imageHeight < availableHeight - 2;

        // Update only when the state actually changes.
        if (shouldHide !== lastHiddenState) {
          meta.classList.toggle("library-meta-hidden", shouldHide);
          lastHiddenState = shouldHide;
        }
      });
    }

    // Observe the image only; do not observe the thumbnail box.
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updatePreview);
      observer.observe(image);
    }

    image.addEventListener("load", updatePreview);

    if (image.complete) updatePreview();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupLibraryPreview);
} else {
  setupLibraryPreview();
}
