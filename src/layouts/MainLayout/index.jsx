const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-screen  items-center justify-center  ">
      {children}
    </main>
  );
};
export default MainLayout;
