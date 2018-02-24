import { login, logout } from '../../actions/auth';
 

test('should generate login action object', () => {
    const action = login('uid');

    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'uid'
    });
});

test('should generate logou action object', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});