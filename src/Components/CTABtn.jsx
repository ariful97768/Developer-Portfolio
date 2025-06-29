const CTABtn = ({ icon, title }) => {
    return (
        <div className="cursor-pointer transform duration-300 active:scale-95 flex items-center py-2 pr-3 border max-w-max rounded-full gap-2">
            <div className="border rounded-full text-3xl">
              {icon}
            </div>
            <div>{title}</div>
        </div>
    );
};

export default CTABtn;
