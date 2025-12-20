import React from "react";
import MainLayout from "../component/main-layout"
import { ModalContext, ModalKindEnum } from "../context-provider/modal-context-provider";
import { NotificationContext, NotificationKindEnum } from "../context-provider/notification-context-provider";
import { DrawerContext, DrawerKindEnum } from "../context-provider/drawer-context-provider";
import { useNavigate } from "react-router-dom";

export default function LandingScreen() {
  const { setModalKind } = React.useContext(ModalContext)
  const { callNotif } = React.useContext(NotificationContext)
  const { setDrawerKind } = React.useContext(DrawerContext)

  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="w-full h-screen flex justify-center items-center space-x-10">
        <div className="p-2 border border-gray-300 rounded-md cursor-pointer" onClick={() => { setDrawerKind(DrawerKindEnum.destination) }}>Open Drawer</div>
        <div
          className="p-2 border border-gray-300 rounded-md cursor-pointer"
          onClick={() => {
            callNotif({
              notifiKind: NotificationKindEnum.failed,
              title: "test"
            })
          }}
        >
          Open Notification
        </div>
        <div
          className="p-2 border border-gray-300 rounded-md cursor-pointer"
          onClick={() => setModalKind(ModalKindEnum.authentication)}
        >
          Open Modal
        </div>
        <div
          className="p-2 border border-gray-300 rounded-md cursor-pointer"
          onClick={() => navigate("/destinations")}
        >
          Navigate to /destinations
        </div>
      </div>
    </MainLayout>
  );
}
