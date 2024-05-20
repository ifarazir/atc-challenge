import { ChartPieIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'لیگ بازدهی',
        description:
            'این لیگ بر اساس عملکرد نهایی استراتژی، به عنوان بازدهی نهایی، تشکیل می‌شود. این شاخص نشان می‌دهد که یک استراتژی چقدر سودآور است، به عبارت دیگر، درصد سود کل نسبت به سرمایه‌گذاری اولیه را نمایش می‌دهد. برای ارزیابی دقیق‌تر، این بازدهی ممکن است به سود بای-اند-هلد تقسیم شود تا میزان ریسک مدیریت شده نیز مدنظر قرار گیرد.',
        icon: PresentationChartBarIcon,
    },
    {
        name: 'لیگ شارپ',
        description:
            'این شاخص بر اساس نسبت بازدهی به ریسک، به عنوان کیفیت تریدها، تعریف می‌شود. با استفاده از امید سود و انحراف معیار سود، این شاخص نشان می‌دهد که استراتژی چقدر بازدهی داشته است نسبت به سطح ریسکی که به طور معمول تحمل می‌شود. بنابراین، این شاخص به ما کمک می‌کند تا استراتژی‌هایی را که بازدهی خوبی دارند اما با ریسک بالا، از استراتژی‌های با نسبت بهتری بین بازدهی و ریسک تمیز کنیم.',
        icon: ChartPieIcon,
    },
    {
        name: 'لیگ بازدهی به بیشینه کاهش',
        description:
            'این شاخص نسبت بازدهی نهایی به بیشینه کاهش استراتژی را نمایش می‌دهد. در واقع، نشان می‌دهد که استراتژی نسبت به حداکثر افت ریسکی که تجربه کرده است چقدر سودآور است. این معیار مهم است زیرا بسیاری از سرمایه‌گذاران تمایلی به تحمل افت‌های بالا ندارند و به دنبال سودآوری با حفظ ریسک مناسب هستند. این شاخص می‌تواند برای افرادی که به دنبال تعادل میان بازدهی و ریسک در سرمایه‌گذاری‌شان هستند مفید باشد.',
        href: '#',
        icon: PresentationChartBarIcon,
    },
]

export default function Leagues() {
    return (
        <div className="bg-white py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        لیگ‌های مسابقه
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        لیگ‌های مسابقه بر اساس شاخص‌های زیر، که از جمله شاخص‌های مهم در ارزیابی کیفیت استراتژی‌های معاملاتی استفاده هستند، برگزار می شوند. شرکت‌کنندگان ابتدا انتخاب می‌کنند که می خواهند در کدام یک از شاخص‌ها با رقبای خود رقابت کنند. شاخص‌ها به گونه‌ای انتخاب شده اند که همپوشانی کمی داشته باشند. لیگ‌های مسابقه که بر اساس شاخص‌های مطرح در سنجش کیفیت استراتژی‌های معاملاتی انتخاب شده اند، به شرح زیر هستند:
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-xl font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-sm leading-7 text-gray-500">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
