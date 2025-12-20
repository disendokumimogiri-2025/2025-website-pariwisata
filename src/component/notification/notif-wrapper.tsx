import React from "react";
import { NotificationContext, NotificationKindEnum } from "../../context-provider/notification-context-provider";
import { Check, X, Timer, Info } from 'lucide-react'

export default function NotifWrapper() {
    const { current, closeNotif } = React.useContext(NotificationContext);

    if (!current) return null;

    const kind = current.notifiKind ?? NotificationKindEnum.default;

    // simple styling using tailwind; sesuaikan bila perlu
    const baseStyle = "fixed z-200 right-4 bottom-6 max-w-sm w-full shadow-lg rounded-2xl p-4 flex items-start gap-3 transition-transform transform";
    const kindStyle = {
        [NotificationKindEnum.success]: "bg-green-50 border border-green-200",
        [NotificationKindEnum.failed]: "bg-red-50 border border-red-200",
        [NotificationKindEnum.pending]: "bg-yellow-50 border border-yellow-200",
        [NotificationKindEnum.default]: "bg-white border border-gray-200",
    }[kind];

    const icon = {
        [NotificationKindEnum.success]: <Check />,
        [NotificationKindEnum.failed]: <X />,
        [NotificationKindEnum.pending]: <Timer />,
        [NotificationKindEnum.default]: <Info />,
    }[kind];

    return (
        <div className={`${baseStyle} ${kindStyle}`} role="status" aria-live="polite" aria-atomic="true">
            <div className="shrink-0 text-xl leading-none pt-1">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold">
                    {icon}
                </div>
            </div>

            <div className="flex-1 min-w-0">
                {current.title && <p className="text-sm font-semibold truncate">{current.title}</p>}
                {current.message && <p className="text-sm text-gray-700 mt-1">{current.message}</p>}

                {current.custaction?.component && (
                    <div className="mt-2">
                        {current.custaction.component}
                    </div>
                )}
            </div>

            <div className="ml-3 flex items-start">
                <button
                    onClick={closeNotif}
                    aria-label="Close notification"
                    className="text-sm font-medium px-2 py-1 rounded hover:bg-gray-100"
                >
                    close
                </button>
            </div>
        </div>
    );
}
