/* eslint-disable react-hooks/rules-of-hooks */
import PrematureMainLayout from "@/components/admin/premature-layout";
import { useFetchEduData } from "@/hooks/connection-hook/public-connection";
import { useParams } from "react-router-dom";

export default function AdminEditEduScreen() {
  const { id } = useParams();
  if (!id) return;

  const { eduData, loading, error, message } = useFetchEduData(id);

  console.log(eduData);

  if (loading) return <div>{loading}</div>
  if (error) return <div>{error}{message}</div>

  return (
    <PrematureMainLayout>
      <div className="min-h-screen w-full p-10 py-24">
        {/* card section */}
        <div className="space-y-4">
          <h1 className="text-xl">Card Overview</h1>
          <div></div>
        </div>
        {/* card section */}

        {/* content section */}
        <div className="space-y-4">
          <h1 className="text-xl">Content Overview</h1>
          <div className="bg-white border border-gray-300 rounded-md p-8">
            <div></div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        {/* content section */}

      </div>
    </PrematureMainLayout>
  );
}
