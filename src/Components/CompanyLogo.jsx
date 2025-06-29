const CompanyLogo = ({ title, position }) => {
    return (
        <div className={`${position} absolute border-black border-3 rounded-full py-8 px-17 max-w-max`}>
            {title}
        </div>
    );
};

export default CompanyLogo;