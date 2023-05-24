interface CardsProp{
    data: ExperienceModel[]
}

export default function Cards(props: CardsProp){
    return(
        <>
            {props.data?.map((exp : ExperienceModel)=>{
                return(
                    <div key={exp._id} className="flex flex-col p-7 rounded-[15%] bg-white text-black mx-3 w-5/7 font-kanit">
                        <div className="text-center">
                            <p className="font-kanitMed text-lg">{exp.title}</p>
                            <p className="uppercase">{exp.lvl}</p>
                            <p className="text-neutral-400">{exp.cuntry}</p>
                            <p className="text-neutral-400">{exp.company} | {exp.started} - {exp.ended ? exp.ended : 'till this date.'}</p>
                            <hr className="border-1 border-seaGreen pb-1" />
                        </div>
                        <p>{exp.desc}</p>
                    </div>
                )
            })}
        </>
    )
}