document.write(`<html>
<head>
</head>
<body>
<button onclick="openGame()">Server 1</button>
<script>
function openGame() {
var win = window.open()
var url = "https://gg-service-2910.vercel.app/"
var iframe = win.document.createElement('iframe')
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.src = url
win.document.body.appendChild(iframe)
}
</script>
</body>
</html>
`);
