jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,t,i,r,u){return jQuery.easing[jQuery.easing.def](n,t,i,r,u)},easeInQuad:function(n,t,i,r,u){return r*(t/=u)*t+i},easeOutQuad:function(n,t,i,r,u){return-r*(t/=u)*(t-2)+i},easeInOutQuad:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t+i:-r/2*(--t*(t-2)-1)+i},easeInCubic:function(n,t,i,r,u){return r*(t/=u)*t*t+i},easeOutCubic:function(n,t,i,r,u){return r*((t=t/u-1)*t*t+1)+i},easeInOutCubic:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t+i:r/2*((t-=2)*t*t+2)+i},easeInQuart:function(n,t,i,r,u){return r*(t/=u)*t*t*t+i},easeOutQuart:function(n,t,i,r,u){return-r*((t=t/u-1)*t*t*t-1)+i},easeInOutQuart:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t+i:-r/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(n,t,i,r,u){return r*(t/=u)*t*t*t*t+i},easeOutQuint:function(n,t,i,r,u){return r*((t=t/u-1)*t*t*t*t+1)+i},easeInOutQuint:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t*t+i:r/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(n,t,i,r,u){return-r*Math.cos(t/u*(Math.PI/2))+r+i},easeOutSine:function(n,t,i,r,u){return r*Math.sin(t/u*(Math.PI/2))+i},easeInOutSine:function(n,t,i,r,u){return-r/2*(Math.cos(Math.PI*t/u)-1)+i},easeInExpo:function(n,t,i,r,u){return t==0?i:r*Math.pow(2,10*(t/u-1))+i},easeOutExpo:function(n,t,i,r,u){return t==u?i+r:r*(-Math.pow(2,-10*t/u)+1)+i},easeInOutExpo:function(n,t,i,r,u){return t==0?i:t==u?i+r:(t/=u/2)<1?r/2*Math.pow(2,10*(t-1))+i:r/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(n,t,i,r,u){return-r*(Math.sqrt(1-(t/=u)*t)-1)+i},easeOutCirc:function(n,t,i,r,u){return r*Math.sqrt(1-(t=t/u-1)*t)+i},easeInOutCirc:function(n,t,i,r,u){return(t/=u/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+i:r/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(n,t,i,r,u){var f=1.70158,e=0,o=r;return t==0?i:(t/=u)==1?i+r:(e||(e=u*.3),o<Math.abs(r)?(o=r,f=e/4):f=e/(2*Math.PI)*Math.asin(r/o),-(o*Math.pow(2,10*(t-=1))*Math.sin((t*u-f)*2*Math.PI/e))+i)},easeOutElastic:function(n,t,i,r,u){var f=1.70158,e=0,o=r;return t==0?i:(t/=u)==1?i+r:(e||(e=u*.3),o<Math.abs(r)?(o=r,f=e/4):f=e/(2*Math.PI)*Math.asin(r/o),o*Math.pow(2,-10*t)*Math.sin((t*u-f)*2*Math.PI/e)+r+i)},easeInOutElastic:function(n,t,i,r,u){var f=1.70158,e=0,o=r;return t==0?i:(t/=u/2)==2?i+r:(e||(e=u*.3*1.5),o<Math.abs(r)?(o=r,f=e/4):f=e/(2*Math.PI)*Math.asin(r/o),t<1)?-.5*o*Math.pow(2,10*(t-=1))*Math.sin((t*u-f)*2*Math.PI/e)+i:o*Math.pow(2,-10*(t-=1))*Math.sin((t*u-f)*2*Math.PI/e)*.5+r+i},easeInBack:function(n,t,i,r,u,f){return f==undefined&&(f=1.70158),r*(t/=u)*t*((f+1)*t-f)+i},easeOutBack:function(n,t,i,r,u,f){return f==undefined&&(f=1.70158),r*((t=t/u-1)*t*((f+1)*t+f)+1)+i},easeInOutBack:function(n,t,i,r,u,f){return(f==undefined&&(f=1.70158),(t/=u/2)<1)?r/2*t*t*(((f*=1.525)+1)*t-f)+i:r/2*((t-=2)*t*(((f*=1.525)+1)*t+f)+2)+i},easeInBounce:function(n,t,i,r,u){return r-jQuery.easing.easeOutBounce(n,u-t,0,r,u)+i},easeOutBounce:function(n,t,i,r,u){return(t/=u)<1/2.75?r*7.5625*t*t+i:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+i:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+i:r*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(n,t,i,r,u){return t<u/2?jQuery.easing.easeInBounce(n,t*2,0,r,u)*.5+i:jQuery.easing.easeOutBounce(n,t*2-u,0,r,u)*.5+r*.5+i}});$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){if(this._log("init"),this._inited){this._log("Already Inited");this._inited=!0;return}this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/60)}}();this._onScroll(!0)},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(n){this.showLogs&&console.log("Parallax Scroll / "+n)},_onScroll:function(n){var t=$(document).scrollTop(),i=$(window).height();this._log("onScroll "+t);$("[data-parallax]").each($.proxy(function(r,u){var e=$(u),f=[],rt=!1,g=e.data("style"),nt,y,ut,s,h,p,v,c,k,l,tt,o,a,w,d,b;for(g==undefined&&(g=e.attr("style")||"",e.data("style",g)),nt=[e.data("parallax")],y=2;;y++)if(e.data("parallax"+y))nt.push(e.data("parallax-"+y));else break;for(ut=nt.length,y=0;y<ut;y++)s=nt[y],h=s["from-scroll"],h==undefined&&(h=Math.max(0,$(u).offset().top-i)),h=h|0,p=s.distance,v=s["to-scroll"],p==undefined&&v==undefined&&(p=i),p=Math.max(p|0,1),c=s.easing,k=s["easing-return"],c!=undefined&&$.easing&&$.easing[c]||(c=null),k!=undefined&&$.easing&&$.easing[k]||(k=c),c&&(l=s.duration,l==undefined&&(l=p),l=Math.max(l|0,1),tt=s["duration-return"],tt==undefined&&(tt=l),p=1,o=e.data("current-time"),o==undefined&&(o=0)),v==undefined&&(v=h+p),v=v|0,a=s.smoothness,a==undefined&&(a=30),a=a|0,(n||a==0)&&(a=1),a=a|0,w=t,w=Math.max(w,h),w=Math.min(w,v),c&&(e.data("sens")==undefined&&e.data("sens","back"),w>h&&(e.data("sens")=="back"?(o=1,e.data("sens","go")):o++),w<v&&(e.data("sens")=="go"?(o=1,e.data("sens","back")):o++),n&&(o=l),e.data("current-time",o)),this._properties.map($.proxy(function(n){var u=0,t=s[n],i,y,r,p;t!=undefined&&(n=="scale"||n=="scaleX"||n=="scaleY"||n=="scaleZ"?u=1:t=t|0,i=e.data("_"+n),i==undefined&&(i=u),y=(t-u)*((w-h)/(v-h))+u,r=i+(y-i)/a,c&&o>0&&o<=l&&(p=u,e.data("sens")=="back"&&(p=t,t=-t,c=k,l=tt),r=$.easing[c](null,o,p,t,l)),r=Math.ceil(r*this.round)/this.round,r==i&&y==t&&(r=t),f[n]||(f[n]=0),f[n]+=r,i!=f[n]&&(e.data("_"+n,f[n]),rt=!0))},this));if(rt){f.z!=undefined&&(d=s.perspective,d==undefined&&(d=800),b=e.parent(),b.data("style")||b.data("style",b.attr("style")||""),b.attr("style","perspective:"+d+"px; -webkit-perspective:"+d+"px; "+b.data("style")));f.scaleX==undefined&&(f.scaleX=1);f.scaleY==undefined&&(f.scaleY=1);f.scaleZ==undefined&&(f.scaleZ=1);f.scale!=undefined&&(f.scaleX*=f.scale,f.scaleY*=f.scale,f.scaleZ*=f.scale);var ft="translate3d("+(f.x?f.x:0)+"px, "+(f.y?f.y:0)+"px, "+(f.z?f.z:0)+"px)",et="rotateX("+(f.rotateX?f.rotateX:0)+"deg) rotateY("+(f.rotateY?f.rotateY:0)+"deg) rotateZ("+(f.rotateZ?f.rotateZ:0)+"deg)",ot="scaleX("+f.scaleX+") scaleY("+f.scaleY+") scaleZ("+f.scaleZ+")",it=ft+" "+et+" "+ot+";";this._log(it);e.attr("style","transform:"+it+" -webkit-transform:"+it+" "+g)}},this));window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}}