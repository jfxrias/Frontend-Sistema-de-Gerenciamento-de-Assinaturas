import { useEffect, useState } from "react";
import { GoDeviceCameraVideo } from "react-icons/go";
import PageContainer from "../../AppContainers/PageContainer";
import HeaderPageComponent from "../../AppContainers/PageHeaderContainer";
import ContentPageContainer from "../../AppContainers/PageContentContainer";
import { VideoCarousel } from "../../components/VideoCarousel";
import { VideoCarousel2 } from "../../components/VideoCarousel2";
import { VideoCarousel3 } from "../../components/VideoCarousel3";

export function Dashboard() {
  const [assinaturaId, setAssinaturaId] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("assinaturaId");
    setAssinaturaId(id ?? "");
  }, []);

  return (
    <PageContainer>
      <HeaderPageComponent title="Videos" icon={<GoDeviceCameraVideo />} />
      <ContentPageContainer>
        
        <VideoCarousel />

        {/* assinatura 2 e 3 */}
        {(assinaturaId === "660e8400-e29b-41d4-a716-446655440001" || assinaturaId === "770e8400-e29b-41d4-a716-446655440002") && (
          <VideoCarousel2 />
        )}

        {/* só a assinatura 3 */}
        {assinaturaId === "770e8400-e29b-41d4-a716-446655440002" && (
          <VideoCarousel3 />
        )}

      </ContentPageContainer>
    </PageContainer>
  );
}

export default Dashboard;