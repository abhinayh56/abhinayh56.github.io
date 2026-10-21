
/* Match library content height to thumbnail height */

function syncLibraryPreviewHeights() {
    const previews = document.querySelectorAll(
        ".post-preview.library-preview"
    );

    previews.forEach((preview) => {
        const thumbnail = preview.querySelector(
            ".library-preview-thumbnail"
        );
        const content = preview.querySelector(
            ".library-preview-content"
        );

        if (!thumbnail || !content) return;

        const updateHeight = () => {
            const height = thumbnail.getBoundingClientRect().height;

            if (height > 0) {
                content.style.height = `${height}px`;
            }
        };

        updateHeight();

        if ("ResizeObserver" in window) {
            const observer = new ResizeObserver(updateHeight);
            observer.observe(thumbnail);
        }

        const image = thumbnail.querySelector("img");

        if (image) {
            image.addEventListener("load", updateHeight);
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        syncLibraryPreviewHeights
    );
} else {
    syncLibraryPreviewHeights();
}
