const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// سرو کردن فایل‌های استاتیک
app.use(express.static(path.join(__dirname, 'public')));

// مسیر دانلود داینامیک
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'public', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.download(filePath, filename, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error downloading file.');
      }
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
