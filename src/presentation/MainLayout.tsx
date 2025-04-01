import { Outlet,useLocation} from "react-router-dom";
import Sidebar from "./component/sidebar";
import { defaultSidebarItems, sidebarConfig } from "../config/SidebarConfig";
import Breadcrumb from "./component/breadcum";
import { BreadcrumbConfig, defaultBreadcrumbItems } from "../config/BreadcumConfig";
const MainLayout = () => {
  const location = useLocation();
  const sidebarItems = sidebarConfig[location.pathname] || defaultSidebarItems;
  const breadcrumbItem = BreadcrumbConfig[location.pathname] || defaultBreadcrumbItems;

  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} />
      <div className="flex flex-col flex-grow">
        <main className="relative flex-grow bg-mainContainer px-16 py-8">
          <Breadcrumb items={breadcrumbItem}/>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;