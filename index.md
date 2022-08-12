---
title: projects
layout: main
---

<div>
    <div class="justify">
        <h1>Selected projects</h1>
    </div>
</div>


<div class="projects grid-two-columns">
{% assign sorted = site.posts | sort: 'date' | reverse  %}
{% for post in sorted %}
    <a href="{{ post.url }}" class="wrapper">
        <img src="{{ post.img-link }}" />
        <div class="project-brief">
            {{ post.project-title }}
        </div>
        <div class="project-detail">
            <strong>{{ post.project-subtitle }}</strong>
            <br />
            {{ post.description }}
        </div>
    </a> 
{% endfor %}
</div>