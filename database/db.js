const products = [
    {
        id: 1,
        name: 'آئودی',
        imgUrl: "/images/jpg/cars/car-1.jpg",
        model: 2019,
        run: 35000,
        gearbox: "اتوماتیک",
        isExist: true,
        location: "تهران",
        advancePay: 1600000000,
        monthly: 500000,
        price: 5000000000
    },
    {
        id: 2,
        name: 'مازراتی',
        imgUrl: "/images/jpg/cars/car-2.jpg",
        model: 2023,
        run: 20,
        gearbox: "اتوماتیک",
        isExist: false,
        location: "قزوین",
        price: 5000000000
    },
    {
        id: 3,
        name: 'جک',
        imgUrl: "/images/jpg/cars/car-3.jpg",
        model: 2018,
        run: 5000,
        gearbox: "دستی",
        isExist: true,
        location: "شیراز",
        advancePay: 1200000000,
        monthly: 800000,
    },
    {
        id: 4,
        name: 'تویوتا',
        imgUrl: "/images/jpg/cars/car-4.jpg",
        model: 2020,
        run: 1000,
        gearbox: "اتوماتیک",
        isExist: false,
        location: "تبریز ، فلان منطقه",
        advancePay: 1300000000,
        monthly: 700000,
    },
    {
        id: 5,
        name: 'فونیکس',
        imgUrl: "/images/jpg/cars/car-5.jpg",
        model: 2024,
        run: 35000,
        gearbox: "اتوماتیک",
        isExist: true,
        location: "تهران ، فلان منطقه",
        price: 2500000000
    },
    {
        id: 6,
        name: 'بی ام و',
        imgUrl: "/images/jpg/cars/car-6.jpg",
        model: 2022,
        run: 4000,
        gearbox: "اتوماتیک",
        isExist: false,
        location: "مشهد",
        price: 9000000000
    },
    {
        id: 7,
        name: 'بنز',
        imgUrl: "/images/jpg/cars/car-7.jpg",
        model: 2008,
        run: 6000,
        gearbox: "دستی",
        isExist: false,
        location: "اصفهان",
        price: 10000000000
    },
    {
        id: 8,
        name: 'آئودی',
        imgUrl: "/images/jpg/cars/car-8.jpg",
        model: 2019,
        run: 35000,
        gearbox: "اتوماتیک",
        isExist: true,
        location: "گیلان",
        advancePay: 1600000000,
        monthly: 500000,
    },
]


const dailyPrice = [
    {
        id: 1,
        name: 'آمیکو دو کابین آسنا',
        model: 2019,
        gearbox: "دنده ای",
        priceSite: "بازار",
        fluctuation: 5,
        price: 123456789
    },
    {
        id: 2,
        name: 'آمیکو دو کابین آسنا',
        model: 2019,
        gearbox: "اتوماتیک",
        priceSite: "کارخانه",
        fluctuation: -8.2,
        price: 123456789
    },
    {
        id: 3,
        name: 'آمیکو دو کابین آسنا',
        model: 2019,
        gearbox: "دنده ای",
        priceSite: "بازار",
        fluctuation: 5.8,
        price: 123456789
    },
]

const accordions = [
    [
        {
            id: 1,
            text: "برند",
            isSelected: true
        },
        {
            id: 2,
            text: "مدل",
            isSelected: false
        },
        {
            id: 3,
            text: "سال تولید",
            isSelected: false
        },
    ],
        {
            id: 4,
            text: "قیمت",
            isSelected: false
        }, 
        {
            id: 5,
            text: "کارکرد",
            isSelected: false
        }, 
        {
            id: 6,
            text: "شهر",
            isSelected: true
        }, 
        {
            id: 7,
            text: "رنگ",
            isSelected: false
        }, 
        {
            id: 8,
            text: "شاسی",
            isSelected: true
        }, 
        {
            id: 9,
            text: "گیربکس",
            isSelected: false
        }, 
        {
            id: 10,
            text: "وضعیت بدنه",
            isSelected: false
        }, 
        {
            id: 11,
            text: "سوخت",
            isSelected: false
        }, 
        {
            id: 12,
            text: "تعداد سیلندر",
            isSelected: false
        }, 
        {
            id: 13,
            text: "حجم موتور",
            isSelected: false
        }, 
        {
            id: 14,
            text: "دیفرانسیل",
            isSelected: false
        }, 
        {
            id: 15,
            text: "تولید",
            isSelected: false
        }, 
        {
            id: 16,
            text: "کشور سازنده",
            isSelected: false
        }, 
        {
            id: 17,
            text: "موارد خاص",
            isSelected: false
        }, 
]


const navLinks = [
    {
        id: 1,
        text: "خودرو",
        path: "/"
    }, 
    {
        id: 2,
        text: "موتورسیکلت",
        path: "/"
    }, 
    {
        id: 3,
        text: "همکار من",
        path: "/"
    }, 
]


export { products, dailyPrice, accordions, navLinks }