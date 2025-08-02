const express = require("express");
const app = express();
const path = require("path");

// ارائه فایل‌های استاتیک از پوشه public
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h2>📂 لینک‌های دانلود:</h2>
    <ul>
      <li><a href="/audio.mp3" download>دانلود صوت</a></li>
    </ul>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
