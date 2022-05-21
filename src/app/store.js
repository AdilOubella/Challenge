import { configureStore , applyMiddleware, MiddlewareArray} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import userReducer from "../features/userSlice";
import usersSaga from "../saga/usersSaga";
import rootSaga from "../saga/root";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
    reducer:{usersData:userReducer},
    middleware:[sagaMiddleware]
}
)

sagaMiddleware.run(rootSaga);




export default store;