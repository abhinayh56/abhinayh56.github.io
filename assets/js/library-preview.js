
function setupLibraryPreview() {
  const previews = document.querySelectorAll(
    "#post-list .post-preview.library-preview.has-thumbnail"
  );

  previews.forEach((preview) => {
    const thumbnail = preview.querySelector(".library-preview-thumbnail");
    const image = thumbnail?.querySelector("img");
    const meta = preview.querySelector(".library-preview-content .post-meta");

    if (!thumbnail || !image || !meta) return;

    let frameId = 0;

    function updatePreview() {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const imageHeight = image.getBoundingClientRect().height;
        const thumbnailHeight = thumbnail.getBoundingClientRect().height;

        if (!imageHeight || !thumbnailHeight) return;

        if (imageHeight < thumbnailHeight - 2) {
          meta.classList.add("library-meta-hidden");
        } else {
          meta.classList.remove("library-meta-hidden");
        }
      });
    }

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updatePreview);
      observer.observe(image);
      observer.observe(thumbnail);
    }

    image.addEventListener("load", updatePreview);
    updatePreview();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupLibraryPreview);
} else {
  setupLibraryPreview();
}
