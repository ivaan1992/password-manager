
import Image from "next/image";

export default function SignIn() {
    const imageUrl = "/assets/candado.png"
    return (
            <div className="w-full h-80 flex justify-center items-center font-mono text-sm lg:flex">
                <div className="px-4 py-4 flex h-svh flex-col items-center justify between bg-[#EAD1D1]">
                    <div className="flex flex-col w-96 px-4 py-4 bg-[#33273A] rounded-lg mt-2">
                        <div className="w-auto flex justify-start items-center">
                            <Image src={imageUrl} width={150} height={150} alt={"login-icon"}/>
                            <h2 className="text-[10rem]">PM</h2>
                        </div>
                        <div className="flex">
                            <p>Password Manager</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-black">
                        <h3>WELCOME BACK</h3>
                        <p>
                            Let me guess... <br/>
                            Did you forget your password again?
                        </p>
                    </div>
                    <div className="flex">
                        
                    </div>
                    {/* <div className="flex">
                        <form className="flex flex-col w-full p-4">
                            <label className="text-white">Usuario</label>
                            <input type="text" className="p-2 mb-4 bg-gray-800 text-white"/>
                            <label className="text-white">Contraseña</label>
                            <input type="password" className="p-2 mb-4 bg-gray-800 text-white"/>
                            <button className="bg-blue-500 text-white p-2">Iniciar sesión</button>
                        </form>
                    </div> */}
                </div>
            </div>
    );
}