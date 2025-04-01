import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
    title : string;
    paths: { path: string; link: string }[];
  };

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
    const { t } = useTranslation();
    return (
        <div className="class space-y-2 ">
            {items.map((item, index) => (
                <div className='flex flex-col'key={index}>
                    <div className='text-[#4154F1] text-[24px]'>{item.title}</div>
                    <div className='flex'>
                        {item.paths.map((path,index)=>
                            <div className='text-[14px]' key={index}>
                                {index > 0 && <span className="mx-2">/</span>}
                                <Link to ={path.link} className={`hover:underline ${index === 0 ? "text-[#989797]" : ""}`}>
                                    {path.path}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumb;
