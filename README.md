Hi all!

I had such a fun time creating and styling this app!

This app is for all of the astrology folks out there! It is a simple one page application. If you know your zodiac sign you are invited to click on the corresponding icon. The icon will then trigger a fetch request from the json.db to return a horoscope to you.

Initially, I had wanted to connect this app to an actual horoscope API but couldn't find a free API that suited my purposed so I opted to create my own JSON database of horoscope. The horoscopes.db file contains over 400 unique horoscopes that are selected at random when the user clicks thier sign to get thier daily horoscope.

If th user does not know thier sign, they are able to click the top question mark which will conditionally render a form where they can input thier birthday details. The data from the form is captured in state and then branches of decision logic evaluate the month and day to find the users sign and return a horoscope for that sign. 
