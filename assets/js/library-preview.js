
function setupLibraryPreview() {
  const previews = document.querySelectorAll(
    "#post-list .library-preview.has-thumbnail"
  );

  previews.forEach((preview) => {
    const image = preview.querySelector(".library-preview-thumbnail img");
    const body = preview.querySelector(".library-preview-content .card-body");
    const title = body?.querySelector(".card-title");
    const description = body?.querySelector(".card-text");
    const meta = body?.querySelector(".post-meta");

    if (!image || !body || !title || !description || !meta) return;

    let frameId = 0;

    function outerHeight(element) {
      const style = getComputedStyle(element);

      return (
        element.getBoundingClientRect().height +
        (parseFloat(style.marginTop) || 0) +
        (parseFloat(style.marginBottom) || 0)
      );
    }

    function updatePreview() {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        if (!image.complete || image.naturalWidth === 0) return;

        // Measure the metadata without letting it affect layout.
        const wasHidden = meta.classList.contains("library-meta-hidden");

        meta.classList.remove("library-meta-hidden");
        meta.style.visibility = "hidden";

        const bodyStyle = getComputedStyle(body);
        const bodyPadding =
          (parseFloat(bodyStyle.paddingTop) || 0) +
          (parseFloat(bodyStyle.paddingBottom) || 0);

        const requiredHeight =
          bodyPadding +
          outerHeight(title) +
          outerHeight(description) +
          outerHeight(meta);

        meta.style.visibility = "";

        // Compare against the image's natural rendered height.
        const imageHeight = image.getBoundingClientRect().height;

        const shouldHide =
          imageHeight > 0 && imageHeight < requiredHeight;

        meta.classList.toggle("library-meta-hidden", shouldHide);

        // If the metadata was hidden, keep it hidden only when required.
        if (wasHidden && !shouldHide) {
          meta.classList.remove("library-meta-hidden");
        }
      });
    }

    image.addEventListener("load", updatePreview);
    window.addEventListener("resize", updatePreview);

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updatePreview);
      observer.observe(image);
      observer.observe(title);
      observer.observe(description);
    }

    updatePreview();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupLibraryPreview, {
    once: true
  });
} else {
  setupLibraryPreview();
}
