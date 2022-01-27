---
layout: layouts/design-system/ui-kit.njk
title: UI-Kit
---


{% max_width max_width %}

# {{ title }}

## Link

### main-menu__link

{% responsive %}
{% ui_kit_block containers, "main-menu__link", "link" %}
{% end_responsive %}

### main-menu__link--current

{% responsive %}
{% ui_kit_block containers, "main-menu__link main-menu__link--current", "link" %}
{% end_responsive %}

## Button

### burger-button

{% responsive %}
{% ui_kit_block containers, "burger-button", "button" %}
{% end_responsive %}

### burger-button--opened

{% responsive %}
{% ui_kit_block containers, "burger-button burger-button--opened", "button" %}
{% end_responsive %}

### button-1

{% responsive %}
{% ui_kit_block containers, "button-1", "link" %}
{% end_responsive %}

### button-2

{% responsive %}
{% ui_kit_block containers, "button-2", "link", "#000000" %}
{% end_responsive %}

{% end_max_width %}
