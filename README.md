# A React Native application for real-time remote water monitoring
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?&logo=react&logoColor=61DAFB)

<p/>This repository contains my first js code, made for a mobile application in a project context, the project SUPER, a collaboration between the Universidade Federal do Amazonas(UFAM) with Samsung.<p/>
<p>The main idea of the project was to develop a way to check the water quality by distance, through the amazon forest region, and send it to the cloud platform ThingSpeak.<p/>
<p>Responsible for the application to see the data collected, I created an app consisting of a simple and easily understandable design and layout model so that it can be fully explored by the user who will be using it for data collection. The sketch of the application initially contains a start screen with information about the application's purpose, the sensors, and the methods used for data capture from each sensor. Next, there are three similar screens corresponding to each sensor being monitored: pH sensor, turbidity sensor, and temperature sensor. With the need to create a screen with graphs for each sensor, the following libraries were installed: Chart-kit version 6.12.0, used to generate simple and effective graphs based on data collected by the sensors; and React-Navigation 6.0.6, necessary for the user to navigate between the screens available in the application. The programming of the application follows a web page-like programming format, with front-end and back-end concepts, being programmed in the form of native tags with components, through Node.js version 16.13.1, based on JavaScript, chosen due to its wide availability of libraries and its speed in task execution, due to its minimal use of threads and memory consumption in projects that use a lot of data.</p>
<p>For the data sent by the sensors to the Thingspeak platform to be accessible by smartphone, it is necessary: (i) to separate the sensor data into different channels, to avoid errors in data transmission if the sensors are not connected at the same time; (ii) the use of the API offered by the Thingspeak platform and a way to consume the data from this API, the Fetch method, used natively by the JavaScript language for data consumption on a simplified way. With the Thingspeak architecture adhering to the MQTT protocol model, based on a 'publisher/subscriber' concept for data transmission, the get_Chart function, built with the Fetch structure, performs the data request. These data are transformed into JSON format by Thingspeak and then stored in a variable, so that the data can be accessed and the graph updated as new data are added.</p>
<p>Here it's some visual examples of the application filling our demands by doing what as told before</p>
<br/>
<br/>
<img width="160" height="350" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/010e5374-e4ac-434b-ba86-498f1e0fd941"/>
<img width="160" height="350" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/f2150898-18de-4ad8-85be-f4723e8582e2"/>
<img width="160" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/4cdd6276-7ae6-4fba-9d22-2b6d0b07e99e"/>
<img width="160" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/201bf6a2-5840-49e2-bc9c-0b775639f8cb"/>
<img width="160" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/2a7af9e0-2643-41ca-bb1e-0056a408d3d1"/>
<img width="160" height="350" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/1859ea7e-80f9-4480-bb01-da34e3195089"/>
<br/>
<br/>
<br/>
<p>For more information, it's possible to see video presentation in Portuguese, about what was made on the project</p>
<video width="450" height="250" src="https://github.com/leomds/reactNative_monitoringApp/assets/95592703/0b474f6e-70ba-410b-92cc-5bebc4dc92d2"></video>

## Find me on
[![Instagram](https://img.shields.io/badge/jljoseleandro-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/jljoseleandro/)
[![Linkedin](https://img.shields.io/badge/-joseleandroms-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/joseleandroms)
[![Gmail Badge](https://img.shields.io/badge/-jlmdsjoseleandro@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:SEU-EMAIL)](mailto:jlmdsjoseleandro@gmail.com)
[![GitHub](https://img.shields.io/github/followers/leomds?label=follow&style=social)](https://github.com/leomds/)
<br/>
![Psn](https://img.shields.io/badge/darkness\_potatoe-003791?&logo=playstation&logoColor=white)
[![Steam](https://img.shields.io/badge/Leo_sem_o_Stronda-000000?&logo=steam&logoColor=white)](https://steamcommunity.com/profiles/76561198122699331)
[![Epic_Games](https://img.shields.io/badge/leo_no_stronder-313131?logo=Epic%20Games&logoColor=white)](https://launcher.store.epicgames.com/u/fb7adbc0ede5459f8e61d07ba4c32e17)
