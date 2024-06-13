import React, { useState } from 'react'
import MainCar from './MainCar'
export default function CarDetails() {
    const [carDetails, setCarDetails] = useState([
        {
            name: "Maruthi Swift",
            price: 6.49,
            description: "Maruti is offering benefits of up to Rs 40,000 on the remaining stock of the previous-gen Swift.",
            picture:"https://s.yimg.com/fz/api/res/1.2/yBUi66ymU_YSMSec6bnKvg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/249934addfabc6dbdcd7ddd9db94e46b"
        },
        {
            name:"Mahindra Thar",
            price:11.35,
            description:"Mahindra has introduced a new Deep Forest green colour for the Thar.",
            picture:"https://tse1.mm.bing.net/th?id=OIP.1X07y-_kVnjeabxnY4x_hAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101"
        },
        {
            name:"Tata Punch",
            price:6.13,
            description:"Tata Punch is priced from Rs 6.13 lakh to Rs 10.20 lakh (ex-showroom Delhi).",
            picture:"https://sp.yimg.com/ib/th?id=OIP.YVE5yeynjquXZBlH99JblgHaEK&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
        },
        {
            name:"Hyndai Creta",
            price:11,
            descripton:"The Hyundai Creta is priced from Rs 11 lakh to Rs 20.15 lakh (introductory ex-showroom pan India).",
            picture:"https://s.yimg.com/fz/api/res/1.2/vAvALIJcVonlrm2OQF86mg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://www.bing.com/th?id=OVFT.2CViN_9yOLGmecBDeLOvCS&pid=News&w=700&h=393&c=14&qlt=90&dpr=2"
        }
    ])
    return (
        <div>
            <MainCar cars={carDetails}/>
        </div>
    )
}
