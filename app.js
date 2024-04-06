import * as React from 'react';
import { Provider } from "react-redux";

import Auth from "./auth"
import store from "./src/redux/store/store"
import DrawerNavigator from './src/routes/DrawerNavigator';

function Root() {
    return (<DrawerNavigator/>);
}

export default function App(){
    return (
        <Provider store={store}>
            <Auth/>
        </Provider>
    )
};