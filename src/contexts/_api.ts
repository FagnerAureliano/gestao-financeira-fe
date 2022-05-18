import axios from "axios";

interface Props {
  url: string;
  payload: string;
}

export async function postData({ url, payload }: Props) {

  var _headers = {
    headers: {
      Accept: "application/json",  "Content-Type": "application/json",
    },
  };

  let result = await axios.post(url, JSON.stringify(payload), _headers);
  
  if (result.status === 200) {
    return result;
  }
}
