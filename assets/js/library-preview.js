
function syncLibraryPreviewHeights() {
  const previews = document.querySelectorAll(".post-preview.library-preview");

  previews.forEach((preview) => {
    const thumbnail = preview.querySelector(".library-preview-thumbnail");
    const content = preview.querySelector(".library-preview-content");
    const body = content?.querySelector(".card-body");
    const heading = content?.querySelector(".card-title");
    const description = content?.querySelector(".card-text");
    const tags = content?.querySelector(".post-meta");

    if (!thumbnail || !content || !body || !heading || !description || !tags) {
      return;
    }

    let scheduled = false;

    function updatePreview() {
      if (scheduled) return;
      scheduled = true;

      requestAnimationFrame(() => {
        scheduled = false;

        const height = thumbnail.getBoundingClientRect().height;
        if (height <= 0) return;

        content.style.height = `${height}px`;
        body.style.height = "100%";

        // Restore both elements before measuring.
        description.style.display = "";
        tags.style.display = "";

        // Prevent flex shrinking from distorting the measurements.
        heading.style.flex = "0 0 auto";
        description.style.flex = "0 0 auto";
        tags.style.flex = "0 0 auto";

        const bodyStyle = getComputedStyle(body);
        const availableHeight =
          body.clientHeight -
          parseFloat(bodyStyle.paddingTop) -
          parseFloat(bodyStyle.paddingBottom);

        function outerHeight(element) {
          const style = getComputedStyle(element);
          return element.getBoundingClientRect().height +
            parseFloat(style.marginTop) +
            parseFloat(style.marginBottom);
        }

        const headingHeight = outerHeight(heading);
        const descriptionHeight = outerHeight(description);
        const tagsHeight = outerHeight(tags);

        // Hide tags first when all three elements do not fit.
        if (
          headingHeight + descriptionHeight + tagsHeight >
          availableHeight
        ) {
          tags.style.display = "none";
        }

        // Hide description next if the heading and description do not fit.
        if (
          headingHeight + descriptionHeight >
          availableHeight
        ) {
          description.style.display = "none";
        }

        // If the heading itself is too tall, keep it visible and
        // let the content container clip its overflow.
      });
    }

    const observer = new ResizeObserver(updatePreview);
    observer.observe(thumbnail);
    observer.observe(body);
    observer.observe(heading);

    const image = thumbnail.querySelector("img");
    if (image) image.addEventListener("load", updatePreview);

    window.addEventListener("resize", updatePreview);
    updatePreview();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", syncLibraryPreviewHeights);
} else {
  syncLibraryPreviewHeights();
}
