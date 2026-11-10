# 📱 CHELAT STORE

متجر تطبيقات وألعاب الأندرويد والآيفون — HTML / CSS / JavaScript خالص (بدون Build).

## البنية
```
index.html          الصفحة الرئيسية
privacy.html        سياسة الخصوصية (مطلوبة لـ AdSense)
ads.txt             ملف التحقق من الناشر
robots.txt / sitemap.xml
css/style.css
js/apps-data.js     بيانات التطبيقات (عدّل هنا لإضافة تطبيق)
js/ads.js           إعدادات الإعلانات
js/main.js          منطق الموقع
assets/images/icons أيقونات التطبيقات (اسم الملف حسب fileMap في main.js)
```

## إضافة تطبيق
أضف سطراً في `js/apps-data.js` ثم ضع أيقونته في `assets/images/icons` وسجّل اسم الملف في `fileMap` داخل `js/main.js`.
إذا بقي `downloadLink: "#"` يُحوَّل الزر تلقائياً إلى بحث Google Play الرسمي عن التطبيق.

## تفعيل الإعلانات
افتح `js/ads.js` وعدّل: `enabled: true`، رقم الناشر `client`، ومعرفات الوحدات `slots`، ثم ضع نفس رقم الناشر في `ads.txt`.
لمعاينة أماكن الإعلانات بدون إعلانات حقيقية: `index.html?adpreview`.

## قبل النشر
استبدل `YOUR-DOMAIN.com` في `index.html` و`robots.txt` و`sitemap.xml`.

© 2026 MOUHSSINE CHELLAT
