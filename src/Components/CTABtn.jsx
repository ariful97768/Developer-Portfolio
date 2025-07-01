const CTABtn = ({ icon, title, btnp = "2", btnPr = '3', icSize = '3xl', icp = '0' }) => {
    return (
        <button className={`cursor-pointer transform duration-300 active:scale-95 flex items-center py-2 pr-3 border max-w-max rounded-full gap-2`}>
            <div className={`border rounded-full p-2 text-${icSize}`}>
                {icon}
            </div>
            <div>{title}</div>
        </button>
    );
};

export default CTABtn;
