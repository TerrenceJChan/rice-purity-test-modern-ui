import RiceBowl from "../assets/RiceBowl.svg"

const Header = () => {
    return (
        <header className="grid grid-cols-1 items-center min-h-[100px]">
            <div className="font-extrabold flex justify-center">
                <p className="text-violet-400 text-2xl"><RiceBowl fill={"#9F82C2"} />Rice Purity Test</p>
            </div>
        </header>
    )
}

export default Header