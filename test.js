const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  timeout: 5000
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  
  if (res.statusCode === 200) {
    console.log('✅ Test passed: Server responded with HTTP 200');
    process.exit(0);
  } else {
    console.log(`❌ Test failed: Expected HTTP 200, got ${res.statusCode}`);
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.log(`❌ Test failed: ${err.message}`);
  process.exit(1);
});

req.on('timeout', () => {
  console.log('❌ Test failed: Request timeout');
  req.destroy();
  process.exit(1);
});

req.end();
