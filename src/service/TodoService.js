import axios from 'axios';

export const queryTodoListData = url => axios.get(url);
// export const queryTodoListData = async function (url) {
//   await axios.get(url);
// };
