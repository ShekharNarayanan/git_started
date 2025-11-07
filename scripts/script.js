// --- Git Started dynamic Markdown loader ---
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".day-selector button");
  const contentDiv = document.getElementById("content");
  const converter = new showdown.Converter();

  // Handle button clicks
  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const mdFile = `content/${btn.dataset.day}`;
      contentDiv.innerHTML = "<p>Loading content...</p>";

      try {
        const response = await fetch(mdFile);
        if (!response.ok) throw new Error("Could not find Markdown file");
        const mdText = await response.text();
        const html = converter.makeHtml(mdText);

        // Replace Markdown with HTML
        contentDiv.innerHTML = html;

        // Optional: scroll smoothly to top after loading
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        contentDiv.innerHTML = `<p style="color:red;">⚠️ ${err.message}</p>`;
      }
    });
  });
});
