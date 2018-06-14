---
layout: layouts/default.ect
title: Code
collection: nav
navOrder: 3
link: 'code.html'
---

<div class="grid-x grid-margin-x">
<div class="cell medium-3 large-2">
### renm
</div>

<div class="cell medium-8 large-6">
<h3 class="show-for-medium"></h3>

Relational event network models (RENM) attempt to model the flow of events
between actors in a network. These may take the form of radio calls between
emergency responders, diplomatic actions between nations, or chats between
members of a social network. These models stem from work by
[Butts](http://www.jstor.org/stable/20451153).

The code here implements a maximum likelihood estimator for a RENM in Java,
derived from the formulation by [Brandes et
al.](http://dx.doi.org/10.1109/ASONAM.2009.28) .

<hr>

#### Get the Source

Latest version on [Github](https://www.github.com/balachia/renm)

(Possibly outdated) [zip file](files/renm.zip)

<hr>

#### Other Implementations

R package [relevent](http://cran.r-project.org/web/packages/relevent/index.html) (CRAN)

Standalone software [Visone](http://www.visone.info/)

</div>
</div>
<div class="grid-x grid-margin-x">
<div class="cell medium-3 large-2">
### pano.py
</div>

<div class="cell medium-8 large-6">
<h3 class="show-for-medium"></h3>

[*panopy*](https://github.com/balachia/panopy) is a workflow automation wrapper
for [*pandoc*](https://pandoc.org/).

*panopy* lets you offload any number of *pandoc* workflows into a global
configuration file, letting you apply them to any file you create. Say you've
got a complex way of making your pdfs look fancy. Write a workflow template
called `fancypdf`, then call `panopy fancypdf input.md`.

<hr>

#### Alternatives

Other people have other ways to hack around pandoc:

- [Kieran Healy's Makefiles](http://kieranhealy.org/blog/archives/2014/01/23/plain-text/)
- [panzer](https://github.com/msprev/panzer), a file-metadata-based solution

</div>
</div>


