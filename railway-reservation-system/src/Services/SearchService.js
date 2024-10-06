import axios from'axios'
const TRAIN_SEARCH_ALL_URL ='http://localhost:8083/admin/all';
const TRAIN_SEARCH_BYROUTE = 'http://localhost:8082/user/route'
const TRAIN_ADD_TRAIN_URL ='http://localhost:8083/admin/addtrain';
const TRAIN_GET_TRAIN_BY_ID_URL ='http://localhost:8083/admin//{trainNo}';
const TRAIN_UPDATE_TRAIN_BY_ID_URL ='http://localhost:8083/admin/update';
const TRAIN_DELETE_TRAIN_BY_ID_URL ='http://localhost:8083/admin/delete';
const TRAIN_SEARCHBYUSER_ALL_URL ='http://localhost:8082/user/alltrains';
const CANCLE_TRAIN_TICKET ='http://localhost:8084/user/cancle/{pnrNo}';

class SearchService{
   

getAllTrains(){
    return axios.get(TRAIN_SEARCH_ALL_URL);
}

getTrainsByRoute(sourceStation,destinationStation){
    return axios.get(TRAIN_SEARCH_BYROUTE +'/'+ sourceStation+'/'+ destinationStation);
}

addTrain(trainDetails){
    return axios.post(TRAIN_ADD_TRAIN_URL ,trainDetails);
}

getTrainById({trainNo}){
    return axios.get(TRAIN_GET_TRAIN_BY_ID_URL + '/'+ {trainNo});
}

updateTrain(trainNo,TrainDetails){
    return axios.put(TRAIN_UPDATE_TRAIN_BY_ID_URL + '/'+ trainNo ,TrainDetails);
}

deleteTrain(trainNo){
    return axios.delete(TRAIN_DELETE_TRAIN_BY_ID_URL + '/' + trainNo);
}
getAllDetails(){
    return axios.get(TRAIN_SEARCHBYUSER_ALL_URL);
}
cancleticket(pnrNo,mailId){
    return axios.delete(CANCLE_TRAIN_TICKET ,pnrNo,mailId)
}

}
export default new SearchService();
