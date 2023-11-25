import React from 'react';
import useAuth from '../../Hooks/useAuth';

const MyProfile = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/271039541_634184258006717_5733073093383298104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETTsDDvINztaM8Ch9Sx_XQtSHX7uwGVDy1Idfu7AZUPNnfR5YqInafic9QsgOmkrrNNCvTxAr7B0L82o8lUm00&_nc_ohc=HqCCDswbP1UAX-IIrqT&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDiIeAOOm5aGip6_4I-pSxdRrb_hXBnqPj0_94FZgRniA&oe=65657586" className="w-40 rounded-lg shadow-2xl" />
                    <div className='flex-1'>
                        <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;