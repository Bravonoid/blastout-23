import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

const Acara = () => {
    const [state, setState] = useState([false, false, false, false, false, false]);
    const [k, setK] = useState(0);
    const rangkaian = [{
        title: "Briefing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
        img: "",
    },{
        title: "Try Out",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
        img: "",        
    },{
        title: "Talk Show",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
        img: "",        
    },{
        title: "Faculty Fair",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
        img: "",        
    },{
        title: "Campus Fair",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
        img: "",        
    },{
        title: "Entertainment",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
        img: "",        
    }];

    const normal = {
        w: 12,
        disp: 'none',
        rot: -90,
        titleSize: 50,
        trans: 'translate(16.25vh, -16.25vh)'        
    }

    const active = {
        w: 30,
        disp: 'block',
        rot: 0,
        titleSize: 40,
        trans: 'translate(0, 0)'
    }

    useEffect(
        () => {
            let i = k;
            let temp = [false, false, false, false, false, false];
            temp[i%6] = true;
            setState([...temp]);
            const interval = setInterval(() => {
                setK(k+1);
            }, 3000);
            return () => clearInterval(interval);
        },
        [k]
    )

    const handler = () => {
        console.log('handler');
    }
    
    return(
        <>
            <div className="font-bold w-[37.5vh] text-[50px] w-full flex justify-center m-[20px]">
                Rangkaian Acara
            </div>
            <div className="flex justify-evenly mb-[200px] px-[50px]">
                {rangkaian && rangkaian.map((item, i) => (
                    state[i] ? (
                        <div key={i} className="w-[15%] overflow-hidden h-[50vh] flex flex-col transition-all duration-500 justify-end border-2 border-black p-[2.5vh]" style={{width: (active.w + '%')}}>
                            <div className="font-bold w-[37.5vh]" style={{fontSize: (active.titleSize + 'px'), rotate: (active.rot + 'deg'), transform: active.trans}}>
                                {item.title}
                            </div>
                            <div className="font-bold" style={{display: active.disp}}>
                                {item.desc}
                            </div>
                        </div>
                    ) : (
                        <div key={i} className="w-[15%] overflow-hidden h-[50vh] flex flex-col transition-all duration-500 justify-end border-2 border-black p-[2.5vh]" style={{width: (normal.w + '%')}}>
                            <div className="font-bold w-[37.5vh]" style={{fontSize: (normal.titleSize + 'px'), rotate: (normal.rot + 'deg'), transform: normal.trans}}>
                                {item.title}
                            </div>
                            <div className="font-bold" style={{display: normal.disp}}>
                                {item.desc}
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div onClick={handler}>tes</div>
        </>
    )
}

export default Acara;