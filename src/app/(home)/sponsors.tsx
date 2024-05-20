export default function Sponsors() {
    return (
        <div className="w-full bg-white py-12 sm:py-24">
            <div className="w-full mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-5">حامیان ما</h2>

                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    <a href="https://aut.ac.ir/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain"
                            src="/images/sponsors/aut.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">دانشگاه صنعتی امیرکبیر</p>
                    </a>
                    <a href="https://mcs.aut.ac.ir/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain invert"
                            src="/images/sponsors/mcs.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">انجمن علمی دانشکده ریاضی و علوم کامپیوتر</p>
                    </a>
                    <a href="http://cg.aut.ac.ir/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain"
                            src="/images/sponsors/Computional-Geometry.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">آزمایشگاه هندسه محاسباتی و الگوریتم</p>
                    </a>
                    <a href="https://quera.ir/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain"
                            src="/images/sponsors/quera.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">کوئرا</p>
                    </a>
                    <a href="https://wallex.ir/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain"
                            src="/images/sponsors/wallex.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">والکس</p>
                    </a>
                    <a href="https://kbca.ir/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain"
                            src="/images/sponsors/Khorasan-Blockchain.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">انجمن بلاکچین خراسان</p>
                    </a>
                    <a href="https://magnetxt.com/" target="_blank" rel="noreferrer" className="bg-gray-400/5 p-5 sm:p-8 flex flex-col items-center justify-center gap-3">
                        <img
                            className="max-h-16 w-full object-contain"
                            src="/images/sponsors/magnet.png"
                            alt="Transistor"
                        />
                        <p className="text-xs font-medium">Magnet XT</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
