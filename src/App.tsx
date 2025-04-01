import AppRoutes from "./routes/routes";
import Header from "./presentation/component/header";
import Footer from "./presentation/component/footer";
import Sidebar from "./presentation/component/sidebar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-mainContainer">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
