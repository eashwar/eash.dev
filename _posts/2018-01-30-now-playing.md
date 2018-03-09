---
title: now-playing current
layout: post
---
Made on {{ page.date | date: "%b %-d, %Y" }}
## [now-playing: spotify for bash]({{page.url}})

This is a command line tool to control basic spotify playback from a bash terminal. play/pause, skip, seek, and view the current playing song, without having to move away from the terminal! (click Read more to see a gif preview.)

<!--more-->

#### [**now-playing on GitHub**](https://github.com/eashwar/now-playing){:target="_blank"}

![now-playing demo]({{site.url}}/images/now-playing-demo.gif)

now-playing works by allowing bash to make cURL requests to a local [Express](https://expressjs.com){:target="_blank"} server that you have to spin up. Fear not, though: it uses essentially no processing power though, so the only inconvenience is to remember to spin it up when you start up your machine.
