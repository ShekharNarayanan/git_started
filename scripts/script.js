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
	  console.log("Fetching:", `content/${btn.dataset.day}`);

      console.log("📖 Loading:", mdFile);
      contentDiv.innerHTML = "<p>Loading content...</p>";

      try {
        const response = await fetch(mdFile);
		console.log(mdFile);
        if (!response.ok) throw new Error(`File not found (${response.status})`);
        const mdText = await response.text();
        const html = converter.makeHtml(mdText);
        contentDiv.innerHTML = html;
      } catch (err) {
        console.error("⚠️ Error:", err);
        contentDiv.innerHTML = `<p style="color:red;">Error loading file: ${err.message}</p>`;
      }
    });
  });
});
