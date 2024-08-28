const client = ZAFClient.init();

/**
 * 해당 앱의 다른 instance client를 가져온다.
 * @param {String} location "background", "top_bar", "ticket_side_bar", "new_ticket_sidebar"
 * @returns client
 */
const getInstanceClient = async (location) => {
  const { instances } = await client.get('instances');
  for (const instanceGuid in instances) {
    if (instances[instanceGuid].location === location) {
      return client.instance(instanceGuid);
    }
  }
}

// 앱이 로드되면 실행
client.on('app.registered', (data) => {
  // topbar preload
  setTimeout(async () => {
    const topBarClient = await getInstanceClient('top_bar');
    console.log("topBarClient : ", topBarClient);
    topBarClient.invoke('preloadPane');
  }, 1000);
});