import React from 'react';
import { ArrowRight, ChevronsDown, ChevronsUp, X } from 'lucide-react';
import { DrawerContext, DrawerKindEnum } from '../../context-provider/drawer-context-provider';

export interface DrawerWrapperInterface {
    name: DrawerKindEnum;
    component: React.ReactNode;
}

export default function DrawerWrapper({ listcontent }: { listcontent: DrawerWrapperInterface[] }) {
    const { drawerKind, setDrawerKind } = React.useContext(DrawerContext);
    const [isFullScreen, setIsFullScreen] = React.useState(false);

    return (
        <div className={`
            ${drawerKind === null ? 'opacity-0 pointer-events-none'
                    : 'opacity-100'
                }
            fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out
        `}>
            <div className='h-screen w-screen flex justify-center items-end'>
                <div
                    className={`border border-t bg-white border-gray-300 w-full p-5 rounded-t-2xl shadow-2xl transform transition-all duration-500 ease-in-out
                    ${isFullScreen ? 'h-screen rounded-t-none' : 'md:h-[30vw] h-[50vw]'}
                    ${drawerKind ? 'translate-y-0' : 'translate-y-full'}
                    `}
                >
                    <div className="w-full flex items-center justify-end space-x-3">
                        <div className="p-2 rounded-md hover:bg-gray-200 border border-gray-300 cursor-pointer transition">
                            <ArrowRight width={15} height={15} />
                        </div>
                        <div
                            onClick={() => setIsFullScreen(!isFullScreen)}
                            className="p-2 rounded-md hover:bg-gray-200 border border-gray-300 cursor-pointer transition"
                        >
                            {isFullScreen ? <ChevronsDown width={15} height={15} /> : <ChevronsUp width={15} height={15} />}
                        </div>
                        <div
                            onClick={() => { setDrawerKind(null) }}
                            className="p-2 rounded-md hover:bg-red-500 border border-gray-300 hover:text-white cursor-pointer transition"
                        >
                            <X width={15} height={15} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full transition-all duration-500 ease-in-out">
                        {listcontent.find(c => c.name === drawerKind)?.component}
                    </div>
                </div>
            </div>
        </div>
    );
}
