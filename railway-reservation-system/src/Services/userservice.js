import axios from "axios"

const USER_API_BASE_URL = 'http://localhost:8082/user/status/{pnrNo}';
const USER_API_FORSEACRHINTRAIN_BASE_URL = 'http://localhost:8082/user/trainNo';

class userService {

    getDetailsByTrainNo() {
        return axios.get(USER_API_FORSEACRHINTRAIN_BASE_URL + "/trainNo");
    }

    getStatus(pnrNo) {
        return axios.get(USER_API_BASE_URL + `/status/${pnrNo}`);
    }

}

export default new userService()