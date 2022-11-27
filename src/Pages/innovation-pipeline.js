import React from 'react';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import Vector3 from '../images/Vector-3.png';
import Vector4 from '../images/Vector-4.png';

const InnovationPipeline = () => {
  const sidebarlist = [
    {
      img: FluentPeople,
      title: 'Team',
      path: '/dashboard/team',
    },
    {
      img: OutlineWork,
      title: 'Challenges',
      path: '/challenges',
    },
    {
      img: Vector,
      title: 'Innovation Pipeline',
      path: '/innovation-pipeline',
    },
    {
      img: Vector1,
      title: 'Messages',
      path: '/dashboard/messages',
    },
    {
      img: Vector3,
      title: 'Admin Settings',
      path: '/dashboard/admin-settings',
    },
    {
      img: Vector4,
      title: 'Innovation Library',
      path: '/innovation-library',
    },
  ];

  return (
    <DashboardSidebar list={sidebarlist} isProfile={true}>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="border  border-secondary p-3 shadow rounded">
          Stay tuned... this feature is on the way
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default InnovationPipeline;
