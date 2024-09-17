<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// Example of how to dynamically load content</span></p>
<p class="p1"><span class="s1">const posts = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{ title: 'First Blog Post', description: 'This is the first post.', link: 'post.html' },</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{ title: 'Second Blog Post', description: 'This is the second post.', link: 'post.html' }</span></p>
<p class="p1"><span class="s1">];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const blogSection = document.getElementById('blog-posts');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">posts.forEach(post =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const article = document.createElement('article');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>article.innerHTML = `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;h2&gt;&lt;a href="${post.link}"&gt;${post.title}&lt;/a&gt;&lt;/h2&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;p&gt;${post.description}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>blogSection.appendChild(article);</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
