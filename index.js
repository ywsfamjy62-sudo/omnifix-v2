// index.js - خادم السيرفر الرئيسي المستقر لمشروع OmniFix Pro
const express = require('express');
const path = require('path');
const app = express();

// إعداد خيارات الأمان ومنع التخزين المؤقت Cache لضمان تحديث الملفات دائماً
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// تقديم ملفات الواجهة
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// التشغيل المباشر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OmniFix Pro Server Running Smoothly on Port ${PORT}`);
});
