---
layout: index
title:  Index
tagline: Supporting tagline
---
{% include JB/setup %}




偏见


    

<ul class="posts">

  {% for post in site.posts %}
    {% capture tyear %}
        {{post.date| date: "%Y"}}
    {% endcapture %}

    {% if tyear != year%}
        <h2>{{tyear}}</h2>
    {% endif %}
    <li>
    <span> {{ post.date| date: "%m-%d" }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </li>

    {% capture year %}
        {{post.date| date: "%Y"}}
    {% endcapture %}
    
  {% endfor %}
</ul>



