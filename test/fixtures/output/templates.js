(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.header=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=this,j="function",k=c.helperMissing,l=void 0,m=this.escapeExpression;return f+="<h1>",h=c.title,g=h||b.title,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"title",{hash:{}})),f+=m(g)+"</h1>\n",f}),b.nav=a(function(a,b,c,d,e){function p(a,b){var c="",d;return c+="\n  <li>",d=a,typeof d===l?d=d.call(a,{hash:{}}):d===n&&(d=m.call(a,"this",{hash:{}})),c+=o(d)+"</li>\n  ",c}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+="<ul>\n ",i=c.items,g=i||b.items,h=c.each,j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n</ul>\n",f})})()