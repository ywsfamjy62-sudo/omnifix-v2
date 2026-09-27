// index.js - خادم OmniFix المباشر مع خاصية منع التخزين المؤقت
const express = require('express');
const path = require('path');
const app = express();

// إعداد منع Cache لضمان تحديث الواجهة دائماً عند المستخدمين
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// تقديم ملف الواجهة الرئيسي
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل الخادم على المنفذ المناسب لـ Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OmniFix Owner Server is Online on Port ${PORT}`);
});
