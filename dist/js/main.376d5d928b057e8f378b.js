(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,i){"use strict";var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();i(6);var r=u(i(1)),s=u(i(2)),a=h(i(3)),o=h(i(4));function h(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}var d=i(5)(r);new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=new r.Scene,this.renderer=new r.WebGLRenderer,this.vw=window.innerWidth,this.vh=window.innerHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.vw,this.vh),this.renderer.setClearColor(15658734,1),this.container=document.querySelector(t),this.container.appendChild(this.renderer.domElement),this.camera=new r.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,1),this.camera.lookAt(0,0,0),this.time=0,this.group=new r.Group,this.scene.add(this.group),this.controls=new d(this.camera,this.renderer.domElement),this.settings=null,this.resize=this.resize.bind(this),this.animate=this.animate.bind(this),this.setupSettings(),this.setupResize(),this.resize(),this.addObjects(),this.animate()}return n(e,[{key:"setupSettings",value:function(){var e=this;this.settings={progress:0,wireframe:!1},this.gui=new s.GUI,this.gui.add(this.settings,"progress",0,1),this.gui.add(this.settings,"wireframe").onChange(function(t){e.material.wireframe=t})}},{key:"setupResize",value:function(){window.addEventListener("resize",this.resize)}},{key:"resize",value:function(){this.vw=window.innerWidth,this.vh=window.innerHeight,this.renderer.setSize(this.vw,this.vh),this.camera.aspect=this.vw/this.vh,this.camera.updateProjectionMatrix()}},{key:"addObjects",value:function(){this.material=new r.ShaderMaterial({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:r.DoubleSide,uniforms:{time:{type:"f",value:0},progress:{type:"f",value:this.settings.progress}},wireframe:this.settings.wireframe,vertexShader:o.default,fragmentShader:a.default}),this.geometry=new r.PlaneGeometry(1,1,1,1),this.mesh=new r.Mesh(this.geometry,this.material),this.group.add(this.mesh)}},{key:"animate",value:function(){this.time+=.001,this.material.uniforms.time.value=this.time,this.material.uniforms.progress.value=this.settings.progress,requestAnimationFrame(this.animate),this.render()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}}]),e}())("#container")},,,function(e,t){e.exports="uniform float time;\nuniform float progress;\n\nvarying vec2 vUv;\n\nvoid main()\t{\n//\n//\tif( abs(vUv.x - o)>length && abs(vUv.x - o - 1.)>length && abs(vUv.x - o + 1.)>length )  {\n//\t\tdiscard;\n//\t}\n\n\n\tgl_FragColor = vec4(1., 0., 0.,1.);\n}\n"},function(e,t){e.exports="uniform float time;\nuniform float progress;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"},,function(e,t){}],[[0,1,2]]]);