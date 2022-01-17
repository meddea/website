---
layout: layouts/design-system/assets.njk
title: Assets
---

{% max_width max_width %}

# {{ title }}

## Logo

{% responsive %}
{% assets_block containers, "/img/logo.png", "300", "124", "Logo" %}
{% end_responsive %}

## Favicon

{% responsive %}
{% assets_block containers, "/img/favicon-16x16.png", "16", "16", "Favicon" %}
{% assets_block containers, "/img/favicon-32x32.png", "32", "32", "Favicon" %}
{% assets_block containers, "/img/favicon-96x96.png", "96", "96", "Favicon" %}
{% assets_block containers, "/img/favicon-120x120.png", "120", "120", "Favicon" %}
{% assets_block containers, "/img/favicon-144x144.png", "144", "144", "Favicon" %}

{% end_responsive %}

## Backgrounds

{% responsive %}

{% assets_block containers, "/img/banner-1.png", "", "", "" %}
{% assets_block containers, "/img/bg-subpage-desktop.png", "", "", "" %}
{% assets_block containers, "/img/bg-subpage-mobile.png", "", "", "" %}
{% assets_block containers, "/img/bg-subpage-tablet.png", "", "", "" %}
{% assets_block containers, "/img/photo01.png", "", "", "" %}
{% assets_block containers, "/img/photo02.png", "", "", "" %}
{% assets_block containers, "/img/photo03_form-contact.png", "", "", "" %}

{% end_responsive %}

## Icons

{% responsive %}

{% assets_block containers, "/img/icons/facebook.png", "35", "35", "icon facebook" %}
{% assets_block containers, "/img/icons/instagram.png", "35", "35", "icon instagram" %}

{% end_responsive %}

## Buttons

{% responsive %}

{% assets_block containers, "/img/buttons/button-grey.svg", "", "", "" %}
{% assets_block containers, "/img/buttons/button-white.svg", "", "", "" %}

{% end_responsive %}

{% end_max_width %}