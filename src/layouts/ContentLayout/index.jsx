const ContentLayout = ({ children }) => {
  return (
    <section className="h-[70vh] w-full overflow-auto scrollbar-hide ">
      {children}
    </section>
  );
};

export default ContentLayout;
