import axios from 'axios';
import {put,call, takeEvery,takeLatest} from 'redux-saga/effects';
import UserList from '../Components/UserList';
import { getUserSuccess } from '../features/userSlice';



function* workGetUserFetch(action) {
     let userId = action.payload;
    let {data} = yield axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
        headers: {
          'content-type': 'application/json',
          'app-id':'62066a2f508e80d232ca6a72'
        }});

    yield put(getUserSuccess(data));
}




function* userSaga(){
    console.log("USer saga reached ");
    yield takeLatest("user/getUserFetch", workGetUserFetch);
}

export default userSaga;