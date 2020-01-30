import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux_counter_reducer';
import Counter from './redux_Counter';

const store = createStore(reducer);
const main = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Counter/>
        </Provider>,
        document.getElementById("root")
    )
}
store.subscribe(() => {
    console.log(store.getState());
})

export default main;