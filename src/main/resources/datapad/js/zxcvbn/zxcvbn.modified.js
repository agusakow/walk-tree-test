(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var adjacency_graphs;adjacency_graphs={qwerty:{"!":["`~",null,null,"2@","qQ",null],'"':[";:","[{","]}",null,null,"/?"],"#":["2@",null,null,"4$","eE","wW"],$:["3#",null,null,"5%","rR","eE"],"%":["4$",null,null,"6^","tT","rR"],"&":["6^",null,null,"8*","uU","yY"],"'":[";:","[{","]}",null,null,"/?"],"(":["8*",null,null,"0)","oO","iI"],")":["9(",null,null,"-_","pP","oO"],"*":["7&",null,null,"9(","iI","uU"],"+":["-_",null,null,null,"]}","[{"],",":["mM","kK","lL",".>",null,null],"-":["0)",null,null,"=+","[{","pP"],".":[",<","lL",";:","/?",null,null],"/":[".>",";:","'\"",null,null,null],0:["9(",null,null,"-_","pP","oO"],1:["`~",null,null,"2@","qQ",null],2:["1!",null,null,"3#","wW","qQ"],3:["2@",null,null,"4$","eE","wW"],4:["3#",null,null,"5%","rR","eE"],5:["4$",null,null,"6^","tT","rR"],6:["5%",null,null,"7&","yY","tT"],7:["6^",null,null,"8*","uU","yY"],8:["7&",null,null,"9(","iI","uU"],9:["8*",null,null,"0)","oO","iI"],":":["lL","pP","[{","'\"","/?",".>"],";":["lL","pP","[{","'\"","/?",".>"],"<":["mM","kK","lL",".>",null,null],"=":["-_",null,null,null,"]}","[{"],">":[",<","lL",";:","/?",null,null],"?":[".>",";:","'\"",null,null,null],"@":["1!",null,null,"3#","wW","qQ"],A:[null,"qQ","wW","sS","zZ",null],B:["vV","gG","hH","nN",null,null],C:["xX","dD","fF","vV",null,null],D:["sS","eE","rR","fF","cC","xX"],E:["wW","3#","4$","rR","dD","sS"],F:["dD","rR","tT","gG","vV","cC"],G:["fF","tT","yY","hH","bB","vV"],H:["gG","yY","uU","jJ","nN","bB"],I:["uU","8*","9(","oO","kK","jJ"],J:["hH","uU","iI","kK","mM","nN"],K:["jJ","iI","oO","lL",",<","mM"],L:["kK","oO","pP",";:",".>",",<"],M:["nN","jJ","kK",",<",null,null],N:["bB","hH","jJ","mM",null,null],O:["iI","9(","0)","pP","lL","kK"],P:["oO","0)","-_","[{",";:","lL"],Q:[null,"1!","2@","wW","aA",null],R:["eE","4$","5%","tT","fF","dD"],S:["aA","wW","eE","dD","xX","zZ"],T:["rR","5%","6^","yY","gG","fF"],U:["yY","7&","8*","iI","jJ","hH"],V:["cC","fF","gG","bB",null,null],W:["qQ","2@","3#","eE","sS","aA"],X:["zZ","sS","dD","cC",null,null],Y:["tT","6^","7&","uU","hH","gG"],Z:[null,"aA","sS","xX",null,null],"[":["pP","-_","=+","]}","'\"",";:"],"\\":["]}",null,null,null,null,null],"]":["[{","=+",null,"\\|",null,"'\""],"^":["5%",null,null,"7&","yY","tT"],_:["0)",null,null,"=+","[{","pP"],"`":[null,null,null,"1!",null,null],a:[null,"qQ","wW","sS","zZ",null],b:["vV","gG","hH","nN",null,null],c:["xX","dD","fF","vV",null,null],d:["sS","eE","rR","fF","cC","xX"],e:["wW","3#","4$","rR","dD","sS"],f:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],i:["uU","8*","9(","oO","kK","jJ"],j:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",<","mM"],l:["kK","oO","pP",";:",".>",",<"],m:["nN","jJ","kK",",<",null,null],n:["bB","hH","jJ","mM",null,null],o:["iI","9(","0)","pP","lL","kK"],p:["oO","0)","-_","[{",";:","lL"],q:[null,"1!","2@","wW","aA",null],r:["eE","4$","5%","tT","fF","dD"],s:["aA","wW","eE","dD","xX","zZ"],t:["rR","5%","6^","yY","gG","fF"],u:["yY","7&","8*","iI","jJ","hH"],v:["cC","fF","gG","bB",null,null],w:["qQ","2@","3#","eE","sS","aA"],x:["zZ","sS","dD","cC",null,null],y:["tT","6^","7&","uU","hH","gG"],z:[null,"aA","sS","xX",null,null],"{":["pP","-_","=+","]}","'\"",";:"],"|":["]}",null,null,null,null,null],"}":["[{","=+",null,"\\|",null,"'\""],"~":[null,null,null,"1!",null,null]},dvorak:{"!":["`~",null,null,"2@","'\"",null],'"':[null,"1!","2@",",<","aA",null],"#":["2@",null,null,"4$",".>",",<"],$:["3#",null,null,"5%","pP",".>"],"%":["4$",null,null,"6^","yY","pP"],"&":["6^",null,null,"8*","gG","fF"],"'":[null,"1!","2@",",<","aA",null],"(":["8*",null,null,"0)","rR","cC"],")":["9(",null,null,"[{","lL","rR"],"*":["7&",null,null,"9(","cC","gG"],"+":["/?","]}",null,"\\|",null,"-_"],",":["'\"","2@","3#",".>","oO","aA"],"-":["sS","/?","=+",null,null,"zZ"],".":[",<","3#","4$","pP","eE","oO"],"/":["lL","[{","]}","=+","-_","sS"],0:["9(",null,null,"[{","lL","rR"],1:["`~",null,null,"2@","'\"",null],2:["1!",null,null,"3#",",<","'\""],3:["2@",null,null,"4$",".>",",<"],4:["3#",null,null,"5%","pP",".>"],5:["4$",null,null,"6^","yY","pP"],6:["5%",null,null,"7&","fF","yY"],7:["6^",null,null,"8*","gG","fF"],8:["7&",null,null,"9(","cC","gG"],9:["8*",null,null,"0)","rR","cC"],":":[null,"aA","oO","qQ",null,null],";":[null,"aA","oO","qQ",null,null],"<":["'\"","2@","3#",".>","oO","aA"],"=":["/?","]}",null,"\\|",null,"-_"],">":[",<","3#","4$","pP","eE","oO"],"?":["lL","[{","]}","=+","-_","sS"],"@":["1!",null,null,"3#",",<","'\""],A:[null,"'\"",",<","oO",";:",null],B:["xX","dD","hH","mM",null,null],C:["gG","8*","9(","rR","tT","hH"],D:["iI","fF","gG","hH","bB","xX"],E:["oO",".>","pP","uU","jJ","qQ"],F:["yY","6^","7&","gG","dD","iI"],G:["fF","7&","8*","cC","hH","dD"],H:["dD","gG","cC","tT","mM","bB"],I:["uU","yY","fF","dD","xX","kK"],J:["qQ","eE","uU","kK",null,null],K:["jJ","uU","iI","xX",null,null],L:["rR","0)","[{","/?","sS","nN"],M:["bB","hH","tT","wW",null,null],N:["tT","rR","lL","sS","vV","wW"],O:["aA",",<",".>","eE","qQ",";:"],P:[".>","4$","5%","yY","uU","eE"],Q:[";:","oO","eE","jJ",null,null],R:["cC","9(","0)","lL","nN","tT"],S:["nN","lL","/?","-_","zZ","vV"],T:["hH","cC","rR","nN","wW","mM"],U:["eE","pP","yY","iI","kK","jJ"],V:["wW","nN","sS","zZ",null,null],W:["mM","tT","nN","vV",null,null],X:["kK","iI","dD","bB",null,null],Y:["pP","5%","6^","fF","iI","uU"],Z:["vV","sS","-_",null,null,null],"[":["0)",null,null,"]}","/?","lL"],"\\":["=+",null,null,null,null,null],"]":["[{",null,null,null,"=+","/?"],"^":["5%",null,null,"7&","fF","yY"],_:["sS","/?","=+",null,null,"zZ"],"`":[null,null,null,"1!",null,null],a:[null,"'\"",",<","oO",";:",null],b:["xX","dD","hH","mM",null,null],c:["gG","8*","9(","rR","tT","hH"],d:["iI","fF","gG","hH","bB","xX"],e:["oO",".>","pP","uU","jJ","qQ"],f:["yY","6^","7&","gG","dD","iI"],g:["fF","7&","8*","cC","hH","dD"],h:["dD","gG","cC","tT","mM","bB"],i:["uU","yY","fF","dD","xX","kK"],j:["qQ","eE","uU","kK",null,null],k:["jJ","uU","iI","xX",null,null],l:["rR","0)","[{","/?","sS","nN"],m:["bB","hH","tT","wW",null,null],n:["tT","rR","lL","sS","vV","wW"],o:["aA",",<",".>","eE","qQ",";:"],p:[".>","4$","5%","yY","uU","eE"],q:[";:","oO","eE","jJ",null,null],r:["cC","9(","0)","lL","nN","tT"],s:["nN","lL","/?","-_","zZ","vV"],t:["hH","cC","rR","nN","wW","mM"],u:["eE","pP","yY","iI","kK","jJ"],v:["wW","nN","sS","zZ",null,null],w:["mM","tT","nN","vV",null,null],x:["kK","iI","dD","bB",null,null],y:["pP","5%","6^","fF","iI","uU"],z:["vV","sS","-_",null,null,null],"{":["0)",null,null,"]}","/?","lL"],"|":["=+",null,null,null,null,null],"}":["[{",null,null,null,"=+","/?"],"~":[null,null,null,"1!",null,null]},keypad:{"*":["/",null,null,null,"-","+","9","8"],"+":["9","*","-",null,null,null,null,"6"],"-":["*",null,null,null,null,null,"+","9"],".":["0","2","3",null,null,null,null,null],"/":[null,null,null,null,"*","9","8","7"],0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6",null,null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","+",null,null,"3","2"],7:[null,null,null,"/","8","5","4",null],8:["7",null,"/","*","9","6","5","4"],9:["8","/","*","-","+",null,"6","5"]},mac_keypad:{"*":["/",null,null,null,null,null,"-","9"],"+":["6","9","-",null,null,null,null,"3"],"-":["9","/","*",null,null,null,"+","6"],".":["0","2","3",null,null,null,null,null],"/":["=",null,null,null,"*","-","9","8"],0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6","+",null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","-","+",null,"3","2"],7:[null,null,null,"=","8","5","4",null],8:["7",null,"=","/","9","6","5","4"],9:["8","=","/","*","-","+","6","5"],"=":[null,null,null,null,"/","9","8","7"]}},module.exports=adjacency_graphs;

},{}],2:[function(require,module,exports){
var zxcvbn;zxcvbn=require("./main"),window.zxcvbn=zxcvbn;

},{"./main":4}],3:[function(require,module,exports){
var feedback,scoring;scoring=require("./scoring"),feedback={default_feedback:{warning:"",suggestions:["Use a few words, avoid common phrases","No need for symbols, digits, or uppercase letters"]},get_feedback:function(e,s){var a,t,r,n,o,i;if(0===s.length)return this.default_feedback;if(e>2)return{warning:"",suggestions:[]};for(n=s[0],i=s.slice(1),t=0,r=i.length;r>t;t++)o=i[t],o.token.length>n.token.length&&(n=o);return feedback=this.get_match_feedback(n,1===s.length),a="Add another word or two. Uncommon words are better.",null!=feedback?(feedback.suggestions.unshift(a),null==feedback.warning&&(feedback.warning="")):feedback={warning:"",suggestions:[a]},feedback},get_match_feedback:function(e,s){var a,t;switch(e.pattern){case"dictionary":return this.get_dictionary_match_feedback(e,s);case"spatial":return a=e.graph.toUpperCase(),t=1===e.turns?"Straight rows of keys are easy to guess":"Short keyboard patterns are easy to guess",{warning:t,suggestions:["Use a longer keyboard pattern with more turns"]};case"repeat":return t=1===e.base_token.length?'Repeats like "aaa" are easy to guess':'Repeats like "abcabcabc" are only slightly harder to guess than "abc"',{warning:t,suggestions:["Avoid repeated words and characters"]};case"sequence":return{warning:"Sequences like abc or 6543 are easy to guess",suggestions:["Avoid sequences"]};case"regex":if("recent_year"===e.regex_name)return{warning:"Recent years are easy to guess",suggestions:["Avoid recent years","Avoid years that are associated with you"]};break;case"date":return{warning:"Dates are often easy to guess",suggestions:["Avoid dates and years that are associated with you"]}}},get_dictionary_match_feedback:function(e,s){var a,t,r,n,o;return n="passwords"===e.dictionary_name?!s||e.l33t||e.reversed?e.guesses_log10<=4?"This is similar to a commonly used password":void 0:e.rank<=10?"This is a top-10 common password":e.rank<=100?"This is a top-100 common password":"This is a very common password":"english"===e.dictionary_name?s?"A word by itself is easy to guess":void 0:"surnames"===(a=e.dictionary_name)||"male_names"===a||"female_names"===a?s?"Names and surnames by themselves are easy to guess":"Common names and surnames are easy to guess":"",r=[],o=e.token,o.match(scoring.START_UPPER)?r.push("Capitalization doesn't help very much"):o.match(scoring.ALL_UPPER)&&o.toLowerCase()!==o&&r.push("All-uppercase is almost as easy to guess as all-lowercase"),e.reversed&&e.token.length>=4&&r.push("Reversed words aren't much harder to guess"),e.l33t&&r.push("Predictable substitutions like '@' instead of 'a' don't help very much"),t={warning:n,suggestions:r}}},module.exports=feedback;

},{"./scoring":6}],4:[function(require,module,exports){
var feedback,matching,scoring,time,time_estimates,zxcvbn;matching=require("./matching"),scoring=require("./scoring"),time_estimates=require("./time_estimates"),feedback=require("./feedback"),time=function(){return(new Date).getTime()},zxcvbn=function(e,t){var i,n,c,s,a,r,m,o,u,g,_;for(null==t&&(t=[]),g=time(),u=[],c=0,s=t.length;s>c;c++)i=t[c],("string"==(m=typeof i)||"number"===m||"boolean"===m)&&u.push(i.toString().toLowerCase());matching.set_user_input_dictionary(u),a=matching.omnimatch(e),o=scoring.most_guessable_match_sequence(e,a),o.calc_time=time()-g,n=time_estimates.estimate_attack_times(o.guesses);for(r in n)_=n[r],o[r]=_;return o.feedback=feedback.get_feedback(o.score,o.sequence),o},module.exports=zxcvbn;

},{"./feedback":3,"./matching":5,"./scoring":6,"./time_estimates":7}],5:[function(require,module,exports){
var DATE_MAX_YEAR,DATE_MIN_YEAR,DATE_SPLITS,GRAPHS,L33T_TABLE,RANKED_DICTIONARIES,REGEXEN,adjacency_graphs,build_ranked_dict,matching,scoring;adjacency_graphs=require("./adjacency_graphs"),scoring=require("./scoring"),build_ranked_dict=function(t){var e,n,r,i,a;for(i={},e=1,r=0,n=t.length;n>r;r++)a=t[r],i[a]=e,e+=1;return i},RANKED_DICTIONARIES={},GRAPHS={qwerty:adjacency_graphs.qwerty,dvorak:adjacency_graphs.dvorak,keypad:adjacency_graphs.keypad,mac_keypad:adjacency_graphs.mac_keypad},L33T_TABLE={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},REGEXEN={recent_year:/19\d\d|200\d|201\d/g},DATE_MAX_YEAR=2050,DATE_MIN_YEAR=1e3,DATE_SPLITS={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},matching={empty:function(t){var e;return 0===function(){var n;n=[];for(e in t)n.push(e);return n}().length},extend:function(t,e){return t.push.apply(t,e)},translate:function(t,e){var n;return function(){var r,i,a,s;for(a=t.split(""),s=[],i=0,r=a.length;r>i;i++)n=a[i],s.push(e[n]||n);return s}().join("")},mod:function(t,e){return(t%e+e)%e},sorted:function(t){return t.sort(function(t,e){return t.i-e.i||t.j-e.j})},omnimatch:function(t){var e,n,r,i,a;for(i=[],r=[this.dictionary_match,this.reverse_dictionary_match,this.l33t_match,this.spatial_match,this.repeat_match,this.sequence_match,this.regex_match,this.date_match],a=0,e=r.length;e>a;a++)n=r[a],this.extend(i,n.call(this,t));return this.sorted(i)},dictionary_match:function(t,e){var n,r,i,a,s,o,h,c,u,l,_,f,d,p;null==e&&(e=RANKED_DICTIONARIES),s=[],a=t.length,c=t.toLowerCase();for(n in e)for(l=e[n],r=o=0,_=a;_>=0?_>o:o>_;r=_>=0?++o:--o)for(i=h=f=r,d=a;d>=f?d>h:h>d;i=d>=f?++h:--h)c.slice(r,+i+1||9e9)in l&&(p=c.slice(r,+i+1||9e9),u=l[p],s.push({pattern:"dictionary",i:r,j:i,token:t.slice(r,+i+1||9e9),matched_word:p,rank:u,dictionary_name:n,reversed:!1,l33t:!1}));return this.sorted(s)},reverse_dictionary_match:function(t,e){var n,r,i,a,s,o;for(null==e&&(e=RANKED_DICTIONARIES),o=t.split("").reverse().join(""),i=this.dictionary_match(o,e),a=0,n=i.length;n>a;a++)r=i[a],r.token=r.token.split("").reverse().join(""),r.reversed=!0,s=[t.length-1-r.j,t.length-1-r.i],r.i=s[0],r.j=s[1];return this.sorted(i)},set_user_input_dictionary:function(t){return RANKED_DICTIONARIES.user_inputs=build_ranked_dict(t.slice())},relevant_l33t_subtable:function(t,e){var n,r,i,a,s,o,h,c,u,l;for(s={},o=t.split(""),a=0,r=o.length;r>a;a++)n=o[a],s[n]=!0;l={};for(i in e)u=e[i],h=function(){var t,e,n;for(n=[],e=0,t=u.length;t>e;e++)c=u[e],c in s&&n.push(c);return n}(),h.length>0&&(l[i]=h);return l},enumerate_l33t_subs:function(t){var e,n,r,i,a,s,o,h,c,u,l,_,f,d,p;a=function(){var e;e=[];for(i in t)e.push(i);return e}(),p=[[]],n=function(t){var e,n,r,a,s,o,h,c;for(n=[],s={},o=0,a=t.length;a>o;o++)h=t[o],e=function(){var t,e,n;for(n=[],c=e=0,t=h.length;t>e;c=++e)i=h[c],n.push([i,c]);return n}(),e.sort(),r=function(){var t,n,r;for(r=[],c=n=0,t=e.length;t>n;c=++n)i=e[c],r.push(i+","+c);return r}().join("-"),r in s||(s[r]=!0,n.push(h));return n},r=function(e){var i,a,s,o,h,c,u,l,_,f,d,g,m,A,E,y;if(e.length){for(a=e[0],m=e.slice(1),u=[],d=t[a],l=0,h=d.length;h>l;l++)for(o=d[l],_=0,c=p.length;c>_;_++){for(A=p[_],i=-1,s=f=0,g=A.length;g>=0?g>f:f>g;s=g>=0?++f:--f)if(A[s][0]===o){i=s;break}-1===i?(y=A.concat([[o,a]]),u.push(y)):(E=A.slice(0),E.splice(i,1),E.push([o,a]),u.push(A),u.push(E))}return p=n(u),r(m)}},r(a),d=[];for(c=0,o=p.length;o>c;c++){for(_=p[c],f={},u=0,h=_.length;h>u;u++)l=_[u],s=l[0],e=l[1],f[s]=e;d.push(f)}return d},l33t_match:function(t,e,n){var r,i,a,s,o,h,c,u,l,_,f,d,p,g,m,A;for(null==e&&(e=RANKED_DICTIONARIES),null==n&&(n=L33T_TABLE),c=[],_=this.enumerate_l33t_subs(this.relevant_l33t_subtable(t,n)),u=0,a=_.length;a>u&&(d=_[u],!this.empty(d));u++)for(g=this.translate(t,d),f=this.dictionary_match(g,e),l=0,s=f.length;s>l;l++)if(o=f[l],m=t.slice(o.i,+o.j+1||9e9),m.toLowerCase()!==o.matched_word){h={};for(p in d)r=d[p],-1!==m.indexOf(p)&&(h[p]=r);o.l33t=!0,o.token=m,o.sub=h,o.sub_display=function(){var t;t=[];for(i in h)A=h[i],t.push(i+" -> "+A);return t}().join(", "),c.push(o)}return this.sorted(c.filter(function(t){return t.token.length>1}))},spatial_match:function(t,e){var n,r,i;null==e&&(e=GRAPHS),i=[];for(r in e)n=e[r],this.extend(i,this.spatial_match_helper(t,n,r));return this.sorted(i)},SHIFTED_RX:/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/,spatial_match_helper:function(t,e,n){var r,i,a,s,o,h,c,u,l,_,f,d,p,g,m;for(f=[],c=0;c<t.length-1;)for(u=c+1,l=null,m=0,g="qwerty"!==n&&"dvorak"!==n||!this.SHIFTED_RX.exec(t.charAt(c))?0:1;;){if(p=t.charAt(u-1),o=!1,h=-1,s=-1,i=e[p]||[],u<t.length)for(a=t.charAt(u),d=0,_=i.length;_>d;d++)if(r=i[d],s+=1,r&&-1!==r.indexOf(a)){o=!0,h=s,1===r.indexOf(a)&&(g+=1),l!==h&&(m+=1,l=h);break}if(!o){u-c>2&&f.push({pattern:"spatial",i:c,j:u-1,token:t.slice(c,u),graph:n,turns:m,shifted_count:g}),c=u;break}u+=1}return f},repeat_match:function(t){var e,n,r,i,a,s,o,h,c,u,l,_,f,d,p;for(d=[],a=/(.+)\1+/g,u=/(.+?)\1+/g,l=/^(.+?)\1+$/,c=0;c<t.length&&(a.lastIndex=u.lastIndex=c,s=a.exec(t),_=u.exec(t),null!=s);)s[0].length>_[0].length?(f=s,i=l.exec(f[0])[1]):(f=_,i=f[1]),p=[f.index,f.index+f[0].length-1],o=p[0],h=p[1],e=scoring.most_guessable_match_sequence(i,this.omnimatch(i)),r=e.match_sequence,n=e.guesses,d.push({pattern:"repeat",i:o,j:h,token:f[0],base_token:i,base_guesses:n,base_matches:r,repeat_count:f[0].length/i.length}),c=h+1;return d},MAX_DELTA:5,sequence_match:function(t){var e,n,r,i,a,s,o,h,c;if(1===t.length)return[];for(c=function(e){return function(n,r,i){var a,s,o,c;return(r-n>1||1===Math.abs(i))&&0<(a=Math.abs(i))&&a<=e.MAX_DELTA?(c=t.slice(n,+r+1||9e9),/^[a-z]+$/.test(c)?(s="lower",o=26):/^[A-Z]+$/.test(c)?(s="upper",o=26):/^\d+$/.test(c)?(s="digits",o=10):(s="unicode",o=26),h.push({pattern:"sequence",i:n,j:r,token:t.slice(n,+r+1||9e9),sequence_name:s,sequence_space:o,ascending:i>0})):void 0}}(this),h=[],n=0,a=null,i=s=1,o=t.length;o>=1?o>s:s>o;i=o>=1?++s:--s)e=t.charCodeAt(i)-t.charCodeAt(i-1),null==a&&(a=e),e!==a&&(r=i-1,c(n,r,a),n=r,a=e);return c(n,t.length-1,a),h},regex_match:function(t,e){var n,r,i,a,s;null==e&&(e=REGEXEN),n=[];for(r in e)for(i=e[r],i.lastIndex=0;a=i.exec(t);)s=a[0],n.push({pattern:"regex",token:s,i:a.index,j:a.index+a[0].length-1,regex_name:r,regex_match:a});return this.sorted(n)},date_match:function(t){var e,n,r,i,a,s,o,h,c,u,l,_,f,d,p,g,m,A,E,y,v,I,R,T,D,k,x,j,b,N,S,L,M,q;for(_=[],f=/^\d{4,8}$/,d=/^(\d{1,4})([\s\/\\_.-])(\d{1,2})\2(\d{1,4})$/,s=m=0,v=t.length-4;v>=0?v>=m:m>=v;s=v>=0?++m:--m)for(o=A=I=s+3,R=s+7;(R>=I?R>=A:A>=R)&&!(o>=t.length);o=R>=I?++A:--A)if(q=t.slice(s,+o+1||9e9),f.exec(q)){for(r=[],T=DATE_SPLITS[q.length],E=0,u=T.length;u>E;E++)D=T[E],h=D[0],c=D[1],a=this.map_ints_to_dmy([parseInt(q.slice(0,h)),parseInt(q.slice(h,c)),parseInt(q.slice(c))]),null!=a&&r.push(a);if(r.length>0){for(e=r[0],p=function(t){return Math.abs(t.year-scoring.REFERENCE_YEAR)},g=p(r[0]),k=r.slice(1),y=0,l=k.length;l>y;y++)n=k[y],i=p(n),g>i&&(x=[n,i],e=x[0],g=x[1]);_.push({pattern:"date",token:q,i:s,j:o,separator:"",year:e.year,month:e.month,day:e.day})}}for(s=L=0,j=t.length-6;j>=0?j>=L:L>=j;s=j>=0?++L:--L)for(o=M=b=s+5,N=s+9;(N>=b?N>=M:M>=N)&&!(o>=t.length);o=N>=b?++M:--M)q=t.slice(s,+o+1||9e9),S=d.exec(q),null!=S&&(a=this.map_ints_to_dmy([parseInt(S[1]),parseInt(S[3]),parseInt(S[4])]),null!=a&&_.push({pattern:"date",token:q,i:s,j:o,separator:S[2],year:a.year,month:a.month,day:a.day}));return this.sorted(_.filter(function(t){var e,n,r,i;for(e=!1,i=0,n=_.length;n>i;i++)if(r=_[i],t!==r&&r.i<=t.i&&r.j>=t.j){e=!0;break}return!e}))},map_ints_to_dmy:function(t){var e,n,r,i,a,s,o,h,c,u,l,_,f,d,p,g;if(!(t[1]>31||t[1]<=0)){for(o=0,h=0,p=0,s=0,r=t.length;r>s;s++){if(n=t[s],n>99&&DATE_MIN_YEAR>n||n>DATE_MAX_YEAR)return;n>31&&(h+=1),n>12&&(o+=1),0>=n&&(p+=1)}if(!(h>=2||3===o||p>=2)){for(u=[[t[2],t.slice(0,2)],[t[0],t.slice(1,3)]],c=0,i=u.length;i>c;c++)if(_=u[c],g=_[0],d=_[1],g>=DATE_MIN_YEAR&&DATE_MAX_YEAR>=g)return e=this.map_ints_to_dm(d),null!=e?{year:g,month:e.month,day:e.day}:void 0;for(l=0,a=u.length;a>l;l++)if(f=u[l],g=f[0],d=f[1],e=this.map_ints_to_dm(d),null!=e)return g=this.two_to_four_digit_year(g),{year:g,month:e.month,day:e.day}}}},map_ints_to_dm:function(t){var e,n,r,i,a,s;for(a=[t,t.slice().reverse()],i=0,n=a.length;n>i;i++)if(s=a[i],e=s[0],r=s[1],e>=1&&31>=e&&r>=1&&12>=r)return{day:e,month:r}},two_to_four_digit_year:function(t){return t>99?t:t>50?t+1900:t+2e3}},module.exports=matching;

},{"./adjacency_graphs":1,"./scoring":6}],6:[function(require,module,exports){
var BRUTEFORCE_CARDINALITY,MIN_GUESSES_BEFORE_GROWING_SEQUENCE,MIN_SUBMATCH_GUESSES_MULTI_CHAR,MIN_SUBMATCH_GUESSES_SINGLE_CHAR,adjacency_graphs,calc_average_degree,k,scoring,v;adjacency_graphs=require("./adjacency_graphs"),calc_average_degree=function(e){var t,r,n,s,a,u;t=0;for(n in e)a=e[n],t+=function(){var e,t,r;for(r=[],t=0,e=a.length;e>t;t++)s=a[t],s&&r.push(s);return r}().length;return t/=function(){var t;t=[];for(r in e)u=e[r],t.push(r);return t}().length},BRUTEFORCE_CARDINALITY=10,MIN_GUESSES_BEFORE_GROWING_SEQUENCE=1e4,MIN_SUBMATCH_GUESSES_SINGLE_CHAR=10,MIN_SUBMATCH_GUESSES_MULTI_CHAR=50,scoring={nCk:function(e,t){var r,n,s,a;if(t>e)return 0;if(0===t)return 1;for(s=1,r=n=1,a=t;a>=1?a>=n:n>=a;r=a>=1?++n:--n)s*=e,s/=r,e-=1;return s},log10:function(e){return Math.log(e)/Math.log(10)},log2:function(e){return Math.log(e)/Math.log(2)},factorial:function(e){var t,r,n,s;if(2>e)return 1;for(t=1,r=n=2,s=e;s>=2?s>=n:n>=s;r=s>=2?++n:--n)t*=r;return t},most_guessable_match_sequence:function(e,t,r){var n,s,a,u,i,_,o,h,E,c,g,f,l,p,A,S,R,v,I,M;for(null==r&&(r=!1),g=e.length,c=function(){var e,t,r;for(r=[],n=e=0,t=g;t>=0?t>e:e>t;n=t>=0?++e:--e)r.push([]);return r}(),f=0,_=t.length;_>f;f++)h=t[f],c[h.j].push(h);for(l={m:function(){var e,t,r;for(r=[],n=e=0,t=g;t>=0?t>e:e>t;n=t>=0?++e:--e)r.push({});return r}(),pi:function(){var e,t,r;for(r=[],n=e=0,t=g;t>=0?t>e:e>t;n=t>=0?++e:--e)r.push({});return r}(),g:function(){var e,t,r;for(r=[],n=e=0,t=g;t>=0?t>e:e>t;n=t>=0?++e:--e)r.push(1/0);return r}(),l:function(){var e,t,r;for(r=[],n=e=0,t=g;t>=0?t>e:e>t;n=t>=0?++e:--e)r.push(0);return r}()},M=function(t){return function(n,s){var a,u,i;return u=n.j,i=t.estimate_guesses(n,e),s>1&&(i*=l.pi[n.i-1][s-1]),a=t.factorial(s)*i,r||(a+=Math.pow(MIN_GUESSES_BEFORE_GROWING_SEQUENCE,s-1)),a<l.g[u]?(l.g[u]=a,l.l[u]=s,l.m[u][s]=n,l.pi[u][s]=i):void 0}}(this),s=function(e){return function(e){var t,r,n,s;if(h=E(0,e),M(h,1),0!==e){n=l.m[e-1],s=[];for(t in n)r=n[t],t=parseInt(t),"bruteforce"===r.pattern?(h=E(r.i,e),s.push(M(h,t))):(h=E(e,e),s.push(M(h,t+1)));return s}}}(this),E=function(t){return function(t,r){return{pattern:"bruteforce",token:e.slice(t,+r+1||9e9),i:t,j:r}}}(this),I=function(e){return function(e){var t,r,n;for(n=[],t=e-1,r=l.l[t];t>=0;)h=l.m[t][r],n.unshift(h),t=h.i-1,r--;return n}}(this),u=A=0,S=g;S>=0?S>A:A>S;u=S>=0?++A:--A){for(R=c[u],v=0,o=R.length;o>v;v++)if(h=R[v],h.i>0)for(i in l.m[h.i-1])i=parseInt(i),M(h,i+1);else M(h,1);s(u)}return p=I(g),a=0===e.length?1:l.g[g-1],{password:e,guesses:a,guesses_log10:this.log10(a),sequence:p}},estimate_guesses:function(e,t){var r,n,s;return null!=e.guesses?e.guesses:(s=1,e.token.length<t.length&&(s=1===e.token.length?MIN_SUBMATCH_GUESSES_SINGLE_CHAR:MIN_SUBMATCH_GUESSES_MULTI_CHAR),r={bruteforce:this.bruteforce_guesses,dictionary:this.dictionary_guesses,spatial:this.spatial_guesses,repeat:this.repeat_guesses,sequence:this.sequence_guesses,regex:this.regex_guesses,date:this.date_guesses},n=r[e.pattern].call(this,e),e.guesses=Math.max(n,s),e.guesses_log10=this.log10(e.guesses),e.guesses)},bruteforce_guesses:function(e){var t,r;return t=Math.pow(BRUTEFORCE_CARDINALITY,e.token.length),r=1===e.token.length?MIN_SUBMATCH_GUESSES_SINGLE_CHAR+1:MIN_SUBMATCH_GUESSES_MULTI_CHAR+1,Math.max(t,r)},repeat_guesses:function(e){return e.base_guesses*e.repeat_count},sequence_guesses:function(e){var t,r;return r=e.token.charAt(0),t="a"===r||"A"===r||"z"===r||"Z"===r||"0"===r||"1"===r||"9"===r?4:r.match(/\d/)?10:26,e.ascending||(t*=2),t*e.token.length},MIN_YEAR_SPACE:20,REFERENCE_YEAR:2016,regex_guesses:function(e){var t,r;if(t={alpha_lower:26,alpha_upper:26,alpha:52,alphanumeric:62,digits:10,symbols:33},e.regex_name in t)return Math.pow(t[e.regex_name],e.token.length);switch(e.regex_name){case"recent_year":return r=Math.abs(parseInt(e.regex_match[0])-this.REFERENCE_YEAR),r=Math.max(r,this.MIN_YEAR_SPACE)}},date_guesses:function(e){var t,r;return r=Math.max(Math.abs(e.year-this.REFERENCE_YEAR),this.MIN_YEAR_SPACE),t=365*r,e.has_full_year&&(t*=2),e.separator&&(t*=4),t},KEYBOARD_AVERAGE_DEGREE:calc_average_degree(adjacency_graphs.qwerty),KEYPAD_AVERAGE_DEGREE:calc_average_degree(adjacency_graphs.keypad),KEYBOARD_STARTING_POSITIONS:function(){var e,t;e=adjacency_graphs.qwerty,t=[];for(k in e)v=e[k],t.push(k);return t}().length,KEYPAD_STARTING_POSITIONS:function(){var e,t;e=adjacency_graphs.keypad,t=[];for(k in e)v=e[k],t.push(k);return t}().length,spatial_guesses:function(e){var t,r,n,s,a,u,i,_,o,h,E,c,g,f,l,p,A,S;for("qwerty"===(E=e.graph)||"dvorak"===E?(l=this.KEYBOARD_STARTING_POSITIONS,s=this.KEYBOARD_AVERAGE_DEGREE):(l=this.KEYPAD_STARTING_POSITIONS,s=this.KEYPAD_AVERAGE_DEGREE),a=0,t=e.token.length,A=e.turns,u=_=2,c=t;c>=2?c>=_:_>=c;u=c>=2?++_:--_)for(o=Math.min(A,u-1),i=h=1,g=o;g>=1?g>=h:h>=g;i=g>=1?++h:--h)a+=this.nCk(u-1,i-1)*l*Math.pow(s,i);if(e.shifted_count)if(r=e.shifted_count,n=e.token.length-e.shifted_count,0===r||0===n)a*=2;else{for(p=0,u=S=1,f=Math.min(r,n);f>=1?f>=S:S>=f;u=f>=1?++S:--S)p+=this.nCk(r+n,u);a*=p}return a},dictionary_guesses:function(e){var t;return e.base_guesses=e.rank,e.uppercase_variations=this.uppercase_variations(e),e.l33t_variations=this.l33t_variations(e),t=e.reversed&&2||1,e.base_guesses*e.uppercase_variations*e.l33t_variations*t},START_UPPER:/^[A-Z][^A-Z]+$/,END_UPPER:/^[^A-Z]+[A-Z]$/,ALL_UPPER:/^[^a-z]+$/,ALL_LOWER:/^[^A-Z]+$/,uppercase_variations:function(e){var t,r,n,s,a,u,i,_,o,h,E,c;if(c=e.token,c.match(this.ALL_LOWER)||c.toLowerCase()===c)return 1;for(_=[this.START_UPPER,this.END_UPPER,this.ALL_UPPER],u=0,a=_.length;a>u;u++)if(h=_[u],c.match(h))return 2;for(r=function(){var e,t,r,s;for(r=c.split(""),s=[],t=0,e=r.length;e>t;t++)n=r[t],n.match(/[A-Z]/)&&s.push(n);return s}().length,t=function(){var e,t,r,s;for(r=c.split(""),s=[],t=0,e=r.length;e>t;t++)n=r[t],n.match(/[a-z]/)&&s.push(n);return s}().length,E=0,s=i=1,o=Math.min(r,t);o>=1?o>=i:i>=o;s=o>=1?++i:--i)E+=this.nCk(r+t,s);return E},l33t_variations:function(e){var t,r,n,s,a,u,i,_,o,h,E,c,g;if(!e.l33t)return 1;g=1,o=e.sub;for(E in o)if(c=o[E],s=e.token.toLowerCase().split(""),t=function(){var e,t,r;for(r=[],t=0,e=s.length;e>t;t++)n=s[t],n===E&&r.push(n);return r}().length,r=function(){var e,t,r;for(r=[],t=0,e=s.length;e>t;t++)n=s[t],n===c&&r.push(n);return r}().length,0===t||0===r)g*=2;else{for(i=Math.min(r,t),_=0,a=u=1,h=i;h>=1?h>=u:u>=h;a=h>=1?++u:--u)_+=this.nCk(r+t,a);g*=_}return g}},module.exports=scoring;

},{"./adjacency_graphs":1}],7:[function(require,module,exports){
var time_estimates;time_estimates={estimate_attack_times:function(e){var t,n,s,o;n={online_throttling_100_per_hour:e/(100/3600),online_no_throttling_10_per_second:e/10,offline_slow_hashing_1e4_per_second:e/1e4,offline_fast_hashing_1e10_per_second:e/1e10},t={};for(s in n)o=n[s],t[s]=this.display_time(o);return{crack_times_seconds:n,crack_times_display:t,score:this.guesses_to_score(e)}},guesses_to_score:function(e){var t;return t=5,1e3+t>e?0:1e6+t>e?1:1e8+t>e?2:1e10+t>e?3:4},display_time:function(e){var t,n,s,o,_,r,i,a,u,c;return i=60,r=60*i,s=24*r,a=31*s,c=12*a,n=100*c,u=1>e?[null,"less than a second"]:i>e?(t=Math.round(e),[t,t+" second"]):r>e?(t=Math.round(e/i),[t,t+" minute"]):s>e?(t=Math.round(e/r),[t,t+" hour"]):a>e?(t=Math.round(e/s),[t,t+" day"]):c>e?(t=Math.round(e/a),[t,t+" month"]):n>e?(t=Math.round(e/c),[t,t+" year"]):[null,"centuries"],o=u[0],_=u[1],null!=o&&1!==o&&(_+="s"),_}},module.exports=time_estimates;

},{}]},{},[2]);