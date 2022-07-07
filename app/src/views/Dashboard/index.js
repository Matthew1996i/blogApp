import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import Sidebar from '../../components/Sidebar';
import Timeline from '../../components/Timeline';
import ModalPublications from '../../components/ModalPublications';

import { SideBarArea, ContentArea, DashBoardContainer, ActionPublication } from './styles';

export default function Dashboard() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <DashBoardContainer>
      <SideBarArea>
        <Sidebar />
      </SideBarArea>
      <ContentArea>
        <ModalPublications showModal={show} setShow={setShow} />
        <Timeline />
        <ActionPublication>
          <Button variant="info" onClick={handleShow}>
            Criar uma postagem
          </Button>
        </ActionPublication>
      </ContentArea>
    </DashBoardContainer>
  );
}
