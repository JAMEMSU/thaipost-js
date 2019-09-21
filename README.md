ThaiPost JS
==========

ThaiPost Tracking API for JS


Examples
--------
```javascript

(async () => {
  // สร้าง token ได้จากหน้า dashboard เมนูสำหรับนักพัฒนา https://track.thailandpost.co.th/dashboard#
  const static_token = "";

  // สำหรับ สร้าง Token เพื่อให้ในการรับส่งข้อมูล Token จะมีการกำหนดวันหมดอายุ 1 เดือน
  const token = await thailandpost.GetToken(static_token);

  // ใช้ในการ Get ข้อมูลจำนวนไม่เกิน 100 หมายเลขเท่านั้นข้อมูลจะถูกแนบส่งไปกับ HTTPResponse
  const items = await thailandpost.GetItems(token, [
    "EF550456825TH",
    "TH425765204TH"
  ]);

  // ใช้ในการ Get ข้อมูลจำนวน 100 หมายเลขขึ้นไป ข้อมูลจะถูกส่งไปยัง Email ในรูปแบบ Link File Download
  const items_email = await thailandpost.RequestItems(token, [
    "EF550456825TH",
    "TH425765204TH"
  ]);

  console.log(items);
})();


```
