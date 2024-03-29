# Senior-project

## Solve the problem description in advance

According to the recommendations published by the health department, citizens should consume at least two servings of fruit every day. Insufficient fruit intake may lead to chronic
Diseases and even the top 10 causes of death in the world, show the importance of fruit food. However, there are many apps in the existing market that record the calories of three diets and station control. Currently, the APP ignores the importance of fruits.
A large number of risky scientific studies have shown that developing the habit of eating fruits can effectively reduce chronic diseases such as tumors, because fruits contain many antioxidant ingredients that can delay the aging of cells, and a large amount of vitamins help normalize cells. In addition, fruits have more It can provide the energy needed by the brain. However, most people think that "you do not need to eat fruits to eat vegetables." This concept is wrong because fruits are richer in organic acids and carbohydrates than fresh vegetables, and they are appetizing, antioxidant, and promote absorption. Efficacy, vegetables, and fruits are different in terms of nutritional content, taste, and satiety, so they cannot replace each other in terms of nutritional balance and value. There is no APP focusing on fruit ingredients and nutritional content.
Based on the above, the team wants to develop an APP about fruits and nutritional ingredients to guide users to eat fruits, reduce sugar, and develop long-term habits.

## Idea analysis
According to survey results, up to 86% of people aged 19 to 64 years old consume less than 2 servings of fruit (Ministry of Health and Welfare, National Institutes of Health and Human Services, 2018). Due to economic growth and the tight pace of life in Taiwan, many urbanized people have become more stressed. As a result, as many as 40% of people drink sugary drinks at least 7 times a week to relieve stress, whether they are commercially available drinks or hand drinks. Fructose syrup, which is genetically modified from corn, is often added to it. This syrup is metabolized in the human body directly through
The liver stores fat as fat, which can lead to adverse biochemical reactions such as elevated triglycerides and increased insulin resistance. If drinking sugary drinks becomes a long-term habit, it will lead to a 26% increase in diabetes, a 20% increase in metabolic syndrome, and high uric acid. The disease increases by 85% and causes chronic kidney disease (Health Magazine, 2015). However, it is not easy to quit the habit of hand-cranked drinks. Therefore, our team wants to use homemade fruit tea as the main focus, using more natural and healthy fruit fructose to replace the intake of hand-cranked cups, and gradually improve the Chinese people's addiction to hand-cranked cups.


1. Facial emotion analysis combined with fruit recommendations. Diet not only affects physical health but also affects mental health. Long-term and uncontrolled stress can lead to health problems. Many studies have shown that there is a high correlation between eating fruits and vegetables and stress. Because the important nutrients such as vitamins and minerals in fruits can significantly affect brain activity, imbalanced nutritional intake is one of the common causes of depression. For example, a lack of niacin (vitamin B3) can lead to diarrhea and dermatitis. , low mood, and even dementia, so it is very important to eat the right food and take in correct and balanced nutrition. This system uses facial emotion analysis to analyze the user's past dietary deficiencies and current happiness and anger. , Ai and Le give different dietary recommendations.
2. Machine learning image analysis of fruit maturity and sweetness In order to allow users to quickly grasp the nutritional content of fruits and develop the habit of paying attention to a balanced diet, the system
Import the image recognition function and use the method of photographing fruits to perform image recognition. The purpose of recognition is to identify fruit items to estimate the maturity, sweetness, grams, nutrients, and other main nutritional components of the fruit, and automatically write them into the system. Use The simplified process design can increase users' convenience and willingness to use, and further develop the good habit of reducing sugar.
3. Activity intensity analysis of individual fruit nutrients needed
This system creates personalized daily fruit intake recommendations based on the user's activity intensity. According to the "Daily Dietary Guidelines" issued by the Ministry of Health and Welfare, food is divided into six major categories, namely whole grains, beans, fish, eggs, meat, dairy products, vegetables, fruits, oils, nuts, and seeds. Based on the individual's age, gender, height, weight, and exercise intensity, it calculates the individual's daily caloric needs and sugar intake and finally estimates the user's most appropriate number of fruit servings.

## System Context Diagram
![Image text](https://github.com/peihan-11/Senior-project/blob/main/image/Senior%20Project%EF%BC%BFSystem%20Context%20Diagram.jpg)
1. Line Bot SDK: Use Visual Studio to write code as a back-end development tool that responds to user input information.
2. Azure Web Service: Deploy Line Chatbot to Azure cloud service.
3. Line Developers: Provides Line officials with the ability to upload self-developed chatbots to the cloud
end operation.
4. React Native: Develops a framework for the "Guo Ran You Liao" system, with many external functional packages, such as: react-
native-image-picker, react-native-stack, etc.
5. Azure Cosmos DB: As a database for back-end data access and writing, it stores the nutritional components of fruits.
and user personal information. The source of food nutrition information is from the Ministry of Health and Welfare website.
The product nutritional ingredients database (new version) and the Taipei City Government Food Login Platform are obtained through crawlers.
6. Azure Custom Vision: Used to identify food, analyze its items and sugar content, and estimate the value of this food.
   Vitamins, minerals, and other nutrients.
7. Azure Cognitive Services: Used for facial recognition, analyzing user emotional intensity, and understanding usage
   The physical and mental condition of the patient is taken into consideration when recommending fruits.
8. Azure DevOps: Deploy reacts native app to Azure.
9. Azure App Center: Use Azure App Center to open multiple simulators and quickly deploy
and test.
10. Google Maps Platform & Google Place Platform: Use this tool for location services and provide users with nearby stores to purchase fruits.

## System implementation video
https://youtu.be/Od_Ol_qrnBo

## Conclusion
As expected - the emotion recognition fruit tea recommendation system, expected results are as follows: 
1. Through image recognition technology, a more convenient food recording process is designed to allow users to develop the habit of food recording.
You can also know the approximate sweetness of the fruit before eating it. 
2. Personalized diet recommendations allow users to enjoy delicious food, improve their mood, and achieve goals while focusing on a healthy diet to nutritional balance. 
3. Nutrient intake record statistics create a bar chart, and users can immediately check the nutritional intake status. 
4. Combined with Google Maps, users can obtain the best stored information and real-time navigation to achieve the ultimate goal of healthy eating mark.
5. Applications of the fruit tea recommendation system:
- From a government perspective, since the system uses Line as an interactive platform, the government can use it to promote healthy eating concepts and save labor costs.
- From the perspective of local businesses, marketing advertising can be carried out through the system to promote business information.
6. Future Outlook:
- Provide more channels for purchasing fruits through the delivery platform and merchants, and provide users with consumption feedback, which increases users’ stickiness and brings further business opportunities to merchants.
- Integrate local tourism to promote local fruits and assist farmers in selling fruits to various parts of Taiwan.
