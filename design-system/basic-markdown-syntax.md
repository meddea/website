---
layout: layouts/default.njk
title: Basic Markdown Syntax
---


{% max_width max_width %}

# Heading level 1

## Heading level 2

### Heading level 3	

#### Heading level 4

##### Heading level 5

###### Heading level 6

Heading level 1
===============

Heading level 2
---------------

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

First line with two spaces after.  
And the next line.

First line with the HTML tag after.<br>
And the next line.

I just love **bold text**.

I just love __bold text__.

Love **is** bold

Italicized text is the *cat's meow*.

Italicized text is the _cat's meow_.

A*cat*meow.

This text is ***really important***.

This text is ___really important___.

This text is __*really important*__.

This text is **_really important_**.

This is really ***very*** important text

> Dorothy followed her through many of the beautiful rooms in her castle.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.


### lists

1. First item
2. Second item
3. Third item
4. Fourth item

<!-- end of the list -->

1. First item
1. Second item
1. Third item
1. Fourth item

<!-- end of the list -->

1. First item
8. Second item
3. Third item
5. Fourth item

<!-- end of the list -->

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item


- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

<!-- end of the list -->

- 1968\. A great year!
- I think 1969 was second best.

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

<!-- end of the list -->

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.

<!-- end of the list -->

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](../../img/tux.png)

3. Close the file.

<!-- end of the list -->

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

At the command prompt, type `nano`.

``Use `code` in your Markdown file.``

    <html>
      <head>
      </head>
    </html>

***

---

_________________

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

<https://www.markdownguide.org>
<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

- [hobbit-hole][1]
- [hobbit-hole] [2]

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
[2]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][3], and that means comfort.

[3]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"


![The San Juan Mountains are beautiful!](../../img/san-juan-mountains.jpg "San Juan Mountains")

[![An old rock in the desert](../../img/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

\* Without the backslash, this would be a bullet in an unordered list.

This **word** is bold. This <em>word</em> is italic.


{% end_max_width %}