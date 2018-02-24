import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = { type: 'LOGIN', uid: 'uid' };

    const state = authReducer({}, action);

    expect(state).toEqual({ uid: 'uid'});
});

test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };

    const state = authReducer({}, action);

    expect(state).toEqual({ });
});