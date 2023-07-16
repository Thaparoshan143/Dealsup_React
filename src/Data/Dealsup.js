export const _Brand = 
    {
        name : "Dealsup",
        theme : "Buy and Sell Conveniently",
    }


export const _SocialLinks = [
    {
        social : "Facebook",
        url : "",
    },
    {
        social : "Instagram",
        url : "",
    },
    {
        social : "Twitter",
        url : "",
    }
]

export const _QuickLinks = [
    {
        title : "Visit Store",
        url : "",
    },
    {
        title : "Explore",
        url : "",
    },
    {
        title : "Top List",
        url : "",
    },
    {
        title : "Terms and Conditions",
        url : "",
    }
]

export const _Description = [
    "Dealsup is an online marketplace that provides portal on a wide range of products, making it an ideal place for both supplier and vendors to get the best value for their money. Ideal choice for both Vendor and Suppliers to meet their demands."
]

export const _OutlineInfo = [
    {
        title : "Total Vendors",
        count : "15 +",
    },
    {
        title : "Total Suppliers",
        count : "20 +",
    }
]

export const _WhyUsDescription = [
    "Dealsup provides both vendor and supplier a marketplace to reach the people throughout Nepal. Dealsup is an online marketplace that provides portal on a wide range of products, making it an ideal place for both supplier and vendors to get the best value for their money. Ideal choice for both Vendor and Suppliers to meet their demands."
]

export const _VednorsList = [
    {
        name : "ABC Pasal",
        thumbnailSrc : "https://img.freepik.com/free-vector/hand-drawn-butcher-shop-concept_1284-36392.jpg?w=2000",
        serve : "Meat",
        description : "This is the description of the pasal",
        ratings : 4,
    },
    {
        name : "XYZ Pasal",
        thumbnailSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGW8dhvTQQqZHbeRm_zdKVaaodqRInWJdnw&usqp=CAU",
        serve : "Rice",
        description : "This is the description of the pasal",
        ratings : 4.5,
    },
    {
        name : "EFG Pasal",
        thumbnailSrc : "https://www.britishcornershop.co.uk/img/subcat/1912.jpg",
        serve : "Drinks",
        description : "This is the description of the pasal",
        ratings : 3.3,
    },
    {
        name : "ABC Pasal",
        thumbnailSrc : "https://img.freepik.com/free-vector/hand-drawn-butcher-shop-concept_1284-36392.jpg?w=2000",
        serve : "Meat",
        description : "This is the description of the pasal",
        ratings : 4,
    },
    {
        name : "XYZ Pasal",
        thumbnailSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGW8dhvTQQqZHbeRm_zdKVaaodqRInWJdnw&usqp=CAU",
        serve : "Rice",
        description : "This is the description of the pasal",
        ratings : 4.5,
    },
    {
        name : "EFG Pasal",
        thumbnailSrc : "https://www.britishcornershop.co.uk/img/subcat/1912.jpg",
        serve : "Drinks",
        description : "This is the description of the pasal",
        ratings : 3.3,
    },
    {
        name : "ABC Pasal",
        thumbnailSrc : "https://img.freepik.com/free-vector/hand-drawn-butcher-shop-concept_1284-36392.jpg?w=2000",
        serve : "Meat",
        description : "This is the description of the pasal",
        ratings : 4,
    },
    {
        name : "XYZ Pasal",
        thumbnailSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGW8dhvTQQqZHbeRm_zdKVaaodqRInWJdnw&usqp=CAU",
        serve : "Rice",
        description : "This is the description of the pasal",
        ratings : 4.5,
    },
    {
        name : "EFG Pasal",
        thumbnailSrc : "https://www.britishcornershop.co.uk/img/subcat/1912.jpg",
        serve : "Drinks",
        description : "This is the description of the pasal",
        ratings : 3.3,
    },
    {
        name : "ABC Pasal",
        thumbnailSrc : "https://img.freepik.com/free-vector/hand-drawn-butcher-shop-concept_1284-36392.jpg?w=2000",
        serve : "Meat",
        description : "This is the description of the pasal",
        ratings : 4,
    },
    {
        name : "XYZ Pasal",
        thumbnailSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGW8dhvTQQqZHbeRm_zdKVaaodqRInWJdnw&usqp=CAU",
        serve : "Rice",
        description : "This is the description of the pasal",
        ratings : 4.5,
    },
    {
        name : "EFG Pasal",
        thumbnailSrc : "https://www.britishcornershop.co.uk/img/subcat/1912.jpg",
        serve : "Drinks",
        description : "This is the description of the pasal",
        ratings : 3.3,
    },
]


export function GenerateRamdomVendor()
{
    let vendorsListCount = Math.floor(Math.random()*100);
    let VendorInfo = {};
    let VendorList = [];
    for(let i=0;i<vendorsListCount;i++)
    {
        VendorInfo.name = genRandonString(10);
        VendorInfo.thumbnailSrc = "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg";
        VendorInfo.serve = genRandonString(6);
        VendorInfo.description = genRandonString(30);
        VendorInfo.ratings = Math.ceil(Math.random()*5);
        VendorList.push(VendorInfo);
    }
    return VendorList;
}

function genRandonString(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }
