import { Box } from '@mui/material'
import phone from 'assets/image/phone.png'
import frame_phone from 'assets/image/frame_phone.png'
import Button from '../Components/UI/Button'
import Textfield from '../Components/UI/Textfield'
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
const timeline = [1, 2, 3, 4]
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
            <div className="flex justify-around gap-5 overflow-x-auto  pb-5">
                {ui_features.map((item: any, key: number) => (
                    <div
                        key={key}
                        className="flex  w-[26rem] flex-col items-center justify-center"
                    >
                        <Icon width={40} icon={item.icon} />
                        <h1 className="basic-1/3  w-[26rem]  text-center text-[1.4rem] font-[500]">
                            {item.title}
                        </h1>
                        <p className="text-center  text-[1rem] leading-7 text-gray-500">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
            {/* TIME LINE */}
            <div className="mt-24 flex flex-wrap lg:gap-[10rem]">
                <div
                    className={`flex w-1/2 flex-wrap items-center justify-center bg-[url(assets/image/bg-phone.png)] bg-cover bg-center`}
                >
                    <div className=" z-10 w-[19rem] overflow-visible rounded-[3rem] bg-[url(assets/image/screen_phone.png)]">
                        <img
                            className="w-[19rem] rounded-[3rem] shadow-2xl shadow-pink-600"
                            src={frame_phone}
                            alt=""
                        />
                    </div>
                </div>
                <ol className="dark:border-gray-70 relative border-l-4  border-x-pink-600 xl:w-[calc(50%_-_10rem)]">
                    {timeline.map((item: any, key: number) => (
                        <li key={key} className=" mb-5 ml-20">
                            <button className="group absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-pink-400 bg-white focus-within:bg-gradient-to-r focus:from-violet-500 focus:to-fuchsia-500 focus:ring-8 focus:ring-fuchsia-100 focus-visible:ring">
                                <Icon
                                    className="text-pink-400 group-focus:text-white"
                                    width={40}
                                    icon="ph:heart"
                                />
                            </button>
                            <div className="w-">
                                <h1 className="mb-4 text-[1.3rem] font-[500]">
                                    Make a profile
                                </h1>
                                <p className="text-[0.8rem] text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo quia ea eius nisi rem
                                    inventore placeat. Aperiam tenetur incidunt
                                    dolore deserunt nemo natus eius temporibus
                                    at? Quos nemo adipisci ducimus!
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            {/* TIME LINE */}
            <div className=" mt-[5rem] flex w-full  justify-end gap-5">
                <button className="h-[3rem] rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 text-[1rem] font-bold text-white focus:ring-4 focus:ring-fuchsia-200">
                    {' '}
                    Available On APP STORE
                </button>
                <button className="h-[3rem] rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 text-[1rem] font-bold text-white focus:ring-4 focus:ring-fuchsia-200">
                    {' '}
                    Available On GOOGLE PLAY
                </button>
            </div>
            <Button className="hover mt-[4rem]">hello worlddddd</Button>
            <Textfield
                type="password"
                error
                className="mt-4"
                helperText="Incorrect entry."
                label="Helper text"
                placeholder="helo world"
                onChange={(e: any) => {
                    console.log(e.target.value)
                }}
            />
            <Textfield
                type="basic"
                error
                className="mt-4"
                helperText="Incorrect entry."
                label="Helper text"
                placeholder="helo world"
                onChange={(e: any) => {
                    console.log(e.target.value)
                }}
            />
        </div>
    )
}

export default Home
