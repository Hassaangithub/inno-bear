import React from 'react';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import Vector3 from '../images/Vector-3.png';
import Vector4 from '../images/Vector-4.png';
import TopContent from '../components/UserDashboard/TopContent';
import Ellipse3 from '../images/Ellipse-3.png';
import Footer from '../components/Footer';
import MessageBody from '../components/Messages';

const Messages = () => {
  return (
    <>
      <DashboardSidebar
        list={[
          {
            img: FluentPeople,
            title: 'Team',
            path: '/team',
          },
          {
            img: OutlineWork,
            title: 'Challenges',
            path: '/challenges',
          },
          {
            img: Vector,
            title: 'Innovation Pipiline',
            path: '/innovation-pipiline',
          },
          {
            img: Vector1,
            title: 'Messages',
            path: '/dashboard/messages',
          },
          {
            img: Vector3,
            title: 'Admin Settings',
            path: '/admin-settings',
          },
          {
            img: Vector4,
            title: 'Innovation Library',
            path: '/innovation-library',
          },
        ]}
        footer={true}>
        <MessageBody />
      </DashboardSidebar>
      {/* <Footer /> */}
    </>
  );
};

export default Messages;
