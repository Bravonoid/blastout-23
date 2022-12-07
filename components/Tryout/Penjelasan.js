import React from "react";

const Penjelasan = () => {
    return(
        <>
            <div className="h-auto w-1/2 relative overflow-hidden py-20 pl-20 ">
                <div className="flex flex-col text-justify font-Inter">
                    <div className="flex flex-row gap-x-6">
                        <h1 className="font-bold text-6xl">TRYOUT <span className="bg-slate-300 p-2">DAY 1</span></h1>
                        <div className="border-black border-t-2 px-[80px] block my-auto" />
                    </div>
                    <p className="py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex. Cras non pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero placerat commodo. Suspendisse consectetur non nunc egestas aliquam.</p>
                </div>
            </div>
        </>
    )
}
export default Penjelasan;