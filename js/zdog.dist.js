"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t():(void 0).Zdog=t()}(function(){var t={},i=(t.TAU=2*Math.PI,t.extend=function(t,e){for(var r in e)t[r]=e[r];return t},t.lerp=function(t,e,r){return(e-t)*r+t},t.modulo=function(t,e){return(t%e+e)%e},{2:function(t){return t*t},3:function(t){return t*t*t},4:function(t){return t*t*t*t},5:function(t){return t*t*t*t*t}});return t.easeInOut=function(t,e){if(1==e)return t;var r=(t=Math.max(0,Math.min(1,t)))<.5,t=r?t:1-t,e=(i[e]||i[2])(t/=.5);return e/=2,r?e:1-e},t}),function(t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t():(void 0).Zdog.CanvasRenderer=t()}(function(){var o={isCanvas:!0,begin:function(t){t.beginPath()},move:function(t,e,r){t.moveTo(r.x,r.y)},line:function(t,e,r){t.lineTo(r.x,r.y)},bezier:function(t,e,r,i,o){t.bezierCurveTo(r.x,r.y,i.x,i.y,o.x,o.y)},closePath:function(t){t.closePath()},setPath:function(){},renderPath:function(e,r,t,i){this.begin(e,r),t.forEach(function(t){t.render(e,r,o)}),i&&this.closePath(e,r)},stroke:function(t,e,r,i,o){r&&(t.strokeStyle=i,t.lineWidth=o,t.stroke())},fill:function(t,e,r,i){r&&(t.fillStyle=i,t.fill())},end:function(){}};return o}),function(t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t():(void 0).Zdog.SvgRenderer=t()}(function(){var n={isSvg:!0},e=n.round=function(t){return Math.round(1e3*t)/1e3};function s(t){return e(t.x)+","+e(t.y)+" "}return n.begin=function(){},n.move=function(t,e,r){return"M"+s(r)},n.line=function(t,e,r){return"L"+s(r)},n.bezier=function(t,e,r,i,o){return"C"+s(r)+s(i)+s(o)},n.closePath=function(){return"Z"},n.setPath=function(t,e,r){e.setAttribute("d",r)},n.renderPath=function(e,r,t,i){var o="";t.forEach(function(t){o+=t.render(e,r,n)}),i&&(o+=this.closePath(e,r)),this.setPath(e,r,o)},n.stroke=function(t,e,r,i,o){r&&(e.setAttribute("stroke",i),e.setAttribute("stroke-width",o))},n.fill=function(t,e,r,i){e.setAttribute("fill",r?i:"none")},n.end=function(t,e){t.appendChild(e)},n}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate")):(e=(void 0).Zdog).Vector=t(e)}(function(r){function t(t){this.set(t)}var h=r.TAU;function e(t,e,r,i){var o,n,s;e&&e%h!=0&&(o=Math.cos(e),e=Math.sin(e),n=t[r],s=t[i],t[r]=n*o-s*e,t[i]=s*o+n*e)}function i(t){return Math.abs(t-1)<1e-8?1:Math.sqrt(t)}return t.prototype.set=function(t){return this.x=t&&t.x||0,this.y=t&&t.y||0,this.z=t&&t.z||0,this},t.prototype.write=function(t){return t&&(this.x=(null!=t.x?t:this).x,this.y=(null!=t.y?t:this).y,this.z=(null!=t.z?t:this).z),this},t.prototype.rotate=function(t){if(t)return this.rotateZ(t.z),this.rotateY(t.y),this.rotateX(t.x),this},t.prototype.rotateZ=function(t){e(this,t,"x","y")},t.prototype.rotateX=function(t){e(this,t,"y","z")},t.prototype.rotateY=function(t){e(this,t,"x","z")},t.prototype.isSame=function(t){return!!t&&(this.x===t.x&&this.y===t.y&&this.z===t.z)},t.prototype.add=function(t){return t&&(this.x+=t.x||0,this.y+=t.y||0,this.z+=t.z||0),this},t.prototype.subtract=function(t){return t&&(this.x-=t.x||0,this.y-=t.y||0,this.z-=t.z||0),this},t.prototype.multiply=function(t){return null==t||("number"==typeof t?(this.x*=t,this.y*=t,this.z*=t):(this.x*=null!=t.x?t.x:1,this.y*=null!=t.y?t.y:1,this.z*=null!=t.z?t.z:1)),this},t.prototype.transform=function(t,e,r){return this.multiply(r),this.rotate(e),this.add(t),this},t.prototype.lerp=function(t,e){return this.x=r.lerp(this.x,t.x||0,e),this.y=r.lerp(this.y,t.y||0,e),this.z=r.lerp(this.z,t.z||0,e),this},t.prototype.magnitude=function(){return i(this.x*this.x+this.y*this.y+this.z*this.z)},t.prototype.magnitude2d=function(){return i(this.x*this.x+this.y*this.y)},t.prototype.copy=function(){return new t(this)},t}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./vector"),require("./canvas-renderer"),require("./svg-renderer")):(e=(void 0).Zdog).Anchor=t(e,e.Vector,e.CanvasRenderer,e.SvgRenderer)}(function(o,e,r,i){var t=o.TAU,n={x:1,y:1,z:1};function s(t){this.create(t||{})}return s.prototype.create=function(t){this.children=[],o.extend(this,this.constructor.defaults),this.setOptions(t),this.translate=new e(t.translate),this.rotate=new e(t.rotate),this.scale=new e(n).multiply(this.scale),this.origin=new e,this.renderOrigin=new e,this.addTo&&this.addTo.addChild(this)},s.defaults={},s.optionKeys=Object.keys(s.defaults).concat(["rotate","translate","scale","addTo"]),s.prototype.setOptions=function(t){var e,r=this.constructor.optionKeys;for(e in t)-1!=r.indexOf(e)&&(this[e]=t[e])},s.prototype.addChild=function(t){-1==this.children.indexOf(t)&&(t.remove(),(t.addTo=this).children.push(t))},s.prototype.removeChild=function(t){t=this.children.indexOf(t);-1!=t&&this.children.splice(t,1)},s.prototype.remove=function(){this.addTo&&this.addTo.removeChild(this)},s.prototype.update=function(){this.reset(),this.children.forEach(function(t){t.update()}),this.transform(this.translate,this.rotate,this.scale)},s.prototype.reset=function(){this.renderOrigin.set(this.origin)},s.prototype.transform=function(e,r,i){this.renderOrigin.transform(e,r,i),this.children.forEach(function(t){t.transform(e,r,i)})},s.prototype.updateGraph=function(){this.update(),this.updateFlatGraph(),this.flatGraph.forEach(function(t){t.updateSortValue()}),this.flatGraph.sort(s.shapeSorter)},s.shapeSorter=function(t,e){return t.sortValue-e.sortValue},Object.defineProperty(s.prototype,"flatGraph",{get:function(){return this._flatGraph||this.updateFlatGraph(),this._flatGraph},set:function(t){this._flatGraph=t}}),s.prototype.updateFlatGraph=function(){this.flatGraph=this.getFlatGraph()},s.prototype.getFlatGraph=function(){return this.addChildFlatGraph([this])},s.prototype.addChildFlatGraph=function(e){return this.children.forEach(function(t){t=t.getFlatGraph();Array.prototype.push.apply(e,t)}),e},s.prototype.updateSortValue=function(){this.sortValue=this.renderOrigin.z},s.prototype.render=function(){},s.prototype.renderGraphCanvas=function(e){if(!e)throw new Error("ctx is "+e+". Canvas context required for render. Check .renderGraphCanvas( ctx ).");this.flatGraph.forEach(function(t){t.render(e,r)})},s.prototype.renderGraphSvg=function(e){if(!e)throw new Error("svg is "+e+". SVG required for render. Check .renderGraphSvg( svg ).");this.flatGraph.forEach(function(t){t.render(e,i)})},s.prototype.copy=function(t){var e={};return this.constructor.optionKeys.forEach(function(t){e[t]=this[t]},this),o.extend(e,t),new this.constructor(e)},s.prototype.copyGraph=function(t){var e=this.copy(t);return this.children.forEach(function(t){t.copyGraph({addTo:e})}),e},s.prototype.normalizeRotate=function(){this.rotate.x=o.modulo(this.rotate.x,t),this.rotate.y=o.modulo(this.rotate.y,t),this.rotate.z=o.modulo(this.rotate.z,t)},s.subclass=function r(i){return function(t){function e(t){this.create(t||{})}return((e.prototype=Object.create(i.prototype)).constructor=e).defaults=o.extend({},i.defaults),o.extend(e.defaults,t),e.optionKeys=i.optionKeys.slice(0),Object.keys(e.defaults).forEach(function(t){1!=!e.optionKeys.indexOf(t)&&e.optionKeys.push(t)}),e.subclass=r(e),e}}(s),s}),function(t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t():(void 0).Zdog.Dragger=t()}(function(){var r="undefined"!=typeof window,e="mousedown",i="mousemove",o="mouseup";function n(){}function t(t){this.create(t||{})}return r&&(window.PointerEvent?(e="pointerdown",i="pointermove",o="pointerup"):"ontouchstart"in window&&(e="touchstart",i="touchmove",o="touchend")),t.prototype.create=function(t){this.onDragStart=t.onDragStart||n,this.onDragMove=t.onDragMove||n,this.onDragEnd=t.onDragEnd||n,this.bindDrag(t.startElement)},t.prototype.bindDrag=function(t){(t=this.getQueryElement(t))&&(t.style.touchAction="none",t.addEventListener(e,this))},t.prototype.getQueryElement=function(t){return t="string"==typeof t?document.querySelector(t):t},t.prototype.handleEvent=function(t){var e=this["on"+t.type];e&&e.call(this,t)},t.prototype.onmousedown=t.prototype.onpointerdown=function(t){this.dragStart(t,t)},t.prototype.ontouchstart=function(t){this.dragStart(t,t.changedTouches[0])},t.prototype.dragStart=function(t,e){t.preventDefault(),this.dragStartX=e.pageX,this.dragStartY=e.pageY,r&&(window.addEventListener(i,this),window.addEventListener(o,this)),this.onDragStart(e)},t.prototype.ontouchmove=function(t){this.dragMove(t,t.changedTouches[0])},t.prototype.onmousemove=t.prototype.onpointermove=function(t){this.dragMove(t,t)},t.prototype.dragMove=function(t,e){t.preventDefault();var t=e.pageX-this.dragStartX,r=e.pageY-this.dragStartY;this.onDragMove(e,t,r)},t.prototype.onmouseup=t.prototype.onpointerup=t.prototype.ontouchend=t.prototype.dragEnd=function(){window.removeEventListener(i,this),window.removeEventListener(o,this),this.onDragEnd()},t}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./anchor"),require("./dragger")):(e=(void 0).Zdog).Illustration=t(e,e.Anchor,e.Dragger)}(function(t,r,o){function e(){}var n=t.TAU,i=r.subclass({element:void 0,centered:!0,zoom:1,dragRotate:!1,resize:!1,onPrerender:e,onDragStart:e,onDragMove:e,onDragEnd:e,onResize:e});return t.extend(i.prototype,o.prototype),i.prototype.create=function(t){r.prototype.create.call(this,t),o.prototype.create.call(this,t),this.setElement(this.element),this.setDragRotate(this.dragRotate),this.setResize(this.resize)},i.prototype.setElement=function(t){if(!(t=this.getQueryElement(t)))throw new Error("Zdog.Illustration element required. Set to "+t);var e=t.nodeName.toLowerCase();"canvas"==e?this.setCanvas(t):"svg"==e&&this.setSvg(t)},i.prototype.setSize=function(t,e){t=Math.round(t),e=Math.round(e),this.isCanvas?this.setSizeCanvas(t,e):this.isSvg&&this.setSizeSvg(t,e)},i.prototype.setResize=function(t){this.resize=t,this.resizeListener||(this.resizeListener=this.onWindowResize.bind(this)),t?(window.addEventListener("resize",this.resizeListener),this.onWindowResize()):window.removeEventListener("resize",this.resizeListener)},i.prototype.onWindowResize=function(){this.setMeasuredSize(),this.onResize(this.width,this.height)},i.prototype.setMeasuredSize=function(){var t,e;e="fullscreen"==this.resize?(t=window.innerWidth,window.innerHeight):(t=(e=this.element.getBoundingClientRect()).width,e.height),this.setSize(t,e)},i.prototype.renderGraph=function(t){this.isCanvas?this.renderGraphCanvas(t):this.isSvg&&this.renderGraphSvg(t)},i.prototype.updateRenderGraph=function(t){this.updateGraph(),this.renderGraph(t)},i.prototype.setCanvas=function(t){this.element=t,this.isCanvas=!0,this.ctx=this.element.getContext("2d"),this.setSizeCanvas(t.width,t.height)},i.prototype.setSizeCanvas=function(t,e){this.width=t,this.height=e;var r=this.pixelRatio=window.devicePixelRatio||1;this.element.width=this.canvasWidth=t*r,this.element.height=this.canvasHeight=e*r,1<r&&!this.resize&&(this.element.style.width=t+"px",this.element.style.height=e+"px")},i.prototype.renderGraphCanvas=function(t){t=t||this,this.prerenderCanvas(),r.prototype.renderGraphCanvas.call(t,this.ctx),this.postrenderCanvas()},i.prototype.prerenderCanvas=function(){var t,e=this.ctx,r=(e.lineCap="round",e.lineJoin="round",e.clearRect(0,0,this.canvasWidth,this.canvasHeight),e.save(),this.centered&&(r=this.width/2*this.pixelRatio,t=this.height/2*this.pixelRatio,e.translate(r,t)),this.pixelRatio*this.zoom);e.scale(r,r),this.onPrerender(e)},i.prototype.postrenderCanvas=function(){this.ctx.restore()},i.prototype.setSvg=function(t){this.element=t,this.isSvg=!0,this.pixelRatio=1;var e=t.getAttribute("width"),t=t.getAttribute("height");this.setSizeSvg(e,t)},i.prototype.setSizeSvg=function(t,e){this.width=t,this.height=e;var r=t/this.zoom,i=e/this.zoom,o=this.centered?-r/2:0,n=this.centered?-i/2:0;this.element.setAttribute("viewBox",o+" "+n+" "+r+" "+i),this.resize?(this.element.removeAttribute("width"),this.element.removeAttribute("height")):(this.element.setAttribute("width",t),this.element.setAttribute("height",e))},i.prototype.renderGraphSvg=function(t){t=t||this;for(var e=this.element;e.firstChild;)e.removeChild(e.firstChild);this.onPrerender(this.element),r.prototype.renderGraphSvg.call(t,this.element)},i.prototype.setDragRotate=function(t){t&&(this.dragRotate=t=!0===t?this:t,this.bindDrag(this.element))},i.prototype.dragStart=function(){this.dragStartRX=this.dragRotate.rotate.x,this.dragStartRY=this.dragRotate.rotate.y,o.prototype.dragStart.apply(this,arguments)},i.prototype.dragMove=function(t,e){var r=e.pageX-this.dragStartX,e=e.pageY-this.dragStartY,i=Math.min(this.width,this.height),r=r/i*n;this.dragRotate.rotate.x=this.dragStartRX-e/i*n,this.dragRotate.rotate.y=this.dragStartRY-r,o.prototype.dragMove.apply(this,arguments)},i}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./vector")):(e=(void 0).Zdog).PathCommand=t(e.Vector)}(function(i){function t(t,e,r){this.method=t,this.points=e.map(o),this.renderPoints=e.map(n),this.previousPoint=r,this.endRenderPoint=this.renderPoints[this.renderPoints.length-1],"arc"==t&&(this.controlPoints=[new i,new i])}function o(t){return t instanceof i?t:new i(t)}function n(t){return new i(t)}t.prototype.reset=function(){var r=this.points;this.renderPoints.forEach(function(t,e){e=r[e];t.set(e)})},t.prototype.transform=function(e,r,i){this.renderPoints.forEach(function(t){t.transform(e,r,i)})},t.prototype.render=function(t,e,r){return this[this.method](t,e,r)},t.prototype.move=function(t,e,r){return r.move(t,e,this.renderPoints[0])},t.prototype.line=function(t,e,r){return r.line(t,e,this.renderPoints[0])},t.prototype.bezier=function(t,e,r){var i=this.renderPoints[0],o=this.renderPoints[1],n=this.renderPoints[2];return r.bezier(t,e,i,o,n)};return t.prototype.arc=function(t,e,r){var i=this.previousPoint,o=this.renderPoints[0],n=this.renderPoints[1],s=this.controlPoints[0],h=this.controlPoints[1];return s.set(i).lerp(o,9/16),h.set(n).lerp(o,9/16),r.bezier(t,e,s,h,n)},t}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./vector"),require("./path-command"),require("./anchor")):(e=(void 0).Zdog).Shape=t(e,e.Vector,e.PathCommand,e.Anchor)}(function(t,e,s,r){var i=r.subclass({stroke:1,fill:!1,color:"#333",closed:!0,visible:!0,path:[{}],front:{z:1},backface:!0}),h=(i.prototype.create=function(t){r.prototype.create.call(this,t),this.updatePath(),this.front=new e(t.front||this.front),this.renderFront=new e(this.front),this.renderNormal=new e},["move","line","bezier","arc"]),o=(i.prototype.updatePath=function(){this.setPath(),this.updatePathCommands()},i.prototype.setPath=function(){},i.prototype.updatePathCommands=function(){var n;this.pathCommands=this.path.map(function(t,e){var r=Object.keys(t),i=r[0],o=t[i],r=(1==r.length&&-1!=h.indexOf(i)||(i="line",o=t),"line"==i||"move"==i),t=Array.isArray(o),e=new s(i=0===e?"move":i,o=r&&!t?[o]:o,n);return n=e.endRenderPoint,e})},i.prototype.reset=function(){this.renderOrigin.set(this.origin),this.renderFront.set(this.front),this.pathCommands.forEach(function(t){t.reset()})},i.prototype.transform=function(e,r,i){this.renderOrigin.transform(e,r,i),this.renderFront.transform(e,r,i),this.renderNormal.set(this.renderOrigin).subtract(this.renderFront),this.pathCommands.forEach(function(t){t.transform(e,r,i)}),this.children.forEach(function(t){t.transform(e,r,i)})},i.prototype.updateSortValue=function(){for(var t=this.pathCommands.length,e=this.pathCommands[0].endRenderPoint,r=this.pathCommands[t-1].endRenderPoint,i=(2<t&&e.isSame(r)&&--t,0),o=0;o<t;o++)i+=this.pathCommands[o].endRenderPoint.z;this.sortValue=i/t},i.prototype.render=function(t,e){var r=this.pathCommands.length;if(this.visible&&r&&(this.isFacingBack=0<this.renderNormal.z,this.backface||!this.isFacingBack)){if(!e)throw new Error("Zdog renderer required. Set to "+e);e.isCanvas&&1==r?this.renderCanvasDot(t,e):this.renderPath(t,e)}},t.TAU);i.prototype.renderCanvasDot=function(t){var e,r=this.getLineWidth();r&&(t.fillStyle=this.getRenderColor(),e=this.pathCommands[0].endRenderPoint,t.beginPath(),t.arc(e.x,e.y,r/2,0,o),t.fill())},i.prototype.getLineWidth=function(){return this.stroke?1==this.stroke?1:this.stroke:0},i.prototype.getRenderColor=function(){return"string"==typeof this.backface&&this.isFacingBack?this.backface:this.color},i.prototype.renderPath=function(t,e){var r=this.getRenderElement(t,e),i=!(2==this.pathCommands.length&&"line"==this.pathCommands[1].method)&&this.closed,o=this.getRenderColor();e.renderPath(t,r,this.pathCommands,i),e.stroke(t,r,this.stroke,o,this.getLineWidth()),e.fill(t,r,this.fill,o),e.end(t,r)};return i.prototype.getRenderElement=function(t,e){if(e.isSvg)return this.svgElement||(this.svgElement=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgElement.setAttribute("stroke-linecap","round"),this.svgElement.setAttribute("stroke-linejoin","round")),this.svgElement},i}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./anchor")):(e=(void 0).Zdog).Group=t(e.Anchor)}(function(t){var e=t.subclass({updateSort:!1,visible:!0});return e.prototype.updateSortValue=function(){var e=0;this.flatGraph.forEach(function(t){t.updateSortValue(),e+=t.sortValue}),this.sortValue=e/this.flatGraph.length,this.updateSort&&this.flatGraph.sort(t.shapeSorter)},e.prototype.render=function(e,r){this.visible&&this.flatGraph.forEach(function(t){t.render(e,r)})},e.prototype.updateFlatGraph=function(){this.flatGraph=this.addChildFlatGraph([])},e.prototype.getFlatGraph=function(){return[this]},e}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./shape")):(e=(void 0).Zdog).Rect=t(e.Shape)}(function(t){t=t.subclass({width:1,height:1});return t.prototype.setPath=function(){var t=this.width/2,e=this.height/2;this.path=[{x:-t,y:-e},{x:t,y:-e},{x:t,y:e},{x:-t,y:e}]},t}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./shape")):(e=(void 0).Zdog).RoundedRect=t(e.Shape)}(function(t){t=t.subclass({width:1,height:1,cornerRadius:.25,closed:!1});return t.prototype.setPath=function(){var t=this.width/2,e=this.height/2,r=Math.min(t,e),r=Math.min(this.cornerRadius,r),i=t-r,r=e-r,o=[{x:i,y:-e},{arc:[{x:t,y:-e},{x:t,y:-r}]}];r&&o.push({x:t,y:r}),o.push({arc:[{x:t,y:e},{x:i,y:e}]}),i&&o.push({x:-i,y:e}),o.push({arc:[{x:-t,y:e},{x:-t,y:r}]}),r&&o.push({x:-t,y:-r}),o.push({arc:[{x:-t,y:-e},{x:-i,y:-e}]}),i&&o.push({x:i,y:-e}),this.path=o},t}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./shape")):(e=(void 0).Zdog).Ellipse=t(e.Shape)}(function(t){t=t.subclass({diameter:1,width:void 0,height:void 0,quarters:4,closed:!1});return t.prototype.setPath=function(){var t=(null!=this.width?this.width:this.diameter)/2,e=(null!=this.height?this.height:this.diameter)/2;this.path=[{x:0,y:-e},{arc:[{x:t,y:-e},{x:t,y:0}]}],1<this.quarters&&this.path.push({arc:[{x:t,y:e},{x:0,y:e}]}),2<this.quarters&&this.path.push({arc:[{x:-t,y:e},{x:-t,y:0}]}),3<this.quarters&&this.path.push({arc:[{x:-t,y:-e},{x:0,y:-e}]})},t}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./shape")):(e=(void 0).Zdog).Polygon=t(e,e.Shape)}(function(t,e){var e=e.subclass({sides:3,radius:.5}),i=t.TAU;return e.prototype.setPath=function(){this.path=[];for(var t=0;t<this.sides;t++){var e=t/this.sides*i-i/4,r=Math.cos(e)*this.radius,e=Math.sin(e)*this.radius;this.path.push({x:r,y:e})}},e}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./vector"),require("./anchor"),require("./ellipse")):(e=(void 0).Zdog).Hemisphere=t(e,e.Vector,e.Anchor,e.Ellipse)}(function(t,e,r,i){var o=i.subclass({fill:!0}),d=t.TAU;o.prototype.create=function(){i.prototype.create.apply(this,arguments),this.apex=new r({addTo:this,translate:{z:this.diameter/2}}),this.renderCentroid=new e},o.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,3/8),this.sortValue=this.renderCentroid.z},o.prototype.render=function(t,e){this.renderDome(t,e),i.prototype.render.apply(this,arguments)},o.prototype.renderDome=function(t,e){var r,i,o,n,s,h,a;this.visible&&(r=this.getDomeRenderElement(t,e),i=Math.atan2(this.renderNormal.y,this.renderNormal.x),o=this.diameter/2*this.renderNormal.magnitude(),n=this.renderOrigin.x,s=this.renderOrigin.y,e.isCanvas?(h=i+d/4,a=i-d/4,t.beginPath(),t.arc(n,s,o,h,a)):e.isSvg&&(i=(i-d/4)/d*360,this.domeSvgElement.setAttribute("d","M "+-o+",0 A "+o+","+o+" 0 0 1 "+o+",0"),this.domeSvgElement.setAttribute("transform","translate("+n+","+s+" ) rotate("+i+")")),e.stroke(t,r,this.stroke,this.color,this.getLineWidth()),e.fill(t,r,this.fill,this.color),e.end(t,r))};return o.prototype.getDomeRenderElement=function(t,e){if(e.isSvg)return this.domeSvgElement||(this.domeSvgElement=document.createElementNS("http://www.w3.org/2000/svg","path"),this.domeSvgElement.setAttribute("stroke-linecap","round"),this.domeSvgElement.setAttribute("stroke-linejoin","round")),this.domeSvgElement},o}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./path-command"),require("./shape"),require("./group"),require("./ellipse")):(e=(void 0).Zdog).Cylinder=t(e,e.PathCommand,e.Shape,e.Group,e.Ellipse)}(function(t,e,r,i,o){function n(){}var s=i.subclass({color:"#333",updateSort:!0});s.prototype.create=function(){i.prototype.create.apply(this,arguments),this.pathCommands=[new e("move",[{}]),new e("line",[{}])]},s.prototype.render=function(t,e){this.renderCylinderSurface(t,e),i.prototype.render.apply(this,arguments)},s.prototype.renderCylinderSurface=function(t,e){var r,i,o,n;this.visible&&(r=this.getRenderElement(t,e),i=this.frontBase,o=this.rearBase,n=i.renderNormal.magnitude(),n=i.diameter*n+i.getLineWidth(),this.pathCommands[0].renderPoints[0].set(i.renderOrigin),this.pathCommands[1].renderPoints[0].set(o.renderOrigin),e.isCanvas&&(t.lineCap="butt"),e.renderPath(t,r,this.pathCommands),e.stroke(t,r,!0,this.color,n),e.end(t,r),e.isCanvas&&(t.lineCap="round"))};s.prototype.getRenderElement=function(t,e){if(e.isSvg)return this.svgElement||(this.svgElement=document.createElementNS("http://www.w3.org/2000/svg","path")),this.svgElement},s.prototype.copyGraph=n;o.subclass().prototype.copyGraph=n;var h=r.subclass({diameter:1,length:1,frontFace:void 0,fill:!0}),a=t.TAU;h.prototype.create=function(){r.prototype.create.apply(this,arguments),this.group=new s({addTo:this,color:this.color,visible:this.visible});var t=this.length/2,e=this.backface||!0;this.frontBase=this.group.frontBase=new o({addTo:this.group,diameter:this.diameter,translate:{z:t},rotate:{y:a/2},color:this.color,stroke:this.stroke,fill:this.fill,backface:this.frontFace||e,visible:this.visible}),this.rearBase=this.group.rearBase=this.frontBase.copy({translate:{z:-t},rotate:{y:0},backface:e})},h.prototype.render=function(){};return["stroke","fill","color","visible"].forEach(function(e){var r="_"+e;Object.defineProperty(h.prototype,e,{get:function(){return this[r]},set:function(t){this[r]=t,this.frontBase&&(this.frontBase[e]=t,this.rearBase[e]=t,this.group[e]=t)}})}),h}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./vector"),require("./path-command"),require("./anchor"),require("./ellipse")):(e=(void 0).Zdog).Cone=t(e,e.Vector,e.PathCommand,e.Anchor,e.Ellipse)}(function(t,e,r,i,o){var n=o.subclass({length:1,fill:!0}),a=t.TAU;n.prototype.create=function(){o.prototype.create.apply(this,arguments),this.apex=new i({addTo:this,translate:{z:this.length}}),this.renderApex=new e,this.renderCentroid=new e,this.tangentA=new e,this.tangentB=new e,this.surfacePathCommands=[new r("move",[{}]),new r("line",[{}]),new r("line",[{}])]},n.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,1/3),this.sortValue=this.renderCentroid.z},n.prototype.render=function(t,e){this.renderConeSurface(t,e),o.prototype.render.apply(this,arguments)},n.prototype.renderConeSurface=function(t,e){var r,i,o,n,s,h;this.visible&&(this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin),r=this.renderNormal.magnitude(),o=this.renderApex.magnitude2d(),h=this.renderNormal.magnitude2d(),h=Math.acos(h/r),h=Math.sin(h),(r=this.diameter/2*r)*h<o&&(i=Math.atan2(this.renderNormal.y,this.renderNormal.x)+a/2,o=Math.acos(r/(o/h)),n=this.tangentA,s=this.tangentB,n.x=Math.cos(o)*r*h,n.y=Math.sin(o)*r,s.set(this.tangentA),s.y*=-1,n.rotateZ(i),s.rotateZ(i),n.add(this.renderOrigin),s.add(this.renderOrigin),this.setSurfaceRenderPoint(0,n),this.setSurfaceRenderPoint(1,this.apex.renderOrigin),this.setSurfaceRenderPoint(2,s),h=this.getSurfaceRenderElement(t,e),e.renderPath(t,h,this.surfacePathCommands),e.stroke(t,h,this.stroke,this.color,this.getLineWidth()),e.fill(t,h,this.fill,this.color),e.end(t,h)))};return n.prototype.getSurfaceRenderElement=function(t,e){if(e.isSvg)return this.surfaceSvgElement||(this.surfaceSvgElement=document.createElementNS("http://www.w3.org/2000/svg","path"),this.surfaceSvgElement.setAttribute("stroke-linecap","round"),this.surfaceSvgElement.setAttribute("stroke-linejoin","round")),this.surfaceSvgElement},n.prototype.setSurfaceRenderPoint=function(t,e){this.surfacePathCommands[t].renderPoints[0].set(e)},n}),function(t){var e;"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("./boilerplate"),require("./anchor"),require("./shape"),require("./rect")):(e=(void 0).Zdog).Box=t(e,e.Anchor,e.Shape,e.Rect)}(function(t,e,r,i){var o=i.subclass(),n=(o.prototype.copyGraph=function(){},t.TAU),s=["frontFace","rearFace","leftFace","rightFace","topFace","bottomFace"],h=t.extend({},r.defaults),a=(delete h.path,s.forEach(function(t){h[t]=!0}),t.extend(h,{width:1,height:1,depth:1,fill:!0}),e.subclass(h));a.prototype.create=function(t){e.prototype.create.call(this,t),this.updatePath(),this.fill=this.fill},a.prototype.updatePath=function(){s.forEach(function(t){this[t]=this[t]},this)},s.forEach(function(e){var r="_"+e;Object.defineProperty(a.prototype,e,{get:function(){return this[r]},set:function(t){this[r]=t,this.setFace(e,t)}})}),a.prototype.setFace=function(t,e){var r=t+"Rect",i=this[r];e?((t=this.getFaceOptions(t)).color="string"==typeof e?e:this.color,i?i.setOptions(t):i=this[r]=new o(t),i.updatePath(),this.addChild(i)):this.removeChild(i)},a.prototype.getFaceOptions=function(t){return{frontFace:{width:this.width,height:this.height,translate:{z:this.depth/2}},rearFace:{width:this.width,height:this.height,translate:{z:-this.depth/2},rotate:{y:n/2}},leftFace:{width:this.depth,height:this.height,translate:{x:-this.width/2},rotate:{y:-n/4}},rightFace:{width:this.depth,height:this.height,translate:{x:this.width/2},rotate:{y:n/4}},topFace:{width:this.width,height:this.depth,translate:{y:-this.height/2},rotate:{x:-n/4}},bottomFace:{width:this.width,height:this.depth,translate:{y:this.height/2},rotate:{x:n/4}}}[t]};return["color","stroke","fill","backface","front","visible"].forEach(function(i){var t="_"+i;Object.defineProperty(a.prototype,i,{get:function(){return this[t]},set:function(r){this[t]=r,s.forEach(function(t){var e=this[t+"Rect"],t="string"==typeof this[t];!e||"color"==i&&t||(e[i]=r)},this)}})}),a}),"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(t,e,r,i,o,n,s,h,a,d,u,p,c,l,f,y,m,g){return t.CanvasRenderer=e,t.SvgRenderer=r,t.Vector=i,t.Anchor=o,t.Dragger=n,t.Illustration=s,t.PathCommand=h,t.Shape=a,t.Group=d,t.Rect=u,t.RoundedRect=p,t.Ellipse=c,t.Polygon=l,t.Hemisphere=f,t.Cylinder=y,t.Cone=m,t.Box=g,t}(require("./boilerplate"),require("./canvas-renderer"),require("./svg-renderer"),require("./vector"),require("./anchor"),require("./dragger"),require("./illustration"),require("./path-command"),require("./shape"),require("./group"),require("./rect"),require("./rounded-rect"),require("./ellipse"),require("./polygon"),require("./hemisphere"),require("./cylinder"),require("./cone"),require("./box")):"function"==typeof define&&define.amd&&define("zdog",[],(void 0).Zdog);