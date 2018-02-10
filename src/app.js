import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { count: state.count + increment };

        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return { count: state.count - decrement };

        case 'RESET':
            return { count: 0 };

        case 'SET':
            return { count: action.set }

        default:
            return state;
    }
});


//para enterarse cuando cambia el store
const unsubscribe = store.subscribe(() => {
    console.log('state', store.getState());

});


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({ type: 'INCREMENT' });

// para parar la subscripcion
//unsubscribe();

store.dispatch({ type: 'INCREMENT' });
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10

});
store.dispatch({ type: 'RESET' });


store.dispatch({
    type: 'SET',
    set: 100
});