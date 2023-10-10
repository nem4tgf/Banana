window.onload = init;
function init(){   
    document.getElementById("btn1").onclick = changeHeading1;
    document.getElementById("btn2").onclick = changeHeading2;
    document.getElementById("btn3").onclick = changeParagraph;
}
function changeHeading1(){
   const elm = document.getElementById("heading1");
   elm.textContent ="Hello";
   // Create new elment
  //document.write("pHello new p tag p");
   const newElm =document.createElement('p');
   newElm.textContent="Hello New P"
   elm.after(newElm);
}
function changeHeading2(){
    const elms = document.getElementsByTagName("h2"); //Array of element
    for(const elm of elms){
    elm.textContent="Again?";
    }
    console.log(elms)
}
function changeParagraph(){
const elms = document.getElementsByClassName('para');
for(const elm of elms)
elm.textContent ="Why?";
}
















/*
{
    "kind": "youtube#searchListResponse",
    "etag": "vflmaZQU4W22J1DQ7fcQvFni5I8",
    "nextPageToken": "CBQQAA",
    "regionCode": "VN",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 20
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "3HM9j2CUn8BUy7z1h4zJt7xWy_M",
        "id": {
          "kind": "youtube#video",
          "videoId": "-kbRNPqdZcM"
        },
        "snippet": {
          "publishedAt": "2023-07-31T19:35:54Z",
          "channelId": "UCZ6mdzBWXAzSGYhLyM_fZ9w",
          "title": "Ai Keyword Reseach Tutorial - This Made Me $317K So Far In 2023!",
          "description": "chatgpt plus these free keyword tools will help you find keywords to rank for without having to pay for expensive tools. get my ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-kbRNPqdZcM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-kbRNPqdZcM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-kbRNPqdZcM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "affiliatemarketingmc",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-31T19:35:54Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Fu40QKFp3LnuvFRu8Da5k4in86Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "OMJQPqG2Uas"
        },
        "snippet": {
          "publishedAt": "2019-03-27T16:45:00Z",
          "channelId": "UCWquNQV8Y0_defMKnGKrFOQ",
          "title": "Keyword Research Tutorial: From Start to Finish",
          "description": "In this tutorial, you'll learn how to do keyword research that drives more organic traffic AND conversions.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OMJQPqG2Uas/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OMJQPqG2Uas/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OMJQPqG2Uas/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Ahrefs",
          "liveBroadcastContent": "none",
          "publishTime": "2019-03-27T16:45:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "OtV4w2ni9V3hdAAruohyxwt5PKM",
        "id": {
          "kind": "youtube#video",
          "videoId": "FN-ihbKEBmI"
        },
        "snippet": {
          "publishedAt": "2023-07-26T22:26:20Z",
          "channelId": "UC-feIBHHJKq9ukLFHu_CSkw",
          "title": "Top 4 ChatGPT Prompts for Keyword Research",
          "description": "These are the best ChatGPT prompts you will need to do keyword research. Download Keywords Everywhere here: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FN-ihbKEBmI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FN-ihbKEBmI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FN-ihbKEBmI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Keywords Everywhere",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-26T22:26:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "yI6V-a4l8xbylbVBZIIpMQKQvUc",
        "id": {
          "kind": "youtube#video",
          "videoId": "cAUeS0to3PQ"
        },
        "snippet": {
          "publishedAt": "2022-01-21T12:56:07Z",
          "channelId": "UCj7v9UM1aGx6GR-nsY-9u8w",
          "title": "Keyword Research Tutorial: 3-Step Process (for Beginners &amp; Pros)",
          "description": "Most people do keyword research WRONG for SEO :( And as a result: They end up targeting keywords that can't rank for and ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cAUeS0to3PQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cAUeS0to3PQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cAUeS0to3PQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Semrush",
          "liveBroadcastContent": "none",
          "publishTime": "2022-01-21T12:56:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YBD8HIY4IruohSwA-rgVpEzxPRY",
        "id": {
          "kind": "youtube#video",
          "videoId": "k4rLJD7E0D0"
        },
        "snippet": {
          "publishedAt": "2023-01-25T15:36:58Z",
          "channelId": "UCI87SVbB_RAVCMubmVa3SIA",
          "title": "How to Do Keyword Research for Free in 2023 &amp; Beyond",
          "description": "In this video, we will share existing keyword research methods and how to use ChatGPT for keyword research. We will also show ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/k4rLJD7E0D0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/k4rLJD7E0D0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/k4rLJD7E0D0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rank Math SEO",
          "liveBroadcastContent": "none",
          "publishTime": "2023-01-25T15:36:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "3DNjRurPm6gkaGpXvYZpjh08XsU",
        "id": {
          "kind": "youtube#video",
          "videoId": "f66Klv9b_UQ"
        },
        "snippet": {
          "publishedAt": "2014-11-08T08:59:03Z",
          "channelId": "UC9Mr6ZPFaY0MaQDkhbky35Q",
          "title": "Keyword",
          "description": "Provided to YouTube by Universal Music Group Keyword · 9mm Parabellum Bullet Vampire ℗ 2008 EMI Music Japan Inc.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/f66Klv9b_UQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/f66Klv9b_UQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/f66Klv9b_UQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "9mm Parabellum Bullet - Topic",
          "liveBroadcastContent": "none",
          "publishTime": "2014-11-08T08:59:03Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Z1r_V23l2uTtd8TMR3zMiEt1Keo",
        "id": {
          "kind": "youtube#video",
          "videoId": "JdIlqpo1SsY"
        },
        "snippet": {
          "publishedAt": "2022-11-24T15:00:25Z",
          "channelId": "UCl-Zrl0QhF66lu1aGXaTbfw",
          "title": "My Favorite Keyword Research Strategy",
          "description": "Want to know how I find keywords that bring me tons of traffic? It's maybe the most important part of nailing your SEO strategy.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JdIlqpo1SsY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JdIlqpo1SsY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JdIlqpo1SsY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Neil Patel",
          "liveBroadcastContent": "none",
          "publishTime": "2022-11-24T15:00:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "VDyO6GS6q4RK8O80DZCWrl8VnFo",
        "id": {
          "kind": "youtube#video",
          "videoId": "QagqtYwtqdc"
        },
        "snippet": {
          "publishedAt": "2023-05-15T13:00:30Z",
          "channelId": "UCWqKcFb7h9cNEdCxB5A5BgQ",
          "title": "Keyword Research Tutorial for 2023 (Dominate ANY Niche)",
          "description": "Watch my free masterclass ➜ https://bloggrowthengine.com/recommends/masterclass In this video, I cover everything you need to ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/QagqtYwtqdc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/QagqtYwtqdc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/QagqtYwtqdc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Adam Enfroy",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-15T13:00:30Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "61zmMCr0UV-Q0nSZTgMTEVPDTlQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "k5KgnnR9izA"
        },
        "snippet": {
          "publishedAt": "2023-10-07T03:30:40Z",
          "channelId": "UCD_Bl4RL-U8uHVs1vgCrYOg",
          "title": "SAYER ESHE BANAYE POETRY#shorts#viral#keyword research tool",
          "description": "SAYER ESHE BANAYE POETRY#shortviral#youtube#trending#shortsad#funny toolsmr bean funnymr bean officialmr indian ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/k5KgnnR9izA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/k5KgnnR9izA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/k5KgnnR9izA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Raheman Khan",
          "liveBroadcastContent": "none",
          "publishTime": "2023-10-07T03:30:40Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "V6qHldiNrP21Se-Xz6Z1JYvgWDk",
        "id": {
          "kind": "youtube#video",
          "videoId": "R44jzf6gqXc"
        },
        "snippet": {
          "publishedAt": "2023-05-15T16:52:25Z",
          "channelId": "UCctL30i8tVgSS9A37Q532eg",
          "title": "🤫 Find All Your Competitors Keywords in Seconds",
          "description": "Rank Number 1 on Google FOR FREE. Don't want to pay for expensive SEO keyword tools? This video is for you. This ChatGPT ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/R44jzf6gqXc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/R44jzf6gqXc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/R44jzf6gqXc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Income stream surfers",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-15T16:52:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "IX83u0QdcipmLOOhJiI3qgBAtWE",
        "id": {
          "kind": "youtube#video",
          "videoId": "Z6fmPO8ytYs"
        },
        "snippet": {
          "publishedAt": "2023-04-22T17:00:17Z",
          "channelId": "UC-feIBHHJKq9ukLFHu_CSkw",
          "title": "How To Do Keyword Research With ChatGPT",
          "description": "Learn how to do keyword research using ChatGPT with the help of prompt templates from Keywords Everywhere. Download ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Z6fmPO8ytYs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Z6fmPO8ytYs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Z6fmPO8ytYs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Keywords Everywhere",
          "liveBroadcastContent": "none",
          "publishTime": "2023-04-22T17:00:17Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ZRNX9icFa1g0Gj_85ils1UQFZmc",
        "id": {
          "kind": "youtube#video",
          "videoId": "rJe-bmp1a7A"
        },
        "snippet": {
          "publishedAt": "2020-08-10T19:11:51Z",
          "channelId": "UCGxjDWAN1KwrkXYVi8CXtjQ",
          "title": "How to Get Views FAST with YouTube Keyword Research (New Strategy)",
          "description": "Learn 5 tips on how to get more views on YouTube with keyword research. ****** Get an 30-day free-trial on any vidIQ paid plan ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rJe-bmp1a7A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rJe-bmp1a7A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rJe-bmp1a7A/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Think Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-10T19:11:51Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "OJN2_ovWWVDpgs1UDOSvbOTRghs",
        "id": {
          "kind": "youtube#video",
          "videoId": "TwMovoG9nBw"
        },
        "snippet": {
          "publishedAt": "2022-01-25T16:15:01Z",
          "channelId": "UCo33niDKpTpgwZ_dohqvylg",
          "title": "YouTube Keyword Research - You&#39;re Doing it WRONG!",
          "description": "In this video you are going to learn what YouTube keywords are and how to use the TubeBuddy Keyword Explorer tool. You will ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/TwMovoG9nBw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/TwMovoG9nBw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/TwMovoG9nBw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TubeBuddy",
          "liveBroadcastContent": "none",
          "publishTime": "2022-01-25T16:15:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YNTLz9T_N8EBBip5-BbS6i9eZeQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "Zb1CM5XOr0w"
        },
        "snippet": {
          "publishedAt": "2023-07-16T12:41:44Z",
          "channelId": "UCm9fUZXaKCwpwLJYuvyQugQ",
          "title": "PREVIEW DAY &quot;THE KEYWORD SHOWDOWN&quot;",
          "description": "PREVIEW DAY \"THE KEYWORD SHOWDOWN\"",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Zb1CM5XOr0w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Zb1CM5XOr0w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Zb1CM5XOr0w/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TPNG",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-16T12:41:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "dqxZsCryECxRi26zMz20-EuUBSM",
        "id": {
          "kind": "youtube#video",
          "videoId": "jKi8qw_NXgI"
        },
        "snippet": {
          "publishedAt": "2017-08-17T13:15:01Z",
          "channelId": "UCzi1p5UT-eXRj7InxNli96A",
          "title": "Nghiên Cứu Từ Khóa: Hướng Dẫn Research Keyword Trong SEO Hiệu Quả",
          "description": "Bạn không chắc rằng cách nghiên cứu từ khóa SEO của mình thật sự hiệu quả? Vậy thì hướng dẫn nghiên cứu từ khóa này là ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/jKi8qw_NXgI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/jKi8qw_NXgI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/jKi8qw_NXgI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Vincent Do",
          "liveBroadcastContent": "none",
          "publishTime": "2017-08-17T13:15:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "s8TuKqjvxc1mpgprnJFMEcOgGn4",
        "id": {
          "kind": "youtube#video",
          "videoId": "S4m-t8vaUdo"
        },
        "snippet": {
          "publishedAt": "2022-05-02T14:27:02Z",
          "channelId": "UC0rPxAo-EIuyAPar9Nhk9Qg",
          "title": "How to Use Google Keyword Planner 2023 (Tutorial)",
          "description": "In this video I show you how I use the google keyword planner. ▷ Complete Google Ads Tutorial: https://youtu.be/UoW9WJzy0EE ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/S4m-t8vaUdo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/S4m-t8vaUdo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/S4m-t8vaUdo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Metics Media X",
          "liveBroadcastContent": "none",
          "publishTime": "2022-05-02T14:27:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "jGeaUKDoxvpIupi-UM_Fa31udcs",
        "id": {
          "kind": "youtube#video",
          "videoId": "hcq32U0t7p0"
        },
        "snippet": {
          "publishedAt": "2022-02-19T12:30:24Z",
          "channelId": "UC0T6MVd3wQDB5ICAe45OxaQ",
          "title": "Keywords Kya Hai? How to do Keyword Research for SEO &amp;  Choose Right Keywords?",
          "description": "In this video, learn Keywords Kya Hai? How to do Keyword Research for SEO & How to Choose the Right Keywords?. Find all the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hcq32U0t7p0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hcq32U0t7p0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hcq32U0t7p0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "WsCube Tech",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-19T12:30:24Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "GgYH1vo-M5AnQjrhPR-3HyyB92U",
        "id": {
          "kind": "youtube#video",
          "videoId": "53ySngJYHBc"
        },
        "snippet": {
          "publishedAt": "2022-12-16T06:55:44Z",
          "channelId": "UCpWT_QfKk7BJIpn709YgsYA",
          "title": "How To Use SEMrush For SEO And Keyword Research | SEMrush Tutorial",
          "description": "Start here ➜ https://wl.tools/semrush Get Free Trial for SEMrush Product ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/53ySngJYHBc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/53ySngJYHBc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/53ySngJYHBc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Website Learners",
          "liveBroadcastContent": "none",
          "publishTime": "2022-12-16T06:55:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "vI2kKlXLPfPE6Ni3s5TmV8kNzrU",
        "id": {
          "kind": "youtube#video",
          "videoId": "-6YEdWfQ_2k"
        },
        "snippet": {
          "publishedAt": "2023-06-06T12:15:00Z",
          "channelId": "UCTTmZq04aCmZGy5nfonns1A",
          "title": "How to Use Keywords Everywhere Tutorial 2023 | SEO Keyword Research Tool",
          "description": "Wondering how to use Keywords Everywhere? In this tutorial, I walk you through a beginner-friendly tutorial on how to use ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-6YEdWfQ_2k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-6YEdWfQ_2k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-6YEdWfQ_2k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Mariah Magazine",
          "liveBroadcastContent": "none",
          "publishTime": "2023-06-06T12:15:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "uJ3RLSEgtfiMkszme3FBlFTJkMA",
        "id": {
          "kind": "youtube#video",
          "videoId": "433T-EixeUg"
        },
        "snippet": {
          "publishedAt": "2023-05-22T14:26:03Z",
          "channelId": "UCC-IlLy0LxBcVVFLJBAnuVA",
          "title": "Most Network Marketers ignore this, but they really shouldn&#39;t!",
          "description": "Click here for my FREE Cheatsheet: https://nwmunited.com/ Keyword Research | Why are keywords so important!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/433T-EixeUg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/433T-EixeUg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/433T-EixeUg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Ollie Burgess",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-22T14:26:03Z"
        }
      }
    ]
  }
  /*