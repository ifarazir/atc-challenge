import { Loader } from "lucide-react"

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-[80dvh]">
            <Loader className="animate-spin h-24 w-24" />
        </div>
    );
}