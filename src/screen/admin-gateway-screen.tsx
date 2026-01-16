import { Eye } from "lucide-react";

export default function AdminGatewayScreen() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[90vw] h-fit sm:w-[80vw] md:w-[50vw] xl:w-[30vw] border border-gray-300 rounded-md p-5">
                <h1 className="text-xl text-center pb-10">Login Admin</h1>
                <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-1">
                        <label>username</label>
                        <input
                            type="text" name="username" placeholder="admin username"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label>password</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="password" name="username" placeholder="admin password"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <button className="border border-gray-300 rounded-md p-2 bg-gray-200 cursor-pointer">
                                <Eye />
                            </button>
                        </div>
                    </div>
                </div>

                <button className="my-8 p-2 w-full rounded-md bg-black text-white text-center cursor-pointer hover:bg-black/90">Login</button>

                <p className="text-gray-500 text-[8px] md:text-[10px] w-full text-justify">
                    Jika adalah admin jangan sampai username dan password anda diketahui oleh orang yang tidak berwewenang
                </p>
            </div>
        </div>
    );
}
