/* eslint-disable react-hooks/exhaustive-deps */
import LoadContent from "@/components/admin/load-content";
import { LoginForm } from "@/components/login-form";
import { AdminCreateEditContext } from "@/context-provider/context-provider-type";
import { useGetMeSessionStatus } from "@/hooks/connection-hook/admin-login-connection";
import React from "react";

export default function AdminLoginScreen() {
    const { loading, getMe, allowed } = useGetMeSessionStatus();
    const { jwtToken } = React.useContext(AdminCreateEditContext);

    React.useEffect(() => {
        if (!jwtToken) return;

        getMe({ token: jwtToken });
    }, [jwtToken]);

    React.useEffect(() => {
        if (allowed) {
            window.location.href = "/admin/dashboard";
        }
    }, [allowed]);


    if (loading) return <LoadContent />


    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <LoginForm />
            </div>
        </div>
    );
}
