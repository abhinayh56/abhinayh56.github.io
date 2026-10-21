
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
    const tags = body?.querySelector(".post-meta");

    if (!image || !body || !title || !description || !tags) return;

    let frameId = 0;

    function updatePreview() {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        // Always measure with all content visible.
        description.style.removeProperty("display");
        tags.style.removeProperty("display");

        const imageHeight = image.getBoundingClientRect().height;
        if (imageHeight <= 0) return;

        // Measure the natural height of the content elements.
        const bodyStyle = getComputedStyle(body);
        const paddingTop = parseFloat(bodyStyle.paddingTop) || 0;
        const paddingBottom = parseFloat(bodyStyle.paddingBottom) || 0;

        const requiredHeight =
          title.getBoundingClientRect().height +
          (parseFloat(getComputedStyle(title).marginTop) || 0) +
          (parseFloat(getComputedStyle(title).marginBottom) || 0) +
          description.getBoundingClientRect().height +
          (parseFloat(getComputedStyle(description).marginTop) || 0) +
          (parseFloat(getComputedStyle(description).marginBottom) || 0) +
          tags.getBoundingClientRect().height +
          (parseFloat(getComputedStyle(tags).marginTop) || 0) +
          (parseFloat(getComputedStyle(tags).marginBottom) || 0) +
          paddingTop +
          paddingBottom;

        // Hide tags when the image is shorter than the full content.
        tags.style.display =
          imageHeight < requiredHeight - 2 ? "none" : "";
      });
    }

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updatePreview);
      observer.observe(image);
      observer.observe(body);
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
