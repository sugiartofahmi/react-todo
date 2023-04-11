const ContentLayout = ({ children }) => {
  return (
    <section className="h-[70vh] w-full overflow-auto scrollbar-hide mt-3 ">
      {children}
    </section>
  );
};

export default ContentLayout;
