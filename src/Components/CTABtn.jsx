const CTABtn = ({ icon, title, btnp2, btnPr3, icSize3, icp }) => {
    return (
        <button className={`cursor-pointer transform duration-300 active:scale-95 flex items-center py-1 md:py-2 pr-3 border text-xs md:text-base max-w-max rounded-full gap-2`}>
            <div className={`border rounded-full md:p-2 text-2xl`}>
                {icon}
            </div>
            <div>{title}</div>
        </button>
    );
};

export default CTABtn;
