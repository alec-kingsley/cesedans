function addTestimonial(text,name) {
	var testimonial = document.createElement("div");
	testimonial.setAttribute("class","testimonial");
	testimonial.innerHTML = 
		"<span class=\"yellow\">\"</span>"+text+"<span class=\"yellow\">\"</span>";
	var author = document.createElement("div");
	author.setAttribute("class","author");
	author.innerHTML = "- "+name;
	testimonial.appendChild(author);
	document.getElementById("testimonials").appendChild(testimonial);
}
var textList = [
	"We have been using Courtesy Executive Sedans for 8 years. They have always been professional and on time. Even when delays have come up. They go above and beyond when possible and are best."
	,"Steve is the best. I have been doing business with him at least 15 years. Always on time, and usually early. I always look forward to my rides with Steve, because he fills me in on new restaurants, traffic spots to avoid, and general happenings. Highly recommend. He is the BEST."		
	,"Steve Barnes must have written the \"book\" on how to be the best professional driver for people needing such service. He's dependable; knowledgeable about travel routes/options; and has a great attitude! I've had the pleasure of his service for at least 30 years."
	,"I have used Steve since 2017. They are easy to reach east[sic] to do business with and always reliable. My ride has always been on time and the driver pleasant to ride with. From time to time I am asked for a limousine company recommendation and I always recommend Courtesy Executive Sedans for a modern, clean and old time friendly and reliable service."
	,"Steve has been taking me and my family to and from the Tampa and Sarasota airports for 35 years- always on time , helpful and smiling. He has a five- star rating with me"
	,"I have been a satisfied customer of Cot Executive Sedans for the last 15 years . Steve is punctual ,always available with impeccably clean and comfortable cars and will get you where you are going \"on time\" with time to spare."
	,"My family and friends have always enjoyed the trips we scheduled with Steve. They are always timely band[sic] courteous"
	,"Steve Barnes is the best. A pleasure to ride with him . Steve and his driver s are always courteous, reliable and punctual. It is nice to be met and helped with luggage . Steve has be[sic] taking care of us and our family for many years. We have always been satisfied."
	,"It is an absolute pleasure to have Steve or one of his competent drivers see that you get safely and punctually on time to your destination"
	,"Courtesy Executive Sedans service is always perfect. I use Steve several times a year . He is always prompt, courteous and pleasant to ride with . I would highly recommend Steve to all who travel. He has always made my trip so very comfortable."
	,"Steve Barnes is the owner of the most reliable and dependable car service in Florida. We have used him for many years. We have never been late for a flight or meeting because he or his drivers were late. In fact he is always early to assist you in case you need help."
	,"I've been using Courtesy Limo for 15 years. Best ride in Florida!"
	,"The most dependable service we have ever used. Middle of the day or middle of the night, they are always there without fail."
	,"Steve has been picking my family up for over 15 years. He always treats us like his own family while being the utmost professional. Highly recommended."
	,"We have used Courtesy Executive Sedans for several years for all trips to the airports, some at very unusual hours. The vehicles are clean, roomy and comfortable, the drivers always prompt and courteous. We highly recommend them."
	,"Courtesy Executive Sedans has provided us with prompt, reliable and friendly service. We highly recommend it for your transportation needs."
	,"For several years we have been using Steve for all our airport business. At your initial call he takes all your information and then texts you the day before to reconfirm. His car is spacious comfortable and always immaculate with plenty of room for luggage. Always dependable, professional and a pleasure to do business with."
	,"It has been many many years that we have been with Steve. Way before Uber and no other people around to pick us up. Steve is always there on time very dependable ,kind, and considerate. When we had grandchildren he brought car seats for them. And one year our air conditioner was broken and he ran over with a fan so that we could stay cool. You will never find a better driver, always waiting for us."
	,"I've been using Steve for 8 or 9 years to transport my family & I to & from the airport. He is the best! I'm a full time resident of Pennsylvania with a vacation home in Florida. Steve makes our trips seamless. Really, he feels like family. I've referred all of my friends & family traveling to Florida to him."
	,"I had the pleasure of meeting Steve when I vacationed at my boss' house in Florida with my family. He is wonderful. I had an idea of how great he was after hearing him & my boss banter back & forth on the phone, but when we saw his smiling face at the airport, we knew we were in good hands. Great guy! Reliable & just a good person."
  ,"I can highly recommend Courtesy Executive Transportation service. My husband and I have booked 5 to 10 roundtrip airport transfers per year to Tampa, St Pete, Punta Gorda and Sarasota for business and personal trip for the last 15 years. In addition we are Co-Owners of V I P World Travel in Sarasota and have arranged transportation with Courtesy Transportation for many, many clients through the same years not only to airport but also to cruise ports in Tampa, Ft. Lauderdale, Miami and Pt Canaveral. We get many compliments from our clients for booking  transportation with Courtesy Transportation.  Their vehicles are comfortable and clean and their service reliable and their drivers dressed professionally. When a flight is delayed or cancelled, Courtesy Transportation is right on top of the latest updates and in some cases has had to wait for hours for our guests. Courtesy is our first choice when making transportation bookings."
	,"Steve, from Courtesy Executive Sedans, has provided professional service for me during the past fifteen years to and from the Sarasota or Tampa airports. He is always courteous, accommodating, and on time. Steve assist you with your luggage at the drop off zone at the airport or he is waiting for you at the luggage carousel upon your arrival at the Sarasota or Tampa airports. I am very pleased with Courtesy Executive Sedans and I will continue to make them my priority car service.",
  "Steve Courtesy Executive Sedans is one of the Best in Florida. I have known Steve since 2007, when my husband, Director of Sarasota Ballet, first came to Sarasota and I spent the next five years commuting between here and the UK together with my two Yorkshire terriers. I continued to use Steve’s Car service after 2012, when I came to live here permanently. Steve is a truly wonderful man, 100% reliable, helpful, patient when there have been delays, and always there for us. I can fully recommend Steve and his extremely comfortable Courtesy Executive Sedans, as I have always experienced perfect service with a warm and friendly Steve waiting for me."
	
	];
var nameList = ["Tom M","John K","Jeanne M","Gary Cappeline","John Adler","Sandra P","Jim S","Nancy and Wes Stuckenberg","Ann Hinkley","Judy S","Ray Mida","Carl Greenberg","Kathleen and Fred Knapp","The Savino family","Bob E","Gary and Tracy","Doris H","Shelley Roth","Pete Helms","Abby Claus","Sue Knops","Phyllis Robinson","Margaret Barbieri, Assistant Dirctor, The Sarasota Ballet."];
let i = 0;
while (i < textList.length) {
	addTestimonial(textList[i],nameList[i]);
	i++;
}