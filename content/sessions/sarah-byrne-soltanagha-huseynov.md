+++
id = "sarah-byrne-soltanagha-huseynov"
title = "OurRagingPlanet: cultural learning through natural disaster simulation"
speakers = ["sarah-byrne","soltanagha-huseynov"]
lightning = false
sessionizeId = "216386"
track = "d2t2"
time = "16:10"
+++

Cross-cultural learning is a burgeoning field in global education. A yet unexplored method is natural disaster simulation. We have developed an open source web-app platform which simulates natural disasters in a learner’s geographical context. We have partnered with Dr Patricia Marybelle Davies of Prince Mohammed Bin Fahd University in the Kingdom of Saudi Arabia to assess how simulating sandstorms can teach cultural understanding between learners in KSA and the UK.
This paper will describe the intended research, as well as the technical approaches used for translation from English to Arabic. We will analyse the outcomes, and potential issues, surrounding user testing during the Covid-19 pandemic. The speaker will discuss their experience of developing language functionality for the existing platform.
One of the challenges we had to face when creating a multilingual platform is how to keep your server-side translation strings and JavaScript components in order. The goal is to have a single source of translation strings that can be used in our backend language templates (Laravel blade) as well as in our frontend components (Vue). While it may seem easier to just have php files for one and a JSON file for the other, keeping the translations up to date, it will be much easier if we have a single source. However, these two languages cannot freely "communicate" with each other directly. Once translation has been enacted, user testing will present more obstacles. How can we best prepare teachers to deliver remote lessons effectively? Lastly, we will consider the scope and deployment of sandstorm simulation and available KSA data.