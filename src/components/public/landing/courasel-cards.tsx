import defaultHeroBackground from '@/assets/default-hero-background.jpg'


export function GalleryCard() {
    return (
        <div className="w-full aspect-3/4 relative">
            <img
                src={defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
        </div>
    );
}

export function PaketWisataCard() {
    return (
        <div className="w-full aspect-4/5 xl:aspect-5/4 relative">
            <img
                src={defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
        </div>
    );
}

export function EdukasiPublikasiCard() {
    return (
        <div className="w-full aspect-3/4 xl:aspect-3/2 relative">
            <img
                src={defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
        </div>
    );
}

export function SouvenirCard() {
    return (
        <div className="w-full aspect-3/4 xl:aspect-3/2 relative">
            <img
                src={defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
        </div>
    );
}
