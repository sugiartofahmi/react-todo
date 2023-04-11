const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-screen   items-center justify-center  bg-gradient-to-r from-green-400 to-blue-500 ">
      {children}
    </main>
  );
};
export default MainLayout;
