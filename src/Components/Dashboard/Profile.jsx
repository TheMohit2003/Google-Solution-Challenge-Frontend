import React from 'react';

const Profile = () => {
    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                    <img
                        src="https://placekitten.com/200/200" // Replace with your profile image URL
                        alt="Profile"
                        className="rounded-full w-20 h-20 mx-auto mb-4"
                    />
                    <h2 className="text-xl font-bold text-gray-800">John Frusciante</h2>
                    <p className="text-sm text-gray-500">Guitarist</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="font-medium text-gray-700">Title:</span> Mr
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Salary:</span> $1,000,000+
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Occupation:</span> Guitarist
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800">Bio</h3>
                <p className="text-gray-700 mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit
                    nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam
                    soluta architecto?
                </p>
            </div>
        </div>
    );
};

export default Profile;
