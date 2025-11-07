// --- Git Started dynamic Markdown loader ---
window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".day-selector button");
  const contentDiv = document.getElementById("content");
  const converter = new showdown.Converter();

  if (!buttons.length) {
    console.error("❌ No buttons found! Check your <nav> placement or class name.");
    return;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const mdFile = `content/${btn.dataset.day}`;
      console.log("📖 Loading:", mdFile);

      // Reset for fade-out and loading state
      contentDiv.classList.remove("visible");
      contentDiv.innerHTML = "<p>Loading content...</p>";

      try {
        const response = await fetch(mdFile);
        if (!response.ok) throw new Error(`File not found (${response.status})`);
        const mdText = await response.text();

        // Convert Markdown to HTML
        const html = converter.makeHtml(mdText);

        // === Animation reset logic (only change) ===
        // Temporarily disable transitions so they can replay
        contentDiv.style.transition = "none";
        contentDiv.offsetHeight; // force layout refresh
        contentDiv.style.transition = "";

        // Apply GitHub markdown styles
        contentDiv.innerHTML = html;

        // Trigger fade-in
        requestAnimationFrame(() => {
          contentDiv.classList.add("visible");
        });
        // ============================================
      } catch (err) {
        console.error("⚠️ Error:", err);
        contentDiv.innerHTML = `<p style="color:red;">Error loading file: ${err.message}</p>`;
      }
    });
  });
});
