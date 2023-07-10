import axios from "axios";
import {env} from "../../configs/EnvironmentConfig"

import {message} from "antd";

export const getApi = (url, token, callback) => {
  const path = `${env.API_ENDPOINT_URL}${url}`

  console.log("path-----><<<<----", path)

  return axios.get(path, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export const PostApi = async (url, data, token, callback) => {
  const path = `${env.API_ENDPOINT_URL}${url}`

  const response = await axios
      .post(path, data, { headers: { Authorization: "Token " + token } } )
      .catch(error => console.log("error", error));

  return response;

}

export const DeleteApi = async (url, token, callback) => {
  const path = `${env.API_ENDPOINT_URL}${url}`;
  const response = await axios
      .delete(path, { headers: { Authorization: "Token " + token } } )
      .catch(error => console.log("error", error));

  return response;

}

export const UpdateApi = async (url, data, token, callback) => {
  const path = `${env.API_ENDPOINT_URL}${url}`;
  // console.log("UPDATE PATH", path);
  const response = await axios
      .put(path, data, { headers: { Authorization: "Token " + token } } )
      .catch(error => {
        console.log("error", error);
        message.error(`No se pudo realizar esta acción ${error.response?.status}`)
      });

  return response;

}
