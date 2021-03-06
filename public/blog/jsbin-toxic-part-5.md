---
title: 'The toxic side of free. Or: how I lost the love for my side project (part 5)'
date: '2015-09-18 15:22:10'
image: /images/jsbin-t-shirt.jpg
tags:
  - personal
  - web
published: true
modified: '2015-10-08 23:21:33'
---
# The toxic side of free. Or: how I lost the love for my side project

This is a story about JS Bin. I've told one story of JS Bin before, and this is the b-side: the dark side. But remember with everything I share with you, JS Bin is the longest running live pastebin, and it's not going anywhere. It will continue to run and serve its users. Even the scumbags.

<!--more-->

The story has been broken into 5 parts, released over a series of days.

- [Part 1: The start of the DDoS](/jsbin-toxic-part-1)
- [Part 2: Spam](/jsbin-toxic-part-2)
- [Part 3: Registered users wreaking havoc](/jsbin-toxic-part-3)
- [Part 4: The cost](/jsbin-toxic-part-4)
- [Part 5: Police](/jsbin-toxic-part-5)

## Part 5: Police

***Trigger warning: mention of child pornography.***

I said before that JS Bin Pro really sucked the love out of the project for me, but this part has been a mix of emotions, but it's definitely the most distressed I've been when running JS Bin...

Over the years I've had cease and desist emails telling me that I've either been hacked or stolen content. I would take my time (through gritted teeth) explaining that JS Bin allowed users to upload their own content, and that this wasn't something I was trying to do to hurt the company or institution.

Nearly every single time, the content would be removed promptly (usually at the same time as I was responding to explain what JS Bin was), but there's three occasions that stand out in my memory.

### Evening calls

Early 2010, I was doing a lot of client work and when the phone rang at 7pm, I asked Julie (my wife and business partner) to shoo them away and to say that I was unavailable.

I think I was actually having a moment on The Throne when my wife gave a knock on the door. "You need to take this, it's the Police".

No one really wants the Police phoning their house.

It wasn't actually as painful as I would have guessed. The man said he was calling from the London Met. Police, and that he was dealing with a coordinated DDoS attack orchestrated over Facebook due to take place tomorrow evening.

The messages (on Facebook) were using JS Bin as the method of attack (yes, pretty much script kiddies), and to the police officer's credit, he had done his research on JS Bin and understood that *I hadn't created these bins*. He was calling to ask if I could *possibly* take the links down (yes, we're [So Very British](https://twitter.com/soverybritish)).

Absolutely. Minutes later, the bins were gone. I didn't hear back again, but it would be the first in a dozen or so (gentle) encounters with the police.

### The worst email I ever received

One late evening in 2013, sat on the sofa watching a film, I get an email. As with all webby people that don't understand that work is supposed to stop at 6pm, I go ahead and get my laptop and read the email.

It's an email from the Spanish police. Sort of a cease and desist, including two links to JS Bin asking for their immediate take down.

There had been issues in the past where porn had been linked to from JS Bin and it's constant battle to keep it under control. The email from the Spanish police however, did not warn me as to what was behind the URLs.

I clicked, and my memory is slow motion of what I saw next, and thankfully the internet was also slow to load.

---

Just enough loaded for me to realise that the images contained child pornography, but I closed the tab early and quickly enough for me *not* to see anything that would scar me for life.

It still makes me sick to think that *that* kind of content was being hosted by my project.

Using the terminal, I `cURL`ed the URL down to look for any commonalities between the source of the two JS Bin URLs I had, to immediately add it to the blacklist functionality. "Thankfully", I did find a commonality, and I was able to block what appeared to be a source for these images. I also went ahead and deleted all records that matched in the database.

It took many days to to get that sickening feeling out of my system. I hate thinking that JS Bin has helped abusers in some way. I'm not sure if I can *quite* get across in words as to how much this sickens and angers me, even to this day.

On a lighter note...

### "Terrorism"

I've used inverted quotes around "Terrorism", because, well they're not my words, and I'm not 100% certain that JS Bin falls squarely into be used for terrorism. It's certainly a new area for my project.

Just a few weeks ago, an issue was filed, claiming exactly this:

![Terrorism attacks](/images/jsbin-terrorism.png)

The bin that's referred to was being used to attack the Madison Police web site, apparently organised by Anonymous (I removed the twitter handle & name):

![Anonymous attacks](/images/jsbin-anonymous-attack.jpg)

I took down the bin, and added appropriate blacklisting, but also noticed that the issue was filed about 10 *days* after the attack had taken place!

### It's part of the job...

I'd like to end this section with some parting advice on how JS Bin is better now, but sadly it's part of the job when you build a site that houses all the crap the internet has to offer. The easier JS Bin makes it so that content can be saved, the more it'll be used in new ways that causes some kind of trouble.

Obviously the flip side is that JS Bin is open to all, and that includes kids wanting to learn, educators, newbies, "hackers" and more.

But, it would be great, as author of jsfiddle said, if Anonymous could write and use their own pastebin. I mean, they could even [fork JS Bin](https://github.com/jsbin/jsbin) for heavens sake!

[![Please, Anonymous, write your own](/images/jsbin-please-write.png)](https://twitter.com/zalun/status/602586249203945472)

## Why carry on?

I've given this series of posts as a talk a few times now at conferences and meetups, and one question that keeps coming up is:

> Why didn't you just walk away, and shutdown JS Bin?

It's a fair question. The stress from the police related incidents didn't ever make me consider shutting it down. Even after the Spanish police email (above), I felt more like I had blinkers on and *all* I could see was the nastiness on the web, but I never considered killing JS Bin.

In fact, it was only when I was dealing with VATMOSS that I gave any serious thought to throwing in the towel. It was probably one of the more stressful working months I've experienced, and I don't kid when I say that VATMOSS has killed up and coming companies in their tracks.

However, with all of the abuse, **I will never throw in the towel**. Here's why:

I used to search twitter for mentions of "jsbin" and compare to jsfiddle and codepen. Credit to Code Pen, the mentions are usually always in their favour, with individuals showing some truly amazing work. It took me many, many months to realise that twitter was not the measure of JS Bin.

JS Bin's moto is: *hack, learn, fix, teach*. JS Bin is about helping other people. It's one person who is in need, sharing their working with another, and that other person helping, and solving, and teaching. It's a quiet, personal transaction between two individuals that won't be announced on twitter, but instead shared in an intimate exchange.

*That* is why JS Bin has been [running for 7 years](https://remysharp.com/2008/10/06/js-bin-for-collaborative-javascript-debugging). That's why it'll carry on for another 7 years.

## Finding the love, again

I've been thinking about this post (and the public talk version of this) for about a year now. I was hesitant because it was so negative and probably comes across a little bitter.

The irony however, is that it's been a cathartic process. I feel like I've got some of the poison out of my system by going through this process.

I realised something important at the end of 2014, and it was the reason I decided to put development on JS Bin on hold: I need to love working on JS Bin. I didn't at the time. I was working on parts of JS Bin that was full of pressure, I started getting abuse for some of my work, and it was all a bit of a mess.

Since starting these posts, I've released new features to JS Bin to all groups of users (anonymous, registered and pro) and have several JS Bin [blog posts](https://jsbin.com/blog) in the works. And before I bid you farewell, don't forget to support JS Bin: [go pro](https://jsbin.com/upgrade) or donate [regularly](https://gratipay.com/jsbin) or as a [one off](https://www.paypal.me/rem).

As for me? **I've started to find my love for my project again.**

![Hack, learn, fix, teach](/images/jsbin-t-shirt.jpg)
