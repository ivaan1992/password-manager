import RootLayout from "@/app/layout";


export default function Login() {
    return (
            <div className="w-full h-auto flex flex-col justify-start items-start">
                <h1 className="w-full text-[#33273A] text-xl text-center font-bold">Who are you again?</h1>
                <div className="flex flex-col mt-20 w-full">
                    <div className="relative mb-8">
                        <input type="email" placeholder="Email" className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:border-[#33273A] peer" />
                        <label className="absolute text-lg text-gray-500 transform -translate-y-4 scale-75 top-0 left-4 z-10 origin-[0] bg-[#EAD1D1] px-2">Email</label>
                    </div>
                    <div className="relative">
                        <input type="password" placeholder="Password" className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:border-[#33273A] peer" />
                        <label className="absolute text-lg text-gray-500 transform -translate-y-4 scale-75 top-0 left-4 z-10 origin-[0] bg-[#EAD1D1] px-2">Password</label>
                    </div>
                    <div className="mt-12">
                        <button className="w-2/5 h-12 bg-[#33273A]">
                            Login
                        </button>
                    </div>
                </div>
            </div>
    )
}
