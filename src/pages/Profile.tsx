import useUser from "../hooks/useUser"

export default function Profile () {
    const {user} = useUser();

    return (
        <>
        <div id="profile" className="space-y-3">
            <img
            src={user.image}
            alt={user.username}
            className="w-10 md:w-16 rounded-full mx-auto bg-white"
            />
            <div>
            <h2
                className="font-medium text-xs md:text-sm text-center text-teal-500"
            >
                {user.username}
            </h2>
            <p className="text-xs text-gray-500 text-center">General User</p>
            </div>
        </div>
        <div className="mt-6 bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">{user.firstName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">{user.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">{user.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Current Address</div>
                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Permanant Address</div>
                        <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                            <a className="text-blue-800" href="mailto:jane@example.com" target="_blank">{user.email}</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">Feb 06, 1998</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}