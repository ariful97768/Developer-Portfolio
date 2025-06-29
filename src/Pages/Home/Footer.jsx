const Footer = () => {
    return (
        <footer className="mx-4 px-16  pb-18 rounded-[40px] pt-23 bg-[#141414] text-white">
            <div className="flex space-y-16">
                <div className="w-2/5 h-full">
                    <h2 className="text-[#C5FF41] text-4xl font-extrabold">DEVLOP.ME</h2>
                </div>
                <div className="w-3/5 space-y-32">
                    <h1 className="text-[64px] font-bold">As you can</h1>
                    <div className="grid gap-10 grid-cols-4">
                        <div className="col-span-2 space-y-12">
                            <div className="space-y-5">
                                <h3 className="font-bold text-[#757575]">Say Hello</h3>
                                <ul className="space-y-2">
                                    <li className="text-[#E4E4E4]">HELLO@DEVLOP.ME.COM</li>
                                    <li className="text-[#E4E4E4]">MAHBUBUL@ME.COM</li>
                                </ul>
                            </div>
                            <div className="space-y-5">
                                <h3 className="font-bold text-[#757575]">Call</h3>
                                <ul className="space-y-2">
                                    <li className="text-[#E4E4E4]">+784549 4981 00</li>
                                    <li className="text-[#E4E4E4]">+8845 0100 211</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <h3 className="font-bold text-[#757575]">Menu</h3>
                            <ul className="space-y-2">
                                <li className="text-[#E4E4E4]">HOME</li>
                                <li className="text-[#E4E4E4]">ABOUT</li>
                                <li className="text-[#E4E4E4]">PORTFOLIO</li>
                                <li className="text-[#E4E4E4]">BLOG</li>
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h3 className="font-bold text-[#757575]">Social</h3>
                            <ul className="space-y-2">
                                <li className="text-[#E4E4E4]">TWITTER</li>
                                <li className="text-[#E4E4E4]">INSTAGRAM</li>
                                <li className="text-[#E4E4E4]">FACEBOOK</li>
                                <li className="text-[#E4E4E4]">BEHANCE</li>
                                <li className="text-[#E4E4E4]">DRIBBLE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between mt-32">
                <h1>BESNIK</h1>
                <p className="opacity-50">@devlop.me 2022</p>
                <p className="opacity-50">PRIVACY - TERMS</p>
            </div>
        </footer>
    );
};

export default Footer;