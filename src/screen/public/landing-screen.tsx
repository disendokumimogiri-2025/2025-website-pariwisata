import MainLayout from "@/components/main-layout"
import { AboutSection, EducationSection, HeroSection, SouvenirSection, WisataKulinerSection } from "@/components/public/landing/landing-sections";
import { useFetchLandingData } from "@/hooks/connection-hook/public-connection";

export default function LandingScreen() {

    const { data, blogdata, edudata, souvenirdata, error, loading } = useFetchLandingData();

    if (loading) return <div>loading</div>
    if (error) return <div>error</div>

    return (
        <MainLayout>
            {/* hero section */}
            <HeroSection
                herodata={{
                    heroabstract: data?.heroabstract ?? 'Laboris do magna cupidatat excepteur do dolore anim pariatur irure duis eu.',
                    herosubtitle: data?.herosubtitle ?? 'Lorem qui amet amet amet.',
                    herotitle: data?.herotitle ?? 'Lumbung Mataraman Sriharjo',
                    heroimageplaceholder: data?.heroimageplaceholder
                }}
            />

            {/* paket wisata dan kuliner section */}
            <AboutSection
                aboutdata={{
                    abouttitle: data?.abouttitle ?? 'Lumbung Mataraman',
                    aboutabstract: data?.aboutabstract ?? "Voluptate eiusmod culpa aliquip aliqua eiusmod consequat ea. Quis reprehenderit dolore mollit enim fugiat id sit nulla deserunt. Esse duis veniam consequat Lorem dolor do esse adipisicing sit. Aliqua qui ea nulla aliqua pariatur."
                }}
            />

            {/* paket wisata dan kuliner section */}
            <WisataKulinerSection
                blogdatas={blogdata ?? []}
                wisatadata={{
                    paketwisataabstract: data?.paketwisataabstract ?? "Voluptate eiusmod culpa aliquip aliqua eiusmod consequat ea. Quis reprehenderit dolore mollit enim fugiat id sit nulla deserunt. Esse duis veniam consequat Lorem dolor do esse adipisicing sit. Aliqua qui ea nulla aliqua pariatur."
                }}
            />

            {/* edukasi section */}
            <EducationSection
                edudatas={edudata ?? []}
                edudata={{
                    educationtitle: data?.educationtitle ?? "Riset Edukasi dan Publikasi"
                }}
            />

            {/* souvenir section */}
            <SouvenirSection
                souvenridata={{ souvenirtitle: data?.souvenirtitle ?? "Souvenir Lumbung Mataraman" }}
                data={souvenirdata ?? []}
            />

        </MainLayout>
    );
}
