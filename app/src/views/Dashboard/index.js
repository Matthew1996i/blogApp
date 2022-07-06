import React from 'react';

import Sidebar from '../../components/Sidebar';
import Timeline from '../../components/Timeline';

import { SideBarArea, ContentArea, DashBoardContainer } from './styles';

export default function Dashboard() {
  return (
    <DashBoardContainer>
      <SideBarArea>
        <Sidebar userInfo={{ displayName: 'Matheus' }} />
      </SideBarArea>
      <ContentArea>
        <Timeline />
      </ContentArea>
    </DashBoardContainer>
  );
}
