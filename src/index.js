import { createStore } from 'redux';
import reducer from './reducers';
import { comments as comment } from './actions';

const store = createStore(reducer);

store.subscribe(() => console.log('New State!\n', store.getState()));

store.dispatch(comment.add('Nowy komentarz.'));