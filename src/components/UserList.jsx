import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useUserData from './CustomHooks/useUserData';
import usePagination from './CustomHooks/usePagination';
import UserDetails from './UserDetalis';
import Zvezda from '../assets/zvezda.jpg';

const UserList = () => {
    const { users, loading, error } = useUserData();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showAllUsers, setShowAllUsers] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const itemsPerPage = 10;

    const handleShowAllUsers = () => {
        setSearchQuery('');
        setCurrentPage(1);
        setShowAllUsers(true);
        setSelectedUser(null);
    };

    const handleSearchChange = event => {
        const value = event.target.value;
        setSearchQuery(value);
        setShowAllUsers(false);
    };

    const handleSearchSubmit = event => {
        event.preventDefault();
        setCurrentPage(1);
        setSelectedUser(null);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const filteredUsers = showAllUsers ? users : users.filter(user => user.name.toLowerCase().startsWith(searchQuery.toLowerCase()));

    const { currentPageData } = usePagination(filteredUsers, currentPage, itemsPerPage);

    const renderUsers = () => {
        if (loading) {
            return <p>Загрузка...</p>;
        }
        if (error) {
            return <p>Ошибка: {error}</p>;
        }
        if (filteredUsers.length === 0) {
            return <p className='is-not-wanted'>Such a person is not wanted</p>;
        }
        return (
                <div className="block">
                    <ul className='block__lists'>
                        {currentPageData.map(user => (
                        <li key={user.id} onClick={() => handleUserClick(user)} className='block__lists-list'>
                                <Link to={`/user-details/${user.id}`} className='block__lists-linc'>
                                    <div className='block__list-block'><p className='block__lists-name'> Nane: <span className='name'>{user.name}</span></p></div>
                                    <div className='block__list-block'>
                                        <p className='block__lists-mail'>E-mail: <span className='mail'>{user.email}</span></p> 
                                        <p className='block__lists-city'>City: <span className='city'>{user.address.city}</span></p>
                                    </div>
                                    
                                </Link>
                        </li>
                        ))}
                    </ul>
                </div>
        );
    };

    return (
        <div className='conteiner'>
            <div className='header'>
                <div className="header__logo">
                    <img src={Zvezda} alt="zvezde" className="header__logo-img"/>
                </div>
                <h1 className='header__title'>wanted</h1>
                <form onSubmit={handleSearchSubmit} className='header__search-form'>
                    <input
                        type="text"
                        placeholder="search by name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className='header__search-input'
                    />
                    <button type="submit" className='header__search-btn'>Search</button>
                </form>
                <button onClick={handleShowAllUsers} className='header__btn'>Show everyone</button>
            </div>
            {(showAllUsers || searchQuery !== '') && renderUsers()}
            {selectedUser && <UserDetails user={selectedUser} />} 
        </div>
    );
};

export default UserList;






















