import {Subject} from 'rxjs';

const keySubscriber = new Subject('');
const keyService = {
    setKey: function(value) {
        keySubscriber.next(value);
    },
};
const authSubscriber = new Subject(false);
const authService = {
    setAuth: function(value) {
        authSubscriber.next(value);
    }
}

const showMoreSubscriber = new Subject(false);
const showMoreService = {
    setShowMore: function(value) {
        showMoreSubscriber.next(value);
    }
}

export {
    keyService,
    keySubscriber,
    authSubscriber,
    authService,
    showMoreSubscriber,
    showMoreService
}