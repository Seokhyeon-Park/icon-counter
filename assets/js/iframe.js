const client = ZAFClient.init();

client.on('app.registered', async (data) => {
  let i = 0;
  client.set('iconSymbol', `count-${i}`);
  
  setInterval(() => {
    i++;

    if (i < 100) {
      client.set('iconSymbol', `count-${i}`);
    } else {
      client.set('iconSymbol', `count-99p`);
      i = 0;
    }
  }, 500);
});
