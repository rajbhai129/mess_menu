const menu ={
  Monday:{
    breakfast:"Poha Jalebi Sev, Chopped Onion, Lemon, Sprouts.",
    lunch:"Parval aalu, Plain Roti,Plain Rice, Curd, Arhar dal,Fryums.",
    dinner:"Chole Puri, Masoor Dal,Jeera Rice, Chapati,Boondi.",
  },
  Tuesday:{
    breakfast:"Uttapam, Coconut Chutney, Sambhar, Chana& Sprouts.",
    lunch:"Laal bhaji chana daal saag,Arhar dal tadka, Teharirice, Chapati, BoondiRaita.",
    dinner:"Veg Kofta, PlainRoti, Dal Makhani, PlainRice, Sooji Halwa.",
  },
  Wednesday:{
    breakfast:"Veg Sandwich, Greenchutney, Tomato ketchup,sprouts.",
    lunch:"Sev Tamatar, Rasum,Chapati, Roasted Papad,Rice, Curd.",
    dinner:"Paneer butter masala,Sambhar, Chapati, PlainRice, Moong Dal Halwa.",
  },
  Thursday:
  {
    breakfast:"Idli Sambhar, CoconutChutney, Sprouts.",
    lunch:"Rajma, Plain Rice, Plain Paratha, Papad, Aalu-Mutter sabji, Curd.",
    dinner:"Gobhi masala, MoongDal Tadka, Plain Rice,Chapati,Paiesum/Sevaiyaan.",
  },
  Friday:
  {
    breakfast:"Veg Cutlet, Tomato Sause,Sprouts.",
    lunch:"Aalu palak, Masoore Dal,Plain Rice, Chapati, Papad,Curd.",
    dinner:"Mutter Panner, ArharDal Tadka, Jeera Rice,Chapati, Fryums.",
  },
  Saturday:
  {
    breakfast:"Aalu Paratha, Curd,Tomato ketchup, sprouts.",
    lunch:"Chole Poori, Rasum, PlainRice, Boondi Raita.",
    dinner:"Soya aalu, Chapati, PlainRice, Arhar dal tadka,Coconut barfi.",
  },
  Sunday:
  {
    breakfast:"Masala Dosa, Sambhar,Coconut Chutney,Sprouts.",
    lunch:"Kadhi Pakoda, Chanamasala, Plain Rice,Chapati, Fryums.",
    dinner:"Kadhai Paneer, Chapati,Veg Dum Biryani, Vegmanchurian,Gulabjamun, Raita.",
  },


}
function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });        
}
const todayDay=getDayName(new Date(),"en-Us");

document.getElementById("today").innerHTML=`Today is ${todayDay}`;
document.getElementById("breakfast").innerHTML=`${menu[todayDay].breakfast}`
document.getElementById("lunch").innerHTML=`${menu[todayDay].lunch}`
document.getElementById("dinner").innerHTML=`${menu[todayDay].dinner}`
