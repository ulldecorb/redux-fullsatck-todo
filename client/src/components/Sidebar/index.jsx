import React from 'react';
import './sidebar.css';

export const Sidebar = function Sidebar() {
  const handleCloseSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.right = '-13vw';
  };

  const handleOpenSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.right = '0vw';
  };

  return (
    <section className="sidebar" id="sidebar">
      <button type="button" onClick={handleOpenSidebar} className="sidebar__open-button">OPEN</button>
      <button type="button" onClick={handleCloseSidebar} className="sidebar__close-button">CLOSE</button>
    </section>
  );
};

export default Sidebar;
