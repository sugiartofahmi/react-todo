const BaseLayout = ({ children }) => {
  return (
    <section className="bg-[#171926] text-base font-bold font-sans flex flex-col w-[90%] md:w-[40%] h-[90vh] justify-center items-center px-5 py-8 gap-y-5 rounded-lg text-white">
      {children}
    </section>
  );
};

export default BaseLayout;
