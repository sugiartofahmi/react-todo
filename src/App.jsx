import MainLayout from "./layouts/MainLayout";
import BaseLayout from "./layouts/BaseLayout";
import ContentLayout from "./layouts/ContentLayout";
const App = () => {
  return (
    <MainLayout>
      <BaseLayout>
        <section className="flex flex-row items-center justify-between w-full">
          <input className="flex items-center" type="text" />
          <button className="md:block ">Submit</button>
        </section>
        <section className="flex flex-col w-full gap-y-2">
          <h1 className="self-start">To Do List</h1>
          <ContentLayout>
            <ul className="list-decimal pl-7">
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li> <li>test</li> <li>test</li> <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li> <li>test</li> <li>test</li> <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li> <li>test</li> <li>test</li> <li>test</li>
            </ul>
          </ContentLayout>
        </section>
      </BaseLayout>
    </MainLayout>
  );
};

export default App;
