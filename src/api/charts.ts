import axios from "axios";

const URL = "https://elcodis.com/test_task_mock.json";

export const getChartsCoordinates = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = response?.data ?? {};
    return data;
  } catch (e) {
    console.log(e);
  }
};
