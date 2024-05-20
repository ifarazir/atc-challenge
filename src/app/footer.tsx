const navigation = [
    {
        name: 'Telegram',
        href: 'https://t.me/atc_aut',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5552 17.28L10.2512 19.421C9.96917 19.684 9.51017 19.468 9.53617 19.083C9.60817 17.995 9.72017 16.342 9.79517 15.423C9.80717 15.278 9.92917 15.116 10.0452 15.011C12.7362 12.571 15.4332 10.137 18.1292 7.70101C18.2292 7.61101 18.3472 7.38901 18.2852 7.27201C18.2152 7.14001 17.8922 7.18001 17.7582 7.26401C14.3342 9.42001 10.9102 11.575 7.49117 13.738C7.28117 13.87 7.02417 13.902 6.78817 13.826C5.37817 13.373 3.96017 12.944 2.54717 12.498C2.22217 12.395 1.83617 12.293 1.79917 11.89C1.76017 11.469 2.12117 11.269 2.44717 11.138C3.76117 10.608 5.08417 10.101 6.40517 9.59101C11.1572 7.76001 15.9092 5.93001 20.6612 4.10001C20.8202 4.03901 21.0322 4.00101 21.1982 3.96801C21.6962 3.86801 22.1442 4.11801 22.1932 4.62201C22.2302 4.99101 22.1652 5.40201 22.0882 5.76701C21.0982 10.476 20.0952 15.183 19.0932 19.891C18.8232 21.163 18.1692 21.404 17.1162 20.627C15.7592 19.625 12.5552 17.28 12.5552 17.28Z" fill="currentColor" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-white w-full">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 space-x-reverse md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; {
                            // get year in jalali calendar
                            new Date().toLocaleDateString('fa-IR', { year: 'numeric' })
                        } تمامی حقوق نزد انجمن علمی دانشکده ریاضی و علوم کامپیوتر محفوظ است.
                    </p>
                </div>
            </div>
        </footer>
    )
}
