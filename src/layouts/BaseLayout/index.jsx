const BaseLayout = ({ children }) => {
  return (
    <section className="bg-red-200 flex flex-col w-[90%] md:w-[40%] min-h-[80vh] justify-center items-center px-5 py-8 gap-y-5 ">
      {children}
    </section>
  );
};

export default BaseLayout;
