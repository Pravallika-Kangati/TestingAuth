import React from 'react';
import { shallow } from 'enzyme';
import AuthComponent from './auth-component/AuthComponent';

describe('Login component tests', ()=>{


        test('username check', ()=>
        {
            const wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="text"]').simulate('change',{target: {name: 'username', value: 'ProjectNile'}});


            expect(wrapper.state('username')).toEqual('ProjectNile');
        });

        test('password check', ()=>
        {
            const wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'NilePwd2020'}});

            expect(wrapper.state('password')).toEqual('NilePwd2020');
        });


        test('login check with Correct Credentials', ()=>
        {
            const wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="text"]').simulate('change',{target: {name: 'username', value: 'ProjectNile'}});


            wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'NilePwd2020'}});

            wrapper.find('input[type="button"]').simulate('click',{target:{name: 'button'}});

            expect(wrapper.state('isLoggedIn')).toBe(true);

        });


        test('login check with InCorrect Credentials', ()=>
        {
            const jsdomAlert = window.alert;  // remember the jsdom alert
            window.alert = () => {};  // provide an empty implementation for window.alert
            const wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="text"]').simulate('change',{target: {name: 'username', value: 'ProjectNile'}});


            wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'NilePwd20201'}});

            wrapper.find('input[type="button"]').simulate('click',{target:{name: 'button'}});

            expect(wrapper.state('isLoggedIn')).toBe(false);
            window.alert = jsdomAlert;
        });


})
