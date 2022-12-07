import React from "react";

const Penjelasan = () => {
    return(
        <>
            <div className="h-screen  overflow-hidden bg-slate-100 py-20">
                <div className="flex flex-row gap-x-12 px-40">
                    <div className="h-[200px] w-[600px] bg-slate-500" />
                    <div className="flex flex-col gap-y-12">
                        <h1 className="text-6xl font-bold font-Inter">BLASTOUT</h1>
                        <p className="text-justify font-Universal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex. Cras non pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero placerat commodo. Suspendisse consectetur non nunc egestas aliquam.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Penjelasan