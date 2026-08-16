import React from "react";
import { DiReact } from "react-icons/di";
import PageContainer from "../../T2MContainers/PageContainer";
import HeaderPageComponent from "../../T2MContainers/PageHeaderContainer";
import ContentPageContainer from "../../T2MContainers/PageContentContainer";

export function Profile() {
  return (
        <PageContainer>
      <HeaderPageComponent title="Exemplo" icon={<DiReact />} />
      <ContentPageContainer></ContentPageContainer>
    </PageContainer>
  );
}

export default Profile;
