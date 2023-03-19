const axios = require('axios');

async function main() {
  const result = await axios.get('http://apiapp/test');
  console.log(result.data);
}

main();
