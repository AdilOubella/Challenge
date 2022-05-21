import axios from 'axios';
import {put,call, takeEvery,takeLatest} from 'redux-saga/effects';
import UserList from '../Components/UserList';
import { getUsersSuccess } from '../features/userSlice';



function* workGetUsersFetch(action) {
     console.log('check the page =>',  );
    let {data} = yield axios.get(`https://dummyapi.io/data/v1/user?page=${action.payload}&limit=20`, {
        headers: {
          'content-type': 'application/json',
          'app-id':'62066a2f508e80d232ca6a72'
        }});

    yield put(getUsersSuccess(data.data));
}




function* usersSaga(){
    console.log("Did this reac")
    yield takeLatest("user/getUsersFetch", workGetUsersFetch);
}

export default usersSaga;