const Sidebar = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '260px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
        border: '1px solid #010101',
        position: 'absolute',
        top: '0',
      }}
    >
      <p>Dashboard 1</p>
      <p>Dashboard 2</p>
    </div>
  );
};

export default Sidebar;
