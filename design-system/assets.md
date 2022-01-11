---
layout: layouts/design-system/assets.njk
title: Assets
---

{% max_width max_width %}

# {{ title }}

## Logo

{% responsive %}
{% assets_block containers, "/img/logo.svg", "95", "20", "Logo" %}
{% end_responsive %}
{% end_max_width %}