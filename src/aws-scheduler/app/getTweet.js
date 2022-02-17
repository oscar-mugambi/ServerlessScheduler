const axios = require('axios').default;

const getTweet = async (event) => {
  let tweet;

  try {
    tweet = await axios.get('https://api.kanye.rest/');
    const { data } = tweet;
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: 'Error',
    };
  } finally {
    console.log('code run to completion');
  }
};

module.exports = {
  handler: getTweet,
};
