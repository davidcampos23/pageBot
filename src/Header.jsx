function Header()
{
    return(
        <>
            <section className="w-full h-32 flex justify-between header">
                <div className=" pt-9 pl-9">
                    <strong className="text-4xl">David Campos</strong>
                </div>
                <div className="flex gap-7 pt-8 pr-9">
                    <a href="https://github.com/davidcampos23" target="_blank"><img className="w-14 h-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>  
                    <a href="https://www.linkedin.com/in/davidcampos23/" target="_blank"><img className="w-14 h-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" /></a>
                    <a href=""><img className="w-14 h-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg" /></a>
                </div>
            </section>
        </>
    )
}

export default Header