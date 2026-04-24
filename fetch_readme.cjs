const https = require('https');
https.get('https://raw.githubusercontent.com/dindian006-dot/F-youtube-music-video/main/README.md', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
