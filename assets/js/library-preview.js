
function setupLibraryPreview() {
  const previews = document.querySelectorAll(
    "#post-list .post-preview.library-preview.has-thumbnail"
  );

  previews.forEach((preview) => {
    const image = preview.querySelector(
      ".library-preview-thumbnail img"
    );
    const body = preview.querySelector(
      ".library-preview-content .card-body"
    );
    const title = body?.querySelector(".card-title");
    const description = body?.querySelector(".card-text");
    const meta = body?.querySelector(".post-meta");

    if (!image || !body || !title || !description || !meta) return;

    let frameId = 0;
    let observer;

    // Start with metadata visible.
    meta.classList.remove("library-meta-hidden");
    meta.style.removeProperty("display");

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

        // Keep the metadata visible while measuring its natural height.
        meta.classList.remove("library-meta-hidden");
        meta.style.removeProperty("display");

        const imageHeight = image.getBoundingClientRect().height;

        if (imageHeight <= 0) return;

        const bodyStyle = getComputedStyle(body);
        const padding =
          (parseFloat(bodyStyle.paddingTop) || 0) +
          (parseFloat(bodyStyle.paddingBottom) || 0);

        const requiredHeight =
          padding +
          outerHeight(title) +
          outerHeight(description) +
          outerHeight(meta);

        const shouldHide = imageHeight < requiredHeight - 4;

        meta.classList.toggle("library-meta-hidden", shouldHide);
      });
    }

    if ("ResizeObserver" in window) {
      observer = new ResizeObserver(updatePreview);
      observer.observe(image);
      observer.observe(title);
      observer.observe(description);
    }

    image.addEventListener("load", updatePreview);
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

window.addEventListener("resize", () => {
  document.querySelectorAll(
    "#post-list .post-preview.library-preview.has-thumbnail"
  ).forEach((preview) => {
    const image = preview.querySelector(".library-preview-thumbnail img");
    if (image) image.dispatchEvent(new Event("resize-check"));
  });
});
