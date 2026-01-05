import { DrawerKindEnum } from "../context-provider/drawer-context-provider";
import { ModalKindEnum } from "../context-provider/modal-context-provider";
import DestinationTargetDrawer from "./drawer/destination-target-drawer";
import DrawerWrapper from "./drawer/drawer-wrapper";
import AuthenticationModal from "./modal/authentication-modal";
import ModalWrapper from "./modal/modal-wrapper";
import NotifWrapper from "./notification/notif-wrapper";

export default function MainLayout(
    { children, needProtection = false }:
        { children: React.ReactNode, needProtection?: boolean }
) {

    console.log(needProtection);

    return (
        <div className="w-full min-h-screen">
            <div className="w-full min-h-screen">
                {children}
            </div>

            <NotifWrapper />

            <ModalWrapper
                listcontent={[
                    {name: ModalKindEnum.authentication, component: <AuthenticationModal />, outerClose: true}
                ]}
            />
            
            <DrawerWrapper
                listcontent={[
                    { name: DrawerKindEnum.destination, component: <DestinationTargetDrawer /> }
                ]}
            />
        </div>
    );
}
