import LoadContent from "@/components/admin/load-content";
import MainLayout from "@/components/main-layout";
import EducationCard from "@/components/public/education/education-card";
import { useFetchMarketPlaceData } from "@/hooks/connection-hook/public-connection";


export default function EducationScreen() {

  const { data, loading } = useFetchMarketPlaceData();
  if (loading) return <LoadContent />

  const educationdata = data?.educations;

  return (
    <MainLayout>
      <div className="min-h-screen pt-[35vw] sm:pt-[24vw] md:pt-[12vw] lg:pt-[8vw] pb-20">
        <h1 className="font-comfortaa text-3xl text-center">Penelitian dan Riset</h1>

        <div className="py-20 px-10">
          {educationdata?.map((d, idx) => (
            <EducationCard key={idx} d={d} isLeft={idx % 2 === 0} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
