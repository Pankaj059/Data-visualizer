const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-purple-100">
      <div className="flex-1">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
