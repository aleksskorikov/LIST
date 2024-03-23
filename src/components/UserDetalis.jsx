import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Foto from '../assets/2.png';

const UserDetails = ({ users }) => {
    const { userId } = useParams();
    const user = users.find(user => user.id === parseInt(userId));

    if (!user) {
        return <div>User details not available</div>;
    }

    return (
        <div className='conteiner'>
            <div className="details__block">
                <h2 className="details__block-title">wanted</h2>
                <div className="details__block-block">
                    <img src={Foto} alt="" className='block__discription-img' />
                    <div className="details__block-discription">
                        <p className='block__discription-name'>{user.name}</p>
                        <p className='block__discription-mail'>Email: <span className='description'>{user.email}</span></p>
                        <p className='block__discription-phon'>Phone: <span className='description'>{user.phone}</span></p>
                        <p className='block__discription-site'>Website: <span className='description'>{user.website}</span></p>
                        {user.address && (
                            <p className='block__discription-address'>Address: <span className='description'>{user.address.street}, {user.address.city}, {user.address.zipcode}</span> </p>
                        )}
                    </div>
                </div>
                <p className="details__block-text">Он же "ОКОРОК", он же "ОДНОНОГИЙ". Самый страшный пират, но удачно претворяется добрым. Характер скверный, не женат. </p>
                <Link to="/" className='details__block-btn'>Back to List</Link>
            </div>
        </div>
    );
};

export default UserDetails;




