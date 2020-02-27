import axios from "axios";

export default {
  request(method, uri, data = null) {
    if (!method) {
      console.error("API function call requires method argument");
      return;
    }

    if (!uri) {
      console.error("API function call requires uri argument");
      return;
    }

    // var url = this.serverURI + uri
    var url = uri;
    return axios({
      method,
      url,
      data
    });
  }
};
