const CompanyLogo = ({ title, position }) => {
    return (
        <div className={`${position} absolute border-black border-3 rounded-full text-xs lg:text-base py-3 px-4 lg:py-8 lg:px-17 max-w-max`}>
            {title}
        </div>
    );
};

export default CompanyLogo;