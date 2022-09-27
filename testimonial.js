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
	
	
	];
var nameList = ["Tom M","John K","Jeanne M","Gary Cappeline","John Adler","Sandra P","Jim S","Nancy and Wes Stuckenberg","Ann Hinkley","Judy S","Ray Mida","Carl Greenberg","Kathleen and Fred Knapp","The Savino family","Bob E","Gary and Tracy","Doris H","Shelley Roth","Pete Helms","Abby Pittenger Clauss"];
let i = 0;
while (i < textList.length) {
	addTestimonial(textList[i],nameList[i]);
	i++;
}