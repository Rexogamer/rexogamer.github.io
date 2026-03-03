---
title: "complaining about LG ThinQ"
description: "do you *need* an internet connection?"
pubDate: "2026-03-03"
heroImage: "/images/blog/20260303-thinq-maintenance-banner.png"
---

(oh hey, a blog post at last! I finally had something to put here so yeah :3)

in case you're not aware, LG ThinQ is a general device control app - it supports LG devices, and (apparently) devices supporting Matter. I use it to control our TV.

## maintenance

a few weeks back, LG were apparently performing maintenance on ThinQ, so the entire app was unavailable. this was annoying enough; not being able to control the TV was rather inconvenient...

...but as it turned out, the control panel in the notifications menu still worked? I could control the volume and channel and turn it off, but nothing else - not very helpful when I was using BBC Sounds at the time, but I digress. this suggested that it would work anyway if I could just get past the maintenance notice (which closes the app when dismissed).

I installed HTTP Toolkit (which, by the way, I have to commend for being really easy to set up!!!). I was partially curious if I could see the actual requests being made and try and set something up with my laptop - no luck there, but after setting it up it blocked a bunch of requests requests (I haven't rooted my phone, so I couldn't add a system certificate)... _which included the one that fetched the maintenance status._

so after a bit of testing I found that all I needed to do was open ThinQ (which would show the maintenance banner, but would also connect to the TV), turn on HTTP Toolkit's interception and re-open the app - and I was able to access the remote without any issues.

## my message

**LG:** I completely understand that maintenance is a necessity sometimes - and if it was just a matter of blocking functionality that required the relevant servers, I wouldn't have any real complaints here - but **_why_** are you blocking functionality that _only requires the devices to be on the same network?????_

it's not like Google Home is particularly helpful here either! it's _technically_ supported, but a lot of the functionality is broken (for example, you need to use ThinQ to actually turn the TV on), and it gets worse if you're trying to use the Google Assistant to control the TV (for some reason, it seems to think the TV is always at 0% volume, so you can't turn it down???)

I'm posting this now because they're performing maintenance again - is it too much to ask to not arbitrarily gate functionality on having an internet connection? it's especially annoying because both instances of maintenance went on for quite a while, with the first instance extended to _13 hours_ from an original plan of 8, and the latest one seemingly scheduled to go on for **14 hours**, which only makes it worse - the restriction is arbitrary _and_ lengthy!

## side note

while I was looking at the requests blocked by HTTP Toolkit, I noticed that, apparently, the app was also making hundreds of requests to fetch images of shows and channels... which seems a bit odd to me - I can't imagine needing to fetch more than, say, 15 to fill the initial carousel above the remote? any other images could surely be fetched later on if the user searched for shows...
