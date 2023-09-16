import { Button } from '@mui/material'
import phone from 'assets/image/phone.png'
import { Icon } from '@iconify/react'
const number_list = [
    {
        title: '1265 Users',
    },
    {
        title: '1000 Download',
    },
    {
        title: '508 Likes',
    },
    {
        title: '8095 star Rating',
    },
]
const ui_features = [
    {
        icon: 'ph:heart',
        title: 'Design & Branding',
        desc: 'We use a customized application  specifically designed a testing gnose  to keep away for people.',
    },
    {
        icon: 'ph:heart',
        title: 'Design & Branding',
        desc: 'We use a customized application  specifically designed a testing gnose  to keep away for people.',
    },
    {
        icon: 'ph:heart',
        title: 'Design & Branding',
        desc: 'We use a customized application  specifically designed a testing gnose  to keep away for people.',
    },
    {
        icon: 'ph:heart',
        title: 'Design & Branding',
        desc: 'We use a customized application  specifically designed a testing gnose  to keep away for people.',
    },
    {
        icon: 'ph:heart',
        title: 'Design & Branding',
        desc: 'We use a customized application  specifically designed a testing gnose  to keep away for people.',
    },
]
function Home() {
    return (
        <div className="mx-auto my-10 lg:w-[80rem]">
            <div className="flex w-full items-center justify-between gap-5">
                <div className="w-full lg:w-2/4 ">
                    <h1 className="mb-5 text-[3rem] font-bold text-black">
                        Awesome App for Your Modern Lifestyle
                    </h1>
                    <p className="mb-10 leading-5 text-gray-500">
                        Increase productivity with a simple to-do app. app for
                        managing your personal budgets
                    </p>
                    <div className="flex gap-4">
                        <Button
                            className="px-3 py-2"
                            variant="outlined"
                            color="secondary"
                        >
                            Download app
                        </Button>
                        <Button
                            className="px-3 py-2"
                            variant="contained"
                            color="secondary"
                        >
                            Discover more
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 ">
                    <img width="100%" src={phone} alt="" />
                </div>
            </div>
            {/* next */}
            <div className="h-30 flex w-full flex-wrap justify-between border-b-2 border-b-gray-300 py-10">
                {number_list.map((item: any, key: number) => (
                    <div className="text-[2rem] font-bold text-gray-500">
                        {item.title}
                    </div>
                ))}
            </div>
            <div className="my-[3rem] flex flex-col items-center justify-center">
                <h1 className="mb-[1rem] text-[2rem] font-bold">
                    {' '}
                    Awesome Apps Features
                </h1>
                <p className="w-full text-center leading-4 text-gray-600">
                    {' '}
                    A Private Limited is the most popular type of partnership
                    Malta. The limited liability is, in fact, the only type of
                    company allowed by Companies.
                </p>
            </div>
            <div className="flex w-full overflow-x-auto">
                {ui_features.map((item: any, key: number) => (
                    <div key={key} className="w-[50%]">
                        <Icon icon={item.icon} />
                        <h1 className="text-[2rem]">{item.title}</h1>
                        <p className="text-[2rem] leading-3 text-gray-700">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
