const readOBJ = function (objF) {
let obj = {
gG: ["n"], v: [], vt: [],
vn: [], g: { "n": { "allL": { f: [], fv: [], fvn: [], fvt: [], } } },
mtllib: {}, textures: {}
}
let loadMtllib = function (mtllib, obj) {
var str = mtllib.split('\n'), sm = "";
for (let i = 0, ii = str.length; i < ii; i++) {
if (str[i].indexOf(' ') == -1) continue;
var t = str[i].substring(0, str[i].indexOf(' '));
if (t == "#" || t == "##") continue;
var n = str[i].substring(str[i].indexOf(' ') + 1).replace(/(^\s*)|(\s*$)/g, "");
switch (t) {
case "newmtl":
sm = n;
break;
case "map_Kd":
obj.mtllib["a"] = n;
if (!obj.textures.hasOwnProperty(n)) obj.textures[n] = document.querySelector("#" + n).text;
break;
}
}
};
var sg = "n", sm = "allL", fT = {}, le = 0;
objF = objF.split('\n')
for (let i = 0, ii = objF.length; i < ii; i++) {
if (objF[i].indexOf(' ') == -1) continue;
var t = objF[i].substring(0, objF[i].indexOf(' '));
if (t == "#") continue;
var n = objF[i].substring(objF[i].indexOf(' ') + 1).replace(/(^\s*)|(\s*$)/g, "");
switch (t) {
case "v":
case "vn":
case "vt":
obj[t].push(n.split(' ').map(function (e) { return Number(e) }));
break;
case "f":
var fd = n.split(' ');
fd = fd.map(function (e) { return e.split('/').map(function (e) { return Number(e) - 1 }); })
for (let j = 0, jj = fd.length; j < jj; j++) {
if (!fT.hasOwnProperty(fd[j][0])) fT[fd[j][0]] = {};
if (!fT[fd[j][0]].hasOwnProperty(fd[j][1])) fT[fd[j][0]][fd[j][1]] = {};
if (!fT[fd[j][0]][fd[j][1]].hasOwnProperty(fd[j][2])) {
fT[fd[j][0]][fd[j][1]][fd[j][2]] = le++;
obj.g[sg][sm].fv = obj.g[sg][sm].fv.concat(obj.v[fd[j][0]]);
obj.g[sg][sm].fvt = obj.g[sg][sm].fvt.concat(obj.vt[fd[j][1]]);
obj.g[sg][sm].fvn = obj.g[sg][sm].fvn.concat(obj.vn[fd[j][2]]);
}
obj.g[sg][sm].f.push(fT[fd[j][0]][fd[j][1]][fd[j][2]]);
}
break;
case "mtllib":
loadMtllib(document.querySelector("#" + n).text, obj);
break;
default: break;
}
}
delete obj.v; delete obj.vt; delete obj.vn;
return obj;
}
var body = document.body;
var xy = [0.55, 0.55];
var obj = readOBJ(document.querySelector("#MCo").text);

const canvas = document.getElementById('gl');
const gl = canvas.getContext("webgl");
const vsSource = document.querySelector("#vertexShader").text;
const fsSource = document.querySelector("#fragmentShader").text;
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
gl.clearColor(0.0, 0.0, 0.0, 0.0); gl.clearDepth(1.0);
gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL); gl.enable(gl.CULL_FACE);
var buffers = initBuffer(gl, [
{
position: obj.g.n.allL.fv,
cubeTexture: obj.g.n.allL.fvt,
verticesNormal: obj.g.n.allL.fvn,
indices: obj.g.n.allL.f,
}]);
const textures = initAllTexture(gl, [[obj.textures.MCp]], [true]);
body.onmousemove = function (e) {
xy = [e.x / body.offsetWidth, e.y / body.offsetHeight];
}
var then = 0 ,dt=0;
var a=[0,0],v=[0,0];
var xy = [0.5, 0.5];
var xy1 = [0.55, 0.55];
function render(now) {
dt = (now-then)*0.001;
xy1[0]+=v[0]*dt;
xy1[1]+=v[1]*dt;
v[0]+=a[0]*dt;
v[1]+=a[1]*dt;
a=[xy[0]-xy1[0]-v[0]*0.5,xy[1]-xy1[1]-v[1]*0.5];
then=now;
drawScene(gl, shaderProgram, buffers[0], textures[0], xy1)
requestAnimationFrame(render);
}
requestAnimationFrame(render);
function drawScene(gl, shaderProgram, buffer, textures, xy) {
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
{
const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
gl.bindBuffer(gl.ARRAY_BUFFER, buffer.position);
gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vertexPosition);
}  
{
const vertexNormal = gl.getAttribLocation(shaderProgram, 'aVertexNormal');
gl.bindBuffer(gl.ARRAY_BUFFER, buffer.verticesNormal);
gl.vertexAttribPointer(vertexNormal, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vertexNormal);
}
{
const textureCoord = gl.getAttribLocation(shaderProgram, 'aTextureCoord');
gl.bindBuffer(gl.ARRAY_BUFFER, buffer.cubeTexture);
gl.vertexAttribPointer(textureCoord, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(textureCoord);
}
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer.indices); gl.useProgram(shaderProgram);
gl.uniform2f(gl.getUniformLocation(shaderProgram, 'uMouseXY'),
-(xy[0] - 0.5) * Math.PI, -(xy[1] - 0.5) * Math.PI);
for (var i = 0, ii = textures.length; i < ii; i++) {
gl.activeTexture(gl.TEXTURE0 + i);
gl.bindTexture(gl.TEXTURE_2D, textures[i]);
gl.uniform1i(gl.getUniformLocation(shaderProgram, 'uSampler' + i), i);
}
gl.drawElements(gl.TRIANGLES, buffer.length, gl.UNSIGNED_SHORT, 0);
}

function initShaderProgram(gl, vsSource, fsSource) {
const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
alert('创建着色器程序失败：\n' + gl.getProgramInfoLog(shaderProgram));
return null;
}
return shaderProgram;
}

function loadShader(gl, type, source) {
const shader = gl.createShader(type);
gl.shaderSource(shader, source);
gl.compileShader(shader);
switch (type) {
case gl.VERTEX_SHADER:
type = "顶点着色器"; break;
case gl.FRAGMENT_SHADER:
type = "片段着色器"; break;
default:
type = "未知着色器"; break;
}
if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
alert(type + ' 编译失败：\n' + gl.getShaderInfoLog(shader));
gl.deleteShader(shader);
return null;
}
return shader;
}

function initBuffer(gl, projects) {
var returnProject = [];
for (var i = 0, ii = projects.length; i < ii; i++) {
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(projects[i].position), gl.STATIC_DRAW);
const cubeVerticesTextureCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(projects[i].cubeTexture), gl.STATIC_DRAW);
const cubeVerticesIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(projects[i].indices), gl.STATIC_DRAW);
if (projects[i].verticesNormal) {
var cubeVerticesNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(projects[i].verticesNormal),
gl.STATIC_DRAW);
}
returnProject.push({
position: positionBuffer,
cubeTexture: cubeVerticesTextureCoordBuffer,
indices: cubeVerticesIndexBuffer,
verticesNormal: cubeVerticesNormalBuffer,
length: projects[i].indices.length,
})
}
return returnProject;
}

function initTextures(gl, srcs, bool, r, g, b) {
var textures = [];
for (var i = 0, ii = srcs.length; i < ii; i++) {
const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
new Uint8Array([r, g, b, 255]));
const image = new Image();
image.crossOrigin = '';
image.onload = function () {
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
if ((image.width & (image.width - 1)) == 0 && (image.height & (image.height - 1)) == 0) {
if (bool) {
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
}
gl.generateMipmap(gl.TEXTURE_2D);
} else {
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
}
gl.bindTexture(gl.TEXTURE_2D, null);
};
image.src = srcs[i];
textures.push(texture);
}
return textures;
}

function initAllTexture(gl, imageArray, bool) {
var textures = [];
for (var i = 0, ii = imageArray.length; i < ii; i++) {
textures.push(initTextures(gl, imageArray[i], bool[i],
Math.floor(Math.random() * 255),
Math.floor(Math.random() * 255),
Math.floor(Math.random() * 255)))
}
return textures;
}