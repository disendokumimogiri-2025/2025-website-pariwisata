export default function LoadContent({ message = "Mohon tunggu sebentar" }: { message?: string }) {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
            
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-white/30 border-t-black rounded-full animate-spin" />

            {/* Message */}
            <p className="text-sm font-medium animate-pulse">
                {message}
            </p>

        </div>
    );
}
