
import { Button } from "@/components/ui/button"
import { Appbar } from "./appbar"

const Home = ()=>{
    return (
        <div className="flex flex-col h-full items-center justify-center bg-neutral-300">
            <Appbar></Appbar>
            <div className="text-3xl border-neutral-950 rounded-xl shadow-lg p-5 bg-white flex flex-col">
                <p>Home ji</p>
                
                    <Button>Login</Button>
                
            </div>
        </div>
    )
}
export default Home