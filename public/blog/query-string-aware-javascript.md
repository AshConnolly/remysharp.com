---
title: Query String Aware JavaScript
date: '2008-10-03 12:15:01'
published: true
tags:
  - code
  - javascript
modified: '2014-09-03 16:15:12'
---
# Query String Aware JavaScript

As developers we know it's useful to read the query string (everything after the '?' in the URL) to allow for customisations.

However, I didn't think I could read the query string in the script tag from within the JavaScript - until now.


<!--more-->

## The Trick

The trick is simple, in your externally loaded script, you read the last DOM element loaded (this script tag that loaded the current script), grab the last DOM element, read the <code>src</code> and there's your query string.

## The Code

<pre><code>// script included using test.js?a=10&amp;z=50
function getLastChild(el) {
  return (el.lastChild && el.lastChild.nodeName != '#text') ? getLastChild(el.lastChild) : el;
}

var query = getLastChild(document.lastChild).getAttribute('src').replace(/.*\?/, '');</code></pre>

The <code>query</code> variable now contains the full query string and can be used to change the result of your script.

I would then pass that in to my [getQuery](/2008/06/24/query-string-to-object-via-regex/) function so I had access to it as an object.

## Demo

I've created two separate snippets on [JS Bin](https://jsbin.com) (my new weekend project), one containing the external script code (with <code>getQuery</code>) and one that makes the call:

* [Demo of query string read](https://jsbin.com/utala/) ([source](https://jsbin.com/utala/edit/#html))
* [Source of external script](https://jsbin.com/oveve/js)
