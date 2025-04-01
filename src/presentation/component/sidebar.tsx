import { useTranslation } from 'react-i18next';

type SidebarItem = {
    title : string;
    icon: string;
    label: string;
    onClick?: () => void; 
  };

const Sidebar = ({ items }: { items: SidebarItem[] }) => {
    const { t } = useTranslation();
    return (
        <div className="class min-w-[20%] p-[20px] space-y-2 bg-white shadow-[0_0px_0_0px_rgba(1,41,112,0.1)]">
            {items.map((item, index) => (
                <div className='flex flex-col gap-2'key={index}>
                    <div className='text-[#899BBD] text-[11px]'>{item.title}</div>
                    <button 
                        key={index} 
                        className="flex items-center gap-2 w-full text-left px-2 text-[15px]"
                        onClick={item.onClick}
                    >
                        <img src={item.icon} alt={item.label} />
                        <span>{t(item.label)}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
