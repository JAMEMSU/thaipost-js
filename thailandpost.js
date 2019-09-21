const request = require("request");

const thailandpost = {};

thailandpost.GetToken = token => {
  const options = {
    method: "POST",
    url: "https://trackapi.thailandpost.co.th/post/api/v1/authenticate/token",
    rejectUnauthorized: false,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token
    },
    json: true
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) return reject(error);
      try {
        resolve(body.token);
      } catch (e) {
        reject(e);
      }
    });
  });
};

thailandpost.GetItems = (token, barcode) => {
  const options = {
    method: "POST",
    url: "https://trackapi.thailandpost.co.th/post/api/v1/track",
    rejectUnauthorized: false,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token
    },
    body: { status: "all", language: "TH", barcode: barcode },
    json: true
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) return reject(error);
      try {
        resolve(body.response.items);
      } catch (e) {
        reject(e);
      }
    });
  });
};

thailandpost.RequestItems = (token, barcode) => {
  const options = {
    method: "POST",
    url: "https://trackapi.thailandpost.co.th/post/api/v1/track/batch",
    rejectUnauthorized: false,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token
    },
    body: { status: "all", language: "TH", barcode: barcode },
    json: true
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) return reject(error);
      try {
        resolve(body.response.items);
      } catch (e) {
        reject(e);
      }
    });
  });
};

module.exports = thailandpost;
