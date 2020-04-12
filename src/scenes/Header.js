import React from 'react';
import { Moon, Sun } from 'react-bootstrap-icons';

import Icon from '../utils/virusIcon';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
    const themeState = useTheme();

    return (
        <nav 
            className={`navbar navbar-expand-lg navbar-${themeState.dark ? 'dark' : 'light'} ${themeState.dark && 'bg-dark'} py-3`}
            style={{ ...!themeState.dark && { backgroundColor: '#DCDCDC' } }}
        >
            <div className='d-flex justify-content-start align-items-center'>
                <div className='mr-2'>
                    <Icon color={themeState.dark ? 'white' : 'black'} />
                </div>
                <h4 className='m-0'>COVID-19 Statistic</h4>
            </div>
            <form className='form-inline ml-auto' title={themeState.dark ? 'Activate light mode' : 'Activate dark mode'}>
                {
                    themeState.dark ?
                        <span
                            className='cursor-pointer'
                            onClick={() => themeState.toggle()}
                        >
                            <Sun size={20} />
                        </span>
                        :
                        <span
                            className='cursor-pointer'
                            onClick={() => themeState.toggle()}
                        >
                            <Moon size={20} />
                        </span>
                }
            </form>
        </nav>
    );
};

export default Header;