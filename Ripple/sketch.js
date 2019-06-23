let x_sun,y_sun,xv_sun,yv_sun,mass_sun,radius_sun;
let x_planet,y_planet,xv_planet,yv_planet,mass_planet,radius_planet;

let trails = false;

 let G = 0.1;


function setup()
{
//	createCanvas(300,300);
	title = createElement('h3', "<a href='/PoeticCodeForNature'> HOME  <br/> </a> The sun, the planet");
title.position (50,0);
	canvas = createCanvas(300,300);
	canvas.position(50,100);
	description = " <br/>\
이 행성은 헷갈리던 부분의 거리상 구조는 맞지만 움직이는 둘 사이의 속력차로 이뤄지는 부분은 <br/> \
들어가지 않아 다른 아이디어로 떠올렸던 것이다. 제작에서 행성을 주로 하고 있기 때문인지 <br/> \
두 오브제의 속도차를 이용한 것으로 떠오른 예제다.<br/> \
때문에 가상의 행성을 만들고 짜보는 코드로 다음과 같은 코드를 짜서 응용해보았다.<br/><br/>\
행성이 가장 중력이 큰 항성을 기준으로 타원을 그리며 돌게 된다.<br/>\
서로간의 질량차, 자전속도, 중력의 힘 등의 차이로 항성과 행성은 공전궤도에 올라 안정화 되는 과정을 거친다.<br/>\
";
text = createDiv(description);
text.position(20, 400);
text.style("font-family", "monospace");
text.style("font-size", "12pt");
// 	description = "\
// 	이 행성은 헷갈리던 부분의 거리상 구조는 맞지만 움직이는 둘 사이의 속력차로 이뤄지는 부분은 들어가지 않아 다른 아이디어로 떠올렸던 것이다.\
//  제작에서 행성을 주로 하고 있기 때문인지 두 오브제의 속도차를 이용한 것으로 떠오른 예제다. \
//  때문에 가상의 행성을 만들고 짜보는 코드로 다음과 같은 코드를 짜서 응용해보았다.<br/>\
// 	 행성이 가장 중력이 큰 항성을 기준으로 타원을 그리며 돌게 된다.
// 	 서로간의 질량차, 자전속도, 중력의 힘 등의 차이로 항성과 행성은 공전궤도에 올라 안정화 되는 과정을 거친다.
// \
// 	  ";
// 	  text = createDiv(description);
// 	  text.style("font-size", "12pt");


  background(0);

  x_sun = width/2;
  y_sun = height/2;
  mass_sun = 10000;
  radius_sun = pow(mass_sun,1.0/3);

  x_planet = 3.0 * width / 4;
  y_planet = height/2;
  xv_planet = 0;
  yv_planet = random(-8,8);
  mass_planet = 10;
  radius_planet = pow(mass_planet,1.0/3);

}

function draw()
{
  if (! trails)
  {
    background(0);
  }

  fill(255,255,0);
  stroke(255,255,0);
  ellipse(x_sun,y_sun,2*radius_sun,2*radius_sun);
  let r = sqrt( pow((x_sun-x_planet),2) + pow((y_sun-y_planet),2));
  let theta = atan((y_sun-y_planet)/(x_sun-x_planet));
  if (x_planet > x_sun)
  {
    theta = theta + PI;
  }
  let acceleration = G * (mass_sun / pow(r,2));
  xv_planet = xv_planet + acceleration * cos(theta);
  yv_planet = yv_planet + acceleration * sin(theta);

  x_planet = x_planet + xv_planet;
  y_planet = y_planet + yv_planet;

  fill(255,255,255);
  stroke(255,255,255);
  ellipse(x_planet,y_planet,2*radius_planet,2*radius_planet);


}
