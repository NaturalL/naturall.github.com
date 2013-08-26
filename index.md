---
layout: page
title: 
tagline: Supporting tagline
---
{% include JB/setup %}

呵呵，快开学了




    



<ul class="posts">
  {% for post in site.posts %}
    <li>
    <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>

    </li>
    
  {% endfor %}
</ul>



