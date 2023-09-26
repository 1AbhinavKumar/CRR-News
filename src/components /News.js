import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate.js'
import Spinner from './Spinner.js';

export class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": "fox-news",
  //       "name": "Fox News"
  //     },
  //     "author": "Lindsay Kornick",
  //     "title": "AOC grilled on her non-union electric vehicle while supporting UAW strike",
  //     "description": "Rep. Alexandria Ocasio-Cortez, D-N.Y., agreed that she owns a non-union made vehicle despite supporting the UAW strike because it was purchased during the pandemic.",
  //     "url": "https://www.foxnews.com/media/aoc-grilled-non-union-electric-vehicle-while-supporting-uaw-strike",
  //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/xxUAW-strike.jpeg",
  //     "publishedAt": "2023-09-25T08:00:39Z",
  //     "content": "Rep. Alexandria Ocasio-Cortez, D-N.Y., defended the use of her non-union made electric car while supporting the United Auto Workers (UAW) strike on Sunday.\r\nThe progressive \"Squad\" member appeared on… [+3037 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "benzinga.com",
  //     "title": "Tesla Autopilot Head Echoes Musk's Rage Against LiDAR For Optimus, EVs In Favor Of Neural Networks: 'It Will Become So Obvious...'",
  //     "description": "Tesla Inc‘s TSLA humanoid bot Optimus, like the company’s electric cars, relies on neural networks and cameras, eschewing Light Detection and Ranging (LiDAR). The company’s executives, including the chief himself, reinforced this. What Happened: Tesla’s Direc…",
  //     "url": "https://biztoc.com/x/b7a7ced559398fd6",
  //     "urlToImage": "https://c.biztoc.com/p/b7a7ced559398fd6/s.webp",
  //     "publishedAt": "2023-09-25T08:00:08Z",
  //     "content": "Tesla Incs TSLA humanoid bot Optimus, like the companys electric cars, relies on neural networks and cameras, eschewing Light Detection and Ranging (LiDAR). The companys executives, including the chi… [+278 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Livemint"
  //     },
  //     "author": "Economist",
  //     "title": "Will the auto workers’ strike jeopardise Joe Biden’s manufacturing boom?",
  //     "description": "A report from the front line of Joe Biden’s industrial revival",
  //     "url": "https://www.livemint.com/industry/manufacturing/will-the-auto-workers-strike-jeopardise-joe-biden-s-manufacturing-boom-11695625101765.html",
  //     "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/25/600x338/US-UAW-EXPANDS-ONGOING-STRIKE-AGAINST-BIG-THREE-AU_1695625621639_1695625621985.jpg",
  //     "publishedAt": "2023-09-25T07:12:30Z",
  //     "content": "Stanton, Tennessee, looks like a place from a bygone age. The town hall quaintly resembles a 1960s grocery store. Next door is a cannery, where townsfolk use communal stoves to make soups and peach p… [+11060 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Moneycontrol"
  //     },
  //     "author": "Reuters",
  //     "title": "UK#39;s fossil fuel car ban delay may only stall investment",
  //     "description": "UK Prime Minister Rishi Sunak, who is expected to face a tough election in 2024, said the five-year delay to 2035 was not political and was about &quot;doing what's right for the country&quot;.",
  //     "url": "https://www.moneycontrol.com/news/world/uks-fossil-fuel-car-ban-delay-may-only-stall-investment-11422801.html",
  //     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/04/Mongabay_Fossil-Fuel-770x433.jpg",
  //     "publishedAt": "2023-09-25T07:08:57Z",
  //     "content": "Britain's decision to delay a ban on new fossil fuel car sales may make little difference to the pace of a shift to electric vehicles (EVs), even though the news drew anger from automakers worried ab… [+3945 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "watcher.guru",
  //     "title": "Bitcoin Market to See Capital Influx of $300 Billion: Morgan Creek CEO",
  //     "description": "A few hours ago, Bitcoin dropped below the $26,000 threshold and created a low of around $25,987. However, many in the community believe that BTC’s “fair value” is much higher. According to Mark Yusko, founder and CEO of Morgan Creek Capital Management, the l…",
  //     "url": "https://biztoc.com/x/57c00b70fe2a8567",
  //     "urlToImage": "https://c.biztoc.com/p/57c00b70fe2a8567/s.webp",
  //     "publishedAt": "2023-09-25T07:00:10Z",
  //     "content": "A few hours ago, Bitcoin dropped below the $26,000 threshold and created a low of around $25,987. However, many in the community believe that BTCs fair value is much higher. According to Mark Yusko, … [+273 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "mashable",
  //       "name": "Mashable"
  //     },
  //     "author": "Waquar Haider",
  //     "title": "Switching to iPhone 15; Here's how to transfer data from Android to your new device",
  //     "description": "A comprehensive guide on the process of transferring data from Android to iPhone is provided below.",
  //     "url": "https://me.mashable.com/tech/32800/switching-to-iphone-15-heres-how-to-transfer-data-from-android-to-your-new-device",
  //     "urlToImage": "https://sm.mashable.com/mashable_me/seo/default/iphone-15-pro-max-news_3sdc.jpg",
  //     "publishedAt": "2023-09-25T06:45:04Z",
  //     "content": "The highly anticipated iPhone 15 series by Apple is now available for purchase. This new series was unveiled at Apple's prestigious Wonderlust event on September 22nd, featuring the iPhone 15, iPhone… [+2329 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CNA"
  //     },
  //     "author": null,
  //     "title": "Analysis:UK's fossil fuel car ban delay may only stall investment",
  //     "description": "LONDON : Britain's decision to delay a ban on new fossil fuel car sales may make little difference to the pace of a shift to electric vehicles (EVs), even though the news drew anger from automakers worried about supply chains and investment uncertainty.UK Pri…",
  //     "url": "https://www.channelnewsasia.com/business/analysisuks-fossil-fuel-car-ban-delay-may-only-stall-investment-3796476",
  //     "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--HNKsDiNt--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-09-25t062145z_4_lynxmpej8o056_rtroptp_3_britain-climate-autos-electric.jpg?itok=7KIDddyD",
  //     "publishedAt": "2023-09-25T06:23:41Z",
  //     "content": "LONDON : Britain's decision to delay a ban on new fossil fuel car sales may make little difference to the pace of a shift to electric vehicles (EVs), even though the news drew anger from automakers w… [+4081 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Marketscreener.com"
  //     },
  //     "author": "Reuters",
  //     "title": "UK's fossil fuel car ban delay may only stall investment",
  //     "description": "(marketscreener.com) Britain's decision to delay\na ban on new fossil fuel car sales may make little difference to\nthe pace of a shift to electric vehicles , even though the\nnews drew anger from automakers worried about supply chains and\ninvestment uncertainty…",
  //     "url": "https://www.marketscreener.com/quote/stock/ASTON-MARTIN-LAGONDA-GLOB-46472778/news/UK-s-fossil-fuel-car-ban-delay-may-only-stall-investment-44911983/",
  //     "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
  //     "publishedAt": "2023-09-25T06:00:00Z",
  //     "content": "* UK delay unlikely to affect global pace of EV shift\r\n* Analysts say delay is political, unsettles investors\r\n* Some brands plan to be fully electric before 2030\r\nLONDON, Sept 25 (Reuters) - Britain… [+4269 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Gus Alexiou, Contributor, \n Gus Alexiou, Contributor\n https://www.forbes.com/sites/gusalexiou/",
  //     "title": "Researchers Identify Threats And Opportunities In Autonomous Taxi Disability-Inclusion",
  //     "description": "New research highlights the importance of incorporating the views and experiences of disabled passengers when designing the driverless taxi systems of the future.",
  //     "url": "https://www.forbes.com/sites/gusalexiou/2023/09/25/researchers-identify-threats-and-opportunities-in-autonomous-taxi-disability-inclusion/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6510aa0387e0cb6d9cde0e17/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-25T06:00:00Z",
  //     "content": "Control of autonomous taxi by mobile app. \r\ngetty\r\nWith the likes of Waymo, Tesla and Cruise continuing to invest heavily in driverless cars future cityscapes that were once only conjured within the … [+5095 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "News18"
  //     },
  //     "author": "Shaurya Sharma",
  //     "title": "Tesla's Humanoid Robot Can Now Do Yoga, Elon Musk Calls It 'Progress': Details Here - News18",
  //     "description": "Tesla's humanoid robot, which is called 'Optimus' can now perform yoga, and sort objects by their colour, thanks to new abilities made possible using AI and self-calibration.",
  //     "url": "https://www.news18.com/tech/teslas-humanoid-robot-can-now-do-yoga-elon-musk-calls-it-progress-details-here-8589963.html",
  //     "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/09/tesla-humanoid-robot-2023-09-5b4d839bec36b14588d1cf0f8c7c88cd-16x9.jpg?impolicy=website&width=1200&height=675",
  //     "publishedAt": "2023-09-25T05:55:55Z",
  //     "content": "2023 has been a big year for generative AI, and its only going to get bigger. More and more companies are starting to reveal their long-term plans for AI, and some experts are worried about the poten… [+1946 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Blogspot.com"
  //     },
  //     "author": "noreply@blogger.com (Unknown)",
  //     "title": "Οι πίθηκοι της Neuralink βρήκαν φρικτό θάνατο μετά το εμφύτευμα στον εγκέφαλο",
  //     "description": "The Gruesome Story of How Neuralink’s Monkeys Actually DiedElon Musk says no primates died as a result of Neuralink’s implants. A WIRED investigation now reveals the grisly specifics of their deaths as US authorities have been asked to investigate Musk’s clai…",
  //     "url": "https://i-epikaira.blogspot.com/2023/09/neuralink.html",
  //     "urlToImage": "https://lh3.googleusercontent.com/blogger_img_proxy/ALY8t1uTu_cfcZ3EgAbMpnZkOWh7J2kfZnuzIazwhYXZNDdNvTMnmTeK9qi9VC43FMymn74Rp2RbkysXL17S6rhol2JD9Ak7cbauIxzBy-TiSb-1jXlKIUNeXIRS3eaZgeIsMP875Yc2QUFSAdt1gx3sjCzJxJ22U96z8lJSTSErGH-6S53TiFw5FCRekYB0qdB2kIXNsHQpJxW7pU2sPjg=w1200-h630-p-k-no-nu",
  //     "publishedAt": "2023-09-25T05:45:00Z",
  //     "content": ""
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The-independent.com"
  //     },
  //     "author": "Maroosha Muzaffar",
  //     "title": "AOC wants to ‘trade in’ her Tesla for union-made electric vehicle amid historic auto workers strike",
  //     "description": "‘We are actually looking into trading in our car now’",
  //     "url": "https://www.the-independent.com/news/world/americas/us-politics/aoc-elon-musk-tesla-ev-b2417837.html",
  //     "urlToImage": "https://static.independent.co.uk/2022/11/03/16/AOCMUSK.jpg?quality=75&width=1200&auto=webp",
  //     "publishedAt": "2023-09-25T05:30:15Z",
  //     "content": "Alexandria Ocasio-Cortez is looking to trade in her Tesla for a union-made electric vehicle (EV).\r\nThe New York Democrat was asked why she does not own an electric vehicle made by union workers on CB… [+2078 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "IANS",
  //     "title": "Elon Musk showcases Tesla humanoid robot performing Yoga, Namaste",
  //     "description": "Elon Musk showcased the Tesla humanoid robot named 'Optimus' in a video where it performed yoga postures and greeted followers with a 'Namaste'. Optimus has the ability to self-calibrate its arms and legs and can locate its limbs in space using vision and joi…",
  //     "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-showcases-tesla-humanoid-robot-performing-yoga-namaste/articleshow/103921976.cms",
  //     "urlToImage": "https://img.etimg.com/thumb/msid-103922095,width-1200,height-630,imgsize-46754,overlay-ettech/photo.jpg",
  //     "publishedAt": "2023-09-25T05:26:54Z",
  //     "content": "New Delhi, Elon Musk on Monday showcased the Tesla humanoid robot called 'Optimus' who greeted his followers with a 'Namaste', while performing a couple of Yoga postures comfortably.Showcased for the… [+2235 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "teslarati.com",
  //     "title": "Tesla ramps hiring efforts for Optimus humanoid robot program",
  //     "description": "Tesla shared a rather impressive update on its Optimus program over the weekend. In a short video posted on social media, Tesla demonstrated some of Optimus’ current capabilities, such as its self-calibration procedures and its ability to sort items using a v…",
  //     "url": "https://biztoc.com/x/ea4c7c8c11cb9181",
  //     "urlToImage": "https://c.biztoc.com/p/ea4c7c8c11cb9181/og.webp",
  //     "publishedAt": "2023-09-25T05:22:08Z",
  //     "content": "Tesla shared a rather impressive update on its Optimus program over the weekend. In a short video posted on social media, Tesla demonstrated some of Optimus current capabilities, such as its self-cal… [+289 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Madshrimps.be"
  //     },
  //     "author": "Stefan Mileschin",
  //     "title": "Jaguar signs on to use Tesla's chargers too",
  //     "description": "Jaguar is joining Mercedes, Polestar and other automakers in adopting Tesla's NACS chargers for vehicles sold in North America starting in 2025. The company signed an agreement with Tesla to gain access to its 12,000+ Superchargers for its \"current and future…",
  //     "url": "http://www.madshrimps.be/news/item/224746",
  //     "urlToImage": null,
  //     "publishedAt": "2023-09-25T05:21:10Z",
  //     "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Freerepublic.com"
  //     },
  //     "author": "Watts Up With That?",
  //     "title": "Values Of Used EVs Plummet, As Dealers Stuck With Unsold Cars",
  //     "description": "The average cost of second hand electric cars is plummeting by a “phenomenal amount” as they sit for “months on end” without any buyers. Research by online motor marketplace, AutoTrader, revealed the average price for a used EV has dropped by 21.4 per cent th…",
  //     "url": "https://freerepublic.com/focus/f-chat/4184717/posts",
  //     "urlToImage": null,
  //     "publishedAt": "2023-09-25T05:21:05Z",
  //     "content": "Skip to comments.\r\nValues Of Used EVs Plummet, As Dealers Stuck With Unsold CarsWatts Up With That? ^\r\n | 9/24/2023\r\n | Paul Homewood\r\nPosted on 09/24/2023 10:21:05 PM PDT by fireman15\r\nThe average c… [+3074 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Wattsupwiththat.com"
  //     },
  //     "author": "Guest Blogger",
  //     "title": "Values Of Used EVs Plummet, As Dealers Stuck With Unsold Cars",
  //     "description": "The average cost of second hand electric cars is plummeting by a \"phenomenal amount\" as they sit for \"months on end\" without any buyers.\nThe post Values Of Used EVs Plummet, As Dealers Stuck With Unsold Cars first appeared on Watts Up With That?.",
  //     "url": "https://wattsupwiththat.com/2023/09/24/values-of-used-evs-plummet-as-dealers-stuck-with-unsold-cars/",
  //     "urlToImage": "https://wattsupwiththat.com/wp-content/uploads/2020/12/wuwt-logo.jpg",
  //     "publishedAt": "2023-09-25T05:00:00Z",
  //     "content": "From NOT A LOT OF PEOPLE KNOW THAT\r\nBy Paul Homewood\r\nThe average cost of second hand electric cars is plummeting by a “phenomenal amount” as they sit for “months on end” without any buyers.Research … [+3113 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "benzinga.com",
  //     "title": "SpaceX CEO Elon Musk Reiterates Love For Boeing",
  //     "description": "Tesla Inc and SpaceX CEO Elon Musk on Saturday reiterated his adoration for the Boeing 747. What Happened: “Wings can flex to crazy levels,” Musk wrote on X, formerly Twitter, in response to a user who shared a short, 22-second video of the Boeing 747’s wing …",
  //     "url": "https://biztoc.com/x/25c9acc5ac14dae9",
  //     "urlToImage": "https://c.biztoc.com/p/25c9acc5ac14dae9/s.webp",
  //     "publishedAt": "2023-09-25T04:58:10Z",
  //     "content": "Tesla Inc and SpaceX CEO Elon Musk on Saturday reiterated his adoration for the Boeing 747.What Happened: Wings can flex to crazy levels, Musk wrote on X, formerly Twitter, in response to a user who … [+269 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Fark.com"
  //     },
  //     "author": null,
  //     "title": "Any EV can now fast charge at the Tesla charger in, uh, Chugiak, Alaska [Plug]",
  //     "description": "Any EV can now fast charge at the Tesla charger in, uh, Chugiak, Alaska",
  //     "url": "https://www.fark.com/comments/13002004/Any-EV-can-now-fast-charge-at-Tesla-charger-in-uh-Chugiak-Alaska",
  //     "urlToImage": "https://usrimg-full.fark.net/R/R8/fark_R8UY5t3u096iYvZvFSp2-cmAEA4.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1696219200&Signature=vJfhUUzR840ZP4HAoAEeZrMllTI%3D",
  //     "publishedAt": "2023-09-25T04:50:13Z",
  //     "content": "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hurriyet Daily News"
  //     },
  //     "author": "hurriyetdailynews.com",
  //     "title": "As electric shift stalls, Volkswagen weighs up savings",
  //     "description": "Volkswagen's factory in the heart of the east German city of Dresden was conceived as a showcase for the auto giant's electric future but on a September afternoon the production line stands still.",
  //     "url": "https://www.hurriyetdailynews.com/as-electric-shift-stalls-volkswagen-weighs-up-savings-186524",
  //     "urlToImage": "https://image.hurimg.com/i/hurriyet/75/200x200/65100edd4e3fe028280a3633.jpg",
  //     "publishedAt": "2023-09-25T04:00:00Z",
  //     "content": "BERLIN\r\nVolkswagen's factory in the heart of the east German city of Dresden was conceived as a showcase for the auto giant's electric future but on a September afternoon the production line stands s… [+3550 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "news.yahoo.com",
  //     "title": "Tesla offers steep price cuts on Model 3 ahead of impending release of updated model: ‘I was really tempted to pull the trigger’",
  //     "description": "As the release of the refreshed Tesla Model 3 (aka Project Highland) draws nearer, the electric vehicle manufacturer is offering steeper discounts on its current (but soon-to-be outdated) Model 3s. Tesla began offering discounts earlier this year that saw the…",
  //     "url": "https://biztoc.com/x/08c6e6c5e2e9470f",
  //     "urlToImage": "https://c.biztoc.com/p/08c6e6c5e2e9470f/og.webp",
  //     "publishedAt": "2023-09-25T03:42:07Z",
  //     "content": "As the release of the refreshed Tesla Model 3 (aka Project Highland) draws nearer, the electric vehicle manufacturer is offering steeper discounts on its current (but soon-to-be outdated) Model 3s.Te… [+296 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Zachary Shahan",
  //     "title": "US Auto Industry Down 8% Since 2019",
  //     "description": "It’s time for another one of our quarterly US auto sales reports. No other media outlet compares US auto industry trends with as much history and depth as we do in these. First, before getting into the automaker comparisons for the second quarter of 2023 vers…",
  //     "url": "https://cleantechnica.com/2023/09/24/us-auto-industry-down-8-since-2019/",
  //     "urlToImage": "http://cleantechnica.com/files/2023/09/3-New-US-auto-sales-q2-2023-vs-q2-2022-q2-2021-q2-2020-q2-2019.png",
  //     "publishedAt": "2023-09-25T03:35:53Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIt’s time for another one of our quarterly US auto sales reports. No other media outlet compares US auto indu… [+5183 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "benzinga.com",
  //     "title": "AOC Plans To Trade In Her Tesla Model 3 For A Union-Made EV Amid Disagreement With Elon Musk",
  //     "description": "Rep. Alexandria Ocasio-Cortez (D-NY) revealed plans to trade her Tesla Model 3 for a union-made electric vehicle (EV) amidst increasing tension with Tesla Inc. TSLA CEO, Elon Musk, Business Insider reported. Ocasio-Cortez conveyed her intentions on “Face the …",
  //     "url": "https://biztoc.com/x/da166793bcc28097",
  //     "urlToImage": "https://c.biztoc.com/p/da166793bcc28097/s.webp",
  //     "publishedAt": "2023-09-25T03:18:10Z",
  //     "content": "Rep. Alexandria Ocasio-Cortez (D-NY) revealed plans to trade her Tesla Model 3 for a union-made electric vehicle (EV) amidst increasing tension with Tesla Inc. TSLA CEO, Elon Musk, Business Insider r… [+296 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "benzinga.com",
  //     "title": "Tesla's Optimus Stuns With Yoga Moves, But Elon Musk Plans A 'Pause' Button For Robot Rebellion",
  //     "description": "Tesla Inc.’s TSLA humanoid robot Optimus has showcased remarkable yoga abilities in a recent video release, but Elon Musk has outlined the need for a practical safety plan to halt the robot in the event of a potential uprising. What Happened: Tesla’s Optimus …",
  //     "url": "https://biztoc.com/x/23d8d335c5d9b2ee",
  //     "urlToImage": "https://c.biztoc.com/p/23d8d335c5d9b2ee/s.webp",
  //     "publishedAt": "2023-09-25T03:18:09Z",
  //     "content": "Tesla Inc.s TSLA humanoid robot Optimus has showcased remarkable yoga abilities in a recent video release, but Elon Musk has outlined the need for a practical safety plan to halt the robot in the eve… [+295 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Paul Tan's Automotive News"
  //     },
  //     "author": "Mick Chan",
  //     "title": "New Thailand PM Srettha Thavisin held talks with Elon Musk to discuss EV industry; investment expected",
  //     "description": "Recently-elected prime minister of Thailand, Srettha Thavisin met with Tesla CEO Elon Musk during a visit to New York, United States to discuss the electric vehicle industry, Reuters reported. Srettha was in New York to […]\nThe post New Thailand PM Srettha Th…",
  //     "url": "https://paultan.org/2023/09/25/new-thailand-pm-srettha-thavisin-held-talks-with-elon-musk-to-discuss-ev-industry-investment-expected/",
  //     "urlToImage": "https://paultan.org/image/2018/01/Elon-Musk-Tesla-Roadster-e1516767248114-1200x639.jpg",
  //     "publishedAt": "2023-09-25T02:44:14Z",
  //     "content": "Recently-elected prime minister of Thailand, Srettha Thavisin met with Tesla CEO Elon Musk during a visit to New York, United States to discuss the electric vehicle industry, Reuters reported. Sretth… [+1347 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "New Zealand Herald"
  //     },
  //     "author": "Chris Keall",
  //     "title": "Love affair over? A new objection emerges in EV buying intentions survey",
  //     "description": "A pre-election boom could be followed by a quieter 2024.",
  //     "url": "https://www.nzherald.co.nz/business/love-affair-over-a-new-objection-emerges-in-ev-buying-intentions-survey/LN27DY46ANCW7HZUDBXUFHSSJ4/",
  //     "urlToImage": "https://www.nzherald.co.nz/resizer/ViG5jRDrHaotPbuOK__jCs8oCOs=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/UE2SVTKPDVAK7O7RC2WOLMUPDA.jpg",
  //     "publishedAt": "2023-09-25T02:00:00Z",
  //     "content": "Sales of EVs, PHEVs and hybrids surged to a record high in June, accounting for 47 per cent of new vehicle sales during the month. Image / Getty CreativeIt seems New Zealands love affair with electri… [+6639 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Michael Harley, Contributor, \n Michael Harley, Contributor\n https://www.forbes.com/sites/michaelharley/",
  //     "title": "Tesla Isn’t The Only Company Offering Electric Class 8 Trucks",
  //     "description": "Tesla's pure-electric Class 8 'Semi' is capturing most of the the spotlight, but offerings from Volvo, Freightliner, and Kenworth are equally as innovative.",
  //     "url": "https://www.forbes.com/sites/michaelharley/2023/09/24/tesla-isnt-the-only-company-offering-electric-class-8-trucks/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6510e2b61c8e9fad0e18daf8/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-25T01:47:40Z",
  //     "content": "Coke Canada Bottling, distributor of Coca-Cola soft drinks, has taken delivery of six Volvo VNR ... [+] Electric trucks to provide distribution services along their celebrated Red Fleet delivery rout… [+5014 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Digitimes"
  //     },
  //     "author": "DIGITIMES",
  //     "title": "India roundup: Apple embraces growing smartphone market share in India",
  //     "description": "Apple is expected to see increased iPhone shipments and market share, with Foxconn planning to expand investments in India. India's local giants are ramping up their chip push to build a self-reliant semiconductor ecosystem.",
  //     "url": "https://www.digitimes.com/news/a20230925VL200/apple-chips+components-ic-manufacturing-ict-manufacturing-india-roundup-india-it+ce-mobile+telecom-mobile-devices-smartphone-south-asia.html",
  //     "urlToImage": "https://img.digitimes.com/newsshow/20230925vl200_files/1_2b.jpg",
  //     "publishedAt": "2023-09-25T01:23:25Z",
  //     "content": "Apple is expected to see increased iPhone shipments and market share, with Foxconn planning to expand investments in India. India's local giants are ramping up their chip push to build a self-reliant… [+2850 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CNBC"
  //     },
  //     "author": "Quek Jie Ann",
  //     "title": "Indonesia's EV ambitions could help boost investments in the rest of Southeast Asia",
  //     "description": "Indonesia's EV development is poised to be the \"gateway\" for further investments in ASEAN, and could play a major role in building the region's EV ecosystem.",
  //     "url": "https://www.cnbc.com/2023/09/25/indonesia-could-be-the-gateway-to-ev-investments-in-asean.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107304917-1695351487146-gettyimages-1589289830-AFP_33QY9CT.jpeg?v=1695602595&w=1920&h=1080",
  //     "publishedAt": "2023-09-25T00:43:15Z",
  //     "content": "Korean automobile manufacturer Kia displays the electric vehicle \"EV6 GT-Line\" during the 30th Gaikindo Indonesia International Auto Show in Tangerang on August 10, 2023.\r\nIndonesia's EV-friendly pol… [+3479 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "thestreet.com",
  //     "title": "How long will the UAW strike last?",
  //     "description": "The United Auto Workers and the three big U.S. manufacturers continued to negotiate on a new contract over the weekend as some 18,000 workers were out picketing . But there was little evidence late Sunday an agreement is coming soon. In fact, the strike could…",
  //     "url": "https://biztoc.com/x/264d4d5862b88aab",
  //     "urlToImage": "https://c.biztoc.com/p/264d4d5862b88aab/s.webp",
  //     "publishedAt": "2023-09-25T00:38:39Z",
  //     "content": "The United Auto Workers and the three big U.S. manufacturers continued to negotiate on a new contract over the weekend as some 18,000 workers were out picketing . But there was little evidence late S… [+306 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "breitbart-news",
  //       "name": "Breitbart News"
  //     },
  //     "author": "Joshua Klein, Joshua Klein",
  //     "title": "Outrage over White Miss Universe Zimbabwe Winner: ‘An Assault on Zim Women’",
  //     "description": "The recent crowning of a white Zimbabwean as the nation’s Miss Universe representative was met with much derision after many voiced their disapproval over the winner’s race in a country where white people make up a small minority.",
  //     "url": "https://www.breitbart.com/politics/2023/09/24/outrage-white-miss-universe-zimbabwe-winner-assault-zim-women/",
  //     "urlToImage": "https://media.breitbart.com/media/2023/09/380875070_1969669103414173_1710765043642517924_n-640x335.jpg",
  //     "publishedAt": "2023-09-25T00:21:49Z",
  //     "content": "The recent crowning of a white Zimbabwean as the nations Miss Universe representative was met with much derision after many voiced their disapproval over the winners race in a country where white peo… [+9521 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "GlobeNewswire"
  //     },
  //     "author": "DataHorizzon Research",
  //     "title": "Battery Energy Storage System Market Size to Reach USD 38.3 Billion By 2032 CAGR: 14.6%. Report By DataHorizzon Research",
  //     "description": "According to DataHorizzon Research, The battery energy storage system market size was valued at USD 9.9 Billion in 2022 and is expected to have a market size of USD 38.3 Billion by 2032 with a CAGR of 14.6%. According to DataHorizzon Research, The battery ene…",
  //     "url": "https://www.globenewswire.com/news-release/2023/09/24/2748284/0/en/Battery-Energy-Storage-System-Market-Size-to-Reach-USD-38-3-Billion-By-2032-CAGR-14-6-Report-By-DataHorizzon-Research.html",
  //     "urlToImage": "https://ml.globenewswire.com/Resource/Download/ee0903f0-279f-4537-8a89-666461d3d324",
  //     "publishedAt": "2023-09-24T23:30:00Z",
  //     "content": "Fort Collins, Colorado, Sept. 24, 2023 (GLOBE NEWSWIRE) -- DataHorizzon Research Published a report titled, \"Battery Energy Storage System Market Size, Growth, Share, Statistics Report, By Battery Ty… [+8937 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "[Removed]"
  //     },
  //     "author": null,
  //     "title": "[Removed]",
  //     "description": "[Removed]",
  //     "url": "https://removed.com",
  //     "urlToImage": null,
  //     "publishedAt": "1970-01-01T00:00:00Z",
  //     "content": "[Removed]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "businessinsider.com",
  //     "title": "AOC wants to trade her Tesla for a union-made EV after clash with Musk",
  //     "description": "AOC said on Face the Nation on Sunday that she wants to trade in her Tesla for a union-made EV. • AOC said she bought her Tesla Model 3 during the pandemic when EVs were the \"safest way\" to travel. • The New York lawmaker has repeatedly clashed with Tesla CEO…",
  //     "url": "https://biztoc.com/x/e588b1764ad494f1",
  //     "urlToImage": "https://c.biztoc.com/p/e588b1764ad494f1/og.webp",
  //     "publishedAt": "2023-09-24T22:28:11Z",
  //     "content": "AOC said on Face the Nation on Sunday that she wants to trade in her Tesla for a union-made EV.AOC said she bought her Tesla Model 3 during the pandemic when EVs were the \"safest way\" to travel.The N… [+285 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "zerohedge.com",
  //     "title": "Elon Musk's Starlink Exceeds 2 Million Users, Doubling In Just Nine Months",
  //     "description": "Elon Musk's Starlink Exceeds 2 Million Users, Doubling In Just Nine Months Democrats are probably even more furious with Elon Musk's huge success with SpaceX-owned space internet company Starlink now boasting over 2 million active users worldwide. \"Starlink i…",
  //     "url": "https://biztoc.com/x/e746734c06d61817",
  //     "urlToImage": "https://c.biztoc.com/p/e746734c06d61817/s.webp",
  //     "publishedAt": "2023-09-24T22:22:05Z",
  //     "content": "Elon Musk's Starlink Exceeds 2 Million Users, Doubling In Just Nine Months\r\nDemocrats are probably even more furious with Elon Musk's huge success with SpaceX-owned space internet company Starlink no… [+282 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Kirsten Korosec",
  //     "title": "A conversation with Cruise's Kyle Vogt, Bird scoops up Spin, and self-driving trucks live to see another day in Cali",
  //     "description": "A conversation with Cruise's Kyle Vogt, Bird scoops up Spin, and self-driving trucks live to see another day in Calitechcrunch.com",
  //     "url": "https://techcrunch.com/2023/09/24/a-conversation-with-cruises-kyle-vogt-bird-scoops-up-spin-and-self-driving-trucks-live-to-see-another-day-in-cali/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/53202357088_0cc74eda92_k.jpg?resize=1200,800",
  //     "publishedAt": "2023-09-24T21:56:34Z",
  //     "content": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here  just click The Station  to receive the newsletter every weekend in your inbox. Subscribe for free. \r\nWelcome b… [+8651 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Bangkok Post"
  //     },
  //     "author": "Bangkok Post",
  //     "title": "PM returns with pledges",
  //     "description": "Thailand can expect to receive at least US$5 billion in investments from Tesla, Google and Microsoft in the coming years, according to Prime Minister Srettha Thavisin on Sunday.",
  //     "url": "https://www.bangkokpost.com/thailand/politics/2652219/pm-returns-with-pledges",
  //     "urlToImage": "https://static.bangkokpost.com/media/content/20230925/c1_2652219_230925050819_700.jpg",
  //     "publishedAt": "2023-09-24T21:30:00Z",
  //     "content": "Thailand can expect to receive at least US$5 billion in investments from Tesla, Google and Microsoft in the coming years, according to Prime Minister Srettha Thavisin on Sunday.\r\nHe announced the ple… [+3564 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Natalie Colley, Contributor, \n Natalie Colley, Contributor\n https://www.forbes.com/sites/nataliecolley/",
  //     "title": "Depending Solely On Portfolio Income Might Not Be Your Best Bet In Retirement",
  //     "description": "Depending solely on portfolio income may not be the best retirement strategy. Those who are intent to do so will need a bigger portfolio.",
  //     "url": "https://www.forbes.com/sites/nataliecolley/2023/09/24/depending-solely-on-portfolio-income-might-not-be-your-best-bet-in-retirement/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6510a735100a5a09c29a9191/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-24T21:29:20Z",
  //     "content": "A strong desire to leave their nest egg untouched is one reason retirees spend significantly less ... [+] than they can actually afford to spend during their retirement years.\r\ngetty\r\nIn my role as a… [+6495 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Bill Koenig, Contributor, \n Bill Koenig, Contributor\n https://www.forbes.com/sites/billkoenig/",
  //     "title": "How EV Shift Affects U.S. Autoworker Strike",
  //     "description": "The automakers are dealing with regulatory pressure to ramp up EV output.",
  //     "url": "https://www.forbes.com/sites/billkoenig/2023/09/24/how-ev-shift-affects-us-autoworker-strike/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6510a08a48a604c509307fc1/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-24T20:56:58Z",
  //     "content": "An Electric Vehicle charging station in Monterey Park, California on May 18, 2021. - President Joe ... [+] Biden's administration continues the push for alternative forms of transportation and energy… [+2697 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "aol.com",
  //     "title": "AOC says she's looking to trade in her Tesla for a union-made EV after clash with Elon Musk",
  //     "description": "None AOC said on Face the Nation on Sunday that she wants to trade in her Tesla for a union-made EV. • None AOC said she bought her Tesla Model 3 during the pandemic when EVs were the \"safest way\" to travel. • None The New York lawmaker has repeatedly clashed…",
  //     "url": "https://biztoc.com/x/a80b73281209e7f4",
  //     "urlToImage": "https://c.biztoc.com/p/a80b73281209e7f4/s.webp",
  //     "publishedAt": "2023-09-24T20:56:07Z",
  //     "content": "None AOC said on Face the Nation on Sunday that she wants to trade in her Tesla for a union-made EV.None AOC said she bought her Tesla Model 3 during the pandemic when EVs were the \"safest way\" to tr… [+282 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Freerepublic.com"
  //     },
  //     "author": "Vehicle Suggest",
  //     "title": "BYD Seagull EV: How China’s $11,400 EV Could Revolutionize the US Market",
  //     "description": "Build Your Dream (BYD), the rising star of electric mobility in China was introduced at Auto Shanghai earlier this year. BYD Auto’s Seagull is being touted as a game-changer for the EV industry. The 5-door hatchback is the smallest vehicle in BYD’s range of e…",
  //     "url": "https://freerepublic.com/focus/f-news/4184667/posts",
  //     "urlToImage": null,
  //     "publishedAt": "2023-09-24T20:53:58Z",
  //     "content": "Skip to comments.\r\nBYD Seagull EV: How Chinas $11,400 EV Could Revolutionize the US MarketVehicle Suggest ^\r\n | varnika jain\r\nPosted on 09/24/2023 1:53:58 PM PDT by cba123\r\nBuild Your Dream (BYD), th… [+5507 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "dailymail.co.uk",
  //     "title": "Alexandria Ocasio-Cortez stumbles as she's called out for owning a pricey Tesla electric vehicle rather than a",
  //     "description": "Viewers were left scratching their heads on Sunday morning as Democrat radical Alexandria Ocasio-Cortez explained why she still owns a Tesla despite claiming she planned to replace it with a union-made model. The New York Congresswoman faced a backlash in 202…",
  //     "url": "https://biztoc.com/x/b019188018b96176",
  //     "urlToImage": "https://c.biztoc.com/p/b019188018b96176/og.webp",
  //     "publishedAt": "2023-09-24T20:30:09Z",
  //     "content": "Viewers were left scratching their heads on Sunday morning as Democrat radical Alexandria Ocasio-Cortez explained why she still owns a Tesla despite claiming she planned to replace it with a union-ma… [+302 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "businessinsider.com",
  //     "title": "AOC says she's looking to trade in her Tesla for a union-made EV after clash with Elon Musk",
  //     "description": "Rep. Alexandria Ocasio-Cortez once again said she wants to trade in her Tesla for a union-made EV. Tom Williams/CQ Roll Call AOC said on Face the Nation on Sunday that she wants to trade in her Tesla for a union-made EV. AOC said she bought her Tesla Model 3 …",
  //     "url": "https://biztoc.com/x/89b1829d75ff7e51",
  //     "urlToImage": "https://c.biztoc.com/p/89b1829d75ff7e51/s.webp",
  //     "publishedAt": "2023-09-24T20:14:08Z",
  //     "content": "Rep. Alexandria Ocasio-Cortez once again said she wants to trade in her Tesla for a union-made EV.Tom Williams/CQ Roll CallAOC said on Face the Nation on Sunday that she wants to trade in her Tesla f… [+301 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "business-insider",
  //       "name": "Business Insider"
  //     },
  //     "author": "Lakshmi Varanasi",
  //     "title": "AOC says she's looking to trade in her Tesla for a union-made EV after clash with Elon Musk",
  //     "description": "AOC reiterated on Face the Nation on Sunday that she wants to trade in her Tesla for a union-made EV.",
  //     "url": "https://www.businessinsider.com/aoc-trade-tesla-uaw-made-ev-clash-musk-labor-2023-9",
  //     "urlToImage": "https://i.insider.com/64010358934c2c0018026971?width=1200&format=jpeg",
  //     "publishedAt": "2023-09-24T20:05:34Z",
  //     "content": "Rep. Alexandria Ocasio-Cortez once again said she wants to trade in her Tesla for a union-made EV.Tom Williams/CQ Roll Call\r\n<ul>\n<li>AOC said on Face the Nation on Sunday that she wants to trade in … [+1651 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "fool.com",
  //     "title": "Down 11% In 1 Week, Is It Time to Buy Tesla Stock?",
  //     "description": "Shares of electric-car maker and clean energy company Tesla (TSLA -4.23%) were hammered last week, falling more than 11%. Though much of this pullback was likely driven by a broader-market sell-off, including a nearly 4% pullback in the Nasdaq Composite, some…",
  //     "url": "https://biztoc.com/x/6dbcdebe95997c85",
  //     "urlToImage": "https://c.biztoc.com/p/6dbcdebe95997c85/og.webp",
  //     "publishedAt": "2023-09-24T20:02:07Z",
  //     "content": "Shares of electric-car maker and clean energy company Tesla (TSLA -4.23%) were hammered last week, falling more than 11%. Though much of this pullback was likely driven by a broader-market sell-off, … [+259 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "IANS",
  //     "title": "Elon Musk's biography scores bumper sale, billionaire says 'cool'",
  //     "description": "The biography of Elon Musk by Walter Isaacson had a successful first week of sales, selling 92,560 copies. This makes it the second best-selling first week title after Isaacson's biography of Steve Jobs. The book, which delves into Musk's personal life and re…",
  //     "url": "https://economictimes.indiatimes.com/news/international/business/elon-musks-biography-scores-bumper-sale-billionaire-says-cool/articleshow/103913989.cms",
  //     "urlToImage": "https://img.etimg.com/thumb/msid-103913999,width-1200,height-630,imgsize-888453,overlay-economictimes/photo.jpg",
  //     "publishedAt": "2023-09-24T19:11:42Z",
  //     "content": "Elon Musk's biography by American author-journalist Walter Isaacson saw a robust sale in the first week of its launch, selling 92,560 copies.The sale of the biography of Tesla founder and X (formerly… [+1912 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Brooke Crothers, Contributor, \n Brooke Crothers, Contributor\n https://www.forbes.com/sites/brookecrothers/",
  //     "title": "Toyota’s Tesla Problem",
  //     "description": "Toyota has for decades dominated the California car market. That is changing rapidly with the rise of Tesla.",
  //     "url": "https://www.forbes.com/sites/brookecrothers/2023/09/24/toyotas-tesla-problem/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/650f8626a55cec681081a7a3/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-24T19:02:32Z",
  //     "content": "SHANGHAI, CHINA - APRIL 19: A Toyota bZ4X SUV is on display during the 19th Shanghai International ... [+] Automobile Industry Exhibition (Auto Shanghai 2021) at National Exhibition and Convention Ce… [+3868 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "barrons.com",
  //     "title": "Tesla’s Self-Driving Software Has Quite a Personality. What Barron’s Test Drives Reveal",
  //     "description": "Tesla ‘s highest-level autonomous driving software, called Full Self Driving or FSD, generates strong opinions. Tesla CEO Elon Musk believes it is the key to trillions in value creation. Detractors call it “vaporware” and dangerous. Barron’s had to ...#tesla …",
  //     "url": "https://biztoc.com/x/fcf091fc964147ee",
  //     "urlToImage": "https://c.biztoc.com/p/fcf091fc964147ee/s.webp",
  //     "publishedAt": "2023-09-24T18:48:09Z",
  //     "content": "Tesla s highest-level autonomous driving software, called Full Self Driving or FSD, generates strong opinions. Tesla CEO Elon Musk believes it is the key to trillions in value creation. Detractors ca… [+134 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Barron's"
  //     },
  //     "author": "Al Root",
  //     "title": "Tesla's Self-Driving Software Has Quite a Personality. What Barron's Test Drives Reveal.",
  //     "description": "This Barron's reporter has been testing Tesla's Full Self Driving product for a month. We have some thoughts.",
  //     "url": "https://www.barrons.com/articles/tesla-self-driving-software-barrons-test-drive-db943a5f",
  //     "urlToImage": "https://images.barrons.com/im-15266132/social",
  //     "publishedAt": "2023-09-24T18:40:14Z",
  //     "content": "Tesla\r\n s highest-level autonomous driving software, called Full Self Driving or FSD, generates strong opinions. \r\n Tesla\r\n CEO Elon Musk believes it is the key to trillions in value creation. Detrac… [+6196 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "electrek.co",
  //     "title": "Tesla releases update on Optimus robot with video looking like CGI",
  //     "description": "Tesla has released an update with progress on its Optimus humanoid robot with a video that almost looks like CGI. Optimus, also known as Tesla Bot, has not been taken seriously by many outside of the more hardcore Tesla fans, and for good reasons. When it was…",
  //     "url": "https://biztoc.com/x/3d1df8bcdb6d2760",
  //     "urlToImage": "https://c.biztoc.com/p/3d1df8bcdb6d2760/og.webp",
  //     "publishedAt": "2023-09-24T18:08:10Z",
  //     "content": "Tesla has released an update with progress on its Optimus humanoid robot with a video that almost looks like CGI.Optimus, also known as Tesla Bot, has not been taken seriously by many outside of the … [+277 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Thegatewaypundit.com"
  //     },
  //     "author": "Cristina Laila",
  //     "title": "WOW! CBS’s Margaret Brennan Calls Out Hypocrite AOC For Owning a Non-Union-Made Tesla (VIDEO)",
  //     "description": "Democrat Rep.\nThe post WOW! CBS’s Margaret Brennan Calls Out Hypocrite AOC For Owning a Non-Union-Made Tesla (VIDEO) appeared first on The Gateway Pundit.",
  //     "url": "https://www.thegatewaypundit.com/2023/09/wow-cbss-margaret-brennan-calls-hypocrite-aoc-owning/",
  //     "urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/0-1405.jpg",
  //     "publishedAt": "2023-09-24T18:00:28Z",
  //     "content": "Democrat Rep. Alexandria Ocasio-Cortez on Sunday appeared on CBS’s “Face the Nation” to discuss the border crisis, auto union strike, Senator Menendez’s bribery indictment and more.\r\nCBS’s Margaret B… [+1445 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "New York Post"
  //     },
  //     "author": "Ryan King",
  //     "title": "AOC partly blames US sanctions against Venezuelan dictator for migrant crisis",
  //     "description": "AOC later conceded that socialist Venezuelan President Nicolás Maduro and the massive economic collapse that has occurred under his regime is \"absolutely\" responsible for the migrant influx as well.",
  //     "url": "https://nypost.com/2023/09/24/aoc-partly-blames-us-sanctions-against-venezuelan-dicator-for-migrant-crisis/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000043936520.jpg?quality=75&strip=all&w=1024",
  //     "publishedAt": "2023-09-24T17:58:06Z",
  //     "content": "New York Rep. Alexandria Ocasio-Cortez on Sunday partly blamed US sanctions targeting Venezuela’s dictator regime for the migrant crisis ravaging the Big Apple and the country.\r\n“US sanctions that we… [+4982 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "NDTV News"
  //     },
  //     "author": null,
  //     "title": "Tesla Shares Video Of Humanoid Robot Doing Yoga, Elon Musk Says...",
  //     "description": "The robot performs yoga poses that require standing on one leg and extending its limbs, displaying its balance and flexibility.",
  //     "url": "https://www.ndtv.com/feature/namaste-tesla-shares-video-of-humanoid-robot-doing-yoga-elon-musk-says-this-4420216",
  //     "urlToImage": "https://c.ndtvimg.com/2023-09/7jsr4bj8_robot-doing-yoga_625x300_24_September_23.jpg",
  //     "publishedAt": "2023-09-24T17:25:09Z",
  //     "content": "The video also showcases the ability of the robot to sort objects with ease\r\nTesla on Sunday shared a fascinating video of its humanoid robot Optimus performing a variety of tasks including doing yog… [+2805 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": null,
  //     "title": "Full transcript of \"Face the Nation,\" Sept. 24, 2023",
  //     "description": "On this \"Face the Nation\" broadcast, Rep. Alexandria Ocasio-Cortez and Ukrainian first lady Olena Zelenska join Margaret Brennan.",
  //     "url": "https://www.cbsnews.com/news/face-the-nation-full-transcript-09-24-2023/",
  //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/09/24/5eeef1cc-a53b-4756-8aa1-2d3319c12044/thumbnail/1200x630/8a1867a1a0e3af5f643f7b763aa8dbb4/924-ftn-page2-2316704-640x360.jpg?v=f5251b37272e6b1bc4e5456ab4445a67",
  //     "publishedAt": "2023-09-24T17:14:44Z",
  //     "content": "On this \"Face the Nation\" broadcast, moderated by Margaret Brennan: \r\n<ul><li>Democratic Rep. Alexandria Ocasio-Cortez of New York</li><li>Republican Rep. Tony Gonzales of Texas</li><li>Democratic Se… [+45950 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Finofilipino.org"
  //     },
  //     "author": "Fino",
  //     "title": "Este safari ofreció “la experiencia completa”",
  //     "description": "when you pay for the full experience of nature pic.twitter.com/pxr0G3Sq7v — Insane Reality Leaks (@InsaneRealitys) September 23, 2023 [Ver vídeo en X]\nVer post completo: Este safari ofreció “la experiencia completa”",
  //     "url": "https://finofilipino.org/este-safari-ofrecio-la-experiencia-completa/",
  //     "urlToImage": "https://finofilipino.org/wp-content/uploads/2023/09/ertgwrthrtyj.jpg",
  //     "publishedAt": "2023-09-24T16:40:00Z",
  //     "content": "El secreto detrás de estos resultados los guarda, en parte, una enorme máquina denominada Gigapress. Esta enorme máquina consigue unir hasta 70 piezas del subchasis trasero del Tesla Model Y en una s… [+776 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Electrek"
  //     },
  //     "author": "Fred Lambert",
  //     "title": "Tesla releases update on Optimus robot with video looking like CGI",
  //     "description": "Tesla has released an update with progress on its Optimus humanoid robot with a video that almost looks like CGI.\n more…\nThe post Tesla releases update on Optimus robot with video looking like CGI appeared first on Electrek.",
  //     "url": "https://electrek.co/2023/09/24/tesla-update-optimus-robot-video-cgi/",
  //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/09/Tesla-Optimus-bot-robot-sorting.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //     "publishedAt": "2023-09-24T16:22:38Z",
  //     "content": "Tesla has released an update with progress on its Optimus humanoid robot with a video that almost looks like CGI.\r\nOptimus, also known as Tesla Bot, has not been taken seriously by many outside of th… [+1721 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Michael Barnard",
  //     "title": "Could Hawaii Repurpose Pearl Harbor’s Fuel Storage For Pumped Hydro?",
  //     "description": "Someone should look seriously at Red Hill and do more than this napkin math. 140 MWh of high-efficiency storage that reuses existing infrastructure isn't something that should be dismissed out of hand.",
  //     "url": "https://cleantechnica.com/2023/09/24/could-hawaii-repurpose-pearl-harbors-fuel-storage-for-pumped-hydro/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/09/michaelbarnard_caverns_under_Hawaiian_hills_filled_with_water_c_cf5c1a47-6fee-4e60-ad05-16857992df55-800x400.png",
  //     "publishedAt": "2023-09-24T16:16:54Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nBack in World War II, the American military had a problem, the same one the Russians are facing today. It nee… [+9616 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Jennifer Sensiba",
  //     "title": "Pepsi Isn’t The Only Company Hauling Sodas With Electric Trucks",
  //     "description": "When it comes to electric semi trucks, the Tesla semi seems to get most of the attention. Every move a Tesla semi makes on the open road seems to get filmed by somebody and posted to social media. For Tesla fanatics, the Semi is the end-all-be-all of electric…",
  //     "url": "https://cleantechnica.com/2023/09/24/pepsi-isnt-the-only-company-hauling-sodas-with-electric-trucks/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/09/Volvo-VNR-Electric-Coca-Cola-Canada-Press-Photo-2000x1000-1-800x400.png",
  //     "publishedAt": "2023-09-24T15:45:59Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWhen it comes to electric semi trucks, the Tesla semi seems to get most of the attention. Every move a Tesla … [+7197 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "benzinga.com",
  //     "title": "Cathie Wood Offloads Whopping $47M Of Tesla Last Week Amid Stock's Lean Run And Doubles Down On This AI Stock",
  //     "description": "Cathie Wood was on a Tesla, Inc. TSLA selling spree in the past week but did add a few stocks to her portfolio of actively managed exchange-traded funds. Tesla Remains A Sell: Ark through its flagship Ark Innovation ETF ARKK and Ark Next Generation Internet E…",
  //     "url": "https://biztoc.com/x/bd38d85cec5acfb6",
  //     "urlToImage": "https://c.biztoc.com/p/bd38d85cec5acfb6/s.webp",
  //     "publishedAt": "2023-09-24T15:36:09Z",
  //     "content": "Cathie Wood was on a Tesla, Inc. TSLA selling spree in the past week but did add a few stocks to her portfolio of actively managed exchange-traded funds.Tesla Remains A Sell: Ark through its flagship… [+310 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "benzinga.com",
  //     "title": "Stephen Fry's AI Controversy, Google Bard Gets An Upgrade, Palantir CEO On AI Dangers And More: Top News From AI This Week",
  //     "description": "The past week was brimming with a mix of controversy and innovation in the world of artificial intelligence (AI). From misuse allegations to regulatory scrutiny, and from bullish market predictions to tech advancements, the AI sector has kept everyone on thei…",
  //     "url": "https://biztoc.com/x/fb9467b4936ce5e8",
  //     "urlToImage": "https://c.biztoc.com/p/fb9467b4936ce5e8/s.webp",
  //     "publishedAt": "2023-09-24T15:36:08Z",
  //     "content": "The past week was brimming with a mix of controversy and innovation in the world of artificial intelligence (AI). From misuse allegations to regulatory scrutiny, and from bullish market predictions t… [+304 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Jennifer Sensiba",
  //     "title": "There’s No Reason To Keep Riding The Gas Price Rollercoaster",
  //     "description": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News! A recent article at USA Today tells the woeful tale of gas prices rising, again. But in instead of doing the typical “I told you so!” thing that many EV drivers lacking s…",
  //     "url": "https://cleantechnica.com/2023/09/24/theres-no-reason-to-keep-riding-the-gas-price-rollercoaster/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/08/Stinger-and-Pegasus-Desert-2000x1000-1-800x400.jpg",
  //     "publishedAt": "2023-09-24T14:45:52Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nA recent article at USA Todaytells the woeful tale of gas prices rising, again. But in instead of doing the t… [+7405 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Stockcharts.com"
  //     },
  //     "author": "Tom Bowley",
  //     "title": "I Say We're Setting Up For A Major Bottom",
  //     "description": "It's almost impossible to call market tops and market bottoms using basic technical analysis tools like price and volume. Don't get me wrong, that combination is my favorite during trend-following periods. But trying to spot bearish reversals is difficult whe…",
  //     "url": "https://stockcharts.com/articles/tradingplaces/2023/09/i-say-were-setting-up-for-a-ma-496.html",
  //     "urlToImage": "https://stockcharts.com/img/articles/2023/09/24/992c9119-7e85-41ed-b212-fec23ca030f2.jpg",
  //     "publishedAt": "2023-09-24T14:43:28Z",
  //     "content": "It's almost impossible to call market tops and market bottoms using basic technical analysis tools like price and volume. Don't get me wrong, that combination is my favorite during trend-following pe… [+2847 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": null,
  //     "title": "Full transcript: Rep. Alexandria Ocasio-Cortez on \"Face the Nation\"",
  //     "description": "The following is the full transcript of an interview with Democratic Rep. Alexandria Ocasio-Cortez of New York that aired Sunday, Sept. 24, 2023, on \"Face the Nation.\"",
  //     "url": "https://www.cbsnews.com/news/alexandria-ocasio-cortez-face-the-nation-full-transcript-09-24-2023/",
  //     "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/09/24/80b05e8d-070f-4b57-a346-8ffef43d3a10/thumbnail/1200x630g2/fe2434f586337926a0b5392d49c12003/aoc.jpg?v=f5251b37272e6b1bc4e5456ab4445a67",
  //     "publishedAt": "2023-09-24T14:40:20Z",
  //     "content": "The following is the full transcript of an interview with Democratic Rep. Alexandria Ocasio-Cortez of New York that aired Sunday, Sept. 24, 2023, on \"Face the Nation.\"\r\nMARGARET BRENNAN: Good morning… [+16896 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Times of Israel"
  //     },
  //     "author": null,
  //     "title": "Netanyahu lands back in Israel at largely empty airport ahead of Yom Kippur",
  //     "description": "Premier and his delegation, dogged by protesters on entire US trip, arrive hours before Jewish Day of Atonement set to begin",
  //     "url": "https://www.timesofisrael.com/netanyahu-lands-back-in-israel-at-largely-empty-airport-ahead-of-yom-kippur/",
  //     "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/09/airport-1-1024x640.jpg",
  //     "publishedAt": "2023-09-24T14:29:40Z",
  //     "content": "Prime Minister Benjamin Netanyahu and his delegation to the US landed back in Israel on Sunday afternoon and were received at a mainly empty Ben Gurion Airport, hours before Yom Kippur is set to begi… [+6163 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "BusinessLine"
  //     },
  //     "author": "S Ronendra Singh",
  //     "title": "Biofuel in petrol stations up to 20 per cent is still a far way: Mercedes-Benz’s MD",
  //     "description": "Luxury car market in India is booming, with young professionals flocking to showrooms to make a lifestyle statement. Santosh Iyer, MD & CEO of Mercedes-Benz India, shares current trends & market buzz.",
  //     "url": "https://www.thehindubusinessline.com/news/biofuel-in-petrol-stations-up-to-20-per-cent-is-still-a-far-way-mercedes-benzs-md/article67341132.ece",
  //     "urlToImage": "https://bl-i.thgim.com/public/incoming/y3vquy/article67341673.ece/alternates/LANDSCAPE_1200/IMG_Santosh_Iyer__3___1__2_1_HIAVS9VE.jpg",
  //     "publishedAt": "2023-09-24T14:24:35Z",
  //     "content": "The luxury car market in India is seeing the best year in the current financial year. Companies are noticing more young professionals thronging the showrooms to grab their latest machines, which is b… [+8563 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "BusinessLine"
  //     },
  //     "author": "S Ronendra Singh",
  //     "title": "Biofuel in petrol stations up to 20 per cent is still a far way: Mercedes-Benz’s MD",
  //     "description": "Luxury car market in India is booming, with young professionals flocking to showrooms to make a lifestyle statement. Santosh Iyer, MD & CEO of Mercedes-Benz India, shares current trends & market buzz.",
  //     "url": "https://www.thehindubusinessline.com/companies/biofuel-in-petrol-stations-up-to-20-per-cent-is-still-a-far-way-mercedes-benzs-md/article67341132.ece",
  //     "urlToImage": "https://bl-i.thgim.com/public/incoming/l6e2w9/article67341673.ece/alternates/LANDSCAPE_1200/IMG_Santosh_Iyer__3___1__2_1_HIAVS9VE.jpg",
  //     "publishedAt": "2023-09-24T14:24:35Z",
  //     "content": "The luxury car market in India is seeing the best year in the current financial year. Companies are noticing more young professionals thronging the showrooms to grab their latest machines, which is b… [+8563 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Steve Hanley",
  //     "title": "Clarence Thomas Is Smack Dab In The Middle Of The Regulatory Fight",
  //     "description": "Clarence Thomas may soon be in a position to cast a vote in a case that could bring the entire regulatory process crashing down.",
  //     "url": "https://cleantechnica.com/2023/09/24/clarence-thomas-is-smack-dab-in-the-middle-of-the-regulatory-fight/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/04/Supreme-Court-pexels-david-dibert.jpeg",
  //     "publishedAt": "2023-09-24T14:15:22Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nPoor Clarence Thomas. After graduating from Yale law school, he was deeply offended that all of his classmate… [+12637 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Ambcrypto.com"
  //     },
  //     "author": "Suzuki Shillsalot",
  //     "title": "I asked ChatGPT about Dogecoin’s future, the bot had a cryptic answer",
  //     "description": "I asked ChatGPT to forecast the future performance of Dogecoin, the leading memecoin that is Elon Musk's favorite.",
  //     "url": "https://ambcrypto.com/chatgpt-doge-price-prediction-27/",
  //     "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/09/capture-171-1000x600.png",
  //     "publishedAt": "2023-09-24T14:05:33Z",
  //     "content": "Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the writers opinion.\r\nDogecoin [DOGE] is the most popular memecoin whi… [+7572 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Ambcrypto.com"
  //     },
  //     "author": "Suzuki Shillsalot",
  //     "title": "What ChatGPT says about Ethereum Classic as 2023 draws to a close",
  //     "description": "ChatGPT predicts Ethereum Classic will reach the price range of $50-$100 towards the end of 2023. But its on-chain metrics don't concur.",
  //     "url": "https://ambcrypto.com/chatgpt-ethereum-classic-price-prediction-27/",
  //     "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/09/capture-181-1000x600.png",
  //     "publishedAt": "2023-09-24T13:50:14Z",
  //     "content": "Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the writers opinion.\r\nOn 18 September, Ethereum Classic [ETC] momentar… [+7275 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Jennifer Sensiba",
  //     "title": "Bird Acquires Spin Scooters, Becomes Largest Micromobility Company",
  //     "description": "Rental scooters, especially those dropped off and left on the sidewalks in cities, have been a bit of a touch-and-go proposition over the last few years. But, a recent deal shows that they can become big business. The History of Bird Bird, a micromobility com…",
  //     "url": "https://cleantechnica.com/2023/09/24/bird-acquires-spin-scooters-becomes-largest-micromobility-company/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/09/Bird-Spin-Logo-2000x1000-1.png",
  //     "publishedAt": "2023-09-24T13:45:06Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nRental scooters, especially those dropped off and left on the sidewalks in cities, have been a bit of a touch… [+7724 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": "Lesley Stahl",
  //     "title": "Inside Consumer Reports",
  //     "description": "With an annual testing budget well over $30 million, the non-profit organization behind the magazine and website, with 60 labs and teams of engineers and investigators, puts thousands of consumer goods through their paces.",
  //     "url": "https://www.cbsnews.com/news/inside-consumer-reports/",
  //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/09/23/5590ee89-b6df-4bd3-9328-7fdc9b17c5ea/thumbnail/1200x630g2/7bfe230b83ff5d9d91db09318b83907f/consumer-reports-car-test-track-1280.jpg?v=f5251b37272e6b1bc4e5456ab4445a67",
  //     "publishedAt": "2023-09-24T13:23:14Z",
  //     "content": "There's any number of websites filled with product reviews and recommendations, but really, which ones can you trust? If experience is any test of credibility, Consumer Reports, with its website and … [+7317 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Tina Casey",
  //     "title": "Solar Cells Boosted By This One Weird Trick (Spoiler Alert: Fish Oil)",
  //     "description": "Fish oil can help improve the efficiency of \"decoupled\" systems that combine excess heat recovery with solar cells.",
  //     "url": "https://cleantechnica.com/2023/09/24/solar-cells-boosted-by-this-one-weird-trick-spoiler-alert-fish-oil/",
  //     "urlToImage": "https://cleantechnica.com/files/2020/07/CleanTechnica-Solar-Panel-Farm-2-scaled-e1627954695991.jpg",
  //     "publishedAt": "2023-09-24T13:15:14Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nResearchers have come up with all sorts of innovative new chemistries to boost the efficiency of solar cells,… [+8171 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "NRDC",
  //     "title": "Where Does Your Member of Congress Stand On Offshore Drilling?",
  //     "description": "NRDC has updated itss digital tool to track where members of Congress stand on offshore oil and gas drilling.",
  //     "url": "https://cleantechnica.com/2023/09/24/where-does-your-member-of-congress-stand-on-offshore-drilling/",
  //     "urlToImage": "https://cleantechnica.com/files/2021/03/IMG_2338-e1616248876928.jpg",
  //     "publishedAt": "2023-09-24T12:45:11Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\n Digital tool to track where members of Congress stand on offshore oil and gas drilling. \r\nAs summer winds do… [+5021 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Securityaffairs.com"
  //     },
  //     "author": "Pierluigi Paganini",
  //     "title": "Security Affairs newsletter Round 438 by Pierluigi Paganini – International edition",
  //     "description": "A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free for you in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. Govern…",
  //     "url": "https://securityaffairs.com/151293/breaking-news/security-affairs-newsletter-round-438-by-pierluigi-paganini-international-edition.html",
  //     "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png",
  //     "publishedAt": "2023-09-24T12:28:59Z",
  //     "content": "Security Affairs newsletter Round 438 by Pierluigi Paganini International edition\r\n | National Student Clearinghouse data breach impacted approximately 900 US schools\r\n | Government of Bermuda blames… [+7269 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-verge",
  //       "name": "The Verge"
  //     },
  //     "author": "David Pierce",
  //     "title": "Apple’s new software is widgets all the way down",
  //     "description": "The Microsoft Surface Laptop Studio 2, the Amazon Echo Hub, the Orion app for iPad, The Continental, and everything else you need in this week’s Installer newsletter.",
  //     "url": "https://www.theverge.com/23885600/ios-ipados-interactive-widgets-dalle-3-amazon-echo-installer-newsletter",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/aDf2kyI5qstbk3y83DRm3iNgCz8=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24844606/Installer_Site_Post_002.jpg",
  //     "publishedAt": "2023-09-24T12:00:00Z",
  //     "content": "Apples new software is widgets all the way down\r\nApples new software is widgets all the way down\r\n / Plus, in this weeks Installer: new Amazon and Microsoft gear, DALL-E 3, smart homes, and flight ap… [+14959 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Remeredzai Joseph Kuhudzai",
  //     "title": "A Historic Moment: Electricity Is Wheeled Via Cape Town’s Grid For The Very First Time",
  //     "description": "Electricity wheeling (wheeling) is the act of transporting electricity from a generator to a remotely located end-user using an existing distribution or transmission system. This may also be done across multiple distribution networks, such as through a nation…",
  //     "url": "https://cleantechnica.com/2023/09/24/a-historic-moment-as-electricity-is-wheeled-via-cape-towns-grid-for-the-very-first-time/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/04/Rooftop-Solar-Power-Clean-Energy-Microgrid-CleanTechnica-Watermark.png",
  //     "publishedAt": "2023-09-24T11:55:50Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nElectricity wheeling (wheeling) is the act of transporting electricity from a generator to a remotely located… [+8564 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Forbes"
  //     },
  //     "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
  //     "title": "Shock Crypto Leak Reveals Microsoft Could Be About To Blow Up The Price Of Bitcoin, Ethereum, XRP And BNB",
  //     "description": "A shock leak has revealed Microsoft could be about to cause bitcoin, ethereum, XRP, BNB and crypto price chaos...",
  //     "url": "https://www.forbes.com/sites/digital-assets/2023/09/24/shock-crypto-xbox-leak-reveals-microsoft-could-be-about-to-blow-up-the-price-of-bitcoin-ethereum-xrp-and-bnb/",
  //     "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/650ff49a4d64ab4881b1c2ff/0x0.jpg?format=jpg&width=1200",
  //     "publishedAt": "2023-09-24T11:45:54Z",
  //     "content": "BitcoinBTC\r\n and other major cryptocurrenciesincluding ethereum, XRPXRP\r\n and BNBBNB\r\nare trading sideways as the market braces for a fast-growing $17.7 trillion Wall Street earthquake.\r\nSubscribenow… [+3423 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Freerepublic.com"
  //     },
  //     "author": "American Thinker",
  //     "title": "Now They’re Just Poking Their Fingers in Our Eyes",
  //     "description": "Every time they think, it weakens the nation. Reading this week’s news of the Biden Administration, I kept thinking of the Three Stooges poking fingers in each other’s eyes. As I started to write this, I see that Kurt Schlichter also compares this administrat…",
  //     "url": "https://freerepublic.com/focus/f-chat/4184574/posts",
  //     "urlToImage": null,
  //     "publishedAt": "2023-09-24T11:38:28Z",
  //     "content": "Skip to comments.\r\nNow Theyre Just Poking Their Fingers in Our EyesAmerican Thinker ^\r\n | 24 Sep, 2023\r\n | Clarice Feldman\r\nPosted on 09/24/2023 4:38:28 AM PDT by MtnClimber\r\nEvery time they think, i… [+3049 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Tina Casey",
  //     "title": "Deep Red State Fights Blue-Green Algae Blooms — With A Carbon Sequestration Twist",
  //     "description": "A new method for attacking blue-green algae blooms could pack a carbon sequestration punch in red and blue states alike.",
  //     "url": "https://cleantechnica.com/2023/09/24/deep-red-state-fights-blue-green-algae-blooms-with-a-carbon-sequestration-twist/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/09/Mantua-toxic-algae-bloom-cyanobacteria-carbon-sequestration-utah.jpg",
  //     "publishedAt": "2023-09-24T11:25:42Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nFile this one under C for Carbon Sequestration Makes Strange Bedfellows. The politically red state of Utah is… [+9850 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Atlantic"
  //     },
  //     "author": "Sarah Frier",
  //     "title": "The New Musk Biography Is a Distraction",
  //     "description": "In Walter Isaacson’s new biography, the focus on psychology diverts us from the questions we should be asking about the world’s richest man.",
  //     "url": "https://www.theatlantic.com/books/archive/2023/09/elon-musk-biography-book-walter-isaacson/675426/?utm_source=feed",
  //     "urlToImage": null,
  //     "publishedAt": "2023-09-24T11:00:00Z",
  //     "content": "This past December, Elon Musk’s extended family gathered for Christmas. As was their tradition, they pondered a question of the year, which seemed strategically designed for Elon to answer: “What reg… [+8103 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Jennifer Sensiba",
  //     "title": "The UK’s Revised Climate Plan May Be Right, But Only If Sunak Is Being Honest",
  //     "description": "In a recent speech, Prime Minister Rishi Sunak laid out some revised climate goals and changes to climate programs for the United Kingdom. In many ways, the country’s climate efforts have been weakened, but Sunak cites the very real problem of political blowb…",
  //     "url": "https://cleantechnica.com/2023/09/24/the-uks-revised-climate-plan-may-be-right-but-only-if-sunak-is-being-honest/",
  //     "urlToImage": "https://cleantechnica.com/files/2023/09/PM-Rishi-Sunak-2000x1000-1.png",
  //     "publishedAt": "2023-09-24T10:55:34Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIn a recent speech, Prime Minister Rishi Sunak laid out some revised climate goals and changes to climate pro… [+7113 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Notebookcheck.net"
  //     },
  //     "author": "Daniel Zlatev",
  //     "title": "Tri-motor Cybertruck teased as Performance model by Elon Musk referring to its 'kickass' acceleration",
  //     "description": "It is becoming increasingly likely that Tesla will release the Cybertruck in only two versions at first, styled after the Model S and Model X AWD trims. These would be a base dual-motor option and a tri-motor variant that Elon Musk may have just referred to a…",
  //     "url": "https://www.notebookcheck.net/Tri-motor-Cybertruck-teased-as-Performance-model-by-Elon-Musk-referring-to-its-kickass-acceleration.755134.0.html",
  //     "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Tesla-Cybertruck-off-road-testing-_-Walk-around-Release-Candidate-vehicles-and-chat-with-Telsa-guys-1-57-screenshot.jpg",
  //     "publishedAt": "2023-09-24T10:24:00Z",
  //     "content": "Elon Musk managed to shed some light on the Cybertruck trim levels to expect at launch by tipping what one of the versions could be called. \"I just drove the performance Cybertruck today and it kicks… [+2539 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "AutoExpress"
  //     },
  //     "author": "Mike Rutherford",
  //     "title": "'BMW is the best car brand in the world, by one very important measure'",
  //     "description": "Mike Rutherford explains how the race for profit among the world’s top car companies is being won by BMW, with a clutch of others hot on its tail…",
  //     "url": "https://www.autoexpress.co.uk/opinion/361030/one-very-important-measure-bmw-best-car-brand-world",
  //     "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1695297691/autoexpress/2023/09/Opinion BMW badge.jpg",
  //     "publishedAt": "2023-09-24T10:07:03Z",
  //     "content": "So how many billions of dollars did the worlds largest car companies make in post-tax profits during the last financial year after you might have shopped with them for your cars, finance, vehicle par… [+3029 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "investing.com",
  //     "title": "Tesla's Saudi Arabia expansion rumors dispelled by Musk: This week in EVs By",
  //     "description": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: Elon Musk claims WSJ report ‘utterly false’; VinFast posts impressive results; and EVs are taking over EU. Get news like this in real time by si…",
  //     "url": "https://biztoc.com/x/585bd463f187f2e0",
  //     "urlToImage": "https://c.biztoc.com/p/585bd463f187f2e0/s.webp",
  //     "publishedAt": "2023-09-24T09:08:06Z",
  //     "content": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: Elon Musk claims WSJ report utterly false; VinFast posts impressive results; and EVs… [+287 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Wealthofgeeks.com"
  //     },
  //     "author": "Saad Muzaffar",
  //     "title": "15 People Paid a Fortune To Fail at Their Jobs",
  //     "description": "In a world where people barely get acknowledged for their work, it’s absurd that some folks are getting paid for failing. An online community explores ... Read More",
  //     "url": "https://wealthofgeeks.com/15-people-paid-a-fortune-to-fail-at-their-jobs/",
  //     "urlToImage": "https://wealthofgeeks.com/wp-content/uploads/2023/09/Teresa-May.jpg",
  //     "publishedAt": "2023-09-24T09:00:13Z",
  //     "content": "In a world where people barely get acknowledged for their work, its absurd that some folks are getting paid for failing. An online community explores 15 kinds of people rewarded for being bad at thei… [+5753 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Investing.com"
  //     },
  //     "author": "Investing.com",
  //     "title": "Tesla's Saudi Arabia expansion rumors dispelled by Musk: This week in EVs",
  //     "description": "Tesla's Saudi Arabia expansion rumors dispelled by Musk: This week in EVs",
  //     "url": "https://www.investing.com/news/stock-market-news/teslas-saudi-arabia-expansion-rumors-dispelled-by-musk-this-week-in-evs-3181199",
  //     "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEF1P0T6_L.jpg",
  //     "publishedAt": "2023-09-24T08:02:31Z",
  //     "content": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: Elon Musk claims WSJ report ‘utterly false’; VinFast posts impressive results; and E… [+4267 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "reuters.com",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 bln -prime minister",
  //     "description": "Thailand's Prime Minister Srettha Thavisin speaks during a press conference after a weekly cabinet meeting at the government house in Bangkok, Thailand, September 13, 2023. REUTERS/Athit Perawongmetha/File Photo Acquire Licensing Rights BANGKOK, Sept 24 (Reut…",
  //     "url": "https://biztoc.com/x/675e7643d9167d31",
  //     "urlToImage": "https://c.biztoc.com/p/675e7643d9167d31/s.webp",
  //     "publishedAt": "2023-09-24T07:48:13Z",
  //     "content": "Thailand's Prime Minister Srettha Thavisin speaks during a press conference after a weekly cabinet meeting at the government house in Bangkok, Thailand, September 13, 2023. REUTERS/Athit Perawongmeth… [+291 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "investing.com",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 billion -prime minister",
  //     "description": "Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla (NASDAQ: ), Google (NASDAQ: ) and Microsoft (NASDAQ: ). \"Tesla would be looking into an EV manufacturing facility, Microsoft…",
  //     "url": "https://biztoc.com/x/b810f5563b02fea9",
  //     "urlToImage": "https://c.biztoc.com/p/b810f5563b02fea9/s.webp",
  //     "publishedAt": "2023-09-24T06:48:05Z",
  //     "content": "Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla (NASDAQ: ), Google (NASDAQ: ) and Microsoft (NASDAQ: ).\"Tesla wo… [+286 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Thaipbsworld.com"
  //     },
  //     "author": "Franc Han Shih",
  //     "title": "PM claims foreign corporations now more at ease about investing in Thailand",
  //     "description": "Foreign multi-national companies are now less worried about investing in Thailand, except for some legal issues which need to be addressed to facilitate investment, claimed Prime Minister Srettha Thavisin upon...\nThe post PM claims foreign corporations now mo…",
  //     "url": "https://www.thaipbsworld.com/pm-claims-foreign-corporations-now-more-at-ease-about-investing-in-thailand/",
  //     "urlToImage": "https://www.thaipbsworld.com/wp-content/uploads/2023/09/main-6-2-600x338.png",
  //     "publishedAt": "2023-09-24T06:35:57Z",
  //     "content": "Foreign multi-national companies are now less worried about investing in Thailand, except for some legal issues which need to be addressed to facilitate investment, claimed Prime Minister Srettha Tha… [+1466 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CleanTechnica"
  //     },
  //     "author": "Carolyn Fortuna",
  //     "title": "Ford Sides With EVs, Tells UK Prime Minister Not To Fear The Strong Headwinds",
  //     "description": "The UK prime minister's decision to extend the country's ICE vehicle ban has sparked fierce opposition from a variety of constituents, including members of his own party, business owners, and environmental activists.",
  //     "url": "https://cleantechnica.com/2023/09/24/ford-sides-with-evs-tells-uk-prime-minister-not-to-fear-the-strong-headwinds/",
  //     "urlToImage": "http://cleantechnica.com/files/2023/09/2023_FORD_TheNewAll-ElectricFordExplorer_1.jpg",
  //     "publishedAt": "2023-09-24T06:24:15Z",
  //     "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAutomakers are pissed. They’ve been investing in UK facilities to usher in the transition to electric vehicle… [+7644 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "Reuters",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 billion: PM Srettha Thavisin",
  //     "description": "Srettha was speaking to reporters in Bangkok after attending the UN General Assembly in New York where he also held talks with company executives earlier this week.",
  //     "url": "https://economictimes.indiatimes.com/tech/technology/thailand-expects-tesla-google-microsoft-to-invest-5-billion-pm-srettha-thavisin/articleshow/103903386.cms",
  //     "urlToImage": "https://img.etimg.com/thumb/msid-103903445,width-1200,height-630,imgsize-78704,overlay-ettech/photo.jpg",
  //     "publishedAt": "2023-09-24T06:18:07Z",
  //     "content": "Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla, Google and Microsoft.\"Tesla would be looking into an EV manufac… [+1535 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-jerusalem-post",
  //       "name": "The Jerusalem Post"
  //     },
  //     "author": "By TOVAH LAZAROFF",
  //     "title": "Netanyahu: My UN speech was broadcast in Saudi Arabia",
  //     "description": "Prime Minister Benjamin Netanyahu added that he had also met with 20 heads of state who sought to strengthen their ties with Israel.",
  //     "url": "https://www.jpost.com/israel-news/article-760320",
  //     "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/553811",
  //     "publishedAt": "2023-09-24T06:11:02Z",
  //     "content": "In an unprecedented move Saudi Arabia broadcast Prime Minister Benjamin Netanyahu’s speech to the United Nations in which he spoke about how the two countries were on the cusp of history and would no… [+2651 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "next-big-future",
  //       "name": "Next Big Future"
  //     },
  //     "author": "Brian Wang",
  //     "title": "New Teslabot Capabilities. All Neural Net Training and Great Balance. Mass Production Near",
  //     "description": "Tesla has released new video of the Optimus Teslabot. They are showing vastly improved balance and hand control. The critical thing is like the FSD (full self driving ) for cars, all of the training is all neural nets and video in and capabilities out. Tesla …",
  //     "url": "https://www.nextbigfuture.com/2023/09/new-teslabot-capabilities-all-neural-net-training-and-great-balance-mass-production-near.html",
  //     "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2023/09/Screen-Shot-2023-09-23-at-10.53.02-PM.jpg",
  //     "publishedAt": "2023-09-24T06:08:54Z",
  //     "content": "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Naturalnews.com"
  //     },
  //     "author": "Ramon Tomey",
  //     "title": "Journalist Jack Posobiec the latest American added to Ukrainian website’s KILL LIST",
  //     "description": "The infamous Ukrainian website Myrotvorets has added another another American to its kill list – journalist Jack Posobiec. Human Events, which Posobiec oversees as senior editor, confirmed the development in a Sept. 18 article. The website accused him of bein…",
  //     "url": "https://www.naturalnews.com/2023-09-24-ukraine-kill-list-adds-journalist-jack-posobiec.html",
  //     "urlToImage": "https://www.naturalnews.com/wp-content/uploads/sites/91/2023/09/America-Ukraine-Fire-Flags.jpg",
  //     "publishedAt": "2023-09-24T06:00:00Z",
  //     "content": "The infamous Ukrainian website Myrotvorets has added another another American to its kill list  journalist Jack Posobiec.\r\nHuman Events, which Posobiec oversees as senior editor, confirmed the develo… [+4783 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "reuters.com",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 billion, prime minister says",
  //     "description": "Thailand's Prime Minister Srettha Thavisin speaks during a press conference after a weekly cabinet meeting at the government house in Bangkok, Thailand, September 13, 2023. REUTERS/Athit Perawongmetha/File Photo Acquire Licensing Rights BANGKOK, Sept 24 (Reut…",
  //     "url": "https://biztoc.com/x/dce97f845723070f",
  //     "urlToImage": "https://c.biztoc.com/p/dce97f845723070f/s.webp",
  //     "publishedAt": "2023-09-24T05:58:06Z",
  //     "content": "Thailand's Prime Minister Srettha Thavisin speaks during a press conference after a weekly cabinet meeting at the government house in Bangkok, Thailand, September 13, 2023. REUTERS/Athit Perawongmeth… [+291 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Bangkok Post"
  //     },
  //     "author": "Reuters",
  //     "title": "PM Srettha expects Tesla, Google, Microsoft to invest $5bn in Thailand",
  //     "description": "Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla, Google and Microsoft.",
  //     "url": "https://www.bangkokpost.com/business/investment/2652094/pm-srettha-expects-tesla-google-microsoft-to-invest-5bn-in-thailand",
  //     "urlToImage": "https://static.bangkokpost.com/media/content/20230924/c1_2652094_230924133740_700.jpg",
  //     "publishedAt": "2023-09-24T05:53:00Z",
  //     "content": "Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla, Google and Microsoft.\r\n\"Tesla would be looking into an EV manufacturing fa… [+872 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Investing.com"
  //     },
  //     "author": "Reuters",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 billion -prime minister",
  //     "description": "Thailand expects Tesla, Google, Microsoft to invest $5 billion -prime minister",
  //     "url": "https://www.investing.com/news/stock-market-news/thailand-expects-tesla-google-microsoft-to-invest-5-billion-prime-minister-3181190",
  //     "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEE6J0DL_L.jpg",
  //     "publishedAt": "2023-09-24T05:50:36Z",
  //     "content": "BANGKOK (Reuters) - Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla (NASDAQ:TSLA), Google (NASDAQ:GOOGL) and Mic… [+945 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "Reuters",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 billion: PM Srettha Thavisin",
  //     "description": "Srettha was speaking to reporters in Bangkok after attending the U.N. General Assembly in New York where he also held talks with company executives earlier this week. Fresh foreign investment would boost Thailand's flagging economy, which is expected to grow …",
  //     "url": "https://economictimes.indiatimes.com/news/international/business/thailand-expects-tesla-google-microsoft-to-invest-5-bln-pm-srettha-thavisin/articleshow/103902706.cms",
  //     "urlToImage": "https://img.etimg.com/thumb/msid-103902780,width-1200,height-630,imgsize-78704,overlay-economictimes/photo.jpg",
  //     "publishedAt": "2023-09-24T05:47:42Z",
  //     "content": "Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla, Google and Microsoft.\"Tesla would be looking into an EV manufac… [+974 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "next-big-future",
  //       "name": "Next Big Future"
  //     },
  //     "author": "Brian Wang",
  //     "title": "Oracle is Focused on Generative AI, a New Supercomputer and a Cybertruck Police Car",
  //     "description": "Oracle CEO Larry Ellison described using Oracle using Tesla Cybertruck as a next-generation police car. He says it will be very safe, very fast and it already has all of the cameras and screens that Oracle’s software needs. The details will be disclosed when …",
  //     "url": "https://www.nextbigfuture.com/2023/09/oracle-is-focused-on-generative-ai-a-new-supercomputer-and-a-cybertruck-police-car.html",
  //     "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2023/09/Screen-Shot-2023-09-23-at-10.13.25-PM.jpg",
  //     "publishedAt": "2023-09-24T05:44:01Z",
  //     "content": "Oracle CEO Larry Ellison described using Oracle using Tesla Cybertruck as a next-generation police car. He says it will be very safe, very fast and it already has all of the cameras and screens that … [+1681 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Marketscreener.com"
  //     },
  //     "author": "Reuters",
  //     "title": "Thailand expects Tesla, Google, Microsoft to invest $5 billion -prime minister",
  //     "description": "(marketscreener.com) Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla, Google and Microsoft.https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Thailand-expect…",
  //     "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Thailand-expects-Tesla-Google-Microsoft-to-invest-5-billion-prime-minister-44910612/",
  //     "urlToImage": "https://img.zonebourse.com/reuters/2023-09/2023-09-22T025011Z_1_LYNXMPEJ8L01Z_RTROPTP_3_THAILAND-INVESTMENT.JPG",
  //     "publishedAt": "2023-09-24T05:33:55Z",
  //     "content": "BANGKOK (Reuters) - Thailand's Prime Minister Srettha Thavisin said on Sunday the country expected to receive investment of at least $5 billion from Tesla, Google and Microsoft.\r\n \"Tesla would be loo… [+989 chars]"
  //   }
  // ]
  constructor() {
    super();
    this.state = {
      // intially empty articles
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=075188bc970d47948ed55b884f2a64ef&page=1&pageSize=12"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
  }



  nextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=075188bc970d47948ed55b884f2a64ef&page=${this.state.page + 1}&pageSize=12`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    })
  }

  previousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=075188bc970d47948ed55b884f2a64ef&page=${this.state.page - 1}&pageSize=12`
    this.setState({ loading: true });
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false 
    })
  }

  render() {
    return (
      <div className='container my-3'>  {/* forming a container for new headlines 1 row and three col inside that */}

        <div className='container d-flex justify-content-between'>
          {/* stating the condition disable if page <=1  */}
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.previousclick}>Previous</button>
          <button type="button" className='btn btn-dark' onClick={this.nextclick}>Next</button>
        </div>
        <h2 className='text-center'>TOP HEADLINES</h2>
        {this.state.loading && <Spinner />}

        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsUpdate title={element.title} newsurl={element.url} description={element.description?.slice(0,100)} imageUrl={element.urlToImage} />
            </div>
          })}
        </div>
        {this.state.loading && <Spinner />}
        <div className='container d-flex justify-content-between'>
          {/* stating the condition disable if page <=1  */}
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.previousclick}>Previous</button>
          <button type="button" className='btn btn-dark' onClick={this.nextclick}>Next</button>
        </div>


        {/* these line were extra column created manually  */}
        {/* <div className='col-md-4'>
            <NewsUpdate title="mytitle" description="mydesc" />
          </div>
          <div className='col-md-4'>
            <NewsUpdate title="mytitle" description="mydesc" />
          </div>
          <div className='col-md-4'>
            <NewsUpdate title="mytitle" description="mydesc" />
          </div> */}
      </div>
    )
  }
}

export default News