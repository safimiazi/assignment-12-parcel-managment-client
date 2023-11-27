import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const MyProfile = () => {
    const { user, userUpdate } = useAuth()
    // const [data, setData] = useState([])

    const axiosPublic = useAxiosPublic()
    const [selectedFile, setSelectedFile] = useState(null);

   



    const { isPending, data, error, refetch} = useQuery({
        queryKey: ['image'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/get-user')
            
            return res.data
        }
    })


    const filterData = data?.find(item=> item?.email === user?.email)




    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
      };

      const handleProfilePictureUpdate = async (e) => {
        e.preventDefault();
    
        if (!selectedFile) {
          console.error('No file selected.');
          return;
        }
    
        try {
         
          const formData = new FormData();
          formData.append('image', selectedFile);
    
          const response = await fetch(`${image_hosting_api}`, {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log('Image uploaded successfully:', result.data);
            const photoFile  = result?.data?.display_url;
           
            const updatedImage = {
                photo: result.data?.display_url
            }
            if(result.data){
               
                axiosPublic.patch(`/update-user-photo/${filterData._id}`, updatedImage )
                .then(res => {
                    console.log(res.data);
                    
                    if(res.data.modifiedCount){
                       
                        userUpdate(name, photoFile)
                        .then(result => {
                            refetch()
                            console.log(result?.user);
                            Swal.fire({
                                title: "Good job!",
                                text: "successfully image updated",
                                icon: "success"
                              });                            
                        })
                        .catch(error => {
                            console.log(error.message);
                        })
                       
                      
                       
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
            }   
          } else {
            console.error('Failed to upload image:', response.statusText);
          }
        } catch (error) {
          console.error('Error during image upload:', error.message);
        }
      };
    

  
    return (
       
                <div className="">
                    <div className="container mx-auto my-5 p-5">
                        <div className="md:flex no-wrap md:-mx-2 ">
                            <div className="w-full md:w-3/12 md:mx-2">
                                <div className="bg-white p-3 border-t-4 border-green-400">
                                    <div className="image overflow-hidden rounded-md">
                                        <img src={filterData?.photo} alt="" />
                                    </div>
                                    <form className="mt-3 flex" onSubmit={handleProfilePictureUpdate}>
                                        <input onChange={handleFileChange} type="file" name="image" className="" required />
                                        <input type="submit" required value="Upload" className=" text-white px-2 cursor-pointer rounded-sm bg-sky-600 hover:bg-sky-700" />
                                    </form>
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">User Name: {filterData?.name}</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6"> User Id: {filterData?.userId}</h3>

                                </div>
                                <div className="my-4"></div>
                            </div>
                            <div className="w-full md:w-9/12 mx-2 h-64">
                                <div className="bg-white p-3 shadow-sm rounded-sm">
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                        <span className="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">About</span>
                                    </div>

                                    {/* info */}
                                    <div>
                                        <div className="text-gray-700 ">
                                            <div className="grid md:grid-cols-2 text-sm">
                                                <div className="">
                                                    <div className="px-4 py-2 font-semibold">Name</div>
                                                    <div className="px-4 py-2">{filterData?.name}</div>
                                                </div>
                                                <div className="">
                                                    <div className="px-4 py-2 font-semibold">Email</div>
                                                    <div className="px-4 py-2">{filterData?.email}</div>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                                    <div className="px-4 py-2">{data?.gender ? data?.gender : 'N/A'}</div>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                    <div className="px-4 py-2">{data?.contactNumber ? data?.contactNumber : 'N/A'}</div>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                                    <div className="px-4 py-2">{data?.currentAddress ? data?.currentAddress : 'N/A'}</div>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="px-4 py-2 font-semibold">Permanent Address</div>
                                                    <div className="px-4 py-2">{data?.permanentAddress ? data?.permanentAddress : 'N/A'}</div>
                                                </div>
                                            </div>
                                            {/* <button onClick={() => setHideForm(!hideForm)}
                                                className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" >Edit Info</button> */}
                                        </div>
                                    </div>

                                    
                                </div>

                            </div>
                        </div>
                    
               </div>
            </div>
    );
};

export default MyProfile;